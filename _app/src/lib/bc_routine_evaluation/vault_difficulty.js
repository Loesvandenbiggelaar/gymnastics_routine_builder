import { flatten_routine, roundValue } from './utils.js';
// @ts-ignore
/** @typedef {import("$lib/data/elements/all_elements.ts").ElementType} ElementType */

// dummy_routine and vault_configuration_type should be defined interactively...
const dummy_routine = [
	[
		{
			"id": "1.101",
			"description": "_ Hdspr. fwd. and salto fwd. t. w. 1/1 t. (Cuervo t. w. \u00bd t.)",
			"group_number": "1",
			"group_name": "Single salto vaults with complex twists ",
			"difficulty": "E",
			"value": 3.2,
			"type": "acrobatic",
			"images": {
				"figure": [
					"/data/elements/men//images/vault/element\\page108_element_1.101_Im0.png"
				],
				"symbol": []
			}
		}
	],
	[
		{
			"id": "2.226",
			"description": "_ Roche with \u00bd turn",
			"group_number": "2",
			"group_name": "Handspring salto vaults with or without simple twists, and all double salto fwd.",
			"difficulty": "D",
			"value": 5.6,
			"type": "acrobatic",
			"images": {
				"figure": [
					"/data/elements/men//images/vault/element\\page111_element_2.226_Im0.png"
				],
				"symbol": []
			}
		}
	]
];

// Depending on the type of competition you want either the highest score of the two, or the average of the two
// this should be an option to choose in the interface
const vault_configuration_type = 'highest'; // "average" or "highest"


// The main function to calculate the D-score of a vault routine.
// Based on the configuration type, it will calculate the average or highest score.
// routine is a list of elements, which can be nested.
/**
 * @param {ElementType[][]} routine
 */
function calculate_d_score(routine) {
	// combos in vault are not valid, so just flatten the routine to skip all combos, if there are any.
	const flat_routine = flatten_routine(routine);
	// @ts-ignore
	if (vault_configuration_type == 'average') {
		return calculate_average(flat_routine);
	} else {
		if (vault_configuration_type == 'highest') {
			return calculate_highest(flat_routine);
		} else {
			console.error('vault configuration type not valid! given: ' + vault_configuration_type);
		}
	}
}

// this should be given back in the interface 
const d_score = calculate_d_score(dummy_routine);
console.log(vault_configuration_type+": " + d_score)

// <----------------------- Helper functions ----------------------->

// based on the elements in the routine, calculate the average D-score.
// The code can handle anly length of routines. however, on vault, you usually have only 2 elements.
/**
 * @param {ElementType[]} routine_flat
 */
function calculate_average(routine_flat) {
	var sum = 0;
	routine_flat.forEach((element) => {
		sum += element['value'];
	});
	return roundValue(sum / routine_flat.length);
}


// Simply loop over the elements and find the highest value
/**
 * @param {ElementType[]} routine_flat
 */
function calculate_highest(routine_flat) {
	var highest_score = 0;
	routine_flat.forEach((element) => {
		var score = element['value'];
		if (score > highest_score) {
			highest_score = score;
		}
	});
	return roundValue(highest_score);
}


// <----------------------- Optional Function ----------------------->

// Maybe not relevant for now, but somewhere (not NSTB) there is a rule that the jumps need to be from different groups
/**
 * @param {ElementType[][]} routine
 */
function elements_different_group(routine) {
	/**
	 * @type {string[]}
	 */
	var groups = [];
	var check_okay = true;
	const flat_routine = flatten_routine(routine);
	// @ts-ignore
	flat_routine.forEach((/** @type {{ [x: string]: string; }} */ element) => {
		if (groups.includes(element['group_number'])) {
			// console.warn('Elements are from the same group! Please choose another element');
			check_okay = false;
		} else {
			groups.push(element['group_number']);
		}
	});
	// if (check_okay) {
	// 	console.log('hurray, elements are from different groups');
	// }
	return check_okay;
}

const different_groups = elements_different_group(dummy_routine);
if (different_groups) {
	console.log("elements are from different groups")} 
else {console.log("elements are not from different groups")}
