<script lang="ts">
	// Get css vars
	import '$lib/themes/vars.css';
	// Action and popups for filter
	import { data } from '$lib/stores/datastore';
	export let placeholder = 'Search Elements...';
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	export let popupSettings: PopupSettings = {
		event: 'click',
		target: 'search-popup',
		placement: 'bottom'
	};

	// Import SearchListEntry
	import type { SearchEntry } from '$lib/stores/datastore';

	import Icon from '@iconify/svelte';

	let value = '';
	let searchProperties = $data.filterOptions.searchProperties || ['id', 'description', 'value'];

	// MULTIPLE SEARCH PROPERTIES
	//
	$: searchTagList = $data.filterOptions.availableSearchTags;
	let searchTagDict: Array<{ value: string; friendly: string; amount: number }>; //Define type
	//Update Dict
	$: searchTagDict = searchTagList.map((value) => {
		return {
			value: value,
			friendly: value,
			amount: $data.returnFilterBySearch(value, $data.filteredData).length
		};
	});

	// Filter list to enable/disable dropdown
	$: searchTagList_filtered = searchTagDict.filter(
		(tag) =>
			tag.value.toLowerCase().includes(value.toLowerCase()) &&
			!$data.filterOptions.searchList.map(({ value }) => value).includes(tag.value)
	);
	$: enableSearchDropdown = value.length > 0 && Object.values(searchTagList_filtered).length > 0;

	$: searchTagDict_sorted = searchTagList_filtered.sort((a, b) => b.amount - a.amount);

	//

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
	$: value, ($data.filterOptions.search = value);
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

	// Keyboard events in the searchbar
	function searchKeydown(e: KeyboardEvent) {
		if (e.key === 'Delete') {
			return clearSearch();
		}
		if (e.key === 'Enter') {
			if (value.length <= 0) return;
			const _entry: SearchEntry = { value: value, type: 'search' };
			// Deal with modifiers
			if (value.startsWith('!')) {
				_entry.modifier = 'not';
				_entry.friendly = value.slice(1);
			}
			return addToFilterList(_entry);
		}
	}

	function addToFilterList(_entry: SearchEntry) {
		if ($data.filterOptions.searchList.some(({ value }) => value === _entry.value))
			return clearSearch();
		if ($data.filterOptions.availableSearchTags.includes(_entry.value)) _entry.type = 'tag';
		$data.filterOptions.searchList = [...$data.filterOptions.searchList, _entry] as SearchEntry[];
		clearSearch();
		$data.searchMultiple();
		// TODO: add warning when search yields no results
		document.getElementById('searchInput')?.focus();
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
			autocomplete="off"
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
			{#each Object.values(searchTagDict_sorted) as tag}
				<button
					class="btn variant-soft searchTag"
					class:inactive={tag.amount === 0}
					on:click={() => addToFilterList({ value: tag.value, type: 'tag' })}
				>
					<Icon icon="mdi:label-outline" />
					{tag.friendly}
					<small class="tagSearchAmount text-muted"> ({tag.amount}) </small>
				</button>
			{/each}
		</div>
	</div>

	<!-- SEARCH FILTER -->
	<button id="searchFilter" class="btn" use:popup={popupSettings}>
		<Icon icon="mdi:tune-vertical-variant" />
	</button>
</div>

<!-- SEARCH FILTER POPUP -->

<div id="searchPopup" class="card p-2 z-10" data-popup={popupSettings.target}>
	<div class="card-title display-text">Search properties</div>
	<hr class="divider opacity-50" />
	{#each Object.keys(propsList) as key}
		<label for={key}>
			<input
				type="checkbox"
				class="checkbox checkbox-primary mr-1"
				name={key}
				bind:checked={propsList[key]}
				id={key}
			/>
			<span
				>{key
					.split('_') // Split on underscores
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter each word
					.join(' ')}
			</span>
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

	.tagSearchAmount {
		margin-left: auto;
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

	.searchTag.inactive {
		opacity: 0.3;
	}

	.inactive:not(:hover) {
		opacity: 0.5;
	}

	#searchFilter {
		padding: 0.3em;
		aspect-ratio: 1;
	}
</style>
