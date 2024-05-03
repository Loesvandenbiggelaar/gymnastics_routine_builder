import { c as create_ssr_component, h as createEventDispatcher, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { f as element_table_header_description, g as element_table_header_value, i as element_table_header_difficulty, j as apparatus_vault, k as apparatus_beam, m as apparatus_uneven_bars, n as apparatus_floor, p as page_elements_title, o as lorem_ipsum } from "../../../chunks/messages.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { Grid } from "gridjs";
const Gridjs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "100%" } = $$props;
  let { height = "auto" } = $$props;
  let { autoWidth = true } = $$props;
  let { fixedHeader = false } = $$props;
  let { resizable = false } = $$props;
  let { from = void 0 } = $$props;
  let { language = void 0 } = $$props;
  let { search = false } = $$props;
  let { sort = false } = $$props;
  let { pagination = false } = $$props;
  let { server = void 0 } = $$props;
  let { columns = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { plugins = void 0 } = $$props;
  let { style = {} } = $$props;
  let { className = {} } = $$props;
  const instance = new Grid({
    from,
    data,
    columns,
    server,
    search,
    sort,
    pagination,
    language,
    width,
    height,
    autoWidth,
    plugins,
    fixedHeader,
    resizable,
    style,
    className
  });
  let node;
  const dispatch = createEventDispatcher();
  instance.on("cellClick", (...args) => dispatch("cellClick", { ...args }));
  instance.on("rowClick", (...args) => dispatch("rowClick", { ...args }));
  instance.on("beforeLoad", () => dispatch("beforeLoad"));
  instance.on("load", (data2) => dispatch("load", { ...data2 }));
  instance.on("ready", () => dispatch("ready"));
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.autoWidth === void 0 && $$bindings.autoWidth && autoWidth !== void 0)
    $$bindings.autoWidth(autoWidth);
  if ($$props.fixedHeader === void 0 && $$bindings.fixedHeader && fixedHeader !== void 0)
    $$bindings.fixedHeader(fixedHeader);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.from === void 0 && $$bindings.from && from !== void 0)
    $$bindings.from(from);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.pagination === void 0 && $$bindings.pagination && pagination !== void 0)
    $$bindings.pagination(pagination);
  if ($$props.server === void 0 && $$bindings.server && server !== void 0)
    $$bindings.server(server);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.instance === void 0 && $$bindings.instance && instance !== void 0)
    $$bindings.instance(instance);
  return `<article${add_attribute("this", node, 0)}></article>`;
});
const vault = [
  {
    number: "1.00",
    description: "Handstandoverslag voorover",
    value: "1.60",
    difficulty: "TA",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.01",
    description: "Handstandoverslag voorover - in de tweede vluchtfase ½ draai (180º )",
    value: "2.00",
    difficulty: "TA",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.02",
    description: "Handstandoverslag voorover - in de tweede vluchtfase 1/1 draai (360º)",
    value: "2.60",
    difficulty: "TA",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.03",
    description: "Handstandoverslag voorover - in de tweede vluchtfase 1 ½ draai (540º)",
    value: "3.20",
    difficulty: "TA",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.04",
    description: "Handstandoverslag voorover - in de tweede vluchtfase 2/1 draai (720º)",
    value: "3.60",
    difficulty: "TA",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.05",
    description: "Handstandoverslag voorover - in de tweede vluchtfase 2 ½ draai (900º )",
    value: "4.00",
    difficulty: "TA",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 900,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.10",
    description: "Yamashita",
    value: "2.00",
    difficulty: "A",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.11",
    description: "Yamashita - in de tweede vluchtfase ½ draai (180º)",
    value: "2.40",
    difficulty: "A",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.12",
    description: "Yamashita - in de tweede vluchtfase 1/1 draai (360º)",
    value: "2.80",
    difficulty: "A",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.20",
    description: "Handstandoverslag voorover met ½ draai (180º) in de eerste vluchtfase – afstoot af",
    value: "1.60",
    difficulty: "B",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.21",
    description: "Handstandoverslag voorover met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase ½ draai (180º) (naar beide richtingen)",
    value: "2.40",
    difficulty: "B",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.22",
    description: "Handstandoverslag voorover met  ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase 1/1 draai (360º)",
    value: "2.60",
    difficulty: "B",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.23",
    description: "Handstandoverslag voorover met  ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase 1 ½ draai (540º)",
    value: "3.20",
    difficulty: "B",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.24",
    description: "Handstandoverslag voorover met  ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase 2/1 draai (720º)",
    value: "3.60",
    difficulty: "B",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.30",
    description: "Handstandoverslag voorover met  1/1 draai (360º) in de eerste vluchtfase",
    value: "3.20",
    difficulty: "C",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.31",
    description: "Handstandoverslag voorover met  1/1 d raai (360º) in de eerste vlucht fase - in de tweede vluchtfase 1/1 draai (360º)",
    value: "3.60",
    difficulty: "C",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.40",
    description: "Arabier flik -flak – afstoot af",
    value: "2.00",
    difficulty: "D",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.50",
    description: "Arabier flik -flak met ½ draai in de eerste vluchtfase – overslag af",
    value: "2.20",
    difficulty: "E",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.51",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase ½ draai ( 180°) af",
    value: "2.60",
    difficulty: "E",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.52",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase 1/1 draai (360º) af",
    value: "3.00",
    difficulty: "E",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.53",
    description: "Arabier flik -flak met ½ draai (18 0º) in de eerste vluchtfase - in de tweede vluchtfase met 1 ½ draai (54 0º) af",
    value: "3.40",
    difficulty: "E",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.60",
    description: "Arabier flik -flak met  1/1 draai  (360º) i n de eerste vluchtfase – afstoot  af",
    value: "2.40",
    difficulty: "F",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.61",
    description: "Arabier flik -flak met  1/1 draai  (360º) i n de eerste vluchtfase – in de tweede  vluchtfase ½ draai (180°) af",
    value: "2.80",
    difficulty: "F",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "1.62",
    description: "Arabier flik -flak met  1/1 draai  (360º) i n de eerste vluchtfase – in de tweede  vluchtfase  1/1 draai (360º) af",
    value: "3.20",
    difficulty: "F",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "2.10",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gehurkt",
    value: "3.60",
    difficulty: "A",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.11",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gehurkt met ½ draai (180º) of in de tweede vluchtfase ½ draai (180º) en salto achterover  gehurkt",
    value: "3.80",
    difficulty: "A",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.12",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gehurkt met  1/1 draai (360º)",
    value: "4.20",
    difficulty: "A",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.13",
    description: "Handstandoverslag voorover - in de tweede vlu chtfase salto voorover gehurkt m et 1 ½ draai (540º)",
    value: "4.60",
    difficulty: "A",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.20",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gehoekt",
    value: "3.80",
    difficulty: "B",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.21",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gehoekt met ½ draai (180º) of in de tweede vluchtfase ½ draai (180º) en salto achterover gehoekt",
    value: "4.00",
    difficulty: "B",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.22",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gehoekt met 1/1 draai (360º)",
    value: "4.40",
    difficulty: "B",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.30",
    description: "Handstandoverslag voorover  - in de tweede vluchtfase salto voor over gestrekt",
    value: "4.40",
    difficulty: "C",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.31",
    description: "Handstandoverslag voorover - in de tweede vluchtfa se salto voorover gestrekt met ½ draai (180º)",
    value: "4.60",
    difficulty: "C",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.32",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gestrekt met  1/1 draai (360º)",
    value: "5.00",
    difficulty: "C",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.33",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gestrekt met 1 ½ draai (540º)",
    value: "5.40",
    difficulty: "C",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.34",
    description: "Handstandoverslag voorover - in de tweede vluchtfase salto voorover gestrekt met 2/1 draai (720º)",
    value: "5.80",
    difficulty: "C",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.40",
    description: "Handstandoverslag voorover met 1/1 draai (360º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gehurkt",
    value: "4.80",
    difficulty: "D",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.41",
    description: "Handstandoverslag voorover met 1/1 draai (360º) in de eerste vluchtfase - in de tweede vluchtfase salto voo rover gehoekt",
    value: "5.20",
    difficulty: "D",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "2.50",
    description: "Handstandoverslag voorover -  in de tweede vluchtfase dubbele salto voorover gehurkt",
    value: "6.00",
    difficulty: "E",
    group: "2",
    type: "acrobatic",
    breakdown: {
      type: "handstandoverslag / yamashita",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "dubbel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "handstandoverslag met/zonder 1/1 draai in de 1e vluchtfase - in de 2e vluchtfase salto voor - of achterover met/zonder la-draai"
    }
  },
  {
    number: "3.10",
    description: "Tsukahara gehurkt",
    value: "3.20",
    difficulty: "A",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.11",
    description: "Tsukahara gehurkt met ½ draai  (180º)",
    value: "3.40",
    difficulty: "A",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.12",
    description: "Tsukahara gehurkt met 1/1 draai (360º)",
    value: "3.80",
    difficulty: "A",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.13",
    description: "Tsukahara gehurkt met 1 ½ draai (540º)",
    value: "4.20",
    difficulty: "A",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.14",
    description: "Tsukahara gehurkt met 2/1 draai (720º)",
    value: "4.60",
    difficulty: "A",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.20",
    description: "Tsukahara gehoekt",
    value: "3.40",
    difficulty: "B",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.30",
    description: "Tsukahara gestrekt",
    value: "3.80",
    difficulty: "C",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.31",
    description: "Tsukahara gestrekt met ½ draai (180º)",
    value: "4.00",
    difficulty: "C",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.32",
    description: "Tsukahara gestrekt met 1/1 draai (360º)",
    value: "4.40",
    difficulty: "C",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.33",
    description: "Tsukahara gestrekt met 1 ½ draai (540º)",
    value: "4.80",
    difficulty: "C",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.34",
    description: "Tsukahara gestrekt met 2/1  draai (720º)",
    value: "5.20",
    difficulty: "C",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "3.35",
    description: "Tsukahara gestrekt met  2 ½ draai (900º)",
    value: "5.60",
    difficulty: "C",
    group: "3",
    type: "acrobatic",
    breakdown: {
      type: "tsukahara",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 900,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.10",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt",
    value: "3.00",
    difficulty: "A",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.11",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt met ½ draai (180º )",
    value: "3.20",
    difficulty: "A",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.12",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt met 1/1 draai (360º)",
    value: "3.60",
    difficulty: "A",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.13",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase  salto achterover gehurkt met 1  ½ draai (540º)",
    value: "4.00",
    difficulty: "A",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.14",
    description: "Arabier flik -flak in de eerste  vluchtfase - in de tweede vluchtfase salto achterover  gehurkt met 2/1 draai (720º)",
    value: "4.40",
    difficulty: "A",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.20",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehoekt",
    value: "3.20",
    difficulty: "B",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.30",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover  gestrekt",
    value: "3.60",
    difficulty: "C",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.31",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover  gestrekt met ½ draai (180º)",
    value: "3.80",
    difficulty: "C",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.32",
    description: "Arabier flik -flak in de eerste  vluchtfase - in de tweede vluchtfase salto achterover  gestrekt met 1/1 draai (360º)",
    value: "4.20",
    difficulty: "C",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.33",
    description: "Arabier flik -flak in de eerste  vluchtfase - in de tweede vluchtfase salto achterover  gestrekt met 1 ½ draai (540º)",
    value: "4.60",
    difficulty: "C",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.34",
    description: "Arabier flik -flak in de eerste  vluchtfase - in de tweede  vluchtfase salto achterover  gestrekt met 2/1 draai (720º)",
    value: "5.00",
    difficulty: "C",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.35",
    description: "Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover gestrekt met 2  ½ draai (900º)",
    value: "5.40",
    difficulty: "C",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 900,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.40",
    description: "Arabier flik -flak met ¾ draai (270°) in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt",
    value: "3.60",
    difficulty: "D",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.41",
    description: "Arabier flik -flak met  ¾ draai (270°) in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt met ½ draai (180º)",
    value: "4.00",
    difficulty: "D",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.42",
    description: "Arabier flik -flak met  ¾ draai ( 270°) in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt met 1/1 draai (360º)",
    value: "4.20",
    difficulty: "D",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.50",
    description: "Arabier flik -flak met ¾ draai (270°) in de eerste vluchtfase en in de tweede  vluchtfase salto achterover gehoekt",
    value: "3.80",
    difficulty: "E",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.51",
    description: "Arabier flik -flak met ¾ draai (270°) in de eerste vluchtfase - in de tweede vluchtfase salto achterover gestrekt",
    value: "4.20",
    difficulty: "E",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.52",
    description: "Arabier flik -flak met ¾ draai (270°) in de eerste vluchtfase - in de tweede vluchtfase salto achterover gestrekt met ½ draai (180º)",
    value: "4.60",
    difficulty: "E",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "4.53",
    description: "Arabier flik -flak met ¾ draai (270°) in de eerste vluc htfase - in de tweede vluchtfase salto achterover gestrekt met 1/1 draai (360º)",
    value: "5.00",
    difficulty: "E",
    group: "4",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 270,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai"
    }
  },
  {
    number: "5.10",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gehurkt",
    value: "3.80",
    difficulty: "A",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.11",
    description: "Arabier flik -flak met ½ draai (180º)  in de eerste vluchtfase - in de tweede vluchtfase salto voorover gehurkt met ½ draai (180º ) of  in de tweede vluchtfase ½ draai (180º) en salto achterover gehurkt",
    value: "4.00",
    difficulty: "A",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.12",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase –  in de tweede vluchtfase salto voorover gehurkt met 1/1 draai (360º)",
    value: "4.40",
    difficulty: "A",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.13",
    description: "Arabier flik -flak met ½ draai (180º)  in de eerste vluchtfase - in de  tweede vluchtfase salto voorover  gehurkt met 1½ draai (540º)",
    value: "4.80",
    difficulty: "A",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.20",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gehoekt",
    value: "4.00",
    difficulty: "B",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.21",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gehoekt met ½ draai (180º)  of  - in de tweede vluchtfase ½ draai (180º) en salto achterover gehoekt",
    value: "4.20",
    difficulty: "B",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.22",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gehoekt met 1/1 draai (360º)",
    value: "4.60",
    difficulty: "B",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.30",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gestrekt",
    value: "4.60",
    difficulty: "C",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.31",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gestrekt met ½ draai (180º)",
    value: "4.80",
    difficulty: "C",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: 180
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.32",
    description: "Arabier flik -flak met ½ draai (180º) in de eerste vluchtfase - in de tweede vluchtfase salto voorover gestrekt met 1/1 draai (360º)",
    value: "5.20",
    difficulty: "C",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.33",
    description: "Arabier flik -flak met ½ draai (180º)  in de eerste vluchtfase - in de tweede vluchtfase salto voorover gestrekt met  1½ draai (540º)",
    value: "5.60",
    difficulty: "C",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "5.34",
    description: "Arabier flik -flak met ½ draai (180º)  in de eerste vluchtfase - in de tweede vluchtfase salto voorover gestrekt met 2/1 draai (720º)",
    value: "6.00",
    difficulty: "C",
    group: "5",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      "tweede vluchtfase": {
        draai: 720,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        beenspreiding: null
      },
      group: "arabier flik-flak met 1/2 draai in de 1e vluchtfase - in de 2e vluchtfase salto voorover of achterover met/zonder la-draai"
    }
  },
  {
    number: "0.10",
    description: "Streksprong op - streksprong af",
    value: "1.10",
    difficulty: "A",
    group: "0",
    type: "acrobatic",
    breakdown: {
      type: "streksprong",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        beenspreiding: null
      },
      group: "vrije sprongen"
    }
  },
  {
    number: "T1.41",
    description: "Arabier flik -flak in de 1e vluchtfase -  in de 2e vluchtfase ½ draai (180º) af",
    value: "2.40",
    difficulty: "D",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: 180
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "T1.42",
    description: "Arabier flik -flak in de 1e vluchtfase - in de 2e vluchtfase 1/1 draai (360º) af",
    value: "2.80",
    difficulty: "D",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  },
  {
    number: "T1.43",
    description: "Arabier flik -flak in de 1e vluchtfase - in de 2e vluchtfase met 1½ draai (540º) af",
    value: "3.20",
    difficulty: "D",
    group: "1",
    type: "acrobatic",
    breakdown: {
      type: "arabier flik-flak / yurchenko",
      "eerste vluchtfase": {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      "tweede vluchtfase": {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        beenspreiding: null
      },
      group: "handstandoverslag, yamashita, arabier flik-flak met of zonder la-draai in de 1e en/of 2e vluchtfase"
    }
  }
];
const beam = [
  {
    number: "1.204",
    description: "(D)    Sprong met ½ draai (180°) tot vrije spreidhoeksteun of sprong achterwaarts door spreidhouding over de balk tot steun voorlings of tot parallelspagaat - aanloop 90° t.o.v. de balk",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.304",
    description: "(D)   Arabier, spreidhoeksprong rugwaarts over de balk - heupdraai a.o. - aanloop 90° t.o.v. de balk",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "achterover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.105",
    description: "(D)    Sprong (met handensteun) tot parallelspagaat of spreidhoekzit met afzet van 2 benen. Spagaatpositie moet getoond worden als eindpositie  zonder  steun van de handen. In spreidhoekzit moet de romp de balk raken.    Sprong tot dwarsspagaat met afzet van 1 been of 2 benen – aanloop schuin  t.o.v. de balk ( met handensteun)",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.305",
    description: "(D)  Vrij opspringen tot dwarsspagaat , afzet van 2 benen - aanloop schuin t.o.v.  balk      Vrij opspringen met beenwissel tot dwarsspagaat - aanloop schuin t.o.v.  balk",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.405",
    description: "(D) Wisselspagaatsprong met ½ draai (180°) tot dwarsspagaat zonder gebruik van de handen – aanloop schuin t.o.v. balk",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.106",
    description: "Vanuit parallelstand voorlings – overhurken of overhoeken tot steun ruglings",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.207",
    description: "Sprong tot rol voorwaarts aan de pun t of in het midden van de balk    Opsprong tot  vrije spreidhoeksteun aan de punt van de balk - achteropzwaai tot rol voorwaarts",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.108",
    description: "Radslag met buiging van beide armen via borststand tot rijzit   Vanuit stand aan de zijkant van de balk opspringen tot borststeun met beide armen gebogen",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.208",
    description: "Sprong met ½ draai over de schouder tot nekstand, ½ draai (180°) over de schouder tot borststand",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.308",
    description: "Sprong met ½ draai over de schouder tot nekstand - 1/1 draai (360°) over de schouder tot borststand of met 1 1/2 draai (540°)",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.309",
    description: "Vanuit dwarsstand, gezicht naar de punt van de balk - kopkip    Vanuit p arallelstand: Sprong met gebogen heupen tot handstand (hoek) tot langzame overslag v.o.     Vanuit p arallelstand: Sprong met gebogen heupen tot handstand (hoek) tot handstandoverslag v.o. met landen tot uitvalstand of op 2 voeten",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.609",
    description: "Arabier voor de balk (aan de punt) - flik-flak met ½ draai (180°) en overslag v.o.",
    difficulty: "F",
    value: "0.6",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.210",
    description: "Springen, heffen of zwaaien tot parallel - of dwarshandstand (2 sec.) - terugkomen tot een eindpositie, met aanraken van de balk  of tot vrije spreidhoeksteun  ook met ½ draai (180°)  in handstand",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.310",
    description: "Springen, heffen of zwaaien tot dwars - of parallelhandstand met  1/1 - 1½ draai (360° - 540°) in de handstand - terugkomen tot een eindpositie, met aanraken van de balk of tot vrije spreidhoeksteun",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.111",
    description: "Vrije steun voorlings met steun op 1 of beide geborgen armen (2 sec.), ook met benen in spagaatpositie",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.211",
    description: "Vanuit parallel - of dwarsstand  sprong met gebogen heupen tot  vrije steun voorlings boven horizontaal op minimaal 45° (bovenbalans)  (2 sec .) –  terugkomen tot eindpositie  naar keuze",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.311",
    description: "Sprong met gestrekte heupen tot bovenbalans (2 sec .)    Springen , heffen of zwaaien tot handst and -  terugkomen tot bovenbalans (2 sec .), ook met ½ draai (180°) in handst and   Springen , heffen of zwaaien tot handst and- terugkomen tot hoge hoeksteun  (2 sec.) , ook met ½ draai (180°) in handst and   Springen, heffen of zwaaien tot handst and (2 sec.) met 1 hand loslaten tot stand op 1 voet, of met zijwaarts naar beneden zwaaien, ook met ½ d raai (180°) in handst and",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.411",
    description: "Springen, heffen of zwaaien tot dwars - of parallelhandstand - 1/1 draai (360°) in de handstand - terugkomen tot bovenbalans  (2 sec.)  of hoge hoeksteun (2 sec .)",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.312",
    description: "Handst and met grote overstrekking van de romp (2 sec .), idem gehoekt met 1 been verticaal, het andere been gebogen (2 sec .) – terugkomen tot eindpositie naar keuze       Handst and dwars - of parallel met benen horizontaal – omgekeerde bovenbalans in verschillende varianten (2 sec.) – terugkomen tot eindpositie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.412",
    description: "Springen of heffen tot parallelhandstand – langzame overslag v.o. tot parallelstand op 2 benen",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.213",
    description: "Heffen tot parallelhandst and, door buigen en strekken van de benen - sprongetje met ¼ draai (90°)  tot dwarsstand – terugkomen tot eindpositie naar keuze",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.313",
    description: "Springen of heffen tot dwars - of parallelhandst and - komen tot handstand  op 1 arm (2 sec .) - terugkomen tot eindpositie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.413",
    description: "Springen of heffen op 1 arm tot handstand  met terugkomen tot eindpositie naar keuze , ook springen o f heff en tot dwars - of parallelhandstand - komen tot parallelhandstand  op 1 arm (2 sec .) - terugkomen tot vrije spreidhoek steun op 1 arm , ook met ½ draai",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.114",
    description: "Sprong tot handstand  met gebogen of gestrekte benen – terugkomen tot eindpositie naar keuze",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.214",
    description: "Radslag op 1 of beide armen",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.314",
    description: "Aanloop 90° ten opzichte van de balk - sprong met 1/4 draai (90°) en met gestrekte heupen tot vluchtige handstand  op 1 arm met direct ¼ draai (90°) en steun op t weede arm tot parallelhandst and – terugkomen tot eindpositie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.414",
    description: "Arabier voor de balk - sprong met  ½ draai (180°) tot nabij parallel - handstand op balk  - terugkomen tot eindpositie naar keuze",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.514",
    description: "Arabier voor de balk – flik-flak met 1/1 draai (360º) gevolgd door heupdraai a.o.",
    difficulty: "E",
    value: "0.5",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "achterover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.215",
    description: "Overslag v.o. met kaatsen van de handen op de plank tot steun ruglings – of met ¼ draai (90°) tot buitendwarszit op het rechter - of linkerdijbeen – aanloop 90° ten opzichte van de balk",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.315",
    description: "Vrije overslag v.o. tot steun ruglings - of met 1/4 draai (90°) tot buitendwarszit op de dij,",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.615",
    description: "Vrije overslag v.o.  tot dwarsstand - aanloop aan uiteinde van de balk – afzet van beide benen",
    difficulty: "F",
    value: "0.6",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.416",
    description: "Salto v.o. gehurkt tot dwars - of parallelstand - aanloop aan uiteinde  van de balk",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.516",
    description: "Salto v.o. gehoekt tot stand - aanloop aan uiteinde van de balk",
    difficulty: "E",
    value: "0.5",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.616",
    description: "Salto v.o. gehurkt ½ draai (180°)",
    difficulty: "F",
    value: "0.6",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.716",
    description: "Arabier voor de balk (aan de punt) – afzet rugwaarts met ½ draai (180º) – salto v.o. gehurkt tot stand",
    difficulty: "G",
    value: "0.7",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "1.317",
    description: "Arabier voor de balk (aan de punt) - flik-flak door handstand tot rijzit",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.417",
    description: "Arabier voor de balk (aan de punt) -  flik-flak door handstand - steun op 1 of 2 armen -tot dwarsstand op de balk   Arabier voor de balk (aan de punt) -  flik-flak met 1/1 draai (360°) tot rijzit",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.517",
    description: "Arabier voor de balk (aan de punt) - flik-flak met ¾ draai (27 0°) tot dwarsstand op de balk",
    difficulty: "E",
    value: "0.5",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.518",
    description: "Arabier voor de balk (aan de punt) - salto a.o. gehurkt, gehoekt of gestrekt met uitstappen tot dwars - of parallelstand op de balk",
    difficulty: "E",
    value: "0.5",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.618",
    description: "Arabier voor de balk (aan de punt) - salto a.o. gehurkt met 1/1 draai ( 360°) tot dwarsstand   Arabier voor de balk (aan de punt) - salto a.o. gestrekt tot dwarsstand op de balk",
    difficulty: "F",
    value: "0.6",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.718",
    description: "Arabier voor de balk (aan de punt) - salto a.o. gestrekt met 1/1 draai ( 360°) tot dwarsstand op de balk",
    difficulty: "G",
    value: "0.7",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      beenspreiding: null,
      group: "opsprongen"
    }
  },
  {
    number: "1.619",
    description: "Sprong voorwaarts met ½ draai (180°) - salto a.o. gehoekt",
    difficulty: "F",
    value: "0.6",
    group: "1",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "achterover"
      },
      beenspreiding: 180,
      group: "opsprongen"
    }
  },
  {
    number: "2.101",
    description: "Loops pagaatsprong voorwaarts met  afzet van 1 been ( 180° beenspreiding)",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.301",
    description: "Spagaatsprong voorwaarts met ½ draai (180°), met afzet van 1 been",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.202",
    description: "Spagaatsprong (180º beenspreiding) met afzet van 2 benen in dwarspositie",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.302",
    description: "Spagaatsprong met ½ draai (180º) , afzet van 2 benen in dwarspositie",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.402",
    description: "Spagaatsprong met 1/1 draai (360º) , afzet van 2 benen in dwarspositie",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.203",
    description: "(*) Spreidhoeksprong (beide benen boven horizontaal)  of zijwaartse spagaatsprong met afzet van 2 benen in dwarsstand",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.303",
    description: "Spreidhoeksprong met ½ draai (180°) vanuit dwars stand",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.403",
    description: "Spreidhoeksprong met 1/1 draai (360º) vanuit dwarsstand",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.204",
    description: "Fouetté sprong met ½ draai (180°), landen tot arabesque (vrije been boven horizontaal)",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.404",
    description: "Fouetté  sprong met beenwissel tot  dwarsspagaat (be enspreiding 180º) – (tour jeté)",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.504",
    description: "Spagaatsprong voorwaarts met 1/1 draai (360º), met afzet van 1 been",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.105",
    description: "Loopsprong voorwaarts met beenwissel tot hurkhoekpositie (heuphoek 45º)",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.305",
    description: "Spagaatsprong v.w. met beenwissel (beenzwaai vrije been 45º) tot dwarsspagaat (180° na beenwissel)",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.405",
    description: "Wisselpagaatsprong voorwaarts met ½ draai (180º)",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.505",
    description: "Spagaatsprong voorw. met  beenwissel tot ringhouding (180° beenspreiding na beenwissel)",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.206",
    description: "Spagaatsprong voorwaarts met ¼ draai (90º) tot spreidhoekpositie (beide benen boven horizontaal)  – landing op één of beide benen",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 90,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.306",
    description: "Spagaatsprong v.w. met beenwissel en ¼ draai (90º) tot zijwaartse spagaat (180°) of spreidhoekpositie (Johnson)",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.506",
    description: "Johnson met toegevoegde ½ draai (180º)",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.107",
    description: "Hoeksprong in dwars stand  (heuphoek < 90°)",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 90,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.207",
    description: "Hoeksprong in dwars stand  (heuphoek 90°) met ½ draai (180º)",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.407",
    description: "Hoeksprong in dwarsstand met 1/1 draai (360°)",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.108",
    description: "Sissone (180º beenspreiding  in de diagonaal/ 45°  t.o.v. de vloer) met afzet van 2 voeten en landing op 1 voet",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.208",
    description: "* Ringsprong met achterste voet op hoofdhoogte en lichaam en hoofd a.o. (180º beenspreiding) of reeringsprong",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.308",
    description: "Sprong met achterwaartse buiging van het bovenlichaam en hoofd a.o. en de voeten bijna het hoofd rakend (Schaapsprong)",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.408",
    description: "*   Loopspagaatringsprong (180º beenspreiding)  met afzet van 2 benen",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.209",
    description: "(*) Sprong met ½ draai (180°) - het vrije been boven horizontaal , afzet van 1 been   Streksprong met 1/1 (360°) vanuit dwarsstand",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.409",
    description: "Streksprong met 1½ draai (540°) vanuit dwarsstand",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.110",
    description: "(*)    Kattensprong (knieën na elkaar boven horizontaal)   Schaarsprong (benen boven horizontaal)",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.210",
    description: "Kattensprong met  ½ draai (180°)  (knieën na elkaar boven horizontaal)",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.310",
    description: "Kattensprong met 1/1 draai (360°)",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.211",
    description: "Hurksprong met ½ draai (180º) vanuit dwars stand  (heup - en knie -hoek 45º) - afzet van een of beide benen",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.311",
    description: "Hurksprong met 1/1 draai (360°) vanuit dwarsstand - afzet van een of beide benen",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.411",
    description: "Hurksprong met 1 ½ draai (540°) vanuit dwarsstand - afzet van een of beide benen",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.112",
    description: "* Hurkhoeksprong vanuit  dwarsstand (heuphoek 45º en knieën bij elkaar) – afzet van een of beide benen",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.212",
    description: "Hurkhoeksprong met ½ draai (180º) vanuit dwars stand  - afzet van een of beide benen",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.412",
    description: "Hurkhoeksprong met 1/1 draai (360º) vanuit dwarsstand - afzet van een of beide benen",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.512",
    description: "Hurkhoeksprong met 1½ draai (540º) vanuit dwarsstand  - afzet van een of beide benen",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "3.101",
    description: "1/1 draai (360° ) op 1 been - vrije been naar keuze onder de horizontaal",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.201",
    description: "1½ draai (540°) op 1 been - vrije been naar keuze onder de horizontaal",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.401",
    description: "2/1 draai (720°) op 1 been - vrije been naar keuze onder de horizontaal",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.501",
    description: "3/1 draai (1080°) op 1 been  -  vrije been naar keuze onder de  horizontaal",
    difficulty: "E",
    value: "0.5",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 1080,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.302",
    description: "1/1 draai (360°) op 1 been - het bovenbeen van het vrije been op de horizontaal (achter hoog) gedurende de gehele draai",
    difficulty: "C",
    value: "0.3",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.402",
    description: "1½ draai (540°) op 1 been – het bovenbeen van het vrije been op de horizontaal (achter hoog) gedurende de gehele draai",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.403",
    description: "1/1 draai (360°) met het vrije been achterwaarts met beide handen vastgehouden",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.304",
    description: "1/1 draai (360°) met de hiel van het vrije been voorwaarts gedurende de gehele  draai op horizontaal  (standbeen en vrije been mag gestrekt of gebogen zijn)",
    difficulty: "C",
    value: "0.3",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.404",
    description: "1½ draai ( 540°) met de hiel van het vrije been voorwaarts gedurende de gehele  draai op horizontaal  (standbeen en vrije been mag gestrekt of gebogen zijn)",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.504",
    description: "2/1 draai ( 720°) met de hiel van het vrije been voorwaarts gedurende de gehele  draai op horizontaal  (standbeen en vrije been mag gestrekt of gebogen zijn)",
    difficulty: "E",
    value: "0.5",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.305",
    description: "1/1 draai (360º) op 1 been - met vasthouden van het vrije been met de hand in 180º - spagaat van begin tot einde van de draai",
    difficulty: "C",
    value: "0.3",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.405",
    description: "1½ draai (54 0º) op 1 been - met vasthouden van het vrije been met de hand in 180º  - spagaat van begin tot einde van de draai",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.505",
    description: "2/1 draai (720°)  op 1 been – met vasthouden van het vrije been met de hand in 180º - spagaat van begin tot einde van de draai",
    difficulty: "E",
    value: "0.5",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.206",
    description: "½ duikdraai (180°) via standspagaat (180° beenspreiding) met/zonder vluchtig aanraken van de balk met 1 hand",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.406",
    description: "1/1 duikdraai (360°) via standspagaat (180° beenspreiding) met/ zonder vluchtig aanraken van de balk met 1 hand",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.207",
    description: "1/1 d raai (360°) in hurkzit op 1 been – houding van het vrije been naar keuze",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.307",
    description: "1½ d raai (540°) in hurkzit op 1 been – houding van het vrije been naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.407",
    description: "(*) 2/1 d raai (720°) of 2½ draai (960°) in hurkzit op 1 been – houding van het vrije been naar keuze",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.507",
    description: "3/1 draai (1080°) in hurkzit op 1 been – houding van het vrije been naar keuze",
    difficulty: "E",
    value: "0.5",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 1080,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.208",
    description: "(*) 1/1 tot 1½ draai (360° - 540°) in buiklig - steunen van de handen na elkaar is toegestaan",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.408",
    description: "1¼ draai (450°) in vouwlig - beenromphoek gesloten",
    difficulty: "D",
    value: "0.4",
    group: "3",
    type: "gymnastic",
    breakdown: {
      draai: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "4.101",
    description: "(D)    Vanuit hielenzit - lichaamswel voorwaarts via tenenstand tot stand",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "gymnastic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.102",
    description: "(D)  (*)  Standspagaat voorlings met steun van de handen voor standbeen (beenspreiding 180° - 2 sec .) of stand op 1 been met de voet van het vrije been in voorwaartse positie boven hoofdhoogte (2 sec.)      Zweefstand voorlings met gestrekt standbeen (beenspreiding 180  - 2 sec.)",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.202",
    description: "Hoge hoeksteun (2 sec.)",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.103",
    description: "Opzwaaien tot dwars - of parallel -handstand (2 sec .) – terugkomen tot eindpositie die de balk aanraakt",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.203",
    description: "Opzwaaien tot dwarshandstand - doorrollen v.o. met of zonder steun van de handen  tot zit of tot hurkzit",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.204",
    description: "Rol v.o. zonder steun van de handen  tot zit of tot hurkzit    Vanuit rijzit, zwaai a.w . tot schouder rol v.o . met heup strekking tot zit positie in hurkstand",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.304",
    description: "Vrije schouderrol  v.o. met strekking van de heupen en zonder steun van de handen tot zit of hurkzit",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.105",
    description: "Rol a.o. met handensteun op de balk – landen op 1 of beide voeten",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.305",
    description: "Rol a.o. tot handstand",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.206",
    description: "Rol zijwaarts met gehurkt  lichaam  - of rol zijwaarts gestrekt of spreidhoek door nekstand, ook met ½ draai (180°) over de schouder",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.306",
    description: "Rol zijwaarts met gestrekt lichaam",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.107",
    description: "Radslag, ook met steun op 1 hand of radslag met vluchtfase voor of na de handensteun",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.307",
    description: "Vanuit spreidzit of spreidspagaat - rol zijwaarts gestrekt, benen gespreid – eindpos itie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.108",
    description: "Langzame overslag v.o., met/zonder ongelijke handplaatsing   Langzame overslag v.o., a.o. (Tik -Tak)",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.208",
    description: "Langzame overslag v.o., met steun op 1 arm",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.308",
    description: "Opzwaai tot handstand in dwarspositie met ½ draai (180°) tot langzame overslag v.o.    Langzame overslag v.o. in parallelpositie tot parallelstand",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.109",
    description: "Langzame overslag a.o., met/zonder  ongelijke handplaatsing, ook tot rijzit",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.209",
    description: "Langzame overslag a.o., met steun op 1 arm",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.309",
    description: "Langzame overslag a.o. met ½ draai (180°) doorgaand in langzame overslag v.o.   Langzame overslag a.o. in parallelpositie tot parallelstand    Langzame  overslag a.o. met doorhoeken van 1 been tot dwars spagaat",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.210",
    description: "Vanuit hurkspreidzit - langzame overslag a.o. (Valdez/zitbruggetje)",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "4.310",
    description: "Valdez  met 1/1 draai (360°) , terugkomen tot een eindpositie waarbij de balk wordt aangeraakt   Vanuit hurkspreidzit - zwaai a.o. door  het horizontale  vlak met steun van 1 arm",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      group: "houdingen en acrobatische elementen zonder vlucht"
    }
  },
  {
    number: "5.201",
    description: "Handstandoverslag v.o. met vluchtfase, landing op één of beide benen  (zelfde element); ook met steun van één arm",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.301",
    description: "Handstandoverslag v.o. met beenwissel in de vluchtfase",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.401",
    description: "Sprong achterwaarts ( flik-flak afzet) met ½ draai (180°) tot overslag voorwaarts, ook met steun op één arm, of tot tik-tak",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.501",
    description: "Sprong achterwaarts ( flik-flak afzet) met ½ draai (180°) tot overslag voorwaarts  met landing op 2 voeten",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.202",
    description: "Flik-flak tot landing op 2 voeten",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.302",
    description: "Flik-flak met ½ draai (180 ) tot handstand (2 sec .) – terugkomen tot eindpositie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.402",
    description: "Flik-flak vanuit parallelpositie met ½ draai (180 ) tot handstand en terugkomen tot eindpositie naar keuze",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.303",
    description: "Flik-flak met ¼ (90º) tot handstand (2 sec.) – terugkomen tot eindpositie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.403",
    description: "Flik-flak met ¾ draai (270º) tot parallelhandstand (2 sec.) – terugkomen tot eindpositie naar keuze",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 270,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.204",
    description: "Flik-flak met uitstappen , ook met steun op één arm",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.304",
    description: "Flik-flak met ½ draai (180º) na de steun van de handen",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.404",
    description: "Flik-flak met minimaal ¾ draai (270 ) voor de steun van de handen",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 270,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.405",
    description: "Flik-flak met uitstappen  vanuit parallelpositie",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.505",
    description: "Flik-flak vanuit  parallelpositie met 1/1 draai (360°) tot heupdraai a.o.",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "achterover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.206",
    description: "Auerbach flik-flak (Gainer flik-flak), ook met steun op één arm",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.306",
    description: "Auerbach flik -flak met ¼ draai (90°) tot handstand (2 sec.) – terugkomen tot eindpositie naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 90,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.406",
    description: "Auerbach flik-flak met minimaal ¾ draai (270°) voor de steun van de handen",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 270,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.207",
    description: "Flik-flak of auerbach flik-flak, met hoge vluchtfase tot rijzit",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.307",
    description: "Flik-flak of auerbach flik -flak met hoeken en strekken van de heupen  in de vluchtfase tot rijzit",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.407",
    description: "Flik-flak met 1/1 draai (360°) – tot rijzit",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.208",
    description: "Arabier",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.408",
    description: "Vrije (aerial) radslag – landing  op één of twee voeten  in dwars - of parallelstand , ook met beenwissel",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.508",
    description: "Vrije (aerial) arabier gehurkt of gehoekt – afzet van twee voeten     Vrije (aerial) radslag in parallelpositie",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.409",
    description: "Vrije (aerial) overslag v.o., landing op één of beide voeten",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.310",
    description: "Salto v.o. gehurkt, afzet van één been tot stand op één of beide voeten",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.410",
    description: "Salto v.o. gehurkt tot dwarsstand",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.510",
    description: "Salto v.o. gehoekt tot dwarsstand",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.411",
    description: "Salto zijwaarts gehurkt , afzet vanaf één  been tot parallelstand",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.511",
    description: "Salto zijwaarts gehurkt met ½ draai (180°), afzet vanaf één been tot parallelstand",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.611",
    description: "Twist salto gehurkt (afzet achterwaarts met ½ draai (180°) - salto voorwaarts)",
    difficulty: "F",
    value: "0.6",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.312",
    description: "Salto a.o. gehurkt, gehoekt of gestrekt (met uitstappen )",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.512",
    description: "Salto a.o. gestrekt met  gesloten benen",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.612",
    description: "Salto a.o. gehurkt met 1/1 dr aai (360°)",
    difficulty: "F",
    value: "0.6",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "achterover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.712",
    description: "Salto a.o. gestrekt met 1/1 draai (360° )      Balk – Groep 5 – 6 ",
    difficulty: "G",
    value: "0.7",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.313",
    description: "Auerbach salto a. o. gehurkt, gehoekt of gestrekt met uitstappen",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "5.613",
    description: "Sprong voorwaarts met ½ draai (180°) - salto a.o. gehurkt of gehoekt",
    difficulty: "F",
    value: "0.6",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "achterover"
      },
      group: "acrobatische vluchtelementen"
    }
  },
  {
    number: "6.101",
    description: "Vrije overslag v.o. met ½ draai (180°)",
    difficulty: "A",
    value: "0.1",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.201",
    description: "Vrije overslag v.o. met 1/1 draai (360°)   Vrije radslag met ½ draai (180°)",
    difficulty: "B",
    value: "0.2",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.301",
    description: "Vrije overslag v.o. met 1½ draai (540º)",
    difficulty: "C",
    value: "0.3",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.501",
    description: "Vrije (aerial) radslag met gehurkte salto achterwaarts",
    difficulty: "E",
    value: "0.5",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.102",
    description: "Salto v.o. gehurkt of gehoekt, ook met ½ draai (180°)",
    difficulty: "A",
    value: "0.1",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.202",
    description: "Salto v.o. gestrekt, ook met ½ draai (180°)",
    difficulty: "B",
    value: "0.2",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.302",
    description: "Salto v.o. gestrekt met 1/1 draai (360) of met 1 ½ draai (540º)",
    difficulty: "C",
    value: "0.3",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.402",
    description: "Salto v.o. gestrekt met 2/1 draai (720º)",
    difficulty: "D",
    value: "0.4",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.602",
    description: "Dubbele salto v.o. gehurkt      Balk – Groep 6 – 1 ",
    difficulty: "F",
    value: "0.6",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.203",
    description: "Twistsalto gehurkt, gehoekt  (sprong achterwaarts met ½ draai (180°) - salto v.o.)",
    difficulty: "B",
    value: "0.2",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.303",
    description: "Streksprong voorwaarts met 1/1 draai (360°) en salto v.o. gehurkt, of gehoekt",
    difficulty: "C",
    value: "0.3",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.403",
    description: "Streksprong voorwaarts met 1/1 draai (360°) en salto v.o. gestrekt",
    difficulty: "D",
    value: "0.4",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.703",
    description: "Dubbele twistsalto v.o. gehurkt",
    difficulty: "G",
    value: "0.7",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.104",
    description: "Salto a.o. gehurkt, gehoekt of gestrekt, ook met ½ draai (180°)",
    difficulty: "A",
    value: "0.1",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.204",
    description: "Salto a.o. gehurkt of gestrekt met 1/1 draai (360°)",
    difficulty: "B",
    value: "0.2",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.304",
    description: "Salto a.o. gehurkt of gestrekt met 1½ dr aai (540°)",
    difficulty: "C",
    value: "0.3",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.404",
    description: "Salto a.o. gestrekt met 2½ draai (900°)",
    difficulty: "D",
    value: "0.4",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 900,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.604",
    description: "Salto a.o. gestrekt met 3/1 draai (1080°)",
    difficulty: "F",
    value: "0.6",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 1080,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.405",
    description: "Dubbele salto a.o. gehurkt",
    difficulty: "D",
    value: "0.4",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.505",
    description: "Dubbele salto a.o. gehoekt",
    difficulty: "E",
    value: "0.5",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "hoek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.705",
    description: "Dubbele salto a.o. gehurkt of gehoekt met 1/1 draai (360°) in de eerste salto",
    difficulty: "G",
    value: "0.7",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "dubbel",
        vorm: "hoek",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.805",
    description: "Dubbele salto a.o. gehurkt met 2/1 draai (720°)",
    difficulty: "H",
    value: "0.8",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "achterover"
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.106",
    description: "Auerbach salto gehurkt, gehoekt  of gestrekt  aan de zijkant van de balk - ook met ½ draai (180°) gehurkt of gestrekt",
    difficulty: "A",
    value: "0.1",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.206",
    description: "Auerbach salto gehurkt  of gestrekt  met 1/1 draai (360º)  aan de zijkant van de balk",
    difficulty: "B",
    value: "0.2",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.306",
    description: "Auerbach salto gehurkt  of gestrekt  met 1½  (540) of 2/1 draai (720º)  aan de zijkant van de balk",
    difficulty: "C",
    value: "0.3",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.406",
    description: "Auerbach salto gestrekt met  2½ draai (900º) aan de zijkant van de balk",
    difficulty: "D",
    value: "0.4",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 900,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.606",
    description: "Auerbach salto gestrekt met 3/1 draai (1080º) aan de zijkant van de balk",
    difficulty: "F",
    value: "0.6",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 1080,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.207",
    description: "Auerbach salto gehurkt of gehoekt aan punt van de balk",
    difficulty: "B",
    value: "0.2",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.307",
    description: "Auerbach salto gestrekt  met gesloten benen aan de punt van de balk      Auerbach salto gehurkt met 1/1 draai (360°) aan de punt van de balk",
    difficulty: "C",
    value: "0.3",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.407",
    description: "Auerbach salto gestrekt met 1/1 draai (360°) aan de punt van de balk       Auerbach salto met 1½ draai ( 540°) aan de punt van de balk",
    difficulty: "D",
    value: "0.4",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  },
  {
    number: "6.507",
    description: "Auerbach salto gestrekt met 2/1 draai (720°) aan de punt van de balk",
    difficulty: "E",
    value: "0.5",
    group: "6",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: null
      },
      group: "afsprongen"
    }
  }
];
const floor = [
  {
    number: "1.101",
    description: "Spagaatsprong voorwaarts - afzet van één been  (180° beenspreiding)",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.201",
    description: "Spagaatsprong voorwaarts met ½ draai (180°) – afzet van één been",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.301",
    description: "Spagaatsprong voorwaarts met 1/1 draai (360º)  – afzet van één been",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.202",
    description: "(*) Fouettésprong met beenwissel tot  dwarsspagaat (beenspreiding 180º) (tour jeté )   Tour jete tot ringhouding  (achterste voet op hoofdhoogte, romp achterover en hoofd achterover)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.302",
    description: "(*) Tour jete met extra  ½ draai ( 180º) met landing  op één of beide  voeten of  tot zit in spagaat",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.402",
    description: "Spagaatsprong voorwaarts met 1 /1 draai (360º) – afzet van één been",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.103",
    description: "Hurksprong met spreiden van de benen  tot dwars - spagaat (180º) tijdens de vluchtfase",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.203",
    description: "* Een butterfly v.o. of a.o. – lichaam parallel aan de vloer, benen gespreid en voeten boven heuphoogte gedurende de vlucht",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.104",
    description: "(*) Spagaatsprong voorwaarts met ¼ draai (90º) tot spreidhoekpositie (beide benen boven horizontaal) of zijwaart se spagaat – landing op één of beide benen",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 90,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.204",
    description: "Spagaatsprong voorwaarts met beenwissel en ¼ draai (90º) tot zijwaartse spagaat  of tot spreidhoekpositie (beide benen boven horizontaal (Johnson)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 90,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.304",
    description: "(*)  Spagaatsprong voorwaarts met beenwissel en ½ draai (180º) in de vluchtfase",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.404",
    description: "(*)  Spagaatsprong voorwaarts met beenwissel en 1/1 draai (360°) in de vluchtfase  Johnson met toegevoegde 1/1 draai (360°)",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.105",
    description: "Loopsprong voorwaarts met beenwissel tot hurk-hoekpositie",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.205",
    description: "Spagaatsprong voorwaarts met beenwissel (180º  beenspreiding na de beenwissel)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.305",
    description: "Spagaatsprong voorwaarts met beenwissel tot ringhouding (180º beenspreiding)",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.405",
    description: "Spagaatsprong voorwaarts met beenwissel tot ringhouding  en ½ draai (180°)",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.106",
    description: "Hoeksprong ( heuphoek < 90° ) met ½ draai (180º)",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.206",
    description: "Schaapsprong (bovenlichaam achterwaarts gebogen en hoofd achterover en de voeten bijna het hoofd rakend)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.306",
    description: "Hoeksprong ( heuphoek < 90° ) met 1/1 draai ( 360º)",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.107",
    description: "(*) Spreidhoeksprong (beide benen boven horizontaal), of spagaatsprong parallel (180º beens preiding)",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.207",
    description: "(*) Spreidhoeksprong of spagaatsprong parallel met ½ draai ( 180º)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.307",
    description: "(*)  Spreidhoeksprong of spagaatsprong parallel met 1/1 draai ( 360º)",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.407",
    description: "(*) Spreidhoeksprong of spagaatsprong parallel met 1½ draai (540°)   Spagaatsprong voorwaarts  met  1½ d raai (540º)  – afzet van beide benen",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 540,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.108",
    description: "(*) Spreidhoeksprong (beide benen boven horizontaal) of spagaatsprong parallel  met landing tot ligsteun, ook met  ½ draai (180º)   Hup met 1/1 draai (360º) tot spreidpositie met landing   tot ligsteun  - afzet van één been",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.208",
    description: "(*) Spreidhoeksprong (beide benen boven horizontaal), of spagaatsprong parallel met 1/1 draai (360°), landing tot ligsteun",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.109",
    description: "(*)  Spagaatsprong voorwaarts (180° beenspreiding)  - afzet van twee benen",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.209",
    description: "(*) Ringsprong (achterste voet op hoofdhoogte, romp achterover, 180º beenspreiding en hoofd achterover)  – afzet van twee benen   Reeringsprong (achterste voet op hoofdhoogte , romp achterover  en hoofd achterover ) – afzet van twee benen  Spagaatringsprong (180º beenspreiding  – afzet van twee benen   Spagaatringsprong met ½ draai (180º ) - afzet van twee benen",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.309",
    description: "Loopspagaatringsprong (180º ) beenspreiding  – afzet van één been",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.409",
    description: "(*)  Loopspagaatsprong (afzet van één been)   Spagaatsprong (afzet van twee benen) met 1/1 (360°) draai tot ringhouding   Wisselspagaat tot ringpositie met ½ draai (180º)",
    difficulty: "D",
    value: "0.4",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.110",
    description: "Streksprong met 1/1 draai (360º)",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.310",
    description: "Streksprong met 2/1 draai (720º)",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.111",
    description: "Kattensprong met afwisselende beenwissel (knieën boven horizontaal )",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.211",
    description: "Kattensprong met afwisselende beenwissel (knieën boven horizontaal) met 1/1 draai (360º )",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.311",
    description: "Kattensprong met  2/1 draai (720º)",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.112",
    description: "Fouettésprong tot landing in arabesque (vrije been boven horizontaal)",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.212",
    description: "Sprong met ½ draai (180°), vrije been gedurende de draai gestrekt boven horizontaal",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.312",
    description: "Sprong met 1/1 draai (360º), vrije been gedurende de gehele draai gestrekt boven horizontaal",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.213",
    description: "Hurksprong met 1/1  draai (360º)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.313",
    description: "(*) Hurksprong met 2/1 draai (720º), ook met landing tot ligsteun",
    difficulty: "C",
    value: "0.3",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.114",
    description: "Hurkhoeksprong (één been gebogen en het andere been voorwaarts gestrekt , boven  horizontaal met gesloten knieën )",
    difficulty: "A",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.214",
    description: "(*)  Hurkhoeksprong met 1/1 draai (360º)",
    difficulty: "B",
    value: "0.2",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.514",
    description: "Hurkhoeksprong met 2/1 draai (720º)",
    difficulty: "E",
    value: "0.5",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.101",
    description: "1/1 draai (360º) op één been - vrije been onder de horizontaal naar keuze",
    difficulty: "A",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.201",
    description: "2/1 draai (720º) op één  been - vrije been onder de horizontaal naar keuze ’",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.301",
    description: "3/1 draai (1080º) op één been - vrije been onder de horizontaal naar keuze",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 1080,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.501",
    description: "4/1 draai (1440º) op één been – vrije been onder de horizontaal naar keuze",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.202",
    description: "1/1 draai (360º) met het vrije been van het begin tot het ein de van de draai op horizontaal, ook met vasthouden van het vrije been (standbeen en vrije been mogen gestrekt of gebogen zijn)",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.402",
    description: "2/1 draai (720º) met het vrije been van het begin tot het einde van de draai op  horizontaal , ook met vasthouden van het vrije been (standbeen en vrije been mogen gestrekt of gebogen zijn)",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.203",
    description: "1/1 draai (360º) met het vrije been vastgehouden  in 180º spagaat positie  gedurende de gehele draai",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: 180,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.403",
    description: "2/1 draai ( 720°) met het vrije been vastgehouden  in 180º spagaat positie  gedurende de gehele draai",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: 180,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.503",
    description: "3/1 draai (1080 º) met het vrije been vastgehouden  in 180º spagaat positie  gedurende de gehele draai",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 1080,
      beenspreiding: 180,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.204",
    description: "1/1 draai (360 ) op 1 been in “back attitude” (de knie van het vrije been op horizontaal gedurende de gehele draai )",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.404",
    description: "(*) 2/1 draai ( 720) op 1 been “in back attitude” (de knie van het vrije been op horizontaal gedurende de gehele draai )  2/1 draai (720 ) op 1 been met het vrije been achterwaar ts vastgehouden met beiden handen gedurende de  draai",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.205",
    description: "1/1 draai (360) in zweefstand met vrije been boven horizo ntaal gedurende de gehele draai",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.206",
    description: "1/1 duikdraai (360º) door standspagaat zonder aanraken van de vloer met de handen",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.207",
    description: "1/1 draai (360º)  pirouette  in hurkzit op één been - vrije been recht gedurende de draai",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 360,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.307",
    description: "2/1 draai (720º) pirouette gestart met vrije been op horizontaal, naar beneden tot eindiging van draai in hurk hoek positie",
    difficulty: "C",
    value: "0.3",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.407",
    description: "2/1 draai (720º) pirouette in hurkzit op één been - vrije been recht gedurende de draai (geen afzet van de handen toegestaan bij de start van de draai)",
    difficulty: "D",
    value: "0.4",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.507",
    description: "3/1 draai (1080º) pirouette in hurkzit op één been - vrije been recht gedurende de draai (geen afzet van de handen toegestaan bij de start van de dr aai)",
    difficulty: "E",
    value: "0.5",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 1080,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "2.208",
    description: "2/1 draai (720º) of meer op de rug in kiphouding (been - romphoek gesloten)",
    difficulty: "B",
    value: "0.2",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 720,
      beenspreiding: null,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.101",
    description: "Springen, zwaaien of heffen tot handstand – beweging erna naar keuze, ook met ½  en 1/1 draai (180º -360º) in handstand",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.201",
    description: "Springen, zwaaien of heffen tot handstand met 1½ -2/1 draai ( 540º-720º) in handstand  – beweging erna naar k euze",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.102",
    description: "Hechtrol",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.103",
    description: "Rol achterover tot handstand met ½ of 1/1 draai (180º -360º) in handstand",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.203",
    description: "Rol achterover tot handstand met 1½ - 2/1 draai ( 540°-720º) in handstand",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.104",
    description: "Langzame overslag achterover vanuit stand of hurkspreidzit tot handstand met 1/1 draai (360º) in handstand - beweging erna naar keuze",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.105",
    description: "Overslag v.o. - afzet van één been of o verslag v.o. - afzet van beide benen - met of zonder hechtfase voor de steun van de handen - landing naar keuze   Sprong achterwaarts met ½ draai (180º) tot overslag v.o. (twistoverslag) - landing naar keuze",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.305",
    description: "Overslag v.o. met 1/1 draai (360º) na de steun van de handen of voor de steun",
    difficulty: "C",
    value: "0.3",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.106",
    description: "Arabier",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.107",
    description: "Alle flik-flak- en Auerbach -flik-flak- variaties, ook met steun van één arm",
    difficulty: "A",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.207",
    description: "Flik-flak met 1/1 draai (360º)  voor de steun van de handen",
    difficulty: "B",
    value: "0.2",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "4.101",
    description: "Salto v.o.  gehurkt  of gehoekt",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.201",
    description: "Salto v.o. gehurkt met ½ of 1/1 draai (180º -360º), ook salto v.o. gehoekt met ½ draai (180º)",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.501",
    description: "Dubbele salto v.o. gehurkt",
    difficulty: "E",
    value: "0.5",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.601",
    description: "Dubbel salto v.o. gehurkt met ½ draai (180°)   Dubbel salto v.o. gehoekt",
    difficulty: "F",
    value: "0.6",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "dubbel",
        vorm: "hoek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.202",
    description: "Salto v.o. gestrekt ; ook met ½ draai (180º)",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.302",
    description: "Salto v.o. gestrekt met 1/1 of 1½ draai (360º of 540º)",
    difficulty: "C",
    value: "0.3",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 540,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.402",
    description: "Salto v.o. gestrekt met 2/1 draai (720º)",
    difficulty: "D",
    value: "0.4",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.502",
    description: "Salto v.o. gestrekt met  2½ draai (900º)",
    difficulty: "E",
    value: "0.5",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 900,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.602",
    description: "Salto v.o. gestrekt met 3/1 draai (1080 º)",
    difficulty: "F",
    value: "0.6",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 1080,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.103",
    description: "Vrije (aerial) overslag v.o.",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: "voorover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.104",
    description: "Vrije (aerial) radslag of vrije (aerial) arabier",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.105",
    description: "Vanuit afzet vw met één of beide benen – salto zijwaarts gehurkt of gehoekt",
    difficulty: "A",
    value: "0.1",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: null
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.205",
    description: "Twistsalto gehurkt of gehoekt ( afzet achterover met ½ draai (180º), salto v.o.) – landing naar keuze",
    difficulty: "B",
    value: "0.2",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hoek",
        richting: "achterover"
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.505",
    description: "Dubbele twistsalto gehurkt, ook met ½ draai (180 )",
    difficulty: "E",
    value: "0.5",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: null
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.605",
    description: "Dubbele twistsalto gehoekt   Ook met ½ draai (180)",
    difficulty: "F",
    value: "0.6",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "dubbel",
        vorm: "hoek",
        richting: null
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "4.805",
    description: "Dubbele twistsalto gestrekt",
    difficulty: "H",
    value: "0.8",
    group: "4",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "strek",
        richting: null
      },
      group: "salto’s v.o. en zijwaarts"
    }
  },
  {
    number: "5.101",
    description: "Salto a.o. gehurkt, gehoekt, gestrekt",
    difficulty: "A",
    value: "0.1",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.201",
    description: "Salto a.o. gehurkt of gestrekt met ½ of 1/1 draai (180º of 360º)",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.301",
    description: "Salto a.o. gestrekt met 1½  of 2/1 draai (540º of 720º)",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.401",
    description: "Salto a.o. gestrekt met 2½ draai (900º)",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 900,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.501",
    description: "Salto a.o. gestrekt met 3/1 draai (1080º)",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 1080,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.601",
    description: "Salto a.o. gestrekt met 3 ½ draai (1260º)",
    difficulty: "F",
    value: "0.6",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.402",
    description: "Dubbele salto a.o. gehurkt of gehoekt",
    difficulty: "D",
    value: "0.4",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "hoek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.502",
    description: "Dubbele salto a.o. gehurkt of gehoekt met 1/1 draai (360º)",
    difficulty: "E",
    value: "0.5",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "dubbel",
        vorm: "hoek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.802",
    description: "Dubbele salto a.o. gehurkt met 2/1 draai (720º)",
    difficulty: "H",
    value: "0.8",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.1002",
    description: "Dubbele salto a.o. gehurkt met  3/1 draai ( 1080º)",
    difficulty: "J",
    value: "1",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 1080,
      salto: {
        aantal: "dubbel",
        vorm: "hurk",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.603",
    description: "Dubbele salto a.o. gestrekt",
    difficulty: "F",
    value: "0.6",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "dubbel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.703",
    description: "Dubbel salto a.o. gestrekt met ½ draai (180°)",
    difficulty: "G",
    value: "0.7",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "dubbel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.803",
    description: "Dubbele salto a.o. gestrekt met 1/1 draai (360º)",
    difficulty: "H",
    value: "0.8",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "dubbel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.903",
    description: "Dubbel salto a.o. gestrekt met 2/1 draai (720°)",
    difficulty: "I",
    value: "0.9",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 720,
      salto: {
        aantal: "dubbel",
        vorm: "strek",
        richting: "achterover"
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.104",
    description: "Temposalto",
    difficulty: "A",
    value: "0.1",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.204",
    description: "Temposalto met ½ draai (180º)",
    difficulty: "B",
    value: "0.2",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "5.304",
    description: "Temposalto met 1/1 draai (360º)",
    difficulty: "C",
    value: "0.3",
    group: "5",
    type: "acrobatic",
    breakdown: {
      draai: 360,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "salto ’s a.o."
    }
  },
  {
    number: "1.001",
    description: "Loopsprong voorwaarts (beenspreiding 135º)",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: 135,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.002",
    description: "Loopsprong op de plaats (beenspreiding 135º)",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: 135,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.005",
    description: "Wisselloopsprong (beenspreiding 135º)",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: 135,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.007",
    description: "Spreidsprong met gestrekte heupen (beenspreiding 135º)",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: 135,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.009",
    description: "Sisonne (beenspreiding 135º)",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: 135,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.010",
    description: "Streksprong met 1/2 draai (180º)",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.011",
    description: "Schaarsprong voorwaarts met gestrekte benen",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "1.012",
    description: "Hurksprong (benen gesloten), ook met ½ draai - afzet van een of beide benen",
    difficulty: "TA",
    value: "0.1",
    group: "1",
    type: "gymnastic",
    breakdown: {
      draai: null,
      beenspreiding: null,
      group: "gymnastische sprongen"
    }
  },
  {
    number: "2.001",
    description: "½ draai  (180°) op 1 been - vrije been  in passé  Geldt alleen voor supplement 3 t/m 7",
    difficulty: "TA",
    value: "0.1",
    group: "2",
    type: "gymnastic",
    breakdown: {
      draai: 180,
      beenspreiding: 180,
      group: "gymnastische draaien"
    }
  },
  {
    number: "3.001",
    description: "Zwaaien tot handstand , vluchtig of 1 seconde (180°)   Handstanddoorrol",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: 180,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.002",
    description: "Rol voorover of snelle rol voorover zonder handensteun",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.003",
    description: "Rol achterover  (tot handstand)",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.004",
    description: "Langzame overslag voorover of l angzame overslag v.o., a.o. (Tik-Tak)",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.005",
    description: "Langzame overslag achterover, ook vanuit hurkspreidzit (Valdez)",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.006",
    description: "Radslag",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "3.007",
    description: "Radslag  op 1 arm",
    difficulty: "TA",
    value: "0.1",
    group: "3",
    type: "acrobatic",
    breakdown: {
      draai: null,
      group: "elementen met steun van de handen"
    }
  },
  {
    number: "6.001",
    description: "Geldt alleen voor supplement 6 t/m 7  Spreidzit met buik op de grond",
    difficulty: "TA",
    value: "0.1",
    group: "6",
    type: "gymnastic",
    breakdown: {
      draai: null,
      salto: {
        aantal: "enkel",
        vorm: "hurk",
        richting: null
      },
      group: "lenigheidselementen"
    }
  }
];
const json = {
  vault,
  "uneven bars": [
    {
      number: "1.103",
      description: "Zweefhangzwaai aan de LL  (of strekhang -zwaai voorwaarts aan de HL ) doorhoeken  tot ruglingse steun ( kipopzwaai ruglings, contact  ligger met achterkant van bovenbenen)  of met uitspreiden tot zweefhang aan dezelfde ligger",
      difficulty: "A",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.203",
      description: "Ruglingse kip vanuit - zweefhangzwaai aan de LL of voorzwaai aan de HL - doorhoeken tot vouwhang, kipopzwaai ruglings a.o. tot steun ruglings",
      difficulty: "B",
      value: "0.2",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.104",
      description: "Sprong tot vluchtige hang aan de HL - ook in ondergreep - kip tot streksteun op de HL",
      difficulty: "A",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.204",
      description: "Vanuit parallelstand voor  de HL - sprong met  ½ draai (180°) - kip tot streksteun op de HL    Vrije sprong met ½ draai (180º) over de LL tot strekhang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "opsprongen"
      }
    },
    {
      number: "1.304",
      description: "Sprong met ½ draai (180°) over de LL - kip tot streksteun op de HL",
      difficulty: "C",
      value: "0.3",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "opsprongen"
      }
    },
    {
      number: "1.105",
      description: "Vanuit parallelstand voor de HL - sprong met 1/1 draai (360°) tot strekhang aan de HL",
      difficulty: "A",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.106",
      description: "Spreiden over de LL met afstoot van de handen tot strekhang aan de HL",
      difficulty: "A",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.206",
      description: "Vrije spreidsprong over de LL tot strekhang aan de  HL   Hechtsprong (benen gesloten) over de LL met afzet van de handen tot strekhang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.306",
      description: "Vrije gestrekte sprong over de LL tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.406",
      description: "Hechtsprong (benen gesloten) over de LL met afzet van de handen en 1/1 (360°) draai tot strekhan g aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.207",
      description: "Salto v.o. gehurkt, gespreid of gehoekt over de LL tot ellehang aan de LL",
      difficulty: "B",
      value: "0.2",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.307",
      description: "Vanuit parallelstand voor de HL - salto v.o. tot vluchtige strekhang aan de HL   Salto v.o. gehoekt over de LL met handafzet tot strekhang aan de  HL",
      difficulty: "C",
      value: "0.3",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.407",
      description: "Salto v.o. gehurkt over de LL tot strekhang aan de HL zonder aanraken van de LL",
      difficulty: "D",
      value: "0.4",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.208",
      description: "Arabier voor de LL - vlucht achterwaarts (gespreid) tot vluchtige vrije spreidhoek -steun op de LL",
      difficulty: "B",
      value: "0.2",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.308",
      description: "Arabier voor de L L - vlucht achterwaarts over de LL met gesloten benen of gespreid tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.408",
      description: "Arabier voor de LL  - vlucht achter waarts over de LL met 1/1 draai (360º) tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.409",
      description: "Arabier voor de LL - salto a.o. gehurkt over de LL tot zweefhang aan de LL     Arabier voor de LL - flik-flak tot  handstand op de LL",
      difficulty: "D",
      value: "0.4",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.509",
      description: "Arabier voor de LL - flik-flak met 1/1 draai (360°) tot vrije steun of handstand op de LL",
      difficulty: "E",
      value: "0.5",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.609",
      description: "Arabier voor de LL – twistsalto gehurkt over de LL tot strekhang aan de HL zonder aanraken van de LL",
      difficulty: "F",
      value: "0.6",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.709",
      description: "Arabier voor de LL – twistsalto gehoekt  over de LL tot strekhang aan de HL zonder aanraken van de LL    Brug – Groep 1 – 5  ",
      difficulty: "G",
      value: "0.7",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.210",
      description: "Sprong tot in handstand op de LL  (benen gesloten of gespreid)  met gebogen heupen en daarna gestrekt , ook met ½ draai (180°) in de handstandfase",
      difficulty: "B",
      value: "0.2",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "opsprongen"
      }
    },
    {
      number: "1.310",
      description: "Sprong tot handstand op de LL  (benen gesloten of gespreid)  met heupen gebogen en daarna gestrekt en 1/1 draai (360º) in de handstandfase   Sprong met gestrekt lichaam tot hand -stand op de LL, ook met ½ draai  (180°)",
      difficulty: "C",
      value: "0.3",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: 180,
        group: "opsprongen"
      }
    },
    {
      number: "1.410",
      description: "Sprong met gestrekt lichaam tot handstand op de LL met 1/1 draai (360º) in  handstandfase",
      difficulty: "D",
      value: "0.4",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.411",
      description: "Sprong tot vrije steun op de HL - losom tot in handstand op de HL, ook met ½ draai  (180º) in handstandfase op de HL",
      difficulty: "D",
      value: "0.4",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "opsprongen"
      }
    },
    {
      number: "2.101",
      description: "Achteropzwaai tot handstand met gespreide benen of met gebogen heupen, ook met omspringen",
      difficulty: "A",
      value: "0.1",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.201",
      description: "Achteropzwaai tot handstand met gesloten benen en gestrekte heupen; ook met omspringen tot in ellegreep of ondergreep; ook met 1/2 draai (180º), benen gesloten of gespreid",
      difficulty: "B",
      value: "0.2",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.301",
      description: "Achterop zwaai met 1/1 draai (360º) tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.401",
      description: "Achteropzwaai met 1 ½ draai (540°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.202",
      description: "Streksteun borstlings op de HL - over-hoeken met vluchtfase of vrij overspreiden voorwaarts over de HL met ½ draai (180°) tot strekhang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.302",
      description: "Vrije heupdraai a.o. aan LL of HL, hecht met vluchtfase en ½ draai (180°) tijdens het passeren van de ligger (hechtkeren) tot hang aan dezelfde ligger - ook vanuit vrije heupdraai a.o. aan de HL (vrij hechtkeren)",
      difficulty: "C",
      value: "0.3",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.303",
      description: "Vanuit streksteun borstlings op de HL - achteropzwaai met loslaten en 1/1 draai (360°) tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.403",
      description: "Streksteun borstlings op de LL aan de binnenzijde van de LL  – achteropzwaai met saltorol v.o. tot strekhang aan de HL (Radochla -rol)",
      difficulty: "D",
      value: "0.4",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.503",
      description: "Streksteun borstlings op de HL - achteropzwaai met salto v.o. gespreid tot strekhang aan de HL (Comaneci -salto)",
      difficulty: "E",
      value: "0.5",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.104",
      description: "Heupdraai v.o. (heupen tegen de ligger)",
      difficulty: "A",
      value: "0.1",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.404",
      description: "Vrije heupdraai v.o. tot handstand, ook met ½ draai (180°) in handstandfase (Weilerkip)",
      difficulty: "D",
      value: "0.4",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.105",
      description: "Heupdraai a.o. aan de lage of hoge ligger tot streksteun (met of zonder steun van de handen)    (Vrije) heupdraai a.o. aan de LL – opstrekken  / heup afzet  (hechten) – met herpakken van de LL",
      difficulty: "A",
      value: "0.1",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.305",
      description: "Losom tot  handstand, ook met omspringen tot in andere greep in de handstandfase, of met ½ draai (180º) tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.405",
      description: "Losom met 1/1 draai (360°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.505",
      description: "Losom met 1 ½ draai (540º) tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.206",
      description: "Vrije onderzwaai met loslaten en contrabeweging v.o. in de vluchtfase tot strekhang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.406",
      description: "Streksteun borstlings op de LL aan  binnenzijde - losom door handstand met vluchtfase tot strekhang aan de HL (Schaposchnikova)",
      difficulty: "D",
      value: "0.4",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.506",
      description: "Losom aan de HL, contraspreiden over de HL tot strekhang aan de HL",
      difficulty: "E",
      value: "0.5",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.606",
      description: "Losom aan de HL, contra hoeken over de HL tot strekhang aan de HL    Losom aan de HL  met contraspreiden over de HL met ½ draai (180°)  tot hang in gemengde ellegreep",
      difficulty: "F",
      value: "0.6",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.307",
      description: "Streksteun borstlings aan de buitenzijde van de LL - vrije heupdraai a.o. aan de LL met hechten tot strekhang aan de HL (benen gesloten of gespreid)",
      difficulty: "C",
      value: "0.3",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.407",
      description: "Streksteun borstlings aan de buitenzijde van de LL - vrije heupdraai a.o. aan de LL met hecht en met ½ draai (180°) tot strekhang aan de HL (benen gesloten of gespreid)",
      difficulty: "D",
      value: "0.4",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        beenspreiding: 180,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "3.201",
      description: "Reuzendraai a.o. tot handstand in bovengreep, ook aan één arm   Reuzendraai a.o. met ½ draai (180°) of met ½ draai - ½ draai (180°/180°) tot handstand",
      difficulty: "B",
      value: "0.2",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.301",
      description: "Reuzendraai a.o. met 1/1 draai (360º) tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.401",
      description: "Reuzendraai a.o. met gesprongen 1/1 draai (360°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.402",
      description: "Strekhang aan de HL – voorzwaai met ½ draai (180°) en vluchtfase tot handstand op de LL",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.502",
      description: "Strekhang aan HL – voorzwaai met 1½  draai (540°) en vlucht over de LL tot hang aan de LL",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.403",
      description: "Strekhangzwaai voorwaarts, contraspreiden - ruglingse hecht (Tkatchev) over de HL tot strekhang       Strekhangzwaai voorwaarts met ½ draai (180°), gehoekt overspringen over de HL tot strekhang",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.503",
      description: "Tkatchev gehoekt  Tkatchev met ½ draai (180°)   Strekhangzwaai v oorwaarts met ½ draai (180º) - ½ draai (180º) en contra spreiden in de vlucht over de HL tot strekhang aan de HL",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.304",
      description: "Strekhang aan de HL, gezicht naar de LL - voorzwaai en saltorol a.o. gehurkt of gespreid tot zweefhang aan of vrije spreidhoeksteun op de LL",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.404",
      description: "Strekhang aan de HL, gezicht naar de LL - voorzwaai, salto a.o. gestrekt tussen de liggers tot vrije streks teun op de LL  (Pak Salto)",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.504",
      description: "Pak salto met 1/1 draai (360º)",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.604",
      description: "Gezicht naar buiten - voorzwaai aan de HL - contrasalto v.o. met gespreide benen tot strekhang aan de HL in ondergreep      Brug – Groep 3 – 2 ",
      difficulty: "F",
      value: "0.6",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.405",
      description: "Voorzwaai met ½ draai (180º) en salto v.o. gespreid (Deltchev Salto), of voorzwaai en salto a.o. met ½ draai (180º) gehoekt (Gienger Salto)  tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.505",
      description: "Voorzwaai en salto achterwaarts met ½ draai  (180°) gestrekt tot strekhang aan de HL",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.705",
      description: "Voorzwaai en salto a.o. gestrekt met  1½  draai (540°) tot strekhang aan de HL     Brug – Groep 3 – 3   ",
      difficulty: "G",
      value: "0.7",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.206",
      description: "Reuzendraai v.o. in onder -, boven - of mixgreep tot handstand, ook met gespreide benen of gebogen heupen in de opzwaai, ook met ½ draai (180°) tot handstand",
      difficulty: "B",
      value: "0.2",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.306",
      description: "Reuzendraai v.o. met 1/1 draai (360º) tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.506",
      description: "Reuzendraai v.o. in ondergreep tot handstand met begin van de 1/1 draai (360º) op één arm voor de handstandfase tot in ellegreep of reuzendraai v.o. in ondergreep met 1½ (540) draai tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.307",
      description: "Achterzwaai (rug naar de LL) in boven - of ondergreep  met gespreide benen vlucht achterwaarts  over de LL tot handstand op de LL",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.407",
      description: "Achterzwaai (rug naar de LL) in onder -greep, met loslaten en ½ draai (180º) in de vlucht tussen de liggers en weer vastpakken van de LL in zweefhang",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.308",
      description: "Achterzwaai in ondergreep of ellegreep, salto v.o. gehurkt tot strekhang aan de HL (Jaeger Salto)",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.408",
      description: "Jaeger salto  gespreid tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.508",
      description: "Jaeger salto gespreid met ½ draai (180°) tot strekhang aan de HL",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.608",
      description: "Jaeger salto gestrekt tot strekhang aan de HL",
      difficulty: "F",
      value: "0.6",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.708",
      description: "Achterzwaai in ellegreep met salto v.o. gehurkt over de HL to t strekhang aan de  HL in onder greep",
      difficulty: "G",
      value: "0.7",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.309",
      description: "Achterzwaai in ondergreep met vrij hoekwenden of spreidsprong en ½ draai (180°) over  de HL tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.409",
      description: "Achterzwaai in ondergreep met ½ draai (180°) en met gespreide benen vlucht achterwaarts over  de HL tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.310",
      description: "Reuzendraai v.o. in ellegreep (rugwaarts) met gehoekt of gestrekt lichaam (ellegreepreus) tot handstand, ook met ½ draai (180º) tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.410",
      description: "Reuzendraai v.o. in ellegreep met 1/1 draai (360º) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.510",
      description: "Reuzendraai v.o. in ellegreep met begin van de 1/1 draai (360º) op één arm voor de handstandfase, voltooid in de handstandfase, of  Reuzendraai v.o. in ellegreep met 1 ½ draai (540º) tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        group: "reuzendraaien"
      }
    },
    {
      number: "4.101",
      description: "Vrije spreiddraai v.o. aan de LL of de HL tot vrije steun",
      difficulty: "A",
      value: "0.1",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.201",
      description: "Kip aan HL, via vrije spreidsteun -  zwaaien /heffen tot handstand en  ½ draai (180º) in handstandfase",
      difficulty: "B",
      value: "0.2",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.301",
      description: "Stalder v.o. tot handstand,  ook met ½ draai (180°)",
      difficulty: "C",
      value: "0.3",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.401",
      description: "Stalder v.o. met 1/1 draai (360°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.302",
      description: "Vrije spreiddraai a.o. aan de HL met vlucht  tot zweefhang aan de LL",
      difficulty: "C",
      value: "0.3",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.402",
      description: "Vrije spreiddraai a.o. aan de HL met vlucht tot handstand op de LL",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.502",
      description: "Stalder a.o. aan de HL met contraspreiden achterwaarts over de HL tot strekhang",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.602",
      description: "Stalder a.o. aan de HL met contrahoeken achterwaarts over de HL tot strekhang   Stalder a.o. aan de HL met contraspreiden over de HL met ½ draai (180°)  tot gemende ellegreep  aan de HL  Brug – Groep 4 – 1 ",
      difficulty: "F",
      value: "0.6",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.103",
      description: "Vrije spreiddraai v.o. in ellegreep tot vrije steun",
      difficulty: "A",
      value: "0.1",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.403",
      description: "Stalder v.o. in ellegreep tot handstand,  ook met ½ draai (180°) tot handstan d",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.503",
      description: "Stalder v.o. in ellegreep met 1/1 draai (360º) tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.104",
      description: "Vrije spreiddraai a.o. aan de tot vrije steun",
      difficulty: "A",
      value: "0.1",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.304",
      description: "Stalder a.o. tot handstand, ook met gesprongen greepwissel in handstandfase of met ½ draai (180º) tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.404",
      description: "Stalder a.o. met 1/1 draai (360°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.504",
      description: "Stalder a.o. met 1 ½ draai (540°) tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.205",
      description: "Met gezicht naar binnen - stalder a.o. met vlucht en contrabeweging tot hang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.305",
      description: "Met gezicht naar binnen - stalder a.o. met hecht tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.405",
      description: "Met gezicht naar buiten aan de LL -  stalder a.o. door handstand met vlucht tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.505",
      description: "Stalder a.o. door handstand met ½ draai in vlucht tot strekhang aan de HL",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.106",
      description: "Ruglingse streksteun  - gehoekte zitdraai v.o. tot ruglingse streksteun",
      difficulty: "A",
      value: "0.1",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.406",
      description: "Vrije hoekdraai v.o. tot handstand, ook met ½ draai (1 80º) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.506",
      description: "Vrije hoekdraai  v.o. met 1/1 draai (360º) tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.107",
      description: "Ruglingse streksteun - gehoekte zitdraai a.o. tot ruglingse streksteun",
      difficulty: "A",
      value: "0.1",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.407",
      description: "Vrije hoekdraai a.o. tot handstand, ook met ½ draai (180º)  tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.507",
      description: "Vrije hoekdraai a.o. met 1/1 draai (360º)  tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.208",
      description: "Vrije hoekdraai a.o. aan de LL met contrabeweging en vlucht tot strekhang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.308",
      description: "Vrije hoekdraai a.o. aan de LL met hecht vlucht tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.508",
      description: "Vrije hoekdraai a.o. tot handstand met vlucht tot strekhang aan de HL, ook met  ½ draai (180°)    Vrije hoekdraai a.o. met gespreide contravlucht (open heupen voor de vlucht)  over de HL tot strekhang",
      difficulty: "E",
      value: "0.5",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "4.608",
      description: "Vrije hoekdraai a.o. met gehoekte contravlucht (open heupen voor de vlucht)  over de HL tot strekhang",
      difficulty: "F",
      value: "0.6",
      group: "4",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "stalderdraaien"
      }
    },
    {
      number: "5.101",
      description: "Ruglingse streksteun op de lage ligger of hoge ligger - gehoekte zitdraai v.o. met uitspreiden tot hang aan dezelfde ligger",
      difficulty: "A",
      value: "0.1",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.301",
      description: "Streksteun ruglings op de HL aan de buitenzijde - draai a.o. tot vouwhangzwaai of gehoekte  zitdraai v.o. - uitspreiden met vluchtfase over de LL tot zweefhang    Idem streksteun ruglings op de LL aan de buitenzijde – gehoekte zitdraai v.o. met uitspreiden  en greepwissel tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.501",
      description: "Ruglingse streksteun op de HL - gehoekte zitdraai v.o. door vrije uitgestrekte steun (in ellegreep) in de handstandfase (Adler), ook met ½ draai (180°)",
      difficulty: "E",
      value: "0.5",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.202",
      description: "Ruglingse streksteun op de HL aan de binnenzijde - gehoekte zitdraai a.o. met  greepwissel tot zweef -hang aan de LL",
      difficulty: "B",
      value: "0.2",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.302",
      description: "Vrije ruglingse h oeksteun op de HL (benen gesloten) - volledige draai a.o. tot in vrije ruglingse steun op de HL (Steinemann -draai)",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.402",
      description: "Vrije ruglingse hoeksteun op de HL (benen gesloten)  -volledige draai a.o. aan de HL - doorgaan door vrije ruglingse hoeksteun ao over de HL tot strekhang aan de HL   Vanuit handstand vrije hoekdraai a.o. tot In vrije ruglingse hoeksteun",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.502",
      description: "Vrije ruglingse hoeksteun op de HL (benen gesloten)  -draai a.o. aan de HL - doorga an tot salto a.o. gestrekt (of gehoekt) tussen de liggers tot vrije streksteun op de LL  -draai a.o. aan de HL - ½ draai (180°) met vluchtfase tot handstand op de LL",
      difficulty: "E",
      value: "0.5",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.303",
      description: "Vrije ruglingse hoeksteun (benen gesloten) op de HL - volledige draai a.o. met terughoeken achterwaarts tot strekhang aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.403",
      description: "Vrije ruglingse hoeksteun (benen gesloten) op de HL - volledige draai a.o. met contra -vluchtfase achterwaarts gespreid tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.104",
      description: "Disloqueren (Schleudern) uit vouwhangzwaai a.o. aan de HL tot strekhang aan de HL",
      difficulty: "A",
      value: "0.1",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.304",
      description: "Schleudern tot bijna handstand met omspringen tot in bovengreep aan de HL",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.404",
      description: "Vouwhangzwaai a.o. aan de HL - disloqueren met vluchtfase tot handstand op de LL ,  ook vanuit doorsteken",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.105",
      description: "Zolendraai v.o. (gehoekt of gespreid)",
      difficulty: "A",
      value: "0.1",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.305",
      description: "Gehoekte zolendraai v.o. tot handstand, ook met ½ draai (180°)  tot handstand",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.405",
      description: "Gehoekte zolendraai v.o. met 1/1 draai (360°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.106",
      description: "Zolendraai v.o. in ellegreep (gehoekt of gespreid)",
      difficulty: "A",
      value: "0.1",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.306",
      description: "Gehoekte zolendraai v.o. tot handstand in ellegreep, ook met ½ draai (180 )",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.406",
      description: "Gehoekte zolendraai v.o in ellegreep met 1/1 draai (360 ) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: null
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.207",
      description: "Onderzwaai aan de LL (met steun van de voeten) met contravlucht voorwaarts tot strekhang aan de HL",
      difficulty: "B",
      value: "0.2",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.307",
      description: "Onderzwaai aan de HL of  LL met  1½ draai (540°) tot strek - of zweefhang",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.607",
      description: "Met gezicht naar buiten - onderzwaai aan de HL met voeten op de ligger  - contra -salto v.o. met gespreide benen tot strekhang aan de HL in ondergreep",
      difficulty: "F",
      value: "0.6",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "voorover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.108",
      description: "Gehoekte zolendraai a.o. (gehoekt of gespreid)",
      difficulty: "A",
      value: "0.1",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.308",
      description: "Gehoekte zolendraai a.o. tot handstand, ook met greepwissel tot ondergreep, ook met ½ draai (180 )",
      difficulty: "C",
      value: "0.3",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.408",
      description: "Gehoekte zolendraai a.o. met 1/1  draai (360°) tot handstand",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.508",
      description: "Gehoekte zolendraai a.o. met 1½ draai (540°) tot handstand",
      difficulty: "E",
      value: "0.5",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 540,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.409",
      description: "Streksteun voorlings aan  de binnenzijde van de LL - gehoekte zolendraai a.o. door handstand met vlucht tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.509",
      description: "Met gezicht naar buiten – gehoekte zolendraai a.o. aan de LL door handstand met vlucht en ½ draai (180º) of 1/1 draai (360°) tot hang aan de HL",
      difficulty: "E",
      value: "0.5",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 360,
        salto: {
          aantal: "enkel",
          vorm: "hoek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.410",
      description: "Gehoekte zolendraai a.o. met contraspreiden tot strekhang aan de HL",
      difficulty: "D",
      value: "0.4",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.510",
      description: "Gehoekte  zolendraai a .o. met gehoekte hecht over de HL tot strekhang aan de HL   Gehoekte  zolendraai a .o. met contraspreiden  - rugwaarts  over de HL met ½ draai (180º) tot strekhang  aan de HL in gemengde ellegreep",
      difficulty: "E",
      value: "0.5",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: null
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.610",
      description: "Gehoekte zolendraai a.o. met gestrekte contravlucht – rugwaarts  in gestrekte positie over de HL tot strekhang",
      difficulty: "F",
      value: "0.6",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "5.710",
      description: "Gehoekte zolendraai a.o. met gestrekte contravlucht – rugwaarts  in gestrekte positie over de HL met ½ draai (180º) tot strekhang in gemengde ellegreep      Brug – Groep 5 – 6 ",
      difficulty: "G",
      value: "0.7",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        salto: {
          aantal: "enkel",
          vorm: "strek",
          richting: "achterover"
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "6.101",
      description: "Vanaf HL - onderzwaai met ½ draai (180°) of 1/1 draai (360°)",
      difficulty: "A",
      value: "0.1",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.201",
      description: "Vanaf HL - onderzwaai met salto v.o. gehurkt of gehoekt",
      difficulty: "B",
      value: "0.2",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.301",
      description: "Vanaf HL - onderzwaai  - salto v.o. gehurkt of gehoekt met ½ (180º) of 1/1 draai (360°)",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.401",
      description: "Vanaf HL - onderzwaai  - salto v.o. gehurkt met 1½  draai (540°)    Onderzwaai – gestrekte salto v.o. met ½ draai (180°)",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.102",
      description: "Vanaf HL – vrije onderzwaai met ½ draai (180°) of 1/1 draai (360°)",
      difficulty: "A",
      value: "0.1",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.302",
      description: "Vanaf HL - vrije onderzwaai met salto v.o. gehurkt of gehoekt, ook met ½ draai (180°)    Vrije spreiddraai v.o. m et salto v .o. gehurkt , ook met ½ draai (180°)",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.402",
      description: "Vanaf HL  - vrije onderzwaai met salto v .o. gehurkt met 1/1 draai (360°)    Vrije gehoekte draai a.o. gevolgd door salto v.o. gestrekt met ½ draai (180º)   Vanaf HL -  vrije spreiddraai met salto v.o. gehurkt met 1/1 draai (360°)",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.502",
      description: "Vanaf HL – vrije onderzwaai  met salto v.o. gehurkt met 1½ draai (540°)",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.303",
      description: "Vanaf HL onderzwaai met ½ draai (180°) of vrije onderzwaai met ½ draai (180°) gevolgd door salto a.o. gehurkt of gehoekt.",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.403",
      description: "Vanaf HL - onderzwaai met ½ draai (180°) gevolgd door salto a.o. gestrekt    Vanaf HL - vrije onderzwaai met ½ draai (180 °) gevolgd door  salto a.o. gestrekt   Vanaf HL - onderzwaai met ½ draai (180°)  gevolgd door  salto a.o. gehurkt met 1/1 draai (360°)",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.104",
      description: "Voorzwaai - salto a.o. gehurkt, gehoekt of gestrekt",
      difficulty: "A",
      value: "0.1",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.204",
      description: "Voorzwaai - salto a.o. gehurkt of gestrekt met ½ draai (180°) of met  1/1 draai (360°)",
      difficulty: "B",
      value: "0.2",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.304",
      description: "Voorzwaai - salto a.o. gestrekt met 1½ draai (540°) of 2/1 dr aai (720°)",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.404",
      description: "Voorzwaai - salto a.o. gestrekt met 2½ draai (900º)",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.504",
      description: "Voorzwaai – salto a.o. gestrekt met 3/1 draai (1080°)",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.205",
      description: "Voorzwaai - dubbele salto a.o. gehurkt",
      difficulty: "B",
      value: "0.2",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.305",
      description: "Voorzwaai - dubbele salto a.o. gehoekt",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.405",
      description: "Voorzwaai - dubbele salto a.o. gehurkt  of gehoekt  met 1/1 draai (360°) in de eerste salto of in de tweede salto",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.505",
      description: "Voorzwaai – dubbele salto a.o. gehurkt met 1 ½ draai (540°)",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.605",
      description: "Voorzwaai – dubbele  salto a.o. gehurkt met 2/1 draai  (720°)",
      difficulty: "F",
      value: "0.6",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.406",
      description: "Voorzwaai dubbele salto a.o. gestrekt",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.506",
      description: "Voorzwaai  dubbele salto a.o. gestrekt met 1/1 draai (360°) in de eerste of tweede salto",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.706",
      description: "Voorzwaai dubbele salto a.o. gestrekt met 2/1 draai (720°)     Brug – Groep 6 - 4 ",
      difficulty: "G",
      value: "0.7",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.407",
      description: "Voorzwaai - salto a.o. gehurkt met ½ draai (180°) doorgaand in salto v.o. gehurkt     Voorzwaai met ½ draai (180°) – dubbele salto v.o. gehurkt.",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.507",
      description: "Voorzwaai - salto a.o. gestrekt met ½ draai (180º) doorgaand in salto v.o. gestrekt     Voorzwaai met ½ draai (180º) –dubbele salto v.o. gehoekt",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.707",
      description: "Voorzwaai drievoudige salto a.o. gehurkt",
      difficulty: "G",
      value: "0.7",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.108",
      description: "Achterzwaai - salto v.o. gehurkt, gehoekt of gestrekt of vrije spreiddraai v.o. gevolgd door salto v.o. gehurkt",
      difficulty: "A",
      value: "0.1",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.208",
      description: "Achterzwaai - salto v.o. gehurkt of gestrekt met ½ (180°) of 1/1 (360°) draai",
      difficulty: "B",
      value: "0.2",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.308",
      description: "Achterzwaai  - salto v.o. gestrekt  met 1½ draai (540° ) of met 2/1 draai (720º)     Vanuit ellegreep, zwaai a.o. ½ draai (180°) dubbele salto a.o. gehurkt.",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.408",
      description: "Achterzwaai - dubbele salto v.o.  gehurkt",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.508",
      description: "Achterzwaai - dubbele salto v.o. gehurkt met ½ draai (180°) - ook salto v.o. met ½ draai (180°) overgaand in salto a.o. gehurkt.",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.608",
      description: "Achterzwaai – dubbele salto v.o. gehoekt met ½ draai (180º)",
      difficulty: "F",
      value: "0.6",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.209",
      description: "Heupdraai a.o. aan de LL of HL – afhechten, ook vanuit vrije heupdraai a.o.",
      difficulty: "B",
      value: "0.2",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.309",
      description: "Heupdraai a.o. (ook vrij) aan de LL of HL – afhechten met  1/1 draai (360º)",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.409",
      description: "Heupdraai a.o. (ook vrij) aan de LL of HL – afhechten met salto a.o. gehurkt",
      difficulty: "D",
      value: "0.4",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.509",
      description: "Heupdraai a.o. (ook vrij) aan de LL of HL – afhechten met ½  draai (180°) – salto v.o.",
      difficulty: "E",
      value: "0.5",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.609",
      description: "Heupdraai a.o. (ook vrij) aan de LL  of HL – afhechten met salto a.o. met 1/1 draai (360°)",
      difficulty: "F",
      value: "0.6",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.210",
      description: "Streksteun borstlings op de HL  - achterzwaai  - salto v.o. gehurkt",
      difficulty: "B",
      value: "0.2",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.310",
      description: "Streksteun borstlings op de HL - achterzwaai - salto v.o. gehoekt of salto a.o. gehurkt of gehoekt",
      difficulty: "C",
      value: "0.3",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "1.000",
      description: "– OPSPRONGEN       Brug – TA - Groep 1 - 1",
      difficulty: "TA",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.001",
      description: "Borstwaartsomtrekken, afzet 1 of 2 benen",
      difficulty: "TA",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.002",
      description: "Opspringen tot steun  Geldt alleen voor supplement 6 & 7",
      difficulty: "TA",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.007",
      description: "Vanuit aanloop en afzet met 2 benen heupdraai  voorover",
      difficulty: "TA",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "1.010",
      description: "Opspr ingen tot vrije steun en heup draai achterover",
      difficulty: "TA",
      value: "0.1",
      group: "1",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "opsprongen"
      }
    },
    {
      number: "2.001",
      description: "Achteropzwaai horizontaal  - Geldt voor supplement E, F, G, H en supplement 3 t/m 7  als MW - Geldt voor supplement D niet als MW",
      difficulty: "TA",
      value: "0.1",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "2.005",
      description: "Vrije heupdraai achterover",
      difficulty: "TA",
      value: "0.1",
      group: "2",
      type: "acrobatic",
      breakdown: {
        draai: null,
        beenspreiding: null,
        group: "achteropzwaaien en vrije heupdraaien"
      }
    },
    {
      number: "3.001",
      description: "1x kurbet; in stille hang overstrekte kurbethouding (hol) (1 sec.) gevolgd door gesloten kurbethouding (bol) (1 sec.)   Geldt alleen voor supplement 3 t/m 7",
      difficulty: "TA",
      value: "0.1",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.002",
      description: "Strekhangzwaai (voorzwaai achterzwaai)   Geldt alléén voor supplement F,  G en H  en supplement 3 t/m 7  als MW",
      difficulty: "TA",
      value: "0.1",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.003",
      description: "Neerzwaai tussen de liggers, voorzwaai met ½ draai (180°) op hoge ligger hoogte (horizontaal)",
      difficulty: "TA",
      value: "0.1",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.004",
      description: "Voorzwaai borstwaartsom (driekwartreus)",
      difficulty: "TA",
      value: "0.1",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.005",
      description: "Zweefhangzwaai aan de lage ligger met ½ draai (180°) om de lengte as",
      difficulty: "TA",
      value: "0.1",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: 180,
        group: "reuzendraaien"
      }
    },
    {
      number: "3.006",
      description: "Vanuit stille hang optrekken tot buighang met kin boven ligger  (1 sec.), terug tot hang  Geldt alleen voor supplement 3 t/m 7      ",
      difficulty: "TA",
      value: "0.1",
      group: "3",
      type: "acrobatic",
      breakdown: {
        draai: null,
        group: "reuzendraaien"
      }
    },
    {
      number: "5.008",
      description: "Ophurken (met liggerwissel)",
      difficulty: "TA",
      value: "0.1",
      group: "5",
      type: "acrobatic",
      breakdown: {
        draai: null,
        salto: {
          aantal: "enkel",
          vorm: "hurk",
          richting: null
        },
        group: "gehoekte draaien"
      }
    },
    {
      number: "6.001",
      description: "Vanuit streksteun op de ligger - (tegenspreiden) ondersprong af tot stand",
      difficulty: "TA",
      value: "0.1",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    },
    {
      number: "6.002",
      description: "Vanuit streksteun voorover duikelen tot hoekhang (3 sec.) en komen tot stand  Geldt alleen voor supplement 3 t/m 7",
      difficulty: "TA",
      value: "0.1",
      group: "6",
      type: "acrobatic",
      breakdown: {
        group: "afsprongen"
      }
    }
  ],
  beam,
  floor
};
const css = {
  code: "@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';.apparatus_picker.svelte-gdiakp.svelte-gdiakp.svelte-gdiakp{display:grid;gap:10px;grid-template-columns:repeat(auto-fit, minmax(0, 10rem));text-align:center}.apparatus_picker.svelte-gdiakp input.svelte-gdiakp.svelte-gdiakp{display:none}.apparatus_picker.svelte-gdiakp label.svelte-gdiakp.svelte-gdiakp{display:flex;flex-direction:column;align-items:center;gap:0.2em;padding:0.2em;border-radius:100px;font-size:1.6rem}.apparatus_picker.svelte-gdiakp label.svelte-gdiakp.svelte-gdiakp:hover{background-color:var(--color-base-secondary)}.apparatus_picker.svelte-gdiakp label p.svelte-gdiakp.svelte-gdiakp{font-size:1rem;margin:0}.apparatus_picker.svelte-gdiakp input.svelte-gdiakp:checked+label.svelte-gdiakp{font-weight:bold}",
  map: null
};
const c_num = "#";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  const columns = [
    { name: c_num, id: "number" },
    {
      name: element_table_header_description(),
      id: "description"
    },
    {
      name: element_table_header_value(),
      id: "value"
    },
    {
      name: element_table_header_difficulty(),
      id: "difficulty"
    }
  ];
  let selected_apparatus = "vault";
  const apparatus = [
    {
      name: apparatus_vault(),
      icon: "mdi:magnify-scan",
      id: "vault"
    },
    {
      name: apparatus_beam(),
      icon: "mdi:magnify-scan",
      id: "beam"
    },
    {
      name: apparatus_uneven_bars(),
      icon: "mdi:magnify-scan",
      id: "uneven bars"
    },
    {
      name: apparatus_floor(),
      icon: "mdi:magnify-scan",
      id: "floor"
    }
  ];
  if ($$props.apparatus === void 0 && $$bindings.apparatus && apparatus !== void 0)
    $$bindings.apparatus(apparatus);
  $$result.css.add(css);
  data = json[selected_apparatus];
  return ` <h1>${escape(page_elements_title())}</h1> <div class="apparatus_picker svelte-gdiakp">${each(apparatus, (ap) => {
    return `<input type="radio"${add_attribute("id", ap.id, 0)} name="apparatus"${add_attribute("value", ap.id, 0)} class="svelte-gdiakp"${ap.id === selected_apparatus ? add_attribute("checked", true, 1) : ""}> <label${add_attribute("for", ap.id, 0)} class="svelte-gdiakp">${validate_component(Icon, "Icon").$$render($$result, { icon: ap.icon }, {}, {})} <p class="svelte-gdiakp">${escape(ap.name)}</p></label>`;
  })}</div> ${validate_component(Gridjs, "Grid").$$render($$result, { data, columns, search: true, sort: true }, {}, {})} <p>${escape(lorem_ipsum())} </p>`;
});
export {
  Page as default
};
