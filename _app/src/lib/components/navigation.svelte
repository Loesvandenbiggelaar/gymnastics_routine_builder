<script lang="ts">
	// IMPROT STYLING
	import '$lib/themes/vars.css';
	//
	import { page } from '$app/stores';
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';

	// Configure Drawer
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	import { navDrawer } from '$lib/modules/drawerSettings';
	function openNavDrawer() {
		drawerStore.open(navDrawer);
	}

	// Import Iconify for icons
	import Icon from '@iconify/svelte';

	// Url and naming systems
	import { routes, type Route } from '$lib/modules/routesConfig';
	$: currentUrl = routes.find((route) => route.href === $page.url.pathname) ?? null;
</script>

<!-- <AppBar class="sticky top-0 z-10" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<button on:click={openNavDrawer} class="btn variant-filled-primary aspect-square p-3">
			<Icon icon="mdi:menu" class="cursor-pointer" />
		</button>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<h1 class="display-text">Gymnastics Companion</h1>
	</svelte:fragment>
</AppBar> -->

<div id="appbar" class="appbar sticky">
	<div id="menu">
		<button on:click={openNavDrawer} class="btn aspect-square p-1 menu-icon">
			<Icon icon="jam:menu" class="cursor-pointer menu-icon" />
		</button>
	</div>
	<div id="brand">
		<h1 class="display-text font-bold">Gymnastics Companion</h1>
		<small class="title-route" class:hidden={currentUrl === null || currentUrl?.title === ''}>
			<span class="display-text"
				>{currentUrl?.title.toLocaleLowerCase() || currentUrl?.name.toLocaleLowerCase()}</span
			>
		</small>
	</div>

	<div id="actions">
		<button id="avatar" class="user-avatar">
			<Avatar class="w-[1.5em]">
				<Icon icon="mdi:account" class="cursor-pointer" />
			</Avatar>
		</button>
	</div>
</div>

<style>
	:global(:root) {
		/* Light Mode */
		--bg-color: var(--color-surface-50);
	}

	:global(.dark) {
		/* Dark Mode */
		--bg-color: var(--color-surface-900);
	}

	.appbar {
		/* Sticky Header */
		position: sticky;
		z-index: 10;
		top: 0;

		/* Box Styling */
		padding: 0.8em;
		background-color: rgb(var(--bg-color));

		/* Item positioning */
		display: flex;
		gap: 1em;
		align-items: center;
		background: rgb(var(--bg-color));
		/* Sick fade out effect for overflowing text */
		--fadeout-gradient-mask: linear-gradient(to bottom, #000 85%, transparent);
		mask-image: var(--fadeout-gradient-mask);
		-moz-mask-image: var(--fadeout-gradient-mask);
		-webkit-mask-image: var(--fadeout-gradient-mask);
		-o-mask-image: var(--fadeout-gradient-mask);

		/* Item Styling */
		font-size: 1.5em;
	}

	.menu-icon {
		font-size: inherit;
	}

	.menu-icon:hover {
		background-color: rgb(var(--color-secondary-500));
		color: rgb(var(--on-secondary));
	}

	#brand {
		line-height: 1.3rem;
	}

	.title-route {
		font-size: 1rem;
		font-weight: 400;
		opacity: 0.7;
		/* Item positioning */
		margin-left: 0.5em;
		display: flex;
		align-items: end;
	}

	.title-route.hidden {
		display: none;
	}

	.route-icon {
		font-size: inherit;
	}

	#actions {
		/* Sizing */
		margin-left: auto;
		font-size: 1em;
		padding: 0.2em;
	}

	.user-avatar {
		transition: all 0.2s ease-in-out;
		/* Item Styling */
		border-radius: 9999px;
	}
	.user-avatar:hover {
		box-shadow: 2px 2px 10px 0 rgb(var(--color-primary-500));
	}
</style>
