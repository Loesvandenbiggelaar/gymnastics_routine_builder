<script lang="ts">
	import { filterValues, data } from '$lib/stores/datastore';
	export let placeholder = 'Search Elements...';
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	export let popupSettings: PopupSettings = {
		event: 'click',
		target: 'search-popup',
		placement: 'bottom'
	};

	import Icon from '@iconify/svelte';

	let value = '';
	let searchProperties = $data.filterList.searchProperties || ['id', 'description', 'value'];

	// MULTIPLE SEARCH PROPERTIES
	//
	const searchTagList = ['foo', 'bar', 'baz', 'chipmunk', 'quux'];

	//
	//

	// Icon and default settings
	let searchProperties_defaulted = (searchProperties = ['id', 'description', 'value']);
	$: icon = searchProperties_defaulted ? 'mdi:tune-vertical-variant' : 'mdi:filter';

	// Props list
	let propsList: Record<keyof (typeof $data.elementData)[0] | string, boolean> = Object.keys(
		$data.elementData[0]
	).reduce(
		(acc, key) => {
			acc[key as keyof (typeof $data.elementData)[0]] = searchProperties.includes(key);
			return acc;
		},
		{} as Record<keyof (typeof $data.elementData)[0], boolean>
	);

	// Searchbox settings
	$: value, ($data.filterList.search = value);
	$: propsList, setSearchProperties();

	function setSearchProperties() {
		const trueKeys = Object.keys(propsList).filter(
			(key) => propsList[key as keyof (typeof $data.elementData)[0]]
		);
		$data.setSearchProperties(trueKeys);
	}

	function clearSearch() {
		value = '';
	}

	function searchKeydown(e: KeyboardEvent) {
		if (e.key === 'Delete') {
			return clearSearch();
		}
		if (e.key === 'Enter') {
			$data.filterList.searchList = [...$data.filterList.searchList, value] as string[];
			clearSearch();
			return;
		}
	}

	// Call $data.search when value is changed
	// But only AFTER $data is loaded
</script>

<div id="search" class="w-fit relative">
	<div id="searchBar">
		<input
			id="searchInput"
			type="text"
			bind:value
			{placeholder}
			class="input input-bordered w-full"
			on:keydown={searchKeydown}
		/>
		<div id="searchBarButtons">
			{#if value !== ''}
				<button id="clearSearch" class="btn hover:variant-ghost-surface" on:click={clearSearch}>
					<Icon icon="mdi:close" />
				</button>
			{:else}
				<button on:click={() => document.getElementById('searchInput')?.focus()}>
					<Icon icon="mdi:magnify" />
				</button>
			{/if}
		</div>
	</div>
	<button
		id="searchFilter"
		class="btn"
		class:inactive={searchProperties_defaulted}
		use:popup={popupSettings}
	>
		<Icon {icon} />
	</button>
</div>

<div id="searchPopup" class="card p-2 z-10" data-popup={popupSettings.target}>
	{#each Object.keys(propsList) as key}
		<label for={key}>
			<input
				type="checkbox"
				class="checkbox checkbox-primary mr-1"
				name={key}
				bind:checked={propsList[key]}
				id={key}
			/>
			<span>{key}</span>
		</label>
	{/each}
</div>

<style>
	#search {
		display: flex;
	}

	#searchBar {
		position: relative;
	}

	#searchBarButtons {
		position: absolute;
		align-items: center;
		right: 0.6em;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1em;
	}

	#searchBarButtons button {
		padding: 0.3em;
	}

	.inactive:not(:hover) {
		opacity: 0.5;
	}

	#searchFilter {
		padding: 0.3em;
		aspect-ratio: 1;
	}
</style>
