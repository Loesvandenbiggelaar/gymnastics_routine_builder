<script lang="ts">
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { languageDetails, userSettings } from '$lib/stores/userSettings';

	// Configure Drawer
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	function closeNavDrawer() {
		drawerStore.close();
	}

	// Import Icons
	import Icon, { iconExists } from '@iconify/svelte';

	// List for the links and their names
	import { routes } from '$lib/modules/routesConfig';
	import Filter from './core/Filter.svelte';
	import { availableLanguages } from '$lib/data/elements/all_elements';
	const navRoutes = routes.filter((route) => route.display);
	// Background for active links
	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-filled-primary' : '';

	function setLang(lang?: string) {
		$userSettings.setLanguage(lang);
	}
</script>

<div class="wrapper p-2 h-full flex flex-col">
	<div class="topbar flex justify-between items-center">
		<button class="btn variant-filled-secondary aspect-square p-2" on:click={closeNavDrawer}>
			<Icon icon="mdi:menu-open" />
		</button>
		<h1 class="display-text">Gymnastics Companion</h1>
	</div>
	<hr class="divider" />
	<nav class="list-nav">
		{#each navRoutes as link}
			<a
				href={link.href}
				class="flex justify-between {classesActive(link.href)}"
				on:click={closeNavDrawer}
			>
				<span>{link.name}</span>
				<Icon icon={link.icon} />
			</a>
		{/each}
	</nav>
	<!-- FOOTER -->
	<div class="mt-auto" id="footer">
		<hr class="divider" />
		<div class="flex items-center">
			<LightSwitch />
			<Filter popup={{ placement: 'top' }}>
				<svelte:fragment slot="name">
					<Icon icon="mdi:language" />
					Language: {$userSettings.language}
				</svelte:fragment>
				<svelte:fragment slot="popup">
					<div class="flex flex-col w-full">
						{#each availableLanguages as lang}
							<button
								on:click={() => setLang(lang)}
								class=" w-full rounded p-1 flex justify-start hover:variant-filled-primary"
								>{languageDetails[lang].localName}</button
							>
						{/each}
					</div>
				</svelte:fragment>
			</Filter>
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
