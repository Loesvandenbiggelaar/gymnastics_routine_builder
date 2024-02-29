<!-- SCRIPT -->
<script>
	// Animation
	import { fly } from 'svelte/transition';
	// Import Global Styles
	import '$lib/global.css';

	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	// Scrollbar
	import { Svrollbar } from 'svrollbar';

	// Import to check routing URL
	import { page } from '$app/stores';
	const routes = [
		{ name: 'Elements', path: '/elements', icon: 'mdi:magnify-scan' },
		{
			name: 'Routine Builder',
			path: '/routine_builder',
			icon: 'material-symbols:sports-gymnastics'
		},
		{ name: 'Rules', path: '/rules', icon: 'material-symbols:book-4' }
	];
	// Set currentPath to see if the link is active
	$: current_path = $page.route.id;

	// Title of current page
	let title = 'Gymnastics Bible';

	//Set title for tabs (somehow it only works with a function?)
	$: current_path_name = routes.find((route) => route.path === current_path).name;

	function set_tab_title(title, path) {
		return path === undefined ? title : ['GB', current_path_name].join(' - ');
	}

	$: tab_title = set_tab_title(title, current_path_name);

	// Current Language
	$: current_lang = 'en';
</script>

<!-- HEADER COMPONENT -->
<title>{tab_title}</title>
<Svrollbar />
<header id="header">
	<a href="/" id="header_logo">{title}</a>
	<nav>
		{#each routes as route}
			<a class="page_nav" href={route.path} class:active={current_path == route.path}>
				<Icon icon={route.icon} />
				{route.name}
			</a>
		{/each}
	</nav>
	<nav id="language_selector">
		{current_lang}
		<Icon icon="material-symbols:language" />
	</nav>
</header>
<slot />

<!-- STYLES -->
<style>
	header {
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

	nav a::after {
		content: '';
		position: absolute;
		height: 2px;
		bottom: 0;
		left: 0;
		width: 0px;
		background-color: var(--color-text);
		transition: width 0.25s ease;
	}

	nav a.active::after,
	nav a:hover::after {
		width: 100%;
	}

	#language_selector {
		/* Aligning the icons */
		display: flex;
		align-items: center;
		gap: 0.2em;

		/* Hover */
		cursor: pointer;
	}
</style>
