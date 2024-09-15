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

import { sort_elements } from './utils'
import type { ComboType, ElementMetadata } from '$lib/stores/routineMutations.js'
import type { ElementType } from '$lib/data/elements/all_elements.js'
import { DifficultyClass } from './difficulty_class'

export class calculateDifficultyBeam extends DifficultyClass {

	calculate() {
		/**
		 * Calculate the difficulty of the routine.
		 * It identifies the elements and it's value, and checks whether the elements are repeated.
		 * It counts the difficulty elements, the connection value, the serie bonus and the dismount bonus.
		 * It checks the number of elements, the mounts and the dismounts.
		 * It adds the difficulty value, the connection value, the serie bonus, the dismount bonus and the compositional requirements to the dscore.
		 * It adds the general messages to the messages.
		 * It returns the dscore.
		 * 
		 * @param {void}
		 * @returns {Dscore}
		 */


		// evaluate the elements
		this.identifyTypeOfElement()
		this.identifyValueOfElements()
		this.identifyRepeatedElements()

		this.dscore.difficultyValue = this.countDifficultyElements()
		this.dscore.connectionValue = this.countConnectionValue()

		// get the detail of the connection values and bonus
		const detail = this.supplement.connectionValuesAndBonus

		// add the serie bonus to the bonus (if applicable)
		const serieBonusDetail = detail.filter(val => val.type == "serieBonus")[0]
		if (serieBonusDetail) this.dscore.serieBonus += this.countSeriesBonus(serieBonusDetail.detail)

		// add the dismount bonus to the bonus
		const dismountBonusDetail = detail.filter(val => val.type == "dismountBonus")[0]
		if (dismountBonusDetail) this.dscore.dismountBonus += this.countDismountBonus(dismountBonusDetail.detail, "6")

		this.dscore.compositionalRequirements = this.countCompositionalRequirements()

		this.checkNrOfElements()
		this.checkMounts()
		this.checkDismounts()

		return this.dscore
	}

	private checkMounts() {
		/**
		 * Check if the routine starts with a mount
		 * 
		 * @param {RoutineMetadata}
		 * @returns {void}
		 */

		// get the first element of the routine
		const first_element = this.routine[0].elements[0]
		if (first_element.element.group_number != '1') {
			// add a message if the routine starts with a mount
			this.addGeneralMessage("Routine does not start with a mount", "info")
		}

		// if there are more elements with group number 1, add a message
		const mounts = this.routine.filter(combo => combo.elements[0].element.group_number == '1')
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
		if (!this.dismountDone(this.routine)) {
			this.addGeneralMessage("Dismount is not done", "warning")
		}


		// if there are more elements with group number 6, add a message
		const dismounts = this.routine.filter(combo => combo.elements[combo.elements.length - 1].element.group_number == '6')
		if (dismounts.length > 1) {
			this.addGeneralMessage("More than one dismount added", "error")
		}
	}

	countDifficultyElements() {
		var difficultyValue = 0
		var _nr_acrobatic_elements: number = this.supplement.minAcro
		var _nr_dance_elements: number = this.supplement.minDance
		var _total_nr_elements: number = this.supplement.maxDV - _nr_acrobatic_elements - _nr_dance_elements
		var _found_elements: ElementType[] = []

		if (!this.dismountDone(this.routine)) {
			_nr_acrobatic_elements -= 1
		}
		 {
			this.routine.map(comboMetadata => {
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
		this.routine.map(comboMetadata => {
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
		this.routine.map(comboMetadata => {
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
				}
			}
		})

		// get all elements
		var _other_elements: ElementMetadata[] = []
		this.routine.map((comboMetadata) => {
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

	/**
	 * Check if the routine is done.
	 * 
	 * @param {ComboType[]} routine - The routine to check.
	 * @returns {boolean} - True if the routine is done, false otherwise.
	 */
	dismountDone(routine: ComboType[]): boolean {
		// get the last element of the routine
		if (!routine) return false
		const last_element = routine[routine.length - 1].elements[routine[routine.length - 1].elements.length - 1]
		if (last_element.element.group_number == '6') {
			return true
		} else {
			return false
		}
	}

}
