import type { ComboType, ElementMetadata, RoutineMessage } from '$lib/stores/routineMutations'
import type { Supplement, Dscore, ElementRequirementDetail, Requirement, ConnectionValueDetail } from './types'
import type { RoutineMutations } from '$lib/stores/routineMutations'
import { checkIfDifficultyIsHigher, difficultyToValue, roundValue, sliceArray, compareArrayBonus } from './utils'

export abstract class DifficultyClass {
    messages: RoutineMessage[]
    supplement: Supplement
    routineMutations: RoutineMutations
    routine: ComboType[]
    compositionalRequirements
    public dscore: Dscore = {
        difficultyValue: 0,
        totalDifficulty: 0
    }
    neutralDeduction = 0

    constructor(routine: RoutineMutations, supplement: Supplement) {
        this.routineMutations = routine
        this.supplement = supplement
        this.messages = []
        this.routine = []
        this.routineMutations.routine.subscribe(value => this.routine = value)

        // create an object with description of the comp. requirement + if the requirement is met or not
        this.compositionalRequirements = Object.keys(supplement.compositionalRequirements).map((key: string) => {
            return { "number": key, "requirement": supplement.compositionalRequirements[key].description, "met": false }
        })
    }

    addGeneralMessage(message: string, type: string) {
        this.messages.push({ msg: message, type: type })
    }

    reset() {
        /**
         * Reset the messages and the dscore
         * @param {void}
         * @returns {void}
         */
        this.messages = []
        this.dscore = {
            difficultyValue: 0,
            totalDifficulty: 0
        }
        this.neutralDeduction = 0

        // remove the messages from all combos and elements
        this.routine.map(comboMetadata => {
            comboMetadata.messages = []
            comboMetadata.isAcroLine = undefined
            comboMetadata.elements.map(elementMetadata => {
                elementMetadata.devaluated = undefined
                elementMetadata.value = undefined
                elementMetadata.hasDifficulty = undefined
            })
        })
    }

    checkNrOfElements() {
        /**
         * Check if the routine contains the correct number of elements
         * 
         * @param {RoutineMetadata}
         * @returns {void}
         */

        // get all the elements which have difficulty value and are not repeated
        const elements = this.routine.map(combo => combo.elements.filter(element => !element.isRepeated)).flat()
        if (elements.length < this.supplement.maxDV - 1) {
            this.addGeneralMessage(`Neutral deduction of - 4 points! Not enough elements ${elements.length}/${this.supplement.maxDV}`, "warning")
            this.neutralDeduction = -4
        }
        if (elements.length > this.supplement.maxDV) {
            this.addGeneralMessage(`Too many elements ${elements.length}/${this.supplement.maxDV}`, "warning")
        }

    }

    identifyTypeOfElement() {
        this.routine.map(comboMetadata => {
            comboMetadata.elements.map((elementMetadata) => {
                if (elementMetadata.element.type == "acrobatic") {
                    elementMetadata.elementType = "acrobatic"
                }
                if (elementMetadata.element.type == "dance") {
                    elementMetadata.elementType = "dance"
                }
                if (elementMetadata.element.type == "non-acrobatic") {
                    elementMetadata.elementType = "non-acrobatic"
                }
                if (elementMetadata.elementType == undefined) {
                    throw new Error("element is neither acrobatic nor dance")
                }
            })
        })
    }

    identifyRepeatedElements() {
        var _performed_elements: string[] = []
        this.routine.map(comboMetadata => {

            comboMetadata.elements.map(elementMetadata => {
                if (_performed_elements.includes(elementMetadata.element.id)) {
                    elementMetadata.isRepeated = true
                    elementMetadata.hasDifficulty = false
                    elementMetadata.value = 0
                }
                else {
                    _performed_elements.push(elementMetadata.element.id)
                    elementMetadata.isRepeated = false
                }
            })
        })
        this.routineMutations.routine.set(this.routine)
    }

    identifyValueOfElements() {
        this.routine.map(comboMetadata => {
            comboMetadata.elements.map(elementMetadata => {
                if (this.supplement.allowedDifficulty.includes(elementMetadata.element.difficulty)) {
                    elementMetadata.value = Number(elementMetadata.element.value)
                }
                else {
                    const highest_difficulty = this.supplement.allowedDifficulty[this.supplement.allowedDifficulty.length - 1]
                    elementMetadata.value = difficultyToValue(highest_difficulty)
                    elementMetadata.devaluated = true

                }
            })
        })

    }

    checkIfElementRequirementIsMet(elementMetadata: ElementMetadata, elementRequirement: ElementRequirementDetail) {
        /**
         * Check if the element meets the requirements
         * 
         * @param {ElementMetadata}
         * @param {any}
         * @returns {boolean}
         */

        const verbose = false
        var _element_requirement_met = false
        if (verbose) console.log(elementMetadata.element.description)

        // first check if the element is in the specificElements list
        if (elementRequirement.specificElements.length > 0) {
            if (verbose) console.log("checking specific elements")
            if (elementRequirement.specificElements.includes(elementMetadata.element.id)) {
                if (verbose) console.log("specific element found")
                _element_requirement_met = true
            } else {
                if (verbose) console.log("specific element not found")
            }
        }
        // check if the element is of the right type
        if (elementRequirement.type.includes(elementMetadata.elementType)) {
            if (verbose) console.log("type correct")
            // check if the element is of the right group
            // if elementRequirement.group is empty, it means that the group is not important
            if (elementRequirement.group.length == 0 || elementRequirement.group.includes(Number(elementMetadata.element.group_number))) {
                if (verbose) console.log("group correct")
                // check if the element has the right difficulty
                if (checkIfDifficultyIsHigher(elementMetadata.element.difficulty, elementRequirement.minimalValue, true)) {
                    if (verbose) console.log("difficulty correct")
                    // check if the description contains the keywords
                    if (elementRequirement.keywords.length > 0) {
                        if (verbose) console.log("checking keywords")
                        // check if the description contains the keywords
                        if (elementRequirement.keywords.every((keyword: string | string[]) => {
                            if (Array.isArray(keyword)) {
                                // if the keyword is an array, it becomes an "or" statement
                                return keyword.some((key: string) => elementMetadata.element.description.toLowerCase().includes(key.toLowerCase()))
                            } else {
                                return elementMetadata.element.description.toLowerCase().includes(keyword.toLowerCase())
                            }
                        })) {
                            if (verbose) console.log("keywords correct")
                            _element_requirement_met = true
                        } else {
                            if (verbose) console.log("keywords not correct")
                            _element_requirement_met = false
                            return _element_requirement_met
                        }
                    } else {
                        if (verbose) console.log("no keywords given")
                        _element_requirement_met = true
                    }
                    // check if the description does not contain the antiKeywords
                    if (elementRequirement.antiKeywords.length > 0) {
                        if (elementRequirement.antiKeywords.every((keyword: string | string[]) => {
                            if (Array.isArray(keyword)) {
                                // if the keyword is an array, it becomes an "or" statement
                                return keyword.some((key: string) => !elementMetadata.element.description.toLowerCase().includes(key.toLowerCase()))
                            } else {
                                return !elementMetadata.element.description.toLowerCase().includes(keyword.toLowerCase())
                            }
                        })) {
                            if (verbose) console.log("antiKeywords correct")
                            _element_requirement_met = true
                        } else {
                            if (verbose) console.log("antiKeywords not correct")
                            _element_requirement_met = false
                            return _element_requirement_met
                        }
                    } else {
                        if (verbose) console.log("no antiKeywords")
                    }
                } else {
                    if (verbose) console.log("difficulty not correct")
                }
            } else {
                if (verbose) console.log("group not correct")
            }
        } else {
            if (verbose) console.log("type not correct")
        }


        return _element_requirement_met
    }

    requirementSameComboElements(comboMetadata: ComboType, possibleElements: ElementMetadata[][]) {
        var usedElements: ElementMetadata[] = []
        comboMetadata.elements.forEach(elementMetadata => {
            for (let i = 0; i < possibleElements.length; i++) {
                if (possibleElements[i].includes(elementMetadata)) {
                    if (!usedElements.includes(elementMetadata)) {
                        usedElements.push(elementMetadata)
                    }
                }
            }
        })
        if (usedElements.length == possibleElements.length) return true
        else return false
    }

    requirementConnectedElements(comboMetadata: ComboType, possibleElements: ElementMetadata[][], direction: string = "+") {
        const statement = (i: number) => direction == "+" ? i + 1 : i - 1
        var requirement_met = false
        comboMetadata.elements.forEach((elementmetadata, index) => {
            for (let i = 0; i < possibleElements.length - 1; i++) {
                if (possibleElements[i].includes(elementmetadata)) {
                    if (statement(index) < comboMetadata.elements.length && statement(index) >= 0) {
                        if (possibleElements[i + 1].includes(comboMetadata.elements[statement(index)]))
                            requirement_met = true
                    }
                }
            }
        }
        )
        return requirement_met
    }

    /**
     * Go over the routine and check which elements could possible be used to meet the requirement.
     * it ignores the position of the element, i.e. if multiple elements should be connected.
     * @param requirement the requirement
     * @param routineValue the routine
     * @returns 
     */
    getPossibleElements(requirement: Requirement, routineValue: ComboType[]) {
        return requirement.elements.map((elementRequirement: any) => {
            const possibleElements = routineValue.flatMap(comboMetadata => {
                const comboElements = requirement.elementsShouldBeUnique ? comboMetadata.elements.filter(elementMetadata => !elementMetadata.isRepeated) : comboMetadata.elements
                return comboElements.map((elementMetadata) => {
                    if (this.checkIfElementRequirementIsMet(elementMetadata, elementRequirement)) {
                        return elementMetadata
                    }
                })
            }).filter(elementMetadata => elementMetadata !== undefined)
            return possibleElements
        }
        )
    }

    checkRequirement(requirement: Requirement, routineValue: ComboType[]) {
        var _requirement_met = false
        var possibleElements = this.getPossibleElements(requirement, routineValue)

        var isFound: Boolean[] = new Array(possibleElements.length).fill(false)

        if (requirement.elementsShouldBeInTheSameCombo) {
            routineValue.map(comboMetadata => {
                // check if the elements are connected
                if (requirement.elementsShouldBeConnected) {
                    _requirement_met = this.requirementConnectedElements(comboMetadata, possibleElements) == true ? true : _requirement_met
                }
                else {
                    // check if the elements are in the combo, not necessarily after each other
                    _requirement_met = this.requirementSameComboElements(comboMetadata, possibleElements) == true ? true : _requirement_met

                }
            })
        }

        if (requirement.elementsShouldBeAfterEachOther) {
            const routineFlat = routineValue.map(comboMetadata => comboMetadata.elements.map(elementMetadata => elementMetadata)).flat()
            const positive_req = this.requirementConnectedElements({ elements: routineFlat }, possibleElements)
            if (positive_req) {
                _requirement_met = true
            }
            const negative_req = this.requirementConnectedElements({ elements: routineFlat }, possibleElements, "-")
            if (negative_req) {
                _requirement_met = true
            }
        }

        if (!requirement.elementsShouldBeConnected && !requirement.elementsShouldBeInTheSameCombo && !requirement.elementsShouldBeAfterEachOther) {
            routineValue.map(comboMetadata => {
                // check if the elements are in the routine
                // we cannot take the same element more than once
                var usedElements: ElementMetadata[] = []
                comboMetadata.elements.forEach(elementMetadata => {
                    for (let i = 0; i < possibleElements.length; i++) {
                        if (possibleElements[i].includes(elementMetadata) && !isFound[i]) {
                            if (!usedElements.includes(elementMetadata)) {
                                isFound[i] = true
                                usedElements.push(elementMetadata)
                            }
                        }
                    }
                })

                // Check if all options are found
                const allOptionsFound = isFound.every(found => found)
                if (allOptionsFound) {
                    _requirement_met = true
                }
            })

        }
        if (_requirement_met) {
            return true
        } else return false


    }

    countCompositionalRequirements() {
        /**
         * Count the compositional requirements of the routine
         * 
         * @param {RoutineMetadata}
         * @returns {number}
         */

        let compositional_requirement_score = 0
        this.compositionalRequirements.map(requirement => {
            const _requirement = this.supplement.compositionalRequirements[requirement.number]
            const req_met = this.checkRequirement(_requirement, this.routine)
            if (req_met) {
                requirement.met = true
                compositional_requirement_score += 0.5
            }
        })
        return compositional_requirement_score
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
				this.countSingleBonus(val.detail)
			}
		})

		let connectionValue = 0
		// add all the values of the combos to the combobonus
		this.routine.map(comboMetadata => {
			connectionValue += comboMetadata.value || 0
		})

		return connectionValue

	}

	countSingleBonus(comboOptionSerie: ConnectionValueDetail) {
		this.routine.map(comboMetadata => {
			// filter the combo that it contains all the different types of elements specified in the comboOption
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


	countSeriesBonus(comboOptionSerie: ConnectionValueDetail) {
		/**
		 * Count the serie bonus of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {number}
		 */

		var bonusFound = false
		this.routine.map(comboMetadata => {

			// if the elements in the combo are dance, no repeated elements are allowed
			if (comboOptionSerie.elementTypes.includes("dance")) {
				if (comboMetadata.elements.some(elementMetadata => elementMetadata.isRepeated)) {
					comboMetadata.value = 0
					return
				}
			}

			// if the elements in the combo are acrobatic, only one repeated element is allowed
			if (comboOptionSerie.elementTypes.includes("acrobatic")) {
				if (comboMetadata.elements.filter(elementMetadata => elementMetadata.isRepeated).length > 1) {
					comboMetadata.value = 0
					return
				}
			}

			// check the combo for the different combinations
			const values: string[] = []
			comboMetadata.elements.map(elementMetadata => {
				values.push(elementMetadata.element.difficulty)
			}
			)

			let b = compareArrayBonus(values, comboOptionSerie.combos[0].combo, comboOptionSerie.strictOrder)
			if (b) bonusFound = true
		})

		if (bonusFound) {
			return comboOptionSerie.combos[0].value
		} else return 0

	}

    countDismountBonus(detail: ConnectionValueDetail, dismountGroup: string) {
		/**
		 * Count the dismount bonus of the routine
		 * 
		 * @param {RoutineMetadata}
		 * @returns {number}
		 */
		let bonus = 0
		const comboOptionDismount = detail.combos[0]
		//get the last combo and check if it's a dismount (group number 6)
		// if the difficulty of the element is higher than in dhe combo options, 
		const dismount = this.routine[this.routine.length - 1].elements[this.routine[this.routine.length - 1].elements.length - 1]
		if (dismount.element.group_number == dismountGroup) {
			const dismountDifficulty = dismount.element.difficulty
			if (comboOptionDismount.combo[0].includes(dismountDifficulty)) {
				bonus = comboOptionDismount.value
			}
		}

		return bonus
	}


    resetAndCalculate(): Dscore {
        this.reset()
        if (this.routine.length == 0) {
            return this.dscore
        }
        this.calculate()

        // Calculate the total difficulty

        this.dscore.totalDifficulty = (this.dscore.difficultyValue || 0) + (this.dscore.connectionValue || 0) + (this.dscore.serieBonus || 0) + (this.dscore.dismountBonus || 0) + (this.dscore.compositionalRequirements || 0)
        // Loop over every value and round the scores.
        Object.keys(this.dscore).map(key => {
            let _score = this.dscore[key as keyof Dscore]
            if (_score) {
            this.dscore[key as keyof Dscore] = roundValue(_score)}
        })
        return this.dscore

    }

    abstract calculate(): Dscore
}
