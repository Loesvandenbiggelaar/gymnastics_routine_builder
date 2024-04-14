<script>
	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	import IconSvg from '$lib/components/IconSVG.svelte';
	//

	let selected_gender = 'female';

	export let apparatus = [];
	export let selected_apparatus;
	apparatus.male = [
		{ name: m.apparatus_vault(), icon: 'vault.svg', id: 'vault' },
		{ name: 'rings', icon: 'rings.svg', id: 'rings' },
		{ name: 'pommel horse', icon: 'pommel_horse.svg', id: 'pommel horse' },
		{ name: 'high bar', icon: 'high_bar.svg', id: 'high bar' },
		{ name: 'parallel bars', icon: 'parallel_bars.svg', id: 'parallel bars' },
		{ name: m.apparatus_floor(), icon: 'floor.svg', id: 'floor' }
	];
	apparatus.female = [
		{ name: m.apparatus_vault(), icon: 'vault.svg', id: 'vault' },
		{ name: m.apparatus_beam(), icon: 'beam.svg', id: 'beam' },
		{ name: m.apparatus_uneven_bars(), icon: 'uneven_bars.svg', id: 'uneven bars' },
		{ name: m.apparatus_floor(), icon: 'floor.svg', id: 'floor' }
	];

	$: apparatus_loader = apparatus[selected_gender];
</script>

<div id="apparatus_wrapper">
	<div id="male_female_picker">
		<input
			type="radio"
			name="male_female"
			id="female"
			value="female"
			bind:group={selected_gender}
			on:change={console.log(selected_gender)}
		/>
		<label for="female"><Icon icon="tabler:gender-female" /></label>
		<input
			type="radio"
			name="male_female"
			id="male"
			value="male"
			bind:group={selected_gender}
			on:change={console.log(selected_gender)}
		/>
		<label for="male"><Icon icon="tabler:gender-male" /></label>
	</div>
	<div class="apparatus_picker">
		{#each apparatus_loader as ap}
			<input
				type="radio"
				bind:group={selected_apparatus}
				id={ap.id}
				name="apparatus"
				value={ap.id}
				on:change={console.log(selected_apparatus)}
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
