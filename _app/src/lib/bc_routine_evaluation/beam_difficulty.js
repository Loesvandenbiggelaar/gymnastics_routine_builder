// Difficulty is one of the 3 components for calculating the D-score.
// - The Difficulty is the top n (depending on level) elements of a routine.
// - Re-occuring elements don't get difficulty points.
// - Starting with the dismount, count n acrobatic elements,
//      count m gymnastic elements (if applicable),
//      and add other elements to top it.
// - if no dismount is done, we are not allowed to count another acrobatic element either.

import { roundValue, flatten_routine, is_dismount_done } from './helper_functions.js';
// @ts-ignore
/** @typedef {import("$lib/data/elements/all_elements.ts").ElementType} ElementType */

import { beam_routine_normal } from './test_routines.js';
// These constants are based on the level of the gymnast. 
const nr_elements = 8;
const nr_acrobatic = 3;
const nr_gymnastic = 3;

// dummy routine; should be retrieved from the routine builder
const routine = beam_routine_normal;

// loop over the flattened routine and log the difficulty and description of the elements
flatten_routine(routine).forEach((element) => {console.log( element["value"], element["type"],element["description"])})


/**
 * @type {string[]}
 */
let messages = []

// Difficulty doens't care for combos, so we flatten the routine
const dummy_routine_flattened = flatten_routine(routine);


// get an array of all the elements in the routine
/**
 * @param {ElementType[]} routine_flat
 */
function get_difficulty(routine_flat) {
	return Array.from({ length: routine_flat.length }, (_, index) => index);
}

let all_elements_difficulty = get_difficulty(dummy_routine_flattened);
console.log(all_elements_difficulty)

// The third step is to count the number of acrobatic elements in the routine.
/**
 * @param {ElementType[]} routine_flat
 */
function count_acrobatic_elements(routine_flat) {
		/**
	 * @type {[number, ElementType][]}
	 */
	let acrobatic_elements = [];
	for (let index = 0; index < routine_flat.length; index++) {
		const element = routine_flat[index];
		if (element.type === "acrobatic") {
			acrobatic_elements.push([index, element]);
		}
	}
	// filter the acrobatic elements if they are in all_elements_difficulty. repeated-acrobatic elements are not counted
	acrobatic_elements = acrobatic_elements.filter((element) => {
		return all_elements_difficulty[element[0]] !== -1;
	});

	if (!is_dismount_done(dummy_routine_flattened)) {
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
/**
 * @param {ElementType[]} routine_flat
 */
function count_gymnastic_elements(routine_flat) {
	/**
	 * @type {[number, ElementType][]}
	 */
	let gymnastic_elements = [];
	for (let index = 0; index < routine_flat.length; index++) {
		const element = routine_flat[index];
		if (element.type == "dance"){
			gymnastic_elements.push([index, element]);
		}
	}
	// filter the gymnastic elements if they are in all_elements_difficulty. repeated-gymnastic elements are not counted
	gymnastic_elements = gymnastic_elements.filter((element) => {
		return all_elements_difficulty[element[0]] != -1;
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
/**
 * @param {ElementType[]} routine_flat
 */
function count_other_elements(routine_flat) {
	/**
	 * @type {[number, ElementType][]}
	 */
	// all_elements_difficulty
	let other_elements = [];
	for (let index = 0; index < routine_flat.length; index++) {
		const element = routine_flat[index];
		if (!acrobatic_elements.includes(index) && !gymnastic_elements.includes(index)) {
			// console.log(index, all_elements_difficulty[index])
			other_elements.push([index, element]);
		}
	}
	// filter the other elements if they are in all_elements_difficulty. repeated-other elements are not counted
	return other_elements.slice(0, nr_elements - nr_acrobatic - nr_gymnastic).map((element) => element[0]);
}


// count the difficulty of the elements
// given the acrobatic and gymnastic elements, we can count the rest of the element based on the nr_elements
/**
 * @param {ElementType[]} routine_flat
 */
function count_difficulty(routine_flat) {
	var difficulty = 0;
	routine_flat.forEach((element) => {
		difficulty += element['value'];
	});
	return roundValue(difficulty);
}

// combine all the elements to get the final difficulty
// given the acrobatic and gymnastic elements, we can count the rest of the element based on the nr_elements
/**
 * @param {ElementType[]} routine_flat
 */
function get_final_difficulty(routine_flat) {
	const other_elements = count_other_elements(dummy_routine_flattened);
	// console.log(other_elements)
	let final_elements = acrobatic_elements.concat(gymnastic_elements).concat(other_elements);
	return count_difficulty(final_elements.map((element) => routine_flat[element]));
}


const difficulty = get_final_difficulty(dummy_routine_flattened);
// values to be shown on the interface
console.log("difficulty:", difficulty)
messages.forEach((message) => {console.log(message)})


