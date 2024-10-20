import { p as page } from "./stores.js";
import { b as base } from "./paths.js";
import { j as get_store_value } from "./ssr.js";
import { r as runtime } from "./runtime.js";
function normaliseBase$1(baseValue, currentUrl) {
  if (baseValue === "")
    return "";
  if (!baseValue.startsWith("/")) {
    const absoluteBase = new URL(baseValue, currentUrl).pathname;
    return absoluteBase;
  }
  return baseValue;
}
const PARAGLIDE_CONTEXT_KEY = "$paraglide-adapter-sveltekit:context";
const DATA_SUFFIX = "__data.json";
const HTML_DATA_SUFFIX = ".html__data.json";
function normalize(path) {
  return "/" + path.split("/").filter(Boolean).join("/");
}
const resolve = (...segments) => segments.map(normalize).filter((s) => s !== "/").reduce((a, b) => a + b, "") || "/";
function safeDecode(maybeEncoded) {
  try {
    return decodeURI(maybeEncoded);
  } catch {
    return maybeEncoded;
  }
}
function getPathInfo(path, options) {
  path = safeDecode(path);
  path = normalize(path);
  const base2 = normalize(options.base);
  const { availableLanguageTags, defaultLanguageTag } = options;
  let pathWithoutBase = path.replace(base2, "/");
  const dataSuffix = pathWithoutBase.endsWith(HTML_DATA_SUFFIX) ? HTML_DATA_SUFFIX : pathWithoutBase.endsWith(DATA_SUFFIX) ? DATA_SUFFIX : void 0;
  if (dataSuffix) {
    pathWithoutBase = pathWithoutBase.replace(dataSuffix, "");
  }
  const [maybeLang, ...rest] = pathWithoutBase.split("/").filter(Boolean);
  if (!maybeLang) {
    return { base: base2, lang: defaultLanguageTag, path: "/", dataSuffix };
  }
  const lang = availableLanguageTags.includes(maybeLang) ? maybeLang : defaultLanguageTag;
  const pathSegment = availableLanguageTags.includes(maybeLang) ? normalize(rest.join("/")) : normalize(pathWithoutBase);
  return { base: base2, lang, path: pathSegment, dataSuffix };
}
function serializeRoute(opts) {
  const parts = [];
  parts.push(opts.base);
  if (opts.includeLanguage) {
    const isDefaultLanguage = opts.lang === opts.defaultLanguageTag;
    if (!isDefaultLanguage || opts.prefixDefaultLanguage === "always") {
      parts.push(opts.lang);
    }
  }
  parts.push(opts.path);
  if (opts.dataSuffix)
    parts.push(DATA_SUFFIX);
  return resolve(...parts);
}
const squareBracketRegex = /\[(.*?)\]/g;
function parsePathDefinition(definition) {
  const matches2 = definition.match(squareBracketRegex);
  if (!matches2) {
    return [
      {
        type: "static",
        value: definition
      }
    ];
  }
  const parts = [];
  let lastIndex = 0;
  for (const match of matches2) {
    const index = definition.indexOf(match, lastIndex);
    const staticPart2 = definition.slice(lastIndex, index);
    if (staticPart2) {
      parts.push({
        type: "static",
        value: staticPart2
      });
    }
    const paramName = match.slice(1, -1);
    parts.push({
      type: "param",
      name: paramName
    });
    lastIndex = index + match.length;
  }
  const staticPart = definition.slice(lastIndex);
  if (staticPart) {
    parts.push({
      type: "static",
      value: staticPart
    });
  }
  return parts;
}
function matches(canonicalPath, pathDefinitions) {
  let bestMatch = void 0;
  outer:
    for (const pathDefinition of pathDefinitions) {
      const parts = parsePathDefinition(pathDefinition);
      const params = {};
      let currentIndex = 0;
      for (const part of parts) {
        if (part.type === "static") {
          if (part.value !== canonicalPath.slice(currentIndex, currentIndex + part.value.length)) {
            continue outer;
          } else {
            currentIndex += part.value.length;
          }
        } else if (part.type === "param") {
          let nextSlashIndex = canonicalPath.indexOf("/", currentIndex);
          if (nextSlashIndex === -1)
            nextSlashIndex = canonicalPath.length;
          params[part.name] = canonicalPath.slice(currentIndex, nextSlashIndex);
          currentIndex = nextSlashIndex;
        }
      }
      if (currentIndex !== canonicalPath.length)
        continue;
      const match = { id: pathDefinition, params };
      if (!bestMatch) {
        bestMatch = match;
        continue;
      }
      const bestMatchParams = Object.keys(bestMatch.params).length;
      const matchParams = Object.keys(params).length;
      if (bestMatchParams < matchParams)
        continue;
      if (bestMatchParams === matchParams) {
        if (bestMatch.id.length > pathDefinition.length)
          bestMatch = match;
      } else {
        bestMatch = match;
      }
    }
  return bestMatch;
}
function resolvePath(pathDefinition, params) {
  const parts = parsePathDefinition(pathDefinition);
  let path = "";
  for (const part of parts) {
    if (part.type === "static") {
      path += part.value;
    } else {
      const param = params[part.name];
      if (!param)
        throw new Error(`Missing param ${part.name}`);
      path += param;
    }
  }
  return path;
}
function getTranslatedPath(canonicalPath, lang, translations) {
  const match = matches(canonicalPath, Object.keys(translations));
  if (!match)
    return canonicalPath;
  const translationsForPath = translations[match.id];
  if (!translationsForPath)
    return canonicalPath;
  const translatedPath = translationsForPath[lang];
  if (!translatedPath)
    return canonicalPath;
  return resolvePath(translatedPath, match.params);
}
function getCanonicalPath(translatedPath, lang, translations) {
  for (const [canonicalPathDefinition, translationsForPath] of Object.entries(translations)) {
    if (!(lang in translationsForPath))
      continue;
    const translatedPathDefinition = translationsForPath[lang];
    if (!translatedPathDefinition)
      continue;
    const match = matches(translatedPath, [translatedPathDefinition]);
    if (!match)
      continue;
    return resolvePath(canonicalPathDefinition, match.params);
  }
  return translatedPath;
}
const createHandle = (i18n2, options) => {
  const langPlaceholder = options.langPlaceholder ?? "%paraglide.lang%";
  const dirPlaceholder = options.textDirectionPlaceholder ?? "%paraglide.textDirection%";
  return ({ resolve: resolve2, event }) => {
    const { lang } = getPathInfo(event.url.pathname, {
      availableLanguageTags: i18n2.runtime.availableLanguageTags,
      defaultLanguageTag: i18n2.defaultLanguageTag,
      base
    });
    const textDirection = i18n2.textDirection[lang] ?? "ltr";
    event.locals.paraglide = {
      lang,
      textDirection
    };
    return resolve2(event, {
      transformPageChunk({ html, done }) {
        if (!done)
          return html;
        return html.replace(langPlaceholder, lang).replace(dirPlaceholder, textDirection);
      }
    });
  };
};
const createReroute = ({ defaultLanguageTag, runtime: runtime2, translations }) => {
  return ({ url }) => {
    try {
      const { lang, path: translatedPath, dataSuffix } = getPathInfo(url.pathname, {
        base,
        availableLanguageTags: runtime2.availableLanguageTags,
        defaultLanguageTag
      });
      const canonicalPath = getCanonicalPath(translatedPath, lang, translations);
      const serializedPath = serializeRoute({
        path: canonicalPath,
        base,
        dataSuffix,
        includeLanguage: false
      });
      return serializedPath;
    } catch (e) {
      return url.pathname;
    }
  };
};
function createExclude(excludeConfig) {
  const checks = [];
  for (const exclude of excludeConfig) {
    if (typeof exclude === "string") {
      checks.push((path) => path === exclude);
    } else {
      checks.push((path) => exclude.test(path));
    }
  }
  return (path) => {
    path = normalize(path);
    return checks.some((check) => check(path));
  };
}
function guessTextDir(lang) {
  try {
    const locale = new Intl.Locale(lang);
    if ("textInfo" in locale) {
      return locale.textInfo.direction === "rtl" ? "rtl" : "ltr";
    }
    return locale.getTextInfo().direction === "rtl" ? "rtl" : "ltr";
  } catch (e) {
    return "ltr";
  }
}
function guessTextDirMap(langs) {
  const entries = langs.map((lang) => [lang, guessTextDir(lang)]);
  return Object.fromEntries(entries);
}
function resolvePathTranslations(userTranslations, availableLanguageTags) {
  const translations = {};
  for (const path in userTranslations) {
    const translation = userTranslations[path];
    if (!translation)
      continue;
    if (typeof translation === "object") {
      translations[path] = userTranslations[path];
      continue;
    }
    translations[path] = fromMessage(translation, availableLanguageTags);
  }
  return translations;
}
function fromMessage(message, availableLanguageTags) {
  const entries = availableLanguageTags.map((languageTag) => [languageTag, message({}, { languageTag })]);
  return Object.fromEntries(entries);
}
function createI18n(runtime2, options) {
  const translations = resolvePathTranslations(options?.pathnames ?? {}, runtime2.availableLanguageTags);
  const excludeConfig = options?.exclude ?? [];
  const defaultLanguageTag = options?.defaultLanguageTag ?? runtime2.sourceLanguageTag;
  const config = {
    runtime: runtime2,
    translations,
    exclude: createExclude(excludeConfig),
    defaultLanguageTag,
    prefixDefaultLanguage: options?.prefixDefaultLanguage ?? "never",
    textDirection: options?.textDirection ?? guessTextDirMap(runtime2.availableLanguageTags),
    seo: {
      noAlternateLinks: options?.seo?.noAlternateLinks ?? false
    }
  };
  Object.freeze(translations);
  Object.freeze(config);
  return {
    /**
     * The configuration that was used to create this i18n instance.
     */
    config,
    /**
     * Returns a `reroute` hook that applies the path translations to the paths.
     * Register it in your `src/hooks.js` file to enable path translations.
     *
     * @example
     * ```ts
     * // src/hooks.js
     * import { i18n } from "../lib/i18n.js"
     * export const reroute = i18n.reroute()
     * ```
     */
    reroute: () => createReroute(config),
    /**
     * Returns a `handle` hook that set's the correct `lang` attribute
     * on the `html` element
     *
     * SERVER ONLY
     */
    handle: (options2 = {}) => {
      {
        return createHandle(config, options2);
      }
    },
    /**
     * Takes in a URL and returns the language that should be used for it.
     *
     * @param url
     * @returns
     */
    getLanguageFromUrl(url) {
      const pathWithLanguage = url.pathname.slice(normaliseBase(base).length);
      const lang = pathWithLanguage.split("/").filter(Boolean).at(0);
      if (runtime2.isAvailableLanguageTag(lang))
        return lang;
      return defaultLanguageTag;
    },
    /**
     * Takes in a route and returns a translated version of it.
     * This is useful for use in `goto` statements and `redirect` calls.
     *
     * The oposite of `i18n.route()`.
     *
     * @param canonicalPath The path to translate (eg _/base/about_)
     * @param lang The language to translate to - Defaults to the current language
     * @returns The translated path (eg _/base/de/ueber-uns_)
     *
     * @example
     * ```ts
     * redirect(i18n.resolveRoute("/base/about", "de"))
     * ```
     */
    resolveRoute(path, lang = void 0) {
      if (config.exclude(path))
        return path;
      const normalisedBase = normaliseBase(base);
      lang = lang ?? runtime2.languageTag();
      if (!path.startsWith(normalisedBase))
        return path;
      const canonicalPath = path.slice(normalisedBase.length);
      const translatedPath = getTranslatedPath(canonicalPath, lang, translations);
      return serializeRoute({
        path: translatedPath,
        lang,
        base: normalisedBase,
        dataSuffix: void 0,
        includeLanguage: true,
        defaultLanguageTag,
        prefixDefaultLanguage: config.prefixDefaultLanguage
      });
    },
    /**
     * Takes in a path in one language and returns it's canonical version.
     * The oposite of `i18n.resolveRoute()`.
     * This is useful for use in:
     * - Language Switchers
     * - Navigation
     *
     * @param targetedPathSource The path to translate (eg _/base/de/ueber-uns_)
     * @returns The canonical version path (eg _/base/about_)
     *
     * @example
     * ```ts
     * <a
     *   href={i18n.route($page.url.pathname)}
     *   hreflang="en"
     * >
     * ```
     */
    route(translatedPath) {
      const { path, lang } = getPathInfo(translatedPath, {
        base: normaliseBase(base),
        availableLanguageTags: config.runtime.availableLanguageTags,
        defaultLanguageTag: config.defaultLanguageTag
      });
      const canonicalPath = getCanonicalPath(path, lang, translations);
      return resolve(normaliseBase(base), canonicalPath);
    }
  };
}
function normaliseBase(base2) {
  if (base2 === "")
    return "";
  if (base2.startsWith("/"))
    return base2;
  return normaliseBase$1(base2, new URL(get_store_value(page).url));
}
const i18n = createI18n(runtime);
export {
  PARAGLIDE_CONTEXT_KEY as P,
  getCanonicalPath as a,
  getTranslatedPath as b,
  getPathInfo as g,
  i18n as i,
  normaliseBase$1 as n,
  serializeRoute as s
};
