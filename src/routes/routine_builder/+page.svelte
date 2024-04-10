<script>
	import * as m from '$paraglide/messages.js';
	import { onMount } from 'svelte';

	// COMPONENTS
	import ElementCard from './_components/rb_element.svelte';

	$: builder_config = [];
	let elements = {};
	let testElement = {
		number: '5.008',
		description: 'Ophurken (met liggerwissel)',
		difficulty: 'TA',
		value: '0.1',
		group: '5',
		type: 'acrobatic',
		breakdown: {
			draai: null,
			salto: { aantal: 'enkel', vorm: 'hurk', richting: null },
			group: 'gehoekte draaien'
		}
	};

	function pickElement(input) {
		// TEMPORARY
		return testElement;
		return Math.floor(Math.random() * 10);
		// TEMPORARY SOLUTION
		let keys = Object.keys(elements);
		let element =
			elements[keys.includes(input) ? input : keys[Math.floor(Math.random() * keys.length)]]; // if the input is in the list, use that
		// console.log(keys.includes(input));
		return element;
	}

	function addElement(input, combo_location, element_location) {
		let element = pickElement(input);
		if (combo_location >= builder_config.length || combo_location == undefined) {
			//if the combo location is undefined or behind the array, append
			builder_config = [...builder_config, [element]];
			console.log(builder_config);
			return;
		} else if (
			element_location >= builder_config[combo_location].length ||
			element_location == undefined
		) {
			// if the element location given is behind the number or undefined (by default), append the 'sub-array'
			builder_config[combo_location] = [...builder_config[combo_location], element];
			return;
		} else {
			console.log('still needs to be programmed!!');
			return;
		}
		element_location =
			element_location != undefined ? element_location : builder_config[combo_location].length; // if element_location is given, take that. Else pick the last in the combo
		let combo = builder_config[combo_location]; //Pick the combo where to insert
		console.log(combo);
		// combo.splice(element_location, 0, element); //Insert the element
	}

	//Functions for the buttons on the elements
	function testFunction(event) {
		let func = event.detail.function;
		let combo_location = event.detail.location[0];
		let element_location = event.detail.location[1];
		if (func == 'delete') {
			builder_config[combo_location] = [
				...builder_config[combo_location].slice(0, element_location)
			];
			return;
		}
	}

	//Update array to delete empty ones

	//initialise
	onMount(async () => {
		addElement();
	});
</script>

<h1>{m.page_routinebuilder_title()}</h1>
<div class="bc_wrapper">
	{#each builder_config as bc_ce, combo_index}
		<!--bc_ce = builder_config combo element -->
		<div class="bc_combo_wrapper">
			{#each bc_ce as bc_e, number_index}
				<ElementCard
					element={bc_e}
					location={[combo_index, number_index]}
					on:message={testFunction}
				/>
			{/each}
			<button class="bc_add_element" on:click={() => addElement('random', combo_index)}>+</button>
		</div>
	{/each}
	<button class="bc_add_element" on:click={() => addElement('random')}>+</button>
</div>

<style>
	:root {
		--bc_border-radius: 8px;
	}

	.bc_wrapper {
		display: flex;
		align-items: center;
	}

	.bc_combo_wrapper {
		display: flex;
		gap: 0.5rem;
		background-color: black;
		border-radius: var(--bc_border-radius);
		padding: 0.5rem;
		margin: 0.5rem;
	}

	.bc_add_element {
		height: 2rem;
		aspect-ratio: 1/1;
		border-radius: 100px;
		border: none;
		opacity: 0.6;
	}

	.bc_add_element:hover {
		opacity: 0.8;
	}
</style>
