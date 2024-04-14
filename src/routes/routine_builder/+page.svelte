<script>
	import * as m from '$paraglide/messages.js';
	import { onMount } from 'svelte';

	// COMPONENTS
	import ElementCard from './_components/rb_element.svelte';

	//builder_config is the array that stores the elements as objects, which are read by the cards etc.
	$: builder_config = [];

	let elements = {};

	//Test dictionary with two random elements
	let testElement = [
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
	function pickElement(input) {
		// TEMPORARY
		let rand = Math.floor(Math.random() * testElement.length);
		return testElement[rand];
		// TEMPORARY SOLUTION
		let keys = Object.keys(elements);
		let element =
			elements[keys.includes(input) ? input : keys[Math.floor(Math.random() * keys.length)]]; // if the input is in the list, use that
		// console.log(keys.includes(input));
		return element;
	}

	//Add a new element in the builder_config
	function addElement(input, combo_location, element_location) {
		let element = pickElement(input);
		if (combo_location >= builder_config.length || combo_location == undefined) {
			//if the combo location is undefined or behind the array, append
			builder_config = [...builder_config, [element]];
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
		//## RENAME ME
		let func = event.detail.function;
		let combo_location = event.detail.location[0];
		let element_location = event.detail.location[1];
		if (func == 'delete') {
			builder_config[combo_location] = [
				...builder_config[combo_location].slice(0, element_location), //Pick everything before the element to be deleted..
				...builder_config[combo_location].slice(element_location + 1) //..as well as after
			];
			return;
		}
	}

	//Update array to delete empty ones
	function removeEmptyCombos() {
		builder_config = builder_config.filter((item) => item.length > 0);
	}
	$: builder_config, removeEmptyCombos(); //trigger when builder_config changes

	// ------------------- THIS NEEDS TO BE MOVED INTO A SCRIPT OR COMPONENT!!! ----------------------
	//Create a dynamic array of the identifiers
	import { page } from '$app/stores'; //Load the page store to read url and url parameteres
	import { goto } from '$app/navigation'; // goto to trigger a page navigation with the script
	import { browser } from '$app/environment'; //used to check if the browser page has loaded
	$: urlParam = new URLSearchParams($page.url.searchParams); //the url parameters
	$: bc_urlParam = urlParam.get(encodingConfig.urlKey); //

	function setConfigToUrl() {
		//a function that sets the config based on the url
		if (!bc_urlParam) return;
		// read the current url parameter for the builder_config and decode it into the array of numbers
		const decodedUrlString = decodeURLString(bc_urlParam);
		//take the decoded string and transform the numbers into the correct elements
		return (builder_config = convertNumbersToObjects(decodedUrlString, testElement));
	}

	//Convert the numbers to a string with the objects
	function convertNumbersToObjects(numbersArray, database) {
		// **1. Iterate through the outer array (list of combos), creating new inner arrays (the individual combo's) with objects:**
		return numbersArray.map((innerArray) => {
			//return the array of convertedInnerArray's
			let convertedInnerArray = []; //set as empty array

			innerArray.forEach((number) => {
				//go through the combo for each element within
				const matchingObject = database.find((el) => el.number === number); //find the element associated with the number
				convertedInnerArray.push(matchingObject || {}); //add to the list
			});
			return convertedInnerArray; //return this
		});
	}

	function setUrlParams(key, value) {
		if (!browser || !key) return; //Don't execute until initialised (to prevent 500 error), or when no key is provided
		const urlParams = new URLSearchParams($page.url.searchParams); // get url parameters
		if (value) {
			//if a value is specified...
			urlParams.set(key, value); //Set the parameter
		} else {
			//..otherwise delete the key
			urlParams.delete(key); //delete parameters when no elements are in the config
		}
		const urlString = `?${urlParams.toString()}`; //convert to string with '?'' in front
		goto(urlString); //update URL with a navigate action
	}

	function encodeElementNum(number) {
		//simple code to encode an element number formatted like #.### into a shorter string (usuallyy 3 characters)
		let integer = parseInt(parseFloat(number) * 1000); //convert the #.### to an integer number
		return integer.toString(encodingConfig.protocol); //encode with the specified encoding protocol (from dict)
	}

	function decodeElementNum(code) {
		//simple code to decode a code back to an element number
		let number = parseInt(code, encodingConfig.protocol); //decode to integer
		return parseFloat(number / 1000).toString(); //back to string
	}

	// configuration of the encoding protocol
	var encodingConfig = {};
	encodingConfig.combo_split = '-'; //character that splits between combos
	encodingConfig.element_split = '_'; // character that splits elements within combos
	encodingConfig.protocol = 32; //protocol to use (don't ask how...)
	encodingConfig.urlKey = 'bc'; //'key' to use in url parameter

	function decodeURLString(encodedString) {
		//function to decode the string version of the builder_config into an array of element numbers
		return encodedString.split(encodingConfig.combo_split).map((comboString) => {
			return comboString.split(encodingConfig.element_split).map(decodeElementNum);
		});
	}

	// only the id's (numbers) of the builder_config
	$: bc_ids = builder_config.map((combo) => {
		return combo.map((element) => element.number);
	});
	// encoded array of the builder_config in numbers
	$: bc_id_encoded = bc_ids
		.flatMap((combo) => combo.map((id) => encodeElementNum(id)).join(encodingConfig.element_split))
		.join(encodingConfig.combo_split);
	// If the encoded string is changed, set the parameters
	$: builder_config, setUrlParams(encodingConfig.urlKey, bc_id_encoded);

	//initialise,
	onMount(async () => {
		//makes sure to look at the carried over url parameters first, then sets the builder_config to what this means
		setConfigToUrl();
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
