<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton';

	// Configure Drawer
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	import { navDrawer } from '$lib/modules/drawerSettings';
	function openNavDrawer() {
		drawerStore.open(navDrawer);
	}

	// Import Icons
	import Icon from '@iconify/svelte';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<button on:click={openNavDrawer} class="btn variant-filled-primary aspect-square p-3">
			<Icon icon="mdi:menu" class="cursor-pointer" />
		</button>
	</svelte:fragment>
	<h1 class="display-text">Gymnastics Companion</h1>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<style>
	.display-text {
		font-size: 2rem;
	}
</style>
