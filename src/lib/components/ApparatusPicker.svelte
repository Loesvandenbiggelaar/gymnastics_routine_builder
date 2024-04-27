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
		defaultApparatus
	} from '$lib/data/elements/elementConfig.js'; //Get from global file

	export let selectedApparatus = defaultApparatus;

	function updateApparatus() {
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

<div id="apparatus_wrapper">
	<div class="apparatus_picker">
		{#each Object.values(apparatusConfig) as ap}
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
