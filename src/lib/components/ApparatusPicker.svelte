<script>
	//Paraglide lang support
	import * as m from '$paraglide/messages.js';
	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	import IconSvg from '$lib/components/IconSVG.svelte';
	//
	import { onMount } from 'svelte';

	import {
		apparatusConfig,
		apparatusUpdateURLParam,
		apparatusGetFromURLParam
	} from '$lib/data/elements/elementCOnfig.js'; //Get from global file
	export let selectedMW = 'womens';

	let selectedApparatus = apparatusConfig[selectedMW][0];

	function updateMensWomens() {
		const _apname = selectedApparatus.name;
		selectedApparatus =
			apparatusConfig[selectedMW].find((ap) => ap.name == _apname) || //Check to see if the selected apparatus is in the newly selected MF category
			apparatusConfig[selectedMW][0]; //otherwise select the first in the list
	}
	function updateApparatus() {
		// const _encodedURLstring = encodeapparatus(selectedMF, selectedApparatus.id);
		apparatusUpdateURLParam(selectedMW, selectedApparatus);
		console.log(`Selected apparatus: ${selectedApparatus.name}`);
	}

	//initialise,
	onMount(async () => {
		//makes sure to look at the carried over url parameters first, then sets the builder_config to what this means
		let _urlParams = await apparatusGetFromURLParam();
		console.log(_urlParams);
		selectedMW = _urlParams?._mw || 'womens';
		selectedApparatus = apparatusConfig[selectedMW][_urlParams?._ap];
		await updateApparatus();
	});
</script>

<div id="apparatus_wrapper">
	<div id="mens_womens_picker">
		<input
			type="radio"
			name="mens_womens"
			id="womens"
			value="womens"
			bind:group={selectedMW}
			on:change={updateMensWomens}
		/>
		<label for="womens"><Icon icon="tabler:gender-female" /></label>
		<input
			type="radio"
			name="mens_womens"
			id="mens"
			value="mens"
			bind:group={selectedMW}
			on:change={updateMensWomens}
		/>
		<label for="mens"><Icon icon="tabler:gender-male" /></label>
	</div>
	<div class="apparatus_picker">
		{#each apparatusConfig[selectedMW] as ap}
			<!-- Go over each apparatus in the selected gender category -->
			<input
				type="radio"
				bind:group={selectedApparatus}
				id={ap.id}
				name="apparatus"
				value={ap}
				on:change={updateApparatus}
			/>
			<label for={ap.id}>
				<IconSvg src={ap.icon} />
				<p>{ap.name}</p></label
			>
		{/each}
	</div>
</div>

<style>
	#apparatus_wrapper {
		display: grid;
		column-gap: 1.5em;
		grid-template-columns: min-content 1fr;
	}

	#mens_womens_picker {
		background-color: var(--color-base-secondary);
		display: flex;
		flex-direction: column;
		/* Styling */
		--border-radius: 100px;
		border-radius: var(--border-radius);
	}

	#mens_womens_picker input {
		display: none;
	}
	#mens_womens_picker label {
		font-size: 1.5em;
		padding: 0.1em;
	}
	#mens_womens_picker input:checked + label {
		background-color: var(--color-secondary);
	}

	#mens_womens_picker input:checked + label[for='mens'] {
		background-color: var(--color-accent);
	}

	#mens_womens_picker label:first-of-type {
		border-radius: var(--border-radius) var(--border-radius) 0px 0px;
	}
	#mens_womens_picker label:last-of-type {
		border-radius: 0px 0px var(--border-radius) var(--border-radius);
	}

	.apparatus_picker {
		display: flex;
		text-align: center;
	}

	.apparatus_picker input {
		display: none;
	}

	.apparatus_picker label {
		/* Keep all entries same width */
		flex: 1 1 0px;
		/* Icon and text layout */
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2em;
		padding: 0.2em;
		/* Box Styling */
		--border-radius: 1em;
		--border: solid var(--color-text-secondary) 0.5px;
		border: var(--border);
		border-left: none;
		height: 3.5em;
		/* Sizing */
		font-size: 1.2rem;
	}

	.apparatus_picker label:first-of-type {
		border-left: var(--border);
		border-radius: var(--border-radius) 0px 0px var(--border-radius);
	}

	.apparatus_picker label:last-of-type {
		border-radius: 0px var(--border-radius) var(--border-radius) 0px;
	}

	.apparatus_picker label:hover {
		background-color: var(--color-base-secondary);
	}

	.apparatus_picker label p {
		flex: 1em 0 1;
		font-size: 1rem;
		margin: 0;
	}

	.apparatus_picker input:checked + label {
		font-weight: bold;
		background-color: var(--color-accent);
	}
</style>
