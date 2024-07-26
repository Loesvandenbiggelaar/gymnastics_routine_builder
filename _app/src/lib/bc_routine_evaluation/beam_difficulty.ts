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
import type { Dscore } from '$lib/stores/datastore'
import type { RoutineMessage } from '$lib/stores/routineMutations'

// import { routineBuilder } from '$lib/stores/routineBuilder.js'
import type { ComboType, ElementMetadata } from '$lib/stores/routineMutations.js'
import type { RoutineMutations } from '$lib/stores/routineMutations'
import type { ElementType } from '$lib/data/elements/all_elements.js'
import type { ConnectionValueDetail, Supplement } from './routine_evaluation_beam'
// These constants are based on the level of the gymnast. 

export class calculateDifficulty {
	messages: RoutineMessage[]
	supplement: Supplement
	routineMutations: RoutineMutations
	dscore: Dscore = {
		difficultyValue: 0,
		compositionalRequirements: 0,
		connectionValue: 0,
		serieBonus: 0,
		dismountBonus: 0,
		totalDifficulty: 0
	}

	constructor(routine: RoutineMutations, supplement: Supplement) {
		this.routineMutations = routine
		this.supplement = supplement
		this.messages = []
		// console.log(supplement)
	}


	private addGeneralMessage(message: string, type: string) {
		this.messages.push({ msg: message, type: type })
	}

	private addMessage(combo:ComboType, message:string, type:string) {
		if (!combo.messages) {
			combo.messages = []
		}
		combo.messages.push({ msg: message, type: type })
	}


	private checkMounts() {
		/**
		 * Check if the routine starts with a mount
		 * 
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		// get the first element of the routine
		const first_element = routineValue[0].elements[0]
		if (first_element.element.group_number != '1') {
			// add a message if the routine starts with a mount
			this.addGeneralMessage("Routine does not start with a mount", "info")
	}

	// if there are more elements with group number 1, add a message
	const mounts = routineValue.filter(combo => combo.elements[0].element.group_number == '1')
	if (mounts.length > 1) {
		this.addGeneralMessage("More than one mount added", "error")
	}
}

private checkDismounts() {
	/**
	 * Check if the routine ends with a dismount
	 * 
	 * @param {RoutineMetadata}
	 * @returns {void}
	 */
	if (!dismountDone(this.routineMutations.getRoutine())){
		this.addGeneralMessage("Dismount is not done", "warning")
	}


	// if there are more elements with group number 6, add a message
	let routineValue: ComboType[] = []
	this.routineMutations.routine.subscribe(value => routineValue = value)
	const dismounts = routineValue.filter(combo => combo.elements[combo.elements.length - 1].element.group_number == '6')
	if (dismounts.length > 1) {
		this.addGeneralMessage("More than one dismount added", "error")
	}
}

private checkNrOfElements() {
	/**
	 * Check if the routine contains the correct number of elements
	 * 
	 * @param {RoutineMetadata}
	 * @returns {void}
	 */
	let routineValue: ComboType[] = []
	this.routineMutations.routine.subscribe(value => routineValue = value)
	// get all the elements which have difficulty value and are not repeated
	// console.log(routineValue)
	const elements = routineValue.map(combo => combo.elements.filter(element => !element.isRepeated)).flat()
	console.log(elements.length)
	if (elements.length < this.supplement.maxDV -1) {
		this.addGeneralMessage(`Not enough elements ${elements.length}/${this.supplement.maxDV}`, "warning")
	}
	if (elements.length > this.supplement.maxDV) {
		this.addGeneralMessage(`Too many elements ${elements.length}/${this.supplement.maxDV}`, "warning")
	}

}

