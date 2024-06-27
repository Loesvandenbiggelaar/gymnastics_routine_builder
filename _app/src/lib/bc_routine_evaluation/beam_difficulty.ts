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

import { roundValue, flatten_routine as flattenRoutine, is_dismount_done, sort_elements, ElementType, sliceArray, compareArrayBonus } from './helper_functions.js'
import { ComboMetadata, ElementMetadata, Routine, RoutineMetadata, comboOptionD1, getComboDescription } from './routine_evaluation.js'
import { beam_routine_normal } from './test_routines.js'
// These constants are based on the level of the gymnast. 
const nrElements = 8
const nrAcrobatic = 3
const nrGymnastic = 3

// // dummy routine; should be retrieved from the routine builder
// const routine = beam_routine_normal;

export class calculate_difficulty {
	routine: Routine
	routineMetadata: RoutineMetadata
	routineFlatten: ElementType[]
	difficultyElements: number
	totalBonus: number
	eisenTODO: number
	totalDifficulty: number
	difficultyCalculated: boolean = false

	constructor(routine: Routine) {
		this.routine = routine
		this.routineMetadata = this.convertToMetadata()
		this.routineFlatten = flattenRoutine(routine)
		this.difficultyElements = 0
		this.totalBonus = 0
		this.eisenTODO = 0
		this.totalDifficulty = this.difficultyElements + this.totalBonus + this.eisenTODO
		this.identifyTypeOfElement()
		this.identifyRepeatedElements()
		this.coutDifficultyElements()
	}

	// put elements in a json so metadata can be given to the elements
	// also put combos in a json so metadata can be given
	private convertToMetadata() {
		/**
		 * Convert the routine to a metadata format
		 * 
		 * @param {Routine}
		 * @returns {RoutineMetadata}
		 */
		return this.routine.map(combo => {
			return {
				combo: combo.map((element, index) => {
					return {
						element: element,
						order: index,
						value: 0,
					}
				}),
				value: 0
			}
		})
	}

