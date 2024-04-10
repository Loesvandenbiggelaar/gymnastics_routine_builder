import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

//languages
register('en', () => import('./locales/en.json'));
register('nl', () => import('./locales/nl.json'));

init({
	fallbackLocale: 'nl',
	initialLocale: getLocaleFromNavigator()
});
