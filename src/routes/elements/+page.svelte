<script>
	import * as m from '$paraglide/messages.js';
	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	// Custom local svg component
	import IconSVG from '$lib/components/IconSVG.svelte';

	// Import apparatus picker
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';

	// GridJS and elements data
	import Grid from 'gridjs-svelte';
	const c_num = '#';
	const columns = [
		{ name: c_num, id: 'number' },
		{ name: m.element_table_header_description(), id: 'description' },
		{ name: m.element_table_header_value(), id: 'value' },
		{ name: m.element_table_header_difficulty(), id: 'difficulty' }
	];
	// Importing the json from local file
	import json from '$lib/data/elements/women/elements_women.json';

	let selected_apparatus = 'vault'; // Default set to "vault"

	$: data = json[selected_apparatus] || json['vault']; // "Vault" as fallback
</script>

<!-- Header Component -->
<h1>{m.page_elements_title()}</h1>
<ApparatusPicker />
<Grid {data} {columns} search sort pagination />
<p>
	{m.lorem_ipsum()}
</p>

<style>
	/* Import Grid Styles */
	@import '$lib/styles/gridJS_style.css';

	#apparatus_wrapper {
		display: grid;
		column-gap: 1.5em;
		grid-template-columns: min-content 1fr;
	}

	#male_female_picker {
		background-color: var(--color-base-secondary);
		display: flex;
		flex-direction: column;
		/* Styling */
		--border-radius: 100px;
		border-radius: var(--border-radius);
	}

	#male_female_picker input {
		display: none;
	}
	#male_female_picker label {
		font-size: 1.5em;
		padding: 0.1em;
	}
	#male_female_picker input:checked + label {
		background-color: var(--color-secondary);
	}

	#male_female_picker input:checked + label[for='male'] {
		background-color: var(--color-accent);
	}

	#male_female_picker label:first-of-type {
		border-radius: var(--border-radius) var(--border-radius) 0px 0px;
	}
	#male_female_picker label:last-of-type {
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
