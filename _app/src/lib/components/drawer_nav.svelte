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
	import Icon from '@iconify/svelte';
</script>

<nav class="list-nav">
	<div class="topbar">
		<button class="btn variant-filled-primary aspect-square p-3" on:click={closeNavDrawer}>
			<Icon icon="mdi:menu-open" />
		</button>
	</div>
	<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
	<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
	<a href="/builder" class:active={$page.url.pathname === '/builder'}>Builder</a>
</nav>

<LightSwitch />
