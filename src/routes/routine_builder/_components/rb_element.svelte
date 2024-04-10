<script>
	//Dispatcher for passing the functions through events
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function message(msg) {
		dispatch('message', {
			function: msg,
			location: location
		});
	}

	// Iconify for cool icons!
	import Icon from '@iconify/svelte';

	export let element = {};
	export let location;
</script>

<div class="wrapper">
	<div id="number">{element.number}</div>
	<icon id="icon" />
	<div id="name">{element.description}</div>
	<div id="breakdown"></div>
	<div id="buttons">
		<button id="moveleft" on:click={() => message('moveleft')}
			><Icon icon="mdi:chevron-left" /></button
		>
		<button id="moveright" on:click={() => message('moveright')}
			><Icon icon="mdi:chevron-right" /></button
		>
		<button id="delete" on:click={() => message('delete')}
			><Icon icon="line-md:close-small" /></button
		>
	</div>
</div>

<style>
	.wrapper {
		/* Layout*/
		display: grid;
		gap: 0.1rem;
		padding: 0.2rem;
		grid-template-areas:
			'number icon'
			'name icon'
			'breakdown breakdown'
			'buttons buttons';

		grid-template-rows: 12px min-content 1fr 20px;
		grid-template-columns: 1fr 2rem;

		/* Backdrop Placement*/
		position: relative;
		z-index: 5;
	}

	.wrapper::before {
		/* backdrop */
		/* placement */
		content: '';
		z-index: -1;
		position: absolute;
		inset: 0;
		/* styling */
		opacity: 0.6;
		border-radius: var(--bc_border-radius);
		background-color: var(--color-base-secondary);
	}

	#name {
		font-size: 1rem;
		grid-area: 'name';
	}

	#icon {
		aspect-ratio: 1/1;
		grid-row: span 2;
		width: 100%;
		border-radius: var(--bc_border-radius);
		background-color: var(--color-accent);
	}

	#number {
		font-size: 0.6rem;
		grid-area: 'number';
	}

	#breakdown {
		grid-column: span 2;
	}

	#buttons {
		grid-column: span 2;
		display: flex;
	}

	#buttons button {
		box-shadow: none;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.6;
	}

	#buttons button:hover {
		opacity: 0.8;
	}

	button#moveleft {
		border-radius: 1em 0 0 1em;
	}

	button#moveright {
		border-radius: 0 1em 1em 0;
	}

	button#delete {
		border-radius: var(--bc_border-radius);
		margin-left: auto;
	}

	button#delete:hover {
		background-color: red;
	}
</style>
