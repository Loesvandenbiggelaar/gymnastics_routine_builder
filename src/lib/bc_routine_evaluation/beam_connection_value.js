// This page will calculate the connection value of a beam routine. 
// The connection value is the sum of the connection values of all the connections in the routine. 

import { flatten_routine, dismount_done } from "./helper_functions.js";
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


var connection_values = {
    "Acro met vlucht, (mag opsprong en afsprong zijn)": {
      "description": "Acro met vlucht, (mag opsprong en afsprong zijn)",
      "dezelfde": "ja",
      "volgorde": "vrij",
	  "possibilities": [
		[["B", "B"], 0.1],
		[["B", "CDEFGH"], 0.2]]
    },
    "Dans": {
      "description": "dans elementen",
      "dezelfde": "nee",
      "volgorde": "vrij",
      "possibilities": [
        [["B", "B"], 0.1],
        [["A", "C"], 0.1],
        [["B", "CDEFGH"], 0.2],
        [["A", "DEFGH"], 0.2]]
    },
    "Draaien": {
      "description": "draaien",
      "dezelfde": "nee",
      "volgorde": "vrij",
      "possibilities": 
        [["A", "BCDEFGH"], 0.1]
    },
    "Mix": {
      "description": "mix verbinding",
      "dezelfde": "nee",
      "volgorde": "vrij",
      "Possibilities":[
        [["B", "B"], 0.1],
        [["A", "C"], 0.1],
        [["B", "CDEFGH"], 0.2],
        [["A", "DEFGH"], 0.2]]
    },
    "Seriebonus": {
      "description": "Seriebonus",
      "dezelfde": 2,
      "possibilities": [
      [["A", "B", "B"], 0.1]]
    },
    "dismount_bonus": ["CDEFGH", 0.2 ]}


// calculate the dismount bonus.
function calculateDismountBonus(routine) {
    // get the last element of the routine, we don't care about combos
    const flattened_routine = flatten_routine(routine);
    const dismount = flattened_routine[flattened_routine.length - 1];

	// if no dismount is done, no bonus is given
	if (!dismount_done(flattened_routine)) return 0
    const dismount_difficulty = dismount.difficulty
    
    // get the dismount bonus from the config
    const dismount_bonus_config = connection_values.dismount_bonus

    // check if bonus is given or not
    if (dismount_bonus_config[0].includes(dismount_difficulty)) {
        return dismount_bonus_config[1]
    } else {return 0}

}
const dismount_bonus = calculateDismountBonus(dummy_routine)

console.log("dismount bonus:", dismount_bonus)


// calculate if the combo contains acro-acro combinations which should get a connection value
// if we have combo elementA-elementB-elementC, we should check the combination elementA-elementB and elementB-elementC
// for acro elements, the order of the value doesnt matter.	
function calculate_acro_acro_bonus(combo){
	let bonus = 0
	for (let i = 0; i < combo.length - 1; i++) {
		const elementA = combo[i]
		const elementB = combo[i + 1]
		console.log(elementA.description)
		console.log(elementB.description)
		console.log("====")
		if (elementA.type == "acrobatic" && elementB.type == "acrobatic") {
			const valueA = elementA.difficulty
			const valueB = elementB.difficulty
			const combo_value_options = connection_values["Acro met vlucht, (mag opsprong en afsprong zijn)"]["possibilities"]
			
			// there are different possibilities for the connection value, so we need to check them all
			// e.g. if an option is ["B", "CDEFGH"], the bonus is given if valueA is B and valueB is C, D, E, F, G or H, or the other way around, 
			// if valueA is C, D, E, F, G or H and valueB is B
			// if ValueA is B and valueB is B, no bonus is given.
			// if valueA is C, D, E, F, G or H and valueB is C, D, E, F, G or H, no bonus is given.
			for (let j = 0; j < combo_value_options.length; j++) {
				const option = combo_value_options[j]
				console.log(option)
				if (option[0][0].includes(valueA) && option[0][1].includes(valueB)) {
					bonus += option[1]
				} else if (option[0][0].includes(valueB) && option[0][1].includes(valueA)) {
					bonus += option[1]
				}
			}
		}
	}
	return bonus


}

// loop over every combo in the routine and check the acro-acro bonus
for (let i = 0; i < dummy_routine.length; i++) {
	const combo = dummy_routine[i]
	const acro_acro = calculate_acro_acro_bonus(combo)
	console.log("acro-acro bonus:", acro_acro)
}

// const acro_acro = calculate_acro_acro_bonus(dummy_routine[1])