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

	// Icon and default settings
	let searchProperties_defaulted = (searchProperties = ['id', 'description', 'value']);
	$: icon = searchProperties_defaulted ? 'mdi:filter-outline' : 'mdi:filter';

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

	// Call $data.search when value is changed
	// But only AFTER $data is loaded
</script>

<div id="search" class="w-fit relative">
	<input type="text" bind:value {placeholder} class="input input-bordered w-full" />
	<div
		id="filter-icons"
		class="btn hover:variant-filled-surface"
		class:inactive={searchProperties_defaulted}
		use:popup={popupSettings}
	>
		<Icon {icon} />
	</div>
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
	#filter-icons {
		position: absolute;
		padding: 0.5em;
		right: 0.5em;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1em;
	}

	.inactive:not(:hover) {
		opacity: 0.5;
	}
</style>