	private identifyTypeOfElement() {
		/**
		 * Identify the type of the element
		 * @param {RoutineMetadata} routineMetadata - the routine metadata
		 * @returns {void}
		 */
		this.routineMetadata.map(comboMetadata => {
			comboMetadata.combo.map((elementMetadata: ElementMetadata) => {
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
		/**
		 * Identify the repeated elements in the routine
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */
		var _repeated_elements: ElementType = []
		this.routineMetadata.map(comboMetadata => {
			comboMetadata.combo.map(elementMetadata => {
				if (_repeated_elements.includes(elementMetadata.element)) {
					elementMetadata.isRepeated = true
				}
				else {
					_repeated_elements.push(elementMetadata.element)
					elementMetadata.isRepeated = false
				}
			})
		})
	}

	coutDifficultyElements() {
		/**
		 * Calculate the difficulty elements of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */

		if (this.difficultyCalculated) return

		var _nr_acrobatic_elements: number = nrAcrobatic
		var _nr_dance_elements: number = nrGymnastic
		var _total_nr_elements: number = nrElements - _nr_acrobatic_elements - _nr_dance_elements
		var _found_elements: ElementType = []

		if (!is_dismount_done(this.routineFlatten)) {
			_nr_acrobatic_elements -= 1
		} else {
			// the dismount should be added to the routine
			this.routineMetadata.map(comboMetadata => {
				comboMetadata.combo.map(elementMetadata => {
					// get the element with group number 6 (=dismount)
					if (elementMetadata.element.group_number == "6") {
						_nr_acrobatic_elements -= 1
						_found_elements.push(elementMetadata.element)
						this.difficultyElements += elementMetadata.element.value
						elementMetadata.value = elementMetadata.element.value
						// console.log("dismount", elementMetadata.value, elementMetadata.element.description)
					}
				})
			})
		}

		// get all the acrobatic elements
		var _acrobatic_elements: ElementMetadata[] = []
		this.routineMetadata.map(comboMetadata => {
			comboMetadata.combo.map(elementMetadata => {
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
					this.difficultyElements += elementMetadata.element.value
					elementMetadata.value = elementMetadata.element.value
					// console.log("acrobatic", elementMetadata.value, elementMetadata.element.description)
				}
			}
		})

		// get all the dance elements
		var _dance_elements: ElementMetadata[] = []
		this.routineMetadata.map(comboMetadata => {
			comboMetadata.combo.map((elementMetadata: ElementMetadata) => {
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
					this.difficultyElements += elementMetadata.value ?? elementMetadata.element.value
					elementMetadata.value = elementMetadata.element.value
					// console.log("dance", elementMetadata.value, elementMetadata.element.description)
				}
			}
		})

		// get all elements
		var _other_elements: ElementMetadata[] = []
		this.routineMetadata.map((comboMetadata: ComboMetadata) => {
			comboMetadata.combo.map(elementMetadata => {
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
						_found_elements.push(elementMetadata)
						_total_nr_elements -= 1
						elementMetadata.value = elementMetadata.element.value
						this.difficultyElements += elementMetadata.element.value
						// console.log("other", elementMetadata.value, elementMetadata.element.description)
					}
				}
			}
		})

		this.difficultyCalculated = true
	}

	showElements() {
		/**
		 * Show the elements of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */
		this.routineMetadata.map(comboMetadata => {
			console.log("---")
			comboMetadata.combo.map(elementMetadata => {
				console.log(elementMetadata.value, elementMetadata.isRepeated, elementMetadata.element.difficulty, elementMetadata.element.description)
			})
			console.log("comboBonus", comboMetadata.value)
		})
	}


	countCombos() {
		/**
		 * Count the combos of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */
		// this.countSingleBonus("SerieBonus")
		// this.countSingleBonus("Acro met vlucht, (mag opsprong en afsprong zijn)")
		// this.countSingleBonus("Dans")
		// this.countSingleBonus("Draaien")
		// this.countSingleBonus("Mix")


		// add all the values of the combos to the combobonus
		this.routineMetadata.map(comboMetadata => {
			this.totalBonus += comboMetadata.value
		})

		// add the serie bonus to the bonus
		this.totalBonus += this.countSeriesBonus()

		// add the dismount bonus to the bonus
		this.totalBonus += this.countDismountBonus()

	}

	private countSingleBonus(type: string) {

		console.log("type", type)
		const comboOptionSerie = getComboDescription(type)

		this.routineMetadata.map(comboMetadata => {
			// filter the combo that it contains all the differnt types of elements specified in the comboOption
			var _comboElements = comboMetadata.combo.filter(elementMetadata => comboOptionSerie.elementTypes.includes(elementMetadata.elementType))
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
				console.log("bonus", bonus)
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
		this.routineMetadata.map(comboMetadata => {
			// filter the combo that it contains all the differnt types of elements specified in the comboOption
			var _comboElements = comboMetadata.combo.filter(elementMetadata => comboOptionSerie.elementTypes.includes(elementMetadata.elementType))
			const _containsAll = comboOptionSerie.elementTypes.every(elementType => _comboElements.map(elementMetadata => elementMetadata.elementType).includes(elementType))
			console.log(comboMetadata.combo.map(elementMetadata => elementMetadata.element.description))
			console.log("containsAll", _containsAll)

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
		const dismount = this.routineMetadata[this.routineMetadata.length - 1].combo[this.routineMetadata[this.routineMetadata.length - 1].combo.length - 1]
		if (dismount.element.group_number == "6") {
			const dismountDifficulty = dismount.element.difficulty
			comboOptionDismount
			if (comboOptionDismount.combo[0].includes(dismountDifficulty)) {

				return comboOptionDismount.value
			} else return 0
		} return 0
	}
}

var r = new calculate_difficulty(beam_routine_normal)
// r.showElements()
console.log(r.difficultyElements)
console.log(r.countCombos())
console.log("combobonus", r.totalBonus)
r.showElements()

// r.compareArraysSerieBonus(["a", "b", "b"], ["a", "c", "a"])
