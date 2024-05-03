

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rules/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.D7RZ-sG1.js","_app/immutable/chunks/scheduler.BL8a4QiN.js","_app/immutable/chunks/index.eGLuqOHO.js","_app/immutable/chunks/messages.JhQyOqEq.js","_app/immutable/chunks/runtime.BL1wTWAh.js"];
export const stylesheets = [];
export const fonts = [];
