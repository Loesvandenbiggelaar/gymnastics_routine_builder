// Difficulty is one of the 3 components for calculating the D-score.
//
// step 0: 
//   Identify acrobatic and dance elements
// step 1:
//   devaluate the elements if it is more difficult than allowed.
// Step 1:
//   Check if the dismount is done:
//     yes --> continue
//     no  --> count 1 acrobatic element less in the next step
// step 2:
//   get the difficulty points (dutch: "meerwaarde") of the routine. 
//   count from high to low and only unique (first performed) element counts
//     a) count n acrobatic elements in the routine (-1 if previous step is no)
// 	   b) count m dance elements in the routine
//     c) count 'nr-allowed-elements - n - m' other elements
// step 3:
//   check how many elements got difficulty points (dutch: "meerwaarde")
//    if nr of elements is lower than should be, 4 points neutral deduction
// step 4:
//   for each combination, check if there is a combination score
//     - a combination counts only if all elements got difficulty points
//     - sometimes the order of the elements is restricted
// step 5:
//   check for dismount bonus
// step 6:
//   check for the (Dutch: "eisen"):
//     - only elements with difficulty points (Dutch: "meerwaarde") can be used

import { roundValue, sort_elements, sliceArray, compareArrayBonus, dismountDone } from './helper_functions'
import { comboOptionD1, getComboDescription } from './routine_evaluation.js'
import { type Dscore } from '$lib/stores/datastore'

// import { routineBuilder } from '$lib/stores/routineBuilder.js'
import type { ComboType, ElementMetadata } from '$lib/stores/routineMutations.js'
import type { RoutineMutations } from '$lib/stores/routineMutations'
import type { ElementType } from '$lib/data/elements/all_elements.js'
// These constants are based on the level of the gymnast. 
const nrElements = 8
const nrAcrobatic = 3
const nrGymnastic = 3


export class calculateDifficulty {
	routineMutations: RoutineMutations
	difficultyCalculated: boolean = false
	dscore: Dscore = {
		difficultyValue: 0,
		compositionalRequirements: 0,
		connectionValue: 0,
		serieBonus: 0,
		dismountBonus: 0,
		totalDifficulty: 0
	}

	constructor(routine: RoutineMutations) {
		this.routineMutations = routine
		this.addMessages()
	}

