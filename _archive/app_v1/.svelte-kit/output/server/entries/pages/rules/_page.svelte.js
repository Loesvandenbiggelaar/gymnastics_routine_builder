import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { d as page_rules_title } from "../../../chunks/messages.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(page_rules_title())}</h1>`;
});
export {
  Page as default
};