	private reset() {
		this.messages = []
		this.dscore = {
			difficultyValue: 0,
			compositionalRequirements: 0,
			connectionValue: 0,
			serieBonus: 0,
			dismountBonus: 0,
			totalDifficulty: 0
		}
		// remove the messages from all combos and elements
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			comboMetadata.messages = []
			comboMetadata.elements.map(elementMetadata => {
				elementMetadata.devaluated = undefined
				elementMetadata.value = undefined
			})
		})
	}

	public calculate() {
		this.reset()
		// if the routineMutations doesn't have any elements; return
		if (this.routineMutations.getRoutine().length == 0) {
			return this.dscore
		}

		this.identifyTypeOfElement()
		this.identifyValueOfElements()
		this.identifyRepeatedElements()


		const detail = this.supplement.connectionValuesAndBonus
		
		this.dscore.difficultyValue = roundValue( this.countDifficultyElements())
		
		this.dscore.connectionValue = roundValue(this.countConnectionValue())

		
		// add the serie bonus to the bonus
		const serieBonusDetail = detail.filter(val => val.type == "serieBonus")[0]
		if(serieBonusDetail) this.dscore.serieBonus += roundValue( this.countSeriesBonus(serieBonusDetail.detail))

		// add the dismount bonus to the bonus
		const dismountBonusDetail = detail.filter(val => val.type == "dismountBonus")[0]
		if (dismountBonusDetail) this.dscore.dismountBonus += roundValue(this.countDismountBonus(dismountBonusDetail.detail))

		this.dscore.totalDifficulty = roundValue(this.dscore.difficultyValue + this.dscore.connectionValue + this.dscore.serieBonus + this.dscore.dismountBonus + this.dscore.compositionalRequirements)

		this.checkNrOfElements()
		this.checkMounts()
		this.checkDismounts()

		console.log(this.dscore)
		console.log(this.routineMutations.getRoutine())
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
		var _performed_elements: string[] = []
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {

			comboMetadata.elements.map(elementMetadata => {
				if (_performed_elements.includes(elementMetadata.element.id)) {
					elementMetadata.isRepeated = true
					}
				else {
					_performed_elements.push(elementMetadata.element.id)
					elementMetadata.isRepeated = false
				}
			})
		})
		this.routineMutations.routine.set(routineValue)
	}

	private identifyValueOfElements() {
		const diff_to_value: { [key: string]: number } = {"A":0.1, "B":0.2, "C":0.3, "D":0.4, "E":0.5, "F":0.6, "G":0.7, "H":0.8, "I":0.9}
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		// console.log(this.supplement.allowedDifficulty)
		routineValue.map(comboMetadata => {
			comboMetadata.elements.map(elementMetadata => {
				if (this.supplement.allowedDifficulty.includes(elementMetadata.element.difficulty)) {
					elementMetadata.value = Number(elementMetadata.element.value);
				}
				else {
					elementMetadata.value = diff_to_value[this.supplement.allowedDifficulty[this.supplement.allowedDifficulty.length - 1]]
					elementMetadata.devaluated = true
					
				}
				// console.log(elementMetadata)
			})
		})
	
	}

	countDifficultyElements() {
		var difficultyValue = 0
		var _nr_acrobatic_elements: number = this.supplement.minAcro
		var _nr_dance_elements: number = this.supplement.minDance
		var _total_nr_elements: number = this.supplement.maxDV - _nr_acrobatic_elements - _nr_dance_elements
		var _found_elements: ElementType[] = []

		if (!dismountDone(this.routineMutations.getRoutine())) {
			_nr_acrobatic_elements -= 1
		} else {
			let routineValue: ComboType[] = []
			this.routineMutations.routine.subscribe(value => routineValue = value)
			
			routineValue.map(comboMetadata => {
				comboMetadata.elements.map(elementMetadata => {
					// get the element with group number 6 (=dismount)
					if (elementMetadata.element.group_number == "6") {
						_nr_acrobatic_elements -= 1
						_found_elements.push(elementMetadata.element)
						difficultyValue += elementMetadata.value ?? 0
						// elementMetadata.value = elementMetadata.element.value
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

		const _nr_non_repeated_acro = _acrobatic_elements.filter(element => !element.isRepeated).length
		// if the routine contains less than the minimum number of acrobatic elements, add a message
		if (_nr_non_repeated_acro < this.supplement.minAcro) {
			this.addGeneralMessage(`Not enough acrobatic elements ${_nr_non_repeated_acro}/${this.supplement.minAcro}`, "warning")
		}

		// loop over the routine and count the number of acrobatic elements
		// the first n acrobatic elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		sort_elements(_acrobatic_elements).map((elementMetadata: ElementMetadata) => {
			if (elementMetadata.isRepeated == false) {
				if (_nr_acrobatic_elements > 0) {
					_found_elements.push(elementMetadata.element)
					_nr_acrobatic_elements -= 1
					difficultyValue += elementMetadata.value ?? 0
					// elementMetadata.value = elementMetadata.element.value
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

		// if the routine contains less than the minimum number of dance elements, add a message
		const _nr_non_repeated_dance = _dance_elements.filter(element => !element.isRepeated).length
		if (_nr_non_repeated_dance < this.supplement.minDance) {
			this.addGeneralMessage(`Not enough dance elements ${_nr_non_repeated_dance}/${this.supplement.minDance}`, "warning")
		}

		// loop over the routine and count the number of dance elements
		// the first n dance elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		sort_elements(_dance_elements).map((elementMetadata: ElementMetadata) => {
			if (elementMetadata.isRepeated == false) {
				if (_nr_dance_elements > 0) {
					_found_elements.push(elementMetadata.element)
					_nr_dance_elements -= 1
					difficultyValue += elementMetadata.value ?? 0
					// elementMetadata.value = elementMetadata.element.value
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
					}
				}
			}
		})

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
		const comboOptionSerie = this.supplement.connectionValuesAndBonus
		
		comboOptionSerie.forEach((val) => {
			if (!["dismountBonus", "serieBonus"].includes(val.type)) {
			// console.log(val)
			this.countSingleBonus(val.detail)
			}
		})

		let connectionValue = 0
		// add all the values of the combos to the combobonus
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		routineValue.map(comboMetadata => {
			connectionValue += comboMetadata.value || 0
		})

		return connectionValue

	}

	private countSingleBonus(comboOptionSerie: ConnectionValueDetail) {		
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
			})
			comboMetadata.value = bonus
		})


	}

	private countSeriesBonus(comboOptionSerie: ConnectionValueDetail) {
		/**
		 * Count the serie bonus of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {number}
		 */
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

	private countDismountBonus(detail: ConnectionValueDetail) {
		/**
		 * Count the dismount bonus of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {number}
		 */

		const comboOptionDismount = detail.combos[0]
		//get the last combo and check if it's a dismount (group number 6)
		// if the difficulty of the element is higher than in dhe combo options, 
		let routineValue: ComboType[] = []
		this.routineMutations.routine.subscribe(value => routineValue = value)
		const dismount = routineValue[routineValue.length - 1].elements[routineValue[routineValue.length - 1].elements.length - 1]
		if (dismount.element.group_number == "6") {
			const dismountDifficulty = dismount.element.difficulty
			comboOptionDismount
			if (comboOptionDismount.combo.includes(dismountDifficulty)) {
				return comboOptionDismount.value
			}
		} 

		return 0
	}


}