	private addMessages() {
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			if (comboMetadata.value) {
				comboMetadata.messages = []
			}
		})
		this.routineMutations.routine.set(routineValue)
	}

	private reset() {
		this.difficultyCalculated = false
		this.dscore = {
			difficultyValue: 0,
			compositionalRequirements: 0,
			connectionValue: 0,
			serieBonus: 0,
			dismountBonus: 0,
			totalDifficulty: 0
		}
	}

	public calculate() {
		this.reset()

		// if the routineMutations doesn't have any elements; return
		if (this.routineMutations.getRoutine().length == 0) {
			return this.dscore
		}

		this.identifyTypeOfElement()
		this.identifyRepeatedElements()
		
		this.dscore.difficultyValue = roundValue( this.countDifficultyElements())
		
		this.dscore.connectionValue = roundValue(this.countConnectionValue())

		// add the serie bonus to the bonus
		this.dscore.serieBonus += roundValue( this.countSeriesBonus())

		// add the dismount bonus to the bonus
		this.dscore.dismountBonus += roundValue(this.countDismountBonus())


		this.dscore.totalDifficulty = roundValue(this.dscore.difficultyValue + this.dscore.connectionValue + this.dscore.serieBonus + this.dscore.dismountBonus + this.dscore.compositionalRequirements)

		return this.dscore
	}

	private identifyTypeOfElement() {
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			comboMetadata.elements.map((elementMetadata) => {
				if (elementMetadata.element.type == "acrobatic") {
					elementMetadata.elementType = "acrobatic"
				} else if (elementMetadata.element.type == "dance") {
					elementMetadata.elementType = "dance"
				}
				else {
					throw new Error("element is neither acrobatic nor dance")
				}
			})
		})
	}

	private identifyRepeatedElements() {
		var _repeated_elements: ElementType[] = []
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			comboMetadata.elements.map(elementMetadata => {
				if (_repeated_elements.includes(elementMetadata.element)) {
					elementMetadata.isRepeated = true
					comboMetadata.messages ? comboMetadata.messages?.push({ msg: "element is repeated", type: "warning" }) : [];
					}
				else {
					_repeated_elements.push(elementMetadata.element)
					elementMetadata.isRepeated = false
				}
			})
		})
	}

	countDifficultyElements() {
		var difficultyValue = 0
		var _nr_acrobatic_elements: number = nrAcrobatic
		var _nr_dance_elements: number = nrGymnastic
		var _total_nr_elements: number = nrElements - _nr_acrobatic_elements - _nr_dance_elements
		var _found_elements: ElementType[] = []

		if (!dismountDone(this.routineMutations.getRoutine())) {
			_nr_acrobatic_elements -= 1
		} else {
			// the dismount should be added to the routine
			let routineValue: ComboType[] = []
			this.routineMutations.routine.subscribe(value => routineValue = value)
			routineValue.map(comboMetadata => {
				comboMetadata.elements.map(elementMetadata => {
					// get the element with group number 6 (=dismount)
					if (elementMetadata.element.group_number == "6") {
						_nr_acrobatic_elements -= 1
						_found_elements.push(elementMetadata.element)
						difficultyValue += elementMetadata.element.value
						elementMetadata.value = elementMetadata.element.value
						// console.log("dismount", elementMetadata.value, elementMetadata.element.description)
					}
				})
			})

		}

		// get all the acrobatic elements
		var _acrobatic_elements: ElementMetadata[] = []
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			comboMetadata.elements.map(elementMetadata => {
				if (elementMetadata.elementType == "acrobatic") {
					_acrobatic_elements.push(elementMetadata)
				}
			})
		})

		// loop over the routine and count the number of acrobatic elements
		// the first n acrobatic elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		sort_elements(_acrobatic_elements).map((elementMetadata: ElementMetadata) => {
			if (elementMetadata.isRepeated == false) {
				if (_nr_acrobatic_elements > 0) {
					_found_elements.push(elementMetadata.element)
					_nr_acrobatic_elements -= 1
					difficultyValue += elementMetadata.element.value
					elementMetadata.value = elementMetadata.element.value
					// console.log("acrobatic", elementMetadata.value, elementMetadata.element.description)
				}
			}
		})

		// get all the dance elements
		var _dance_elements: ElementMetadata[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			comboMetadata.elements.map((elementMetadata: ElementMetadata) => {
				if (elementMetadata.elementType == "dance") {
					_dance_elements.push(elementMetadata)
				}
			})
		})


		// loop over the routine and count the number of dance elements
		// the first n dance elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		sort_elements(_dance_elements).map((elementMetadata: ElementMetadata) => {
			if (elementMetadata.isRepeated == false) {
				if (_nr_dance_elements > 0) {
					_found_elements.push(elementMetadata.element)
					_nr_dance_elements -= 1
					difficultyValue += elementMetadata.value ?? elementMetadata.element.value
					elementMetadata.value = elementMetadata.element.value
					// console.log("dance", elementMetadata.value, elementMetadata.element.description)
				}
			}
		})

		// get all elements
		var _other_elements: ElementMetadata[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map((comboMetadata) => {
			comboMetadata.elements.map(elementMetadata => {
				_other_elements.push(elementMetadata)
			})
		})

		// loop over the routine and count the number of other elements
		// the first n other elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		sort_elements(_other_elements).map((elementMetadata: ElementMetadata) => {
			if (!_found_elements.includes(elementMetadata.element)) {
				if (elementMetadata.isRepeated == false) {
					if (_total_nr_elements > 0) {
						_found_elements.push(elementMetadata.element)
						_total_nr_elements -= 1
						elementMetadata.value = elementMetadata.element.value
						difficultyValue += elementMetadata.element.value
						// console.log("other", elementMetadata.value, elementMetadata.element.description)
					}
				}
			}
		})

		this.difficultyCalculated = true
		return difficultyValue

	}

	showElements() {
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			console.log("---")
			comboMetadata.elements.map(elementMetadata => {
				console.log(elementMetadata.value, elementMetadata.isRepeated, elementMetadata.element.difficulty, elementMetadata.element.description)
			})
			console.log("comboBonus", comboMetadata.value)
		})
	}


	countConnectionValue() {
		/**
		 * Count the combos of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */
		// this.countSingleBonus("SerieBonus")
		// this.countSingleBonus("Acro met vlucht, (mag opsprong en afsprong zijn)")
		this.countSingleBonus("Dans")
		this.countSingleBonus("Draaien")
		this.countSingleBonus("Mix")

		let connectionValue = 0
		// add all the values of the combos to the combobonus
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			connectionValue += comboMetadata.value || 0
		})

		return connectionValue

	}

	private countSingleBonus(type: string) {

		// console.log("type", type)
		const comboOptionSerie = getComboDescription(type)

		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			// filter the combo that it contains all the differnt types of elements specified in the comboOption
			var _comboElements = comboMetadata.elements.filter(elementMetadata => comboOptionSerie.elementTypes.includes(elementMetadata.elementType))
			// TODO: this step should be done after the combo's have been spliced. 
			if (comboOptionSerie.uniqueElements) {
				_comboElements = _comboElements.filter(elementMetadata => elementMetadata.isRepeated == false)
			}
			var bonus: number = 0
			comboOptionSerie.combos.map(comboOption => {
				var _slicedElements: ElementMetadata[][] = sliceArray(_comboElements, comboOption.combo.length)
				if (comboOptionSerie.uniqueElements) {
					_slicedElements = _slicedElements.filter(slice => slice.every(elementMetadata => !elementMetadata.isRepeated))
				}

				var _nTimes = 0
				_slicedElements.map(slice => {
					const _sliceDifficulties = slice.map(elementMetadata => elementMetadata.element.difficulty)
					if (compareArrayBonus(_sliceDifficulties, comboOption.combo, comboOptionSerie.strictOrder)) {
						_nTimes += 1
					}
				})
				bonus += _nTimes * comboOption.value
				// console.log("bonus", bonus)
			})
			comboMetadata.value = bonus
		})


	}

	private countSeriesBonus() {
		/**
		 * Count the serie bonus of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {number}
		 */
		const comboOptionSerie = getComboDescription("SerieBonus")
		// console.log(comboOptionSerie)
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			// filter the combo that it contains all the differnt types of elements specified in the comboOption
			var _comboElements = comboMetadata.elements.filter(elementMetadata => comboOptionSerie.elementTypes.includes(elementMetadata.elementType))
			// console.log(comboMetadata.elements.map(elementMetadata => elementMetadata.element.description))
			
			// check the combo for the different combinations
			const values = _comboElements.map(elementMetadata => {
				return elementMetadata.element.difficulty
			}
			)
			// console.log(values, "vals")

			let b = compareArrayBonus(values, comboOptionSerie.combos[0].combo, comboOptionSerie.strictOrder)
			// console.log(b, "b")
		})
		return 1
	}

	private countDismountBonus() {
		/**
		 * Count the dismount bonus of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {number}
		 */

		const comboOptionDismount = getComboDescription("dismount_bonus").combos[0]
		//get the last combo and check if it's a dismount (group number 6)
		// if the difficulty of the element is higher than in dhe combo options, 
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		const dismount = routineValue[routineValue.length - 1].elements[routineValue[routineValue.length - 1].elements.length - 1]
		if (dismount.element.group_number == "6") {
			const dismountDifficulty = dismount.element.difficulty
			comboOptionDismount
			if (comboOptionDismount.combo[0].includes(dismountDifficulty)) {

				return comboOptionDismount.value
			} else return 0
		} return 0
	}


}
