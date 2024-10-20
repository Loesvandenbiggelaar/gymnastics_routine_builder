import * as universal_hooks from '../../../src/hooks.js';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/elements": [3],
		"/routine_builder": [4],
		"/rules": [5],
		"/testpage": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: universal_hooks.reroute || (() => {})
};

export { default as root } from '../root.svelte';