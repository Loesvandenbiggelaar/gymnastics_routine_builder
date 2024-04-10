<!-- SCRIPT -->
<script>
	// Animation
	import { fly } from 'svelte/transition';
	// Import Global Styles
	import '$lib/global.css';

	//COMPONENTS
	import Navbar from '$lib/components/Navbar.svelte';

	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	// Scrollbar
	import { Svrollbar } from 'svrollbar';

	// Import to check routing URL
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

	// Set currentPath to see if the link is active and for redirecting with lang support
	$: current_path = $page.route.id || 'null';

	// Translations vis Inlang/Paraglide //
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n';
	import * as m from '$paraglide/messages.js';
	import {
		languageTag,
		setLanguageTag,
		availableLanguageTags,
		onSetLanguageTag
	} from '$paraglide/runtime.js';

	// Current Language
	$: current_lang = languageTag() || 'en';

	// Import redirects
	import { goto } from '$app/navigation';
	function langRedirect(lang) {
		setLanguageTag(lang);
		goto(`/${lang}${current_path}`);
	}

	//Routing variables
	const routes = [
		{ name: m.header_elements(), path: '/elements', icon: 'mdi:magnify-scan' },
		{
			name: 'Routine Builder',
			path: '/routine_builder',
			icon: 'material-symbols:sports-gymnastics'
		},
		{ name: 'Rules', path: '/rules', icon: 'material-symbols:book-4' }
	];

	// Title of current page
	$: title = m.header_title() || 'title';

	//Set title for tabs (somehow it only works with a function?)
	$: current_path_name = routes.find((route) => route.path === current_path)?.name;

	function set_tab_title(title, path) {
		return path === undefined ? title : ['GB', current_path_name].join(' - ');
	}

	$: tab_title = set_tab_title(title, current_path_name);
</script>

<!-- HEADER COMPONENT -->
<ParaglideJS {i18n}>
	<Navbar />
	<Svrollbar />
	<main>
		<slot />
	</main>
</ParaglideJS>

<style>
	svg {
		fill: orange !important;
	}
</style>
