// Difficulty is one of the 3 components for calculating the D-score.
// - The Difficulty is the top n (depending on level) elements of a routine.
// - Re-occuring elements don't get difficulty points.
// - Starting with the dismount, count n acrobatic elements,
//      count m gymnastic elements (if applicable),
//      and add other elements to top it.
// - if no dismount is done, we are not allowed to count another acrobatic element either.
import { roundValue, flatten_routine, dismount_done } from './helper_functions.js';

// These constants are based on the level of the gymnast. 
const nr_elements = 8;
const nr_acrobatic = 3;
const nr_gymnastic = 3;

// dummy routine; should be retrieved from the routine builder
const dummy_routine = [
	[
		{
			number: '1.105',
			description:
				'(D)    Sprong (met handensteun) tot parallelspagaat of spreidhoekzit met afzet van 2 benen. Spagaatpositie moet getoond worden als eindpositie  zonder  steun van de handen. In spreidhoekzit moet de romp de balk raken.    Sprong tot dwarsspagaat met afzet van 1 been of 2 benen \u2013 aanloop schuin  t.o.v. de balk ( met handensteun)',
			difficulty: 'A',
			value: '0.1',
			group: '1',
			type: 'gymnastic',
			breakdown: {
				draai: null,
				salto: { aantal: 'enkel', vorm: 'hoek', richting: null },
				beenspreiding: null,
				group: 'opsprongen'
			}
		}
	],
	[
		{
			number: '2.301',
			description: 'Spagaatsprong voorwaarts met \u00bd draai (180\u00b0), met afzet van 1 been',
			difficulty: 'C',
			value: '0.3',
			group: '2',
			type: 'gymnastic',
			breakdown: {
				draai: 180,
				beenspreiding: 180,
				group: 'gymnastische sprongen'
			}
		},
		{
			number: '2.107',
			description: 'Hoeksprong in dwars stand  (heuphoek < 90\u00b0)',
			difficulty: 'A',
			value: '0.1',
			group: '2',
			type: 'gymnastic',
			breakdown: {
				draai: 90,
				beenspreiding: null,
				group: 'gymnastische sprongen'
			}
		},
		{
			number: '2.301',
			description: 'Spagaatsprong voorwaarts met \u00bd draai (180\u00b0), met afzet van 1 been',
			difficulty: 'C',
			value: '0.3',
			group: '2',
			type: 'gymnastic',
			breakdown: {
				draai: 180,
				beenspreiding: 180,
				group: 'gymnastische sprongen'
			}
		}
	],
	[
		{
			number: '2.310',
			description: 'Kattensprong met 1/1 draai (360\u00b0)',
			difficulty: 'C',
			value: '0.3',
			group: '2',
			type: 'gymnastic',
			breakdown: {
				draai: 360,
				beenspreiding: null,
				group: 'gymnastische sprongen'
			}
		}
	],
	[
		{
			number: '4.107',
			description:
				'Radslag, ook met steun op 1 hand of radslag met vluchtfase voor of na de handensteun',
			difficulty: 'A',
			value: '0.1',
			group: '4',
			type: 'acrobatic',
			breakdown: {
				draai: null,
				group: 'houdingen en acrobatische elementen zonder vlucht'
			}
		},
		{
			number: '5.201',
			description:
				'Handstandoverslag v.o. met vluchtfase, landing op \u00e9\u00e9n of beide benen  (zelfde element); ook met steun van \u00e9\u00e9n arm',
			difficulty: 'B',
			value: '0.2',
			group: '5',
			type: 'acrobatic',
			breakdown: {
				draai: null,
				salto: { aantal: 'enkel', vorm: 'hurk', richting: 'voorover' },
				group: 'acrobatische vluchtelementen'
			}
		}
	],
	[
		{
			number: '4.107',
			description:
				'Radslag, ook met steun op 1 hand of radslag met vluchtfase voor of na de handensteun',
			difficulty: 'A',
			value: '0.1',
			group: '4',
			type: 'acrobatic',
			breakdown: {
				draai: null,
				group: 'houdingen en acrobatische elementen zonder vlucht'
			}
		},
		{
			number: '6.204',
			description: 'Salto a.o. gehurkt of gestrekt met 1/1 draai (360\u00b0)',
			difficulty: 'B',
			value: '0.2',
			group: '5',
			type: 'acrobatic',
			breakdown: {
				draai: 360,
				salto: {
					aantal: 'enkel',
					vorm: 'strek',
					richting: 'achterover'
				},
				group: 'afsprongen'
			}
		}
	]
];

let messages = []

