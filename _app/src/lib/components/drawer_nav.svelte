<script lang="ts">
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	// Configure Drawer
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	function closeNavDrawer() {
		drawerStore.close();
	}

	// Import Icons
	import Icon, { iconExists } from '@iconify/svelte';

	// List for the links and their names
	const links = [
		{ name: 'Home', href: '/', icon: 'mdi:home' },
		{ name: 'About', href: '/about', icon: 'mdi:information-outline' },
		{ name: 'Builder', href: '/builder', icon: 'mdi:clipboard-list-outline' }
	];
	// Background for active links
	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-filled-primary' : '';
</script>

<div class="wrapper p-2 h-full flex flex-col">
	<div class="topbar flex justify-between items-center">
		<button class="btn variant-filled-primary aspect-square p-3" on:click={closeNavDrawer}>
			<Icon icon="mdi:menu-open" />
		</button>
		<h1 class="display-text">Gymnastics Companion</h1>
	</div>
	<hr class="divider" />
	<nav class="list-nav">
		{#each links as link}
			<a href={link.href} class="flex justify-between {classesActive(link.href)}">
				<span>{link.name}</span>
				<Icon icon={link.icon} />
			</a>
		{/each}
	</nav>
	<div class="mt-auto" id="footer">
		<hr class="divider" />
		<div class="flex items-center">
			<LightSwitch />
		</div>
		<div class="flex item-center gap-2 mt-2">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/Loesvandenbiggelaar/gymnastics_routine_builder"
				class="btn aspect-square p-2"
				style="background: #010409; color: white"
				data-sveltekit-preload-data="hover"
			>
				<Icon icon="mdi:github" />
			</a>
			<p class=" w-full text-right text-[0.6rem] display-text">version 1.0.0</p>
		</div>
	</div>
</div>

<style>
	.divider {
		margin: 0.5rem 0;
		border: thin solid;
		border-color: rgb(var(--on-surface-token)) !important;
		opacity: 0.5;
	}
</style>
