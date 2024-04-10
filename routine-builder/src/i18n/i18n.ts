// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/nl.json'));

init({
	fallbackLocale: defaultLocale,
	blaah
	initialLocale: browser ? window.navigator.language : defaultLocale
});
