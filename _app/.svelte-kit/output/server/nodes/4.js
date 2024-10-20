

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/builder/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CELtALGP.js","_app/immutable/chunks/scheduler.DgPKzs1S.js","_app/immutable/chunks/index.ov_8WpOY.js"];
export const stylesheets = [];
export const fonts = [];