// Difficulty doens't care for combos, so we flatten the routine
const dummy_routine_flattened = flatten_routine(dummy_routine);


// get index of all the elements in the routine. basically it does range(0, len(routine))
function get_difficulty(routine) {
	return routine.map((element, index) => index);
}
let all_elements_difficulty = get_difficulty(dummy_routine_flattened);


// The second step is to ignore all the repeated elements in the routine.
function remove_repeated_elements(routine) {
	var unique_elements = [];
	for (let index = 0; index < routine.length; index++) {
		const element = routine[index];
		if (unique_elements.includes(element.number)) {
			// replace the difficulty of the repeated element with 0
			all_elements_difficulty.splice(index, 1, "x");

			// this log might be interested to show on screen
			messages.push(`element is repeated: ${element.description}`);

		} else unique_elements.push(element.number);
	}
}
remove_repeated_elements(dummy_routine_flattened);

// The third step is to count the number of acrobatic elements in the routine.
function count_acrobatic_elements(routine) {
	let acrobatic_elements = [];
	for (let index = 0; index < routine.length; index++) {
		const element = routine[index];
		if (element.type == "acrobatic"){
			acrobatic_elements.push([index, element]);
		}
	}
	// filter the acrobatic elements if they are in all_elements_difficulty. repeated-acrobatic elements are not counted
	acrobatic_elements = acrobatic_elements.filter((element) => {
		return all_elements_difficulty[element[0]] != 'x';
	});

	if (!dismount_done(dummy_routine_flattened)) {
		messages.push("dismount is not done, so we can't count another acrobatic element");
		acrobatic_elements.pop();
	}

	// sort all the acrobatic elements based on their value
	acrobatic_elements.sort((a, b) => {
		return b[1]['value'] - a[1]['value'];
	});

	// get the first n acrobatic elements based on nr_acrobatic and get the index
	return acrobatic_elements.slice(0, nr_acrobatic).map((element) => element[0]);
}
const acrobatic_elements = count_acrobatic_elements(dummy_routine_flattened);

// similar to acrobatic elements, we count the number of gymnastic elements
function count_gymnastic_elements(routine) {
	let gymnastic_elements = [];
	for (let index = 0; index < routine.length; index++) {
		const element = routine[index];
		if (element.type == "gymnastic"){
			gymnastic_elements.push([index, element]);
		}
	}
	// filter the gymnastic elements if they are in all_elements_difficulty. repeated-gymnastic elements are not counted
	gymnastic_elements = gymnastic_elements.filter((element) => {
		return all_elements_difficulty[element[0]] != 'x';
	});

	// sort all the gymnastic elements based on their value
	gymnastic_elements.sort((a, b) => {
		return b[1]['value'] - a[1]['value'];
	});
	// get the first n gymnastic elements based on nr_gymnastic and get the index
	return gymnastic_elements.slice(0, nr_gymnastic).map((element) => element[0]);
}

const gymnastic_elements = count_gymnastic_elements(dummy_routine_flattened);

// given the acrobatic and gymnastic elements, we can count the rest of the element based on the nr_elements
function count_other_elements(routine) {
	let other_elements = [];
	for (let index = 0; index < routine.length; index++) {
		const element = routine[index];
		if (!acrobatic_elements.includes(index) && !gymnastic_elements.includes(index)) {
			other_elements.push([index, element]);
		}
	}
	// filter the other elements if they are in all_elements_difficulty. repeated-other elements are not counted
	other_elements = other_elements.filter((element) => {
		return all_elements_difficulty[element[0]] != 'x';
	});

	// sort all the other elements based on their value
	other_elements.sort((a, b) => {
		return b[1]['value'] - a[1]['value'];
	});

	// get the first n other elements based on nr_elements and get the index
	other_elements = other_elements.slice(0, nr_elements - nr_acrobatic - nr_gymnastic).map((element) => element[0]);

	return other_elements;
}

const other_elements = count_other_elements(dummy_routine_flattened);

// count the difficulty of the elements
function count_difficulty(routine) {
	var difficulty = 0;
	routine.forEach((element) => {
		difficulty += parseFloat(element['value']);
	});
	return roundValue(difficulty);
}

// combine all the elements to get the final difficulty
function get_final_difficulty(routine) {
	let final_elements = acrobatic_elements.concat(gymnastic_elements).concat(other_elements);
	final_elements = final_elements.map((element) => routine[element]);
	return count_difficulty(final_elements);
}


const difficulty = get_final_difficulty(dummy_routine_flattened);
// values to be shown on the interface
console.log("difficulty:", difficulty)
messages.forEach((message) => {console.log(message)})


