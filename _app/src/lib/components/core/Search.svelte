<script lang="ts">
	// Get css vars
	import '$lib/themes/vars.css';
	// Action and popups for filter
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
	const searchTagList = ['salto', 'yamashita', 'flik-flak', 'arabier', 'tsukahara'];
	$: searchTagList_filtered = searchTagList.filter((tag) => tag.includes(value));
	$: enableSearchDropdown = value.length > 0 && searchTagList_filtered.length > 0;

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

	// Check if search yields valid results
	$: validSearch = Array.isArray($data.filteredData) && $data.filteredData.length > 0;

	function searchKeydown(e: KeyboardEvent) {
		if (e.key === 'Delete') {
			return clearSearch();
		}
		if (e.key === 'Enter') {
			if (value.length <= 0) return;
			return addToFilterList(value);
		}
	}

	function addToFilterList(input: String) {
		$data.filterList.searchList = [...$data.filterList.searchList, input] as string[];
		clearSearch();
		$data.searchMultiple();
		return;
	}

	// Call $data.search when value is changed
	// But only AFTER $data is loaded
</script>

<!-- SEARCH BAR -->
<div id="search" class="w-fit relative">
	<div id="searchBar">
		<input
			id="searchInput"
			type="text"
			bind:value
			{placeholder}
			class="input w-full {validSearch ? 'validInput' : 'invalidInput'}"
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
		<!-- SEARCH OPTIONS DROPDOWN -->
		<div id="searchOptionsDropdown" class="card" class:active={enableSearchDropdown}>
			<!-- TODO add recent searches option -->
			{#each searchTagList_filtered as tag}
				<button class="btn variant-soft searchTag" on:click={() => addToFilterList(tag)}>
					<Icon icon="mdi:label-outline" />
					{tag}
				</button>
			{/each}
		</div>
	</div>

	<!-- SEARCH FILTER -->
	<button
		id="searchFilter"
		class="btn"
		class:inactive={searchProperties_defaulted}
		use:popup={popupSettings}
	>
		<Icon {icon} />
	</button>
</div>

<!-- SEARCH FILTER POPUP -->

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
		/* Place in front of dropdown */
		z-index: 3;
	}

	.invalidInput {
		box-shadow: 0 0 2px 0.5px rgb(var(--color-error-500)) !important;
		border: 1px solid rgb(var(--color-error-500)) !important;
	}

	#searchBarButtons {
		position: absolute;
		align-items: center;
		right: 0.6em;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1em;
	}

	#searchOptionsDropdown {
		/* Positioning */
		position: absolute;
		z-index: 2;
		top: 100%;
		left: 0;
		right: 0;

		/* Active */
		opacity: 1;
		transition: all 0.2s ease-in-out;
		transform: scaleY(1);

		/* Box styling */
		padding: 0.3em;
		display: flex;
		flex-direction: column;
	}

	#searchOptionsDropdown:not(.active) {
		opacity: 0;
		visibility: hidden;
		/* Collapse */
		overflow: hidden;
		top: 0;
		transform: scaleY(0.4);
	}

	#searchOptionsDropdown button {
		padding: 0.3em;
	}

	#searchBarButtons button {
		padding: 0.3em;
	}

	.searchTag {
		display: flex;
		justify-content: flex-start;
		gap: 0.5em;
		margin-top: 0.3em;
	}

	.inactive:not(:hover) {
		opacity: 0.5;
	}

	#searchFilter {
		padding: 0.3em;
		aspect-ratio: 1;
	}
</style>
