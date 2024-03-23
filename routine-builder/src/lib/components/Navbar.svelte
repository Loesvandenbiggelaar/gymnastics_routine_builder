<script>
	// Components //
	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	// ---
	// Language Support
	import * as m from '$paraglide/messages.js';
	import {
		languageTag,
		setLanguageTag,
		availableLanguageTags,
		onSetLanguageTag
	} from '$paraglide/runtime.js';

	// Language url redirects
	// Import redirects
	import { goto } from '$app/navigation';
	function langRedirect(lang) {
		setLanguageTag(lang);
		goto(`/${lang}${current_path}`);
	}
	// ---
	//Routing variables
	export const routes = [
		{ name: m.page_elements_title(), path: '/elements', icon: 'mdi:magnify-scan' },
		{
			name: m.page_routinebuilder_title(),
			path: '/routine_builder',
			icon: 'material-symbols:sports-gymnastics'
		},
		{ name: m.page_rules_title(), path: '/rules', icon: 'material-symbols:book-4' }
	];

	// Import to check routing URL
	import { page } from '$app/stores';

	// Set currentPath to see if the link is active and for redirecting with lang support
	$: current_path = $page.route.id || 'null';

	// Title of current page
	$: title = m.header_title() || 'title';

	//Set title for tabs (somehow it only works with a function?)
	$: current_path_name = routes.find((route) => route.path === current_path)?.name;
	function set_tab_title(title, path) {
		return path === undefined ? title : [m.title_shorthand(), current_path_name].join(' - ');
	}
	$: tab_title = set_tab_title(title, current_path_name);
</script>

<title>{tab_title}</title>
<header id="navbar">
	<!-- Main Logo -->
	<a href="/" id="header_logo">{title}</a>
	<!-- Available Routes -->
	<nav>
		{#each routes as route}
			<a
				class="page_nav underline_animation"
				href={route.path}
				class:active={current_path == route.path}
			>
				<Icon icon={route.icon} />
				{route.name}
			</a>
		{/each}
	</nav>
	<!-- Setting and Language Selector -->
	<button id="language_selector" role="button" class="underline_animation">
		<p class="lang_tag">{m.lang()}</p>
		<Icon icon="material-symbols:language" />
		<div id="language_dropdown">
			{#each availableLanguageTags as language}
				<button value={language} tabindex="0" on:click={() => langRedirect(language)}>
					<!-- {#if language == languageTag()}<p>✅</p>{/if} -->
					{m.lang_full({}, { languageTag: language })}
					<Icon icon={m.lang_icon({}, { languageTag: language })} />
				</button>
			{/each}
		</div>
	</button>
</header>

<!-- STYLES -->
<style>
	#navbar {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
		align-items: center;

		/* Sticky Header */
		position: sticky;
		top: 0;

		background: var(--color-accent-gradient);
		padding: 10px var(--page-margin-side);
	}

	#header_logo {
		text-transform: lowercase;
		text-decoration: none;
		color: var(--color-attention);
	}

	nav {
		justify-self: flex-end;
		display: flex;
		gap: 18px;
		font-family: Kode Mono;
	}

	nav a {
		/* Aligning the icons */
		display: flex;
		align-items: center;
		gap: 0.2em;

		/* Positioning */
		position: relative;
		padding: 0.3em;

		/* text style */
		font-size: 1.2em;
		font-weight: 300;
		text-transform: lowercase;
		text-decoration: none;
		color: inherit;
	}

	nav a.active {
		font-weight: bold;
	}

	.underline_animation::after {
		content: '';
		position: absolute;
		height: 2px;
		bottom: 0;
		left: 0;
		width: 0px;
		background-color: var(--color-text);
		transition: width 0.25s ease;
	}

	.underline_animation.active::after,
	.underline_animation:hover::after,
	.underline_animation:focus::after,
	.underline_animation:focus-within::after {
		width: 100%;
	}

	#language_selector {
		all: unset;
		position: relative;
		/* Aligning the icons */
		display: flex;
		align-items: center;
		gap: 0.2em;
		min-height: 2em;

		/* Hover */
		cursor: pointer;
	}

	#language_selector p {
		margin: 0px;
	}

	#language_dropdown {
		/* Hide underneath selector */
		z-index: 1;
		position: absolute;
		right: 0;
		top: 100%;
		opacity: 0;
		visibility: collapse;
		/* Transition show/hide */
		transform: all 0.2 ease;
		/* Style */
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	#language_selector:focus-within #language_dropdown {
		visibility: visible;
		animation: dropdown 0.2s ease forwards;
	}

	@keyframes dropdown {
		from {
			right: -100px;
			opacity: 0;
		}
		to {
			right: 0;
			opacity: 1;
		}
	}

	#language_dropdown button {
		width: 100%;
		text-align: left;
		/* Color and style */
		font-family: Poppins, arial, sans-serif;
		border: none;
		background-color: var(--color-base-secondary);
		/* Animate */
		transition: all 0.2s ease;
		/* Aligning */
		display: flex;
		align-items: center;
		justify-content: end;
		flex-wrap: nowrap;
		gap: 0.5em;
	}

	#language_dropdown button:first-child {
		border-radius: 0.7em 0.7em 0px 0px;
	}

	#language_dropdown button:last-child {
		border-radius: 0px 0px 0.7em 0.7em;
	}

	#language_dropdown button:hover,
	#language_dropdown button:focus {
		transform: scale(1.3);
		border-radius: 100px;
		font-weight: bold;
	}
</style>
