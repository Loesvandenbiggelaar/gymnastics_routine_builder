export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon-gymnast.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B-50mUAE.js","app":"_app/immutable/entry/app.C39ZJNHQ.js","imports":["_app/immutable/entry/start.B-50mUAE.js","_app/immutable/chunks/entry.B7als70s.js","_app/immutable/chunks/scheduler.BL8a4QiN.js","_app/immutable/entry/app.C39ZJNHQ.js","_app/immutable/chunks/i18n.Cdn46ozT.js","_app/immutable/chunks/index.eGLuqOHO.js","_app/immutable/chunks/scheduler.BL8a4QiN.js","_app/immutable/chunks/entry.B7als70s.js","_app/immutable/chunks/stores.D6y23ITh.js","_app/immutable/chunks/runtime.BL1wTWAh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/elements",
				pattern: /^\/elements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/routine_builder",
				pattern: /^\/routine_builder\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
