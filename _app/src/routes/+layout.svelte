<script lang="ts">
	import '../app.postcss';

	// Initialise Skeleton Utilities (singletons)
	import { initializeStores, Drawer, Modal } from '@skeletonlabs/skeleton';
	initializeStores();

	// Set Dark mode automatically
	import { autoModeWatcher } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { LightSwitch, storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Import components
	import Navigation from '$lib/components/navigation.svelte';
	import DrawerNav from '$lib/components/drawer_nav.svelte';
	import Icon from '@iconify/svelte';
</script>

<!-- Set Dark Mode -->
<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<!-- Init Modals -->
<Modal />

<Navigation />
<Drawer>
	<DrawerNav />
</Drawer>
<main>
	<slot />
</main>
