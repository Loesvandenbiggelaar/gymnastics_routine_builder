<script>
	//Paraglide lang support
	import * as m from '$paraglide/messages.js';
	// Iconify for cool icons!
	import IconSvg from '$lib/components/IconSVG.svelte';
	//
	import { onMount } from 'svelte';
	import { setUrlParams, getUrlParams } from '$lib/functions/UrlParamFunctions.js'; // Import functions to get and set URL parameters (for sharing)

	import {
		apparatusConfig,
		apparatusURLkey,
		apparatusFilterURLkey,
		defaultApparatus
	} from '$lib/data/elements/elementConfig.js'; //Get from global file
	import Icon from '@iconify/svelte';

	//Filter options (and classes)
	export let filterOpen = false;
	let sexFilterOpen = false;

	$: selectedSexMens = false;
	$: selectedSexWomens = false;

	let filteredApparatusConfig = apparatusConfig;
	let selectedSexIcon = 'material-symbols:filter-alt';
	function handleSexFilter(event) {
		// Switch to target only when both are made active
		if (selectedSexMens && selectedSexWomens) {
			if (event.target.id == 'womens') {
				selectedSexMens = false;
			} else if (event.target.id == 'mens') {
				selectedSexWomens = false;
			}
		}

		//Set vars based on state
		if (selectedSexMens && !selectedSexWomens) {
			//Mens only
			selectedSexIcon = 'mdi:gender-male';
			filteredApparatusConfig = Object.fromEntries(
				Object.entries(apparatusConfig).filter((ap) => ap[1].sex_id === 'm') //Filter by sex
			);
			setUrlParams(apparatusFilterURLkey, 'm');
		} else if (selectedSexWomens && !selectedSexMens) {
			//Womens only
			selectedSexIcon = 'mdi:gender-female';
			filteredApparatusConfig = Object.fromEntries(
				Object.entries(apparatusConfig).filter((ap) => ap[1].sex_id === 'w') //Filter by sex
			);
			setUrlParams(apparatusFilterURLkey, 'w');
		} else {
			//Both, or none
			filteredApparatusConfig = apparatusConfig;
			selectedSexIcon = 'material-symbols:filter-alt';
			setUrlParams(apparatusFilterURLkey);
		}
	}
	// Export props
	export let selectedApparatus = defaultApparatus;
	let selectedApparatusId = selectedApparatus.id;

	function updateApparatus() {
		selectedApparatusId = selectedApparatus.id;
		setUrlParams(apparatusURLkey, selectedApparatus.id);
		console.debug(`Selected apparatus: ${selectedApparatus?.name} (${selectedApparatus?.sex})`);
	}

	//initialise,
	onMount(async () => {
		/** Sets selected apparatus based on URL params, or defaults. */
		selectedApparatus =
			Object.values(apparatusConfig).find((ap) => ap.id === getUrlParams(apparatusURLkey)) ||
			defaultApparatus;
		await updateApparatus(); //sets URL
	});
</script>

<div id="apparatusSelector">
	<button id="apparatus_filter" class:open={filterOpen} on:click={() => (filterOpen = !filterOpen)}>
		<IconSvg src={selectedApparatus.icon} />
		<div>{selectedApparatus.name}</div>
		<button
			id="sexFilter"
			on:click|stopPropagation={() => ((sexFilterOpen = !sexFilterOpen), (filterOpen = true))}
		>
			<Icon icon={selectedSexIcon} />
		</button>
	</button>
	<div id="dropdown" class:show={filterOpen}>
		{#if sexFilterOpen}
			<div id="sexSelector">
				<label class="sexOption" class:active={selectedSexWomens}
					><input
						type="checkbox"
						bind:checked={selectedSexWomens}
						on:change={handleSexFilter}
						id="womens"
					/>{m.sex_womens()}</label
				>
				<label class="sexOption" class:active={selectedSexMens}
					><input
						type="checkbox"
						bind:checked={selectedSexMens}
						on:change={handleSexFilter}
						id="mens"
					/>{m.sex_mens()}</label
				>
			</div>
		{/if}
		{#each Object.values(filteredApparatusConfig) as ap}
			<!-- Go over each apparatus -->
			<label class="apparatusOption" class:active={ap.id === selectedApparatusId}>
				<input
					type="radio"
					name="apparatus"
					id={ap.id}
					value={ap.id}
					on:change={() => {
						selectedApparatus = apparatusConfig[ap.id];
						updateApparatus();
					}}
				/>
				<IconSvg src={ap.icon} />
				<div>{ap.name}</div>
			</label>
		{/each}
	</div>
</div>

<style>
	#apparatusSelector {
		/* Styling */
		width: fit-content;
		/* Border */
		border: solid 1px var(--color-text);
		border-radius: 1em;
		overflow: hidden;
	}

	#apparatus_filter {
		/* Button Styling */
		display: flex;
		align-items: center;
		/* Sizing */
		width: 10em;
		height: 1.5em;
		font-size: 2em;
		padding: 0.2em;
		/* Colors */
		border: none;
		background-color: transparent;
	}

	#apparatus_filter:hover {
		/* Highlight when hovered */
		background: var(--color-base-secondary);
	}

	#apparatus_filter.open {
		/* Highlight when open */
		background: var(--color-base-secondary);
		border-bottom: solid 0.5px var(--color-text);
	}

	#selectedApparatus {
		all: unset;
		display: flex;
		align-items: center;
		flex-grow: 1;
	}

	#sexFilter {
		/* Kill Button Styling */
		all: unset;
		/* Style */
		margin-left: auto;
		font-size: 0.6em;
	}

	#sexFilter:hover {
		/* Highlight when hovered */
		color: var(--color-accent);
	}

	/*  */

	#dropdown {
		/* Dropdown Styling */
		display: none;
	}

	#dropdown.show {
		/* Show dropdown when open */
		display: block;
	}

	/* Sex Selector */
	#sexSelector {
		/* Layout */
		display: flex;
		flex-direction: row;
		justify-content: space-between; /* Center children */
		width: 100%; /* Enable grow */
		margin-bottom: 0.5em;
	}

	.sexOption {
		/* Layout */
		flex: 1 1 0px;
		text-align: center;
		padding: 0.5em;
	}

	.sexOption:hover {
		/* Highlight when hovered */
		background: var(--color-base-secondary);
	}

	.sexOption.active {
		/* Highlight selected option */
		background: var(--color-accent);
	}

	.sexOption input {
		/* Hide Radio Button */
		display: none;
	}

	/* Option List */

	.apparatusOption {
		/* Layout */
		display: flex;
		height: 2em;
		padding: 0.3em;
		gap: 0.5em;
	}

	.apparatusOption:hover {
		/* Highlight when hovered */
		background: var(--color-base-secondary);
	}

	.apparatusOption.active {
		/* Highlight selected option */
		background: var(--color-accent);
	}

	.apparatusOption input {
		/* Hide Radio Button */
		display: none;
	}
</style>
