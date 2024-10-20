import { flatten_routine, roundValue } from './helper_functions.js';

// dummy_routine and vault_configuration_type should be defined interactively...
const dummy_routine = [
	[
		{
			number: '4.12',
			description:
				'Arabier flik -flak in de eerste vluchtfase - in de tweede vluchtfase salto achterover gehurkt met 1/1 draai (360\u00ba)',
			value: '3.60',
			difficulty: 'A',
			group: '4',
			type: 'acrobatic',
			breakdown: {
				type: 'arabier flik-flak / yurchenko',
				'eerste vluchtfase': {
					draai: null,
					salto: { aantal: 'enkel', vorm: 'hurk', richting: null },
					beenspreiding: null
				},
				'tweede vluchtfase': {
					draai: 360,
					salto: {
						aantal: 'enkel',
						vorm: 'hurk',
						richting: 'achterover'
					},
					beenspreiding: null
				},
				group:
					'arabier flik-flak met/zonder 3/4 draai in 1e vluchtfase (yurchenko -inzet) - in 2e vluchtfase salto achterover met/zonder la-draai'
			}
		}
	],
	[
		{
			number: '3.34',
			description: 'Tsukahara gestrekt met 2/1  draai (720\u00ba)',
			value: '5.20',
			difficulty: 'C',
			group: '3',
			type: 'acrobatic',
			breakdown: {
				type: 'tsukahara',
				'eerste vluchtfase': {
					draai: null,
					salto: { aantal: 'enkel', vorm: 'hurk', richting: null },
					beenspreiding: null
				},
				'tweede vluchtfase': {
					draai: 720,
					salto: { aantal: 'enkel', vorm: 'strek', richting: null },
					beenspreiding: null
				},
				group:
					'handstandoverslag met 1/4 - 1/2 draai in de 1e vluchtfase (tsukahara) - in de 2e vluchtfase salto achterover met/zonder la-draai'
			}
		}
	]
];

// Depending on the type of competition you want either the highest score of the two, or the average of the two
// this should be an option to choose in the interface
const vault_configuration_type = 'average'; // or "highest"


// The main function to calculate the D-score of a vault routine.
// Based on the configuration type, it will calculate the average or highest score.
function calculate_d_score(routine) {
	// combos in vault are not valid, so just flatten the routine to skip all combos, if there are any.
	const flat_routine = flatten_routine(routine);
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
console.log(d_score)

// <----------------------- Helper functions ----------------------->

// based on the elements in the routine, calculate the average D-score.
// The code can handle anly length of routines. however, on vault, you usually have only 2 elements.
function calculate_average(routine) {
	var sum = 0;
	routine.forEach((element) => {
		sum += parseFloat(element['value']);
	});
	return roundValue(sum / routine.length);
}

// Simply loop over the elements and find the highest value
function calculate_highest(routine) {
	var highest_score = 0;
	routine.forEach((element) => {
		var score = parseFloat(element['value']);
		if (score > highest_score) {
			highest_score = score;
		}
	});
	return roundValue(highest_score);
}


// <----------------------- Optional Function ----------------------->

// Maybe not relevant for now, but somewhere (not NSTB) there is a rule that the jumps need to be from different groups
function elements_different_group(routine) {
	var groups = [];
	var check_okay = true;
	const flat_routine = flatten_routine(routine);
	flat_routine.forEach((element) => {
		if (groups.includes(element['group'])) {
			// console.warn('Elements are from the same group! Please choose another element');
			check_okay = false;
		} else {
			groups.push(element['group']);
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