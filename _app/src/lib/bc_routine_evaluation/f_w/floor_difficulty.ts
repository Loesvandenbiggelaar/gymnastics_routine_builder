import { sort_elements } from '../utils'
import { DifficultyClass } from "../difficulty_class"
import type { ElementMetadata, ComboType } from "$lib/stores/routineMutations"
import type { ElementType } from '$lib/data/elements/all_elements.js'
import type { ConnectionValueDetail } from '../types'


export class calculateDifficultyFloor extends DifficultyClass {
	nr_acro_lines: number = 0
	dismountDone: boolean = true

	getDismount(): ElementMetadata | undefined {
		// if no dismount is done, return undefined
		if (!this.dismountDone) {
			return undefined
		}

		// the dismount is the highest acrobatic element in the last acro line
		let dismountValue = 0
		let dismountElement: ElementMetadata | undefined = undefined
		let lastAcroLineIndex = -1
		this.routine.forEach((comboMetadata, index) => {
			if (comboMetadata.isAcroLine) {
				lastAcroLineIndex = index
			}
		})

		if (lastAcroLineIndex == -1) {
			return undefined
		}
		this.routine[lastAcroLineIndex].elements.forEach(elementMetadata => {
			if (elementMetadata.elementType === "acrobatic" && elementMetadata.value) {
				if (elementMetadata.value > dismountValue) {
					dismountValue = elementMetadata.value
					elementMetadata.hasDifficulty = true
					dismountElement = elementMetadata
				}
			}
		})
		return dismountElement
	}

	countDismountBonus(detail: ConnectionValueDetail) {
		// the dismount bonus is the value of the dismount element
		const comboOptionDismount = detail.combos[0]
		const dismountElement = this.getDismount()
		if (dismountElement) {
			if (comboOptionDismount.combo[0].includes((dismountElement as ElementMetadata).element.difficulty)) {
				return comboOptionDismount.value
			}
		}
		return 0
	}

	countDifficultyElements() {
		var difficultyValue = 0
		var _nr_acrobatic_elements: number = this.supplement.minAcro
		var _nr_dance_elements: number = this.supplement.minDance
		var _total_nr_elements: number = this.supplement.maxDV - _nr_acrobatic_elements - _nr_dance_elements
		var _found_elements: ElementType[] = []
		var min_acro_lines = this.supplement.acroLines?.min || 0


		if (this.nr_acro_lines < min_acro_lines) {
			this.addGeneralMessage(`Not enough acro lines ${this.nr_acro_lines}/${min_acro_lines}. So count 1 element less.`, "warning")
			_nr_acrobatic_elements -= 1
		}

			const dismountElement = this.getDismount()
			if (dismountElement) {
				_nr_acrobatic_elements -= 1
				_found_elements.push(dismountElement.element)
				difficultyValue += dismountElement?.value ?? 0
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

		console.log(_acrobatic_elements)
		const _nr_non_repeated_acro = _acrobatic_elements.filter(element => !element.isRepeated).length
		console.log(_nr_non_repeated_acro)
		// if the routine contains less than the minimum number of acrobatic elements, add a message
		if (_nr_non_repeated_acro < this.supplement.minAcro) {
			this.addGeneralMessage(`Not enough acrobatic elements ${_nr_non_repeated_acro}/${this.supplement.minAcro}`, "warning")
		}

		// loop over the routine and count the number of acrobatic elements
		// the first n acrobatic elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		console.log(_found_elements)
		sort_elements(_acrobatic_elements).map((elementMetadata: ElementMetadata) => {
			if (!_found_elements.includes(elementMetadata.element)) {
			if (elementMetadata.isRepeated == false && elementMetadata.hasDifficulty == undefined) {
				if (_nr_acrobatic_elements > 0) {
					elementMetadata.hasDifficulty = true
					_found_elements.push(elementMetadata.element)
					_nr_acrobatic_elements -= 1
					difficultyValue += elementMetadata.value ?? 0
				}
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
			if (elementMetadata.isRepeated == false && elementMetadata.hasDifficulty == undefined) {
				if (_nr_dance_elements > 0) {
					elementMetadata.hasDifficulty = true
					_found_elements.push(elementMetadata.element)
					_nr_dance_elements -= 1
					difficultyValue += elementMetadata.value ?? 0
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
 
		console.log(_found_elements)
		// loop over the routine and count the number of other elements
		// the first n other elements are counted
		// the elements with the highest value are counted first
		// if the element is already counted, it is not counted again
		sort_elements(_other_elements).map((elementMetadata: ElementMetadata) => {
			console.log(elementMetadata)
			if (!_found_elements.includes(elementMetadata.element)) {
				if (elementMetadata.isRepeated == false && elementMetadata.hasDifficulty == undefined) {
					if (_total_nr_elements > 0) {
						elementMetadata.hasDifficulty = true
						_found_elements.push(elementMetadata.element)
						_total_nr_elements -= 1
						elementMetadata.value = elementMetadata.element.value
						difficultyValue += elementMetadata.element.value
					}
				}
			}
		})

		let c = 0
		this.routine.map(comboMetadata => {
			comboMetadata.elements.map(elementMetadata => {
				// console.log(elementMetadata)
				if (elementMetadata.hasDifficulty == true) {
					c += elementMetadata.value ?? 0
				}
			})
		})
		// console.log(_found_elements)
		console.log("count", c)
		return c

	}

	calculate() {
		this.identifyTypeOfElement()
		this.identifyValueOfElements()
		this.checkAcroLines()
		this.identifyRepeatedElements()

		this.dscore.difficultyValue = this.countDifficultyElements()
		this.dscore.connectionValue = this.countConnectionValue() 

		const detail = this.supplement.connectionValuesAndBonus

		const dismountBonusDetail = detail.filter(val => val.type == "dismountBonus")[0]
		if (dismountBonusDetail) this.dscore.dismountBonus = this.countDismountBonus(dismountBonusDetail.detail)
		
		const serieBonusDetail = detail.filter(val => val.type == "serieBonus")[0]
		if (serieBonusDetail) this.dscore.serieBonus = this.countSeriesBonus(serieBonusDetail.detail)


		this.dscore.compositionalRequirements = this.countCompositionalRequirements()
		return this.dscore
	}

	checkAcroLines() {
		this.nr_acro_lines = this.countAcroLines()
		const min_acro_lines = this.supplement.acroLines?.min || 0
		if (this.nr_acro_lines < min_acro_lines) {
			this.addGeneralMessage(`Not enough acro lines ${this.nr_acro_lines}/${min_acro_lines}.`, "warning")
		}

		const max_acro_lines = this.supplement.acroLines?.max || 5
		if (this.nr_acro_lines > max_acro_lines) {
			this.addGeneralMessage(`Too many acro lines ${this.nr_acro_lines}/${max_acro_lines}. Not all acrobatic elements will have value!`, "warning")
		}

		// all acrobatic elements after the last acro line are not counted and devaluated
		let lastAcroLineIndex = -1
		this.routine.forEach((comboMetadata, index) => {
			if (comboMetadata.isAcroLine) {
				lastAcroLineIndex = index
			}
		})

		this.routine.forEach((comboMetadata, index) => {
			if (index > lastAcroLineIndex) {
				const is_acro_line = comboMetadata.isAcroLine
				comboMetadata.elements.forEach(elementMetadata => {
					if (!is_acro_line && elementMetadata.elementType === "acrobatic") {
						elementMetadata.devaluated = true
						elementMetadata.value = 0
						elementMetadata.hasDifficulty = false
						this.addGeneralMessage("Acrobatic elements after the last acro line do not count", "warning")
					}
				})
			}
		})

	}

	acroLineRequirement(comboMetadata: ComboType, possibleElements: ElementMetadata[][] | undefined) {
		// sometimes only 1 element is required, sometimes more
		let isAcroLine = false
		if (possibleElements) {
			if (possibleElements.length == 1) {
				isAcroLine = comboMetadata.elements.some(elementMetadata => {
					return possibleElements[0].includes(elementMetadata)
				})
			}
			if (possibleElements.length > 1) {
				isAcroLine = this.requirementConnectedElements(comboMetadata, possibleElements)
				isAcroLine = isAcroLine == false ? this.requirementConnectedElements(comboMetadata, possibleElements, "-") : isAcroLine
			}
		}
		return isAcroLine

	}

	countAcroLines() {
		// for every combo, check if it's an acro line
		let acro_lines = 0
		let acro_lines_for_dismount = 0
		const requirement = this.supplement.acroLines?.requirement
		const possibleElements = requirement ? this.getPossibleElements(requirement, this.routine) : undefined

		this.routine.map(comboMetadata => {
			let isAcroLine = this.acroLineRequirement(comboMetadata, possibleElements)
			if (isAcroLine) {
				acro_lines_for_dismount += 1
				comboMetadata.messages?.push({ msg: "This is an acro line", type: "info" })
				comboMetadata.isAcroLine = true
				// check if at least one acrobatic element in the combo is not repeated already
				let acroElement = comboMetadata.elements.find(elementMetadata => elementMetadata.elementType == "acrobatic" && elementMetadata.isRepeated == false)
				// if not, add a message
				if (!acroElement) {
					comboMetadata.messages?.push({ msg: "All acro in this combo is repeated! the acro line is not counted", type: "warning" })
				}
				else {
					acro_lines += 1
				}
			}

		})


		// if only one acro line in total is found, no dismount is done
		if (acro_lines_for_dismount == 1) {
			this.dismountDone = false
			this.addGeneralMessage(`Only one counting acro line found. No dismount is done.`, "warning")
			this.neutralDeduction -= 0.5
		}

		return acro_lines
	}

}
