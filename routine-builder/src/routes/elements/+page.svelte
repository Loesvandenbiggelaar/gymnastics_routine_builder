<script>
	import * as m from '$paraglide/messages.js';
	// Iconify for cool icons!
	import Icon from '@iconify/svelte';

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
	import json from '$lib/data/elements.json';
	let selected_apparatus = 'vault'; // Default set to "vault"
	$: data = json[selected_apparatus];

	// Components
	import IconSVG from '$lib/components/IconSVG.svelte';

	export const apparatus = [
		{ name: m.apparatus_vault(), icon: 'mdi:magnify-scan', id: 'vault' },
		{ name: m.apparatus_beam(), icon: 'mdi:magnify-scan', id: 'beam' },
		{ name: m.apparatus_uneven_bars(), icon: 'mdi:magnify-scan', id: 'uneven bars' },
		{ name: m.apparatus_floor(), icon: 'mdi:magnify-scan', id: 'floor' }
	];
</script>

<!-- Header Component -->
<h1>{m.page_elements_title()}</h1>
<div class="apparatus_picker">
	{#each apparatus as ap}
		<input
			type="radio"
			bind:group={selected_apparatus}
			id={ap.id}
			name="apparatus"
			value={ap.id}
			on:change={console.log(selected_apparatus)}
		/>
		<label for={ap.id}
			><Icon icon={ap.icon} />
			<p>{ap.name}</p></label
		>
	{/each}
</div>
<Grid {data} {columns} search sort />
<p>
	{m.lorem_ipsum()}
</p>

<style>
	/* Import Grid Styles */
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';

	.apparatus_picker {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(0, 10rem));
		text-align: center;
	}

	.apparatus_picker input {
		display: none;
	}

	.apparatus_picker label {
		/* Flex and layout */
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2em;
		padding: 0.2em;
		/* Box Styling */
		border-radius: 100px;
		/* Sizing */
		font-size: 1.6rem;
	}

	.apparatus_picker label:hover {
		background-color: var(--color-base-secondary);
	}

	.apparatus_picker label p {
		font-size: 1rem;
		margin: 0;
	}

	.apparatus_picker input:checked + label {
		font-weight: bold;
	}
</style>
