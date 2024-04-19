<script>
	import * as m from '$paraglide/messages.js';
	import { onMount } from 'svelte';

	// COMPONENTS
	import ElementCard from './_components/rb_element.svelte';

	// builder_config is the array that stores the elements as objects, which are read by the cards etc.
	// This is how it works:
	// The builder_config (bc) is an array that holds the entire routine
	// Within this array, there are multiple combo's (also an array)
	// These combo's hold the elements. A combo can hold 1 OR multiple elements
	// The elements are the full objetcs as retrieved from the correct .json file
	// Eventually it looks something like this:
	// [ [{element1}, {element2}], [{element3}] ]
	$: builder_config = [];

	let elements = {};

	//Test dictionary with two random elements
	let elementDatabase_Test = [
		{
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
		},
		{
			number: '3.206',
			description: 'short placeholder',
			difficulty: 'B',
			value: '0.2',
			group: '3',
			type: 'acrobatic',
			breakdown: { draai: 180, group: 'reuzendraaien' }
		}
	];

	//Function that helps to pick an element
	//This is selected randomly from the list for now...
	import { placeholderElement } from '$lib/data/elements/elementConfig.js';
	const pickElement = (input, database = []) => {
		if (!input) return placeholderElement;

		return database.find((element) => element.number === input) || placeholderElement;
	};

	//Add a new element in the builder_config
	function addElement(input, combo_location, element_location) {
		let _element = pickElement(input);
		if (combo_location >= builder_config.length || combo_location == undefined) {
			//if the combo location is undefined or behind the array, append
			builder_config = [...builder_config, [_element]];
			return;
		} else if (
			element_location >= builder_config[combo_location].length ||
			element_location == undefined
		) {
			// if the element location given is behind the number or undefined (by default), append the 'sub-array'
			builder_config[combo_location] = [...builder_config[combo_location], _element];
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

	/**
	 * Function for handling events from the ElementCard.
	 * This function checks what function is called and applies it to the builder_config.
	 *
	 * @param {CustomEvent} event - The event from the ElementCard
	 */
	function cardAction(event) {
		// Get the function and location from the event
		let func = event.detail.function;
		let combo_location = event.detail.location[0];
		let element_location = event.detail.location[1];

		// If the function is to delete an element, remove it from the builder_config
		if (func == 'delete') {
			builder_config[combo_location] = [
				...builder_config[combo_location].slice(0, element_location), // Pick everything before the element to be deleted..
				...builder_config[combo_location].slice(element_location + 1) //..as well as after
			];
			return;
		}
	}

	//Update array to delete empty ones
	function cleanBuilderConfig() {
		builder_config = builder_config.map((combo) =>
			//Remove elements with an undefined number
			combo.filter((item) => item.number !== undefined)
		);
		builder_config = builder_config.filter((combo) => combo.length > 0); //Filter out empty combos
	}
	$: builder_config, cleanBuilderConfig(); //trigger when builder_config changes

	// ------------------- THIS NEEDS TO BE MOVED INTO A SCRIPT OR COMPONENT!!! ----------------------
	import {
		setConfigToUrl,
		setUrlParams,
		setUrlParamsToBC
	} from '$lib/functions/UrlParamFunctions.js';

	$: setUrlParamsToBC(builder_config);

	//initialise,
	onMount(async () => {
		//makes sure to look at the carried over url parameters first, then sets the builder_config to what this means
		builder_config = await setConfigToUrl(elementDatabase_Test);
	});
</script>

<!-- ------------------ HTML ------------------ -->
<h1>{m.page_routinebuilder_title()}</h1>
<div class="bc_wrapper">
	{#each builder_config as bc_ce, combo_index}
		<!--bc_ce = builder_config combo element -->
		<div class="bc_combo_wrapper">
			{#each bc_ce as bc_e, number_index}
				<ElementCard
					element={bc_e}
					location={[combo_index, number_index]}
					on:message={cardAction}
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
