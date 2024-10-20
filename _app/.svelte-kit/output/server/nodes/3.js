

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.YxfOSC68.js","_app/immutable/chunks/scheduler.DgPKzs1S.js","_app/immutable/chunks/index.ov_8WpOY.js"];
export const stylesheets = [];
export const fonts = [];
