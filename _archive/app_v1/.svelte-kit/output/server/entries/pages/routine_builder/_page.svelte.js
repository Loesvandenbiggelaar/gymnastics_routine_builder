import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { c as page_routinebuilder_title } from "../../../chunks/messages.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(page_routinebuilder_title())}</h1>`;
});
export {
  Page as default
};
