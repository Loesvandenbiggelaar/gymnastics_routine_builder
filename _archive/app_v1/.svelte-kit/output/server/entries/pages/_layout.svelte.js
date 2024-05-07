import { i as identity, c as create_ssr_component, b as subscribe, g as getContext, e as escape, d as add_attribute, f as each, v as validate_component, h as createEventDispatcher, o as onDestroy, a as setContext, j as get_store_value } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
import { l as lang, a as lang_full, b as lang_icon, p as page_elements_title, c as page_routinebuilder_title, d as page_rules_title, h as header_title, t as title_shorthand, e as header_elements } from "../../chunks/messages.js";
import { a as availableLanguageTags, l as languageTag } from "../../chunks/runtime.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/index.js";
import { g as getPathInfo, a as getCanonicalPath, b as getTranslatedPath, s as serializeRoute, n as normaliseBase, P as PARAGLIDE_CONTEXT_KEY, i as i18n } from "../../chunks/i18n.js";
import { b as base } from "../../chunks/paths.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const css$1 = {
  code: "#navbar.svelte-bedver.svelte-bedver{display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px;align-items:center;position:sticky;top:0;background:var(--color-accent-gradient);padding:10px var(--page-margin-side)}#header_logo.svelte-bedver.svelte-bedver{text-transform:lowercase;text-decoration:none;color:var(--color-attention)}nav.svelte-bedver.svelte-bedver{justify-self:flex-end;display:flex;gap:18px;font-family:Kode Mono}nav.svelte-bedver a.svelte-bedver{display:flex;align-items:center;gap:0.2em;position:relative;padding:0.3em;font-size:1.2em;font-weight:300;text-transform:lowercase;text-decoration:none;color:inherit}nav.svelte-bedver a.active.svelte-bedver{font-weight:bold}.underline_animation.svelte-bedver.svelte-bedver::after{content:'';position:absolute;height:2px;bottom:0;left:0;width:0px;background-color:var(--color-text);transition:width 0.25s ease}.underline_animation.active.svelte-bedver.svelte-bedver::after,.underline_animation.svelte-bedver.svelte-bedver:hover::after,.underline_animation.svelte-bedver.svelte-bedver:focus::after,.underline_animation.svelte-bedver.svelte-bedver:focus-within::after{width:100%}#language_selector.svelte-bedver.svelte-bedver{all:unset;position:relative;display:flex;align-items:center;gap:0.2em;min-height:2em;cursor:pointer}#language_selector.svelte-bedver p.svelte-bedver{margin:0px}#language_dropdown.svelte-bedver.svelte-bedver{z-index:1;position:absolute;right:0;top:100%;opacity:0;visibility:collapse;transform:all 0.2 ease;display:flex;flex-direction:column;align-items:start}#language_selector.svelte-bedver:focus-within #language_dropdown.svelte-bedver{visibility:visible;animation:svelte-bedver-dropdown 0.2s ease forwards}@keyframes svelte-bedver-dropdown{from{right:-100px;opacity:0}to{right:0;opacity:1}}#language_dropdown.svelte-bedver button.svelte-bedver{width:100%;text-align:left;font-family:Poppins, arial, sans-serif;border:none;background-color:var(--color-base-secondary);transition:all 0.2s ease;display:flex;align-items:center;justify-content:end;flex-wrap:nowrap;gap:0.5em}#language_dropdown.svelte-bedver button.svelte-bedver:first-child{border-radius:0.7em 0.7em 0px 0px}#language_dropdown.svelte-bedver button.svelte-bedver:last-child{border-radius:0px 0px 0.7em 0.7em}#language_dropdown.svelte-bedver button.svelte-bedver:hover,#language_dropdown.svelte-bedver button.svelte-bedver:focus{transform:scale(1.3);border-radius:100px;font-weight:bold}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current_path;
  let title;
  let current_path_name;
  let tab_title;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = [
    {
      name: page_elements_title(),
      path: "/elements",
      icon: "mdi:magnify-scan"
    },
    {
      name: page_routinebuilder_title(),
      path: "/routine_builder",
      icon: "material-symbols:sports-gymnastics"
    },
    {
      name: page_rules_title(),
      path: "/rules",
      icon: "material-symbols:book-4"
    }
  ];
  function set_tab_title(title2, path) {
    return path === void 0 ? title2 : [title_shorthand(), current_path_name].join(" - ");
  }
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string")
      return value;
    if (!pArAgLiDe_translate_attribute_pass_context)
      return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.routes === void 0 && $$bindings.routes && routes !== void 0)
    $$bindings.routes(routes);
  $$result.css.add(css$1);
  current_path = $page.route.id || "null";
  title = header_title() || "title";
  current_path_name = routes.find((route) => route.path === current_path)?.name;
  tab_title = set_tab_title(title, current_path_name);
  $$unsubscribe_page();
  return `<title>${escape(tab_title)}</title> <header id="navbar" class="svelte-bedver"> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/`, void 0), 0)} id="header_logo" class="svelte-bedver">${escape(title)}</a>  <nav class="svelte-bedver">${each(routes, (route) => {
    return `<a class="${[
      "page_nav underline_animation svelte-bedver",
      current_path == route.path ? "active" : ""
    ].join(" ").trim()}"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.path, void 0), 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon: route.icon }, {}, {})} ${escape(route.name)} </a>`;
  })}</nav>  <button id="language_selector" role="button" class="underline_animation svelte-bedver"><p class="lang_tag svelte-bedver">${escape(lang())}</p> ${validate_component(Icon, "Icon").$$render($$result, { icon: "material-symbols:language" }, {}, {})} <div id="language_dropdown" class="svelte-bedver">${each(availableLanguageTags, (language) => {
    return `<button${add_attribute("value", language, 0)} tabindex="0" class="svelte-bedver"> ${escape(lang_full({}, { languageTag: language }))} ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: lang_icon({}, { languageTag: language })
      },
      {},
      {}
    )} </button>`;
  })}</div></button></header> `;
});
const css = {
  code: ".v-scrollbar.svelte-iodyq2{position:absolute;top:0;right:0;width:var(--svrollbar-track-width, 10px)}.v-scrollbar.fixed.svelte-iodyq2{position:fixed}.v-track.svelte-iodyq2{position:absolute;top:0;right:0;border-radius:var(--svrollbar-track-radius, initial);width:var(--svrollbar-track-width, 10px);opacity:var(--svrollbar-track-opacity, 1);background:var(--svrollbar-track-background, initial);box-shadow:var(--svrollbar-track-shadow, initial)}.v-thumb.svelte-iodyq2{position:relative;margin:0 auto;border-radius:var(--svrollbar-thumb-radius, 0.25rem);width:var(--svrollbar-thumb-width, 6px);opacity:var(--svrollbar-thumb-opacity, 0.5);background:var(--svrollbar-thumb-background, gray);box-shadow:var(--svrollbar-thumb-shadow, initial)}",
  map: null
};
const Svrollbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teardownViewport;
  let teardownContents;
  let teardownTrack;
  let teardownThumb;
  let marginTop;
  let marginBottom;
  let marginRight;
  let marginLeft;
  let wholeHeight;
  let scrollTop;
  let trackHeight;
  let thumbHeight;
  let thumbTop;
  let scrollable;
  let visible;
  let { viewport } = $$props;
  let { contents } = $$props;
  let { hideAfter = 1e3 } = $$props;
  let { alwaysVisible = false } = $$props;
  let { initiallyVisible = false } = $$props;
  let { margin = {} } = $$props;
  let { vTrackIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vTrackOut = (node) => fade(node, { duration: 300 }) } = $$props;
  let { vThumbIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vThumbOut = (node) => fade(node, { duration: 300 }) } = $$props;
  const dispatch = createEventDispatcher();
  let vTrack;
  let vThumb;
  let startTop = 0;
  let startY = 0;
  let timer = 0;
  let windowScrollEnabled = false;
  let interacted = false;
  function setupViewport(viewport2) {
    if (!viewport2)
      return;
    teardownViewport?.();
    if (typeof window.ResizeObserver === "undefined") {
      throw new Error("window.ResizeObserver is missing.");
    }
    windowScrollEnabled = document.scrollingElement === viewport2;
    const element = windowScrollEnabled ? document : viewport2;
    element.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver((entries) => {
      for (const _entry of entries) {
        wholeHeight = viewport2?.scrollHeight ?? 0;
        trackHeight = viewport2?.clientHeight - (marginTop + marginBottom);
      }
    });
    observer.observe(viewport2);
    return () => {
      element.removeEventListener("scroll", onScroll);
      observer.unobserve(contents);
      observer.disconnect();
    };
  }
  function setupTrack(track) {
    if (!track)
      return;
    teardownTrack?.();
    vTrack.addEventListener("mouseenter", onTrackEnter);
    vTrack.addEventListener("mouseleave", onTrackLeave);
    return () => {
      vTrack.removeEventListener("mouseenter", onTrackEnter);
      vTrack.removeEventListener("mouseleave", onTrackLeave);
    };
  }
  function setupThumb(thumb) {
    if (!thumb)
      return;
    teardownThumb?.();
    vThumb.addEventListener("mousedown", onThumbDown, { passive: true });
    vThumb.addEventListener("touchstart", onThumbDown, { passive: true });
    return () => {
      vThumb.removeEventListener("mousedown", onThumbDown);
      vThumb.removeEventListener("touchstart", onThumbDown);
    };
  }
  function setupContents(contents2) {
    if (!contents2)
      return;
    teardownContents?.();
    if (typeof window.ResizeObserver === "undefined") {
      throw new Error("window.ResizeObserver is missing.");
    }
    const observer = new ResizeObserver((entries) => {
      for (const _entry of entries) {
        wholeHeight = viewport?.scrollHeight ?? 0;
      }
    });
    observer.observe(contents2);
    return () => {
      observer.unobserve(contents2);
      observer.disconnect();
    };
  }
  function setupTimer() {
    timer = window.setTimeout(
      () => {
        visible = scrollable && (alwaysVisible || initiallyVisible && !interacted) || false;
        dispatch("hide");
      },
      hideAfter
    );
  }
  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = 0;
    }
  }
  function onScroll() {
    if (!scrollable)
      return;
    clearTimer();
    setupTimer();
    visible = alwaysVisible || initiallyVisible && !interacted || true;
    scrollTop = viewport?.scrollTop ?? 0;
    interacted = true;
    dispatch("show");
  }
  function onTrackEnter() {
    clearTimer();
  }
  function onTrackLeave() {
    clearTimer();
    setupTimer();
  }
  function onThumbDown(event) {
    event.stopPropagation();
    event.preventDefault();
    startTop = viewport.scrollTop;
    startY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    document.addEventListener("mousemove", onThumbMove);
    document.addEventListener("touchmove", onThumbMove);
    document.addEventListener("mouseup", onThumbUp);
    document.addEventListener("touchend", onThumbUp);
  }
  function onThumbMove(event) {
    event.stopPropagation();
    event.preventDefault();
    const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    const ratio = wholeHeight / trackHeight;
    viewport.scrollTop = startTop + ratio * (clientY - startY);
  }
  function onThumbUp(event) {
    event.stopPropagation();
    event.preventDefault();
    startTop = 0;
    startY = 0;
    document.removeEventListener("mousemove", onThumbMove);
    document.removeEventListener("touchmove", onThumbMove);
    document.removeEventListener("mouseup", onThumbUp);
    document.removeEventListener("touchend", onThumbUp);
  }
  onDestroy(() => {
    teardownViewport?.();
    teardownContents?.();
    teardownTrack?.();
    teardownThumb?.();
  });
  if ($$props.viewport === void 0 && $$bindings.viewport && viewport !== void 0)
    $$bindings.viewport(viewport);
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.hideAfter === void 0 && $$bindings.hideAfter && hideAfter !== void 0)
    $$bindings.hideAfter(hideAfter);
  if ($$props.alwaysVisible === void 0 && $$bindings.alwaysVisible && alwaysVisible !== void 0)
    $$bindings.alwaysVisible(alwaysVisible);
  if ($$props.initiallyVisible === void 0 && $$bindings.initiallyVisible && initiallyVisible !== void 0)
    $$bindings.initiallyVisible(initiallyVisible);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.vTrackIn === void 0 && $$bindings.vTrackIn && vTrackIn !== void 0)
    $$bindings.vTrackIn(vTrackIn);
  if ($$props.vTrackOut === void 0 && $$bindings.vTrackOut && vTrackOut !== void 0)
    $$bindings.vTrackOut(vTrackOut);
  if ($$props.vThumbIn === void 0 && $$bindings.vThumbIn && vThumbIn !== void 0)
    $$bindings.vThumbIn(vThumbIn);
  if ($$props.vThumbOut === void 0 && $$bindings.vThumbOut && vThumbOut !== void 0)
    $$bindings.vThumbOut(vThumbOut);
  $$result.css.add(css);
  teardownViewport = setupViewport(viewport);
  teardownContents = setupContents(contents);
  teardownTrack = setupTrack(vTrack);
  teardownThumb = setupThumb(vThumb);
  marginTop = margin.top ?? 0;
  marginBottom = margin.bottom ?? 0;
  marginRight = margin.right ?? 0;
  marginLeft = margin.left ?? 0;
  wholeHeight = viewport?.scrollHeight ?? 0;
  scrollTop = viewport?.scrollTop ?? 0;
  trackHeight = viewport?.clientHeight ?? 0 - (marginTop + marginBottom);
  thumbHeight = wholeHeight > 0 ? trackHeight / wholeHeight * trackHeight : 0;
  thumbTop = wholeHeight > 0 ? scrollTop / wholeHeight * trackHeight : 0;
  scrollable = wholeHeight > trackHeight;
  visible = scrollable && (alwaysVisible || initiallyVisible);
  return `${visible ? `<div class="${["v-scrollbar svelte-iodyq2", windowScrollEnabled ? "fixed" : ""].join(" ").trim()}" style="${"height: " + escape(trackHeight, true) + "px; margin: " + escape(marginTop, true) + "px " + escape(marginRight, true) + "px " + escape(marginBottom, true) + "px " + escape(marginLeft, true) + "px"}"><div class="v-track svelte-iodyq2" style="${"height: " + escape(trackHeight, true) + "px"}"${add_attribute("this", vTrack, 0)}></div> <div class="v-thumb svelte-iodyq2" style="${"height: " + escape(thumbHeight, true) + "px; top: " + escape(thumbTop, true) + "px"}"${add_attribute("this", vThumb, 0)}></div></div>` : ``}`;
});
function getHrefBetween(from, to) {
  if (from.protocol !== to.protocol) {
    return to.href;
  }
  if (to.password || to.username) {
    const credentials = [to.username, to.password].filter(Boolean).join(":");
    return "//" + credentials + "@" + to.host + to.pathname + to.search + to.hash;
  }
  if (from.host !== to.host) {
    return "//" + to.host + to.pathname + to.search + to.hash;
  }
  return to.pathname + to.search + to.hash;
}
function isExternal(url, currentUrl, base2) {
  const absoluteBase = new URL(base2, currentUrl).pathname;
  if (url.origin !== currentUrl.origin) {
    return true;
  }
  if (!url.pathname.startsWith(absoluteBase)) {
    return true;
  }
  return false;
}
function translatePath(path, targetLanguage, translations, opts) {
  const { path: targetedPathSource, lang: lang2, dataSuffix } = getPathInfo(path, {
    base: opts.base,
    availableLanguageTags: opts.availableLanguageTags,
    defaultLanguageTag: opts.defaultLanguageTag
  });
  const canonicalPath = getCanonicalPath(targetedPathSource, lang2, translations);
  const translatedPathTarget = getTranslatedPath(canonicalPath, targetLanguage, translations);
  return serializeRoute({
    path: translatedPathTarget,
    base: opts.base,
    dataSuffix,
    includeLanguage: true,
    lang: targetLanguage,
    defaultLanguageTag: opts.defaultLanguageTag,
    prefixDefaultLanguage: opts.prefixDefaultLanguage
  });
}
const ParaglideJS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let autodetectedLanguage;
  let lang2;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const absoluteBase = normaliseBase(base, new URL($page.url)) || "/";
  let { languageTag: languageTag2 = void 0 } = $$props;
  let { i18n: i18n2 } = $$props;
  function translateHref(href, hreflang) {
    const from = new URL(get_store_value(page).url);
    const original_to = new URL(href, new URL(from));
    if (isExternal(original_to, from, absoluteBase)) {
      return href;
    }
    if (i18n2.config.exclude(original_to.pathname)) {
      return href;
    }
    const language = hreflang ?? lang2;
    const { path: canonicalPath } = getPathInfo(original_to.pathname, {
      base: absoluteBase,
      availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
      defaultLanguageTag: i18n2.config.defaultLanguageTag
    });
    const translatedPath = getTranslatedPath(canonicalPath, language, i18n2.config.translations);
    const newPathname = serializeRoute({
      base: absoluteBase,
      lang: language,
      path: translatedPath,
      dataSuffix: void 0,
      includeLanguage: true,
      defaultLanguageTag: i18n2.config.defaultLanguageTag,
      prefixDefaultLanguage: i18n2.config.prefixDefaultLanguage
    });
    const to = new URL(original_to);
    to.pathname = newPathname;
    return getHrefBetween(from, to);
  }
  setContext(PARAGLIDE_CONTEXT_KEY, { translateHref });
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.languageTag === void 0 && $$bindings.languageTag && languageTag2 !== void 0)
    $$bindings.languageTag(languageTag2);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n2 !== void 0)
    $$bindings.i18n(i18n2);
  autodetectedLanguage = i18n2.getLanguageFromUrl($page.url);
  lang2 = languageTag2 ?? autodetectedLanguage;
  {
    i18n2.config.runtime.setLanguageTag(lang2);
  }
  $$unsubscribe_page();
  return `  ${$$result.head += `<!-- HEAD_svelte-15343rw_START -->${i18n2.config.seo.noAlternateLinks !== true && !i18n2.config.exclude($page.url.pathname) ? ` ${i18n2.config.runtime.availableLanguageTags.length >= 1 ? `${each(i18n2.config.runtime.availableLanguageTags, (lang3) => {
    let path = translatePath($page.url.pathname, lang3, i18n2.config.translations, {
      base: absoluteBase,
      availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
      defaultLanguageTag: i18n2.config.defaultLanguageTag,
      prefixDefaultLanguage: i18n2.config.prefixDefaultLanguage
    }), href = $page.url.host === "sveltekit-prerender" ? path : new URL(path, new URL($page.url)).href;
    return `   <link rel="alternate"${add_attribute("hreflang", lang3, 0)}${add_attribute("href", href, 0)}>`;
  })}` : ``}` : ``}<!-- HEAD_svelte-15343rw_END -->`, ""}  ${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current_path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = [
    {
      name: header_elements(),
      path: "/elements",
      icon: "mdi:magnify-scan"
    },
    {
      name: "Routine Builder",
      path: "/routine_builder",
      icon: "material-symbols:sports-gymnastics"
    },
    {
      name: "Rules",
      path: "/rules",
      icon: "material-symbols:book-4"
    }
  ];
  current_path = $page.route.id || "null";
  languageTag() || "en";
  routes.find((route) => route.path === current_path)?.name;
  $$unsubscribe_page();
  return `   ${validate_component(ParaglideJS, "ParaglideJS").$$render($$result, { i18n }, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Svrollbar, "Svrollbar").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};
