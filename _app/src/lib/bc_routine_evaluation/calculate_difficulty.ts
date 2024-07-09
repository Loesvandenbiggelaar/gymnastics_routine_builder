import { sort_elements, type ElementType, sliceArray, compareArrayBonus } from './helper_functions.js'
import { getComboDescription } from './routine_evaluation.js'
import { type Dscore } from '$lib/stores/routineMutations.js'
import type { ComboType, ElementMetadata } from '$lib/stores/routineMutations.js'
import type { RoutineMutations } from '$lib/stores/RoutineMutations.js'
import { nrAcrobatic, nrGymnastic, nrElements, dismountDone } from './beam_difficulty.js'


export class calculate_difficulty {
    routine: RoutineMutations
    // routineMetadata: RoutineMetadata
    // routineFlatten: ElementType[]
    // difficultyElements: number = 0
    // totalBonus: number = 0
    // eisenTODO: number = 0
    // totalDifficulty: number = 0
    difficultyCalculated: boolean = false;
    dscore: Dscore = {
        difficultyValue: 0,
        compositionalRequirements: 0,
        connectionValue: 0,
        bonus: 0,
        diff: 0
    };

    constructor(routine: RoutineMutations) {
        this.routine = routine
        // this.routineMetadata = this.convertToMetadata()
        // this.routineFlatten = flattenRoutine(routine)
        // this.difficultyElements = 0
        // this.totalBonus = 0
        // this.eisenTODO = 0
        // this.totalDifficulty = this.difficultyElements + this.totalBonus + this.eisenTODO
    }

    public do() {
        this.identifyTypeOfElement()
        this.identifyRepeatedElements()
        this.coutDifficultyElements()
        return this.difficultyElements
    }

    // put elements in a json so metadata can be given to the elements
    // also put combos in a json so metadata can be given
    // private convertToMetadata() {
    // 	/**
    // 	 * Convert the routine to a metadata format
    // 	 * 
    // 	 * @param {Routine}
    // 	 * @returns {RoutineMetadata}
    // 	 */
    // 	return this.routine.map(combo => {
    // 		return {
    // 			combo: combo.map((element, index) => {
    // 				return {
    // 					element: element,
    // 					order: index,
    // 					value: 0,
    // 				}
    // 			}),
    // 			value: 0
    // 		}
    // 	})
    // }
    private identifyTypeOfElement() {
        /**
         * Identify the type of the element
         * @param {RoutineMetadata} routineMetadata - the routine metadata
         * @returns {void}
         */
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
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
        /**
         * Identify the repeated elements in the routine
         * @param {RoutineMetadata}
         * @returns {void}
         */
        var _repeated_elements: ElementType[] = []
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
        routineValue.map(comboMetadata => {
            comboMetadata.elements.map(elementMetadata => {
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
        this.dscore.difficultyValue = 0
        var _nr_acrobatic_elements: number = nrAcrobatic
        var _nr_dance_elements: number = nrGymnastic
        var _total_nr_elements: number = nrElements - _nr_acrobatic_elements - _nr_dance_elements
        var _found_elements: ElementType[] = []

        if (!dismountDone(this.routine.routineFlatten)) {
            _nr_acrobatic_elements -= 1
        } else {
            // the dismount should be added to the routine
            let routineValue: ComboType[] = []
            this.routine.routine.subscribe(value => routineValue = value)
            routineValue.map(comboMetadata => {
                comboMetadata.elements.map(elementMetadata => {
                    // get the element with group number 6 (=dismount)
                    if (elementMetadata.element.group_number == "6") {
                        _nr_acrobatic_elements -= 1
                        _found_elements.push(elementMetadata.element)
                        this.dscore.difficultyValue += elementMetadata.element.value
                        elementMetadata.value = elementMetadata.element.value
                        // console.log("dismount", elementMetadata.value, elementMetadata.element.description)
                    }
                })
            })
        }

        // get all the acrobatic elements
        var _acrobatic_elements: ElementMetadata[] = []
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
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
                    this.dscore.difficultyValue += elementMetadata.element.value
                    elementMetadata.value = elementMetadata.element.value
                    // console.log("acrobatic", elementMetadata.value, elementMetadata.element.description)
                }
            }
        })

        // get all the dance elements
        var _dance_elements: ElementMetadata[] = []
        this.routine.routine.subscribe(value => routineValue = value)
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
                    this.dscore.difficultyValue += elementMetadata.value ?? elementMetadata.element.value
                    elementMetadata.value = elementMetadata.element.value
                    // console.log("dance", elementMetadata.value, elementMetadata.element.description)
                }
            }
        })

        // get all elements
        var _other_elements: ElementMetadata[] = []
        this.routine.routine.subscribe(value => routineValue = value)
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
                        this.dscore.difficultyValue += elementMetadata.element.value
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
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
        routineValue.map(comboMetadata => {
            console.log("---")
            comboMetadata.elements.map(elementMetadata => {
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
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
        routineValue.map(comboMetadata => {
            this.dscore.connectionValue += comboMetadata.value || 0
        })

        // add the serie bonus to the bonus
        this.dscore.bonus += this.countSeriesBonus()

        // add the dismount bonus to the bonus
        this.dscore.bonus += this.countDismountBonus()

    }

    private countSingleBonus(type: string) {

        console.log("type", type)
        const comboOptionSerie = getComboDescription(type)

        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
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
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
        routineValue.map(comboMetadata => {
            // filter the combo that it contains all the differnt types of elements specified in the comboOption
            var _comboElements = comboMetadata.elements.filter(elementMetadata => comboOptionSerie.elementTypes.includes(elementMetadata.elementType))
            const _containsAll = comboOptionSerie.elementTypes.every(elementType => _comboElements.map(elementMetadata => elementMetadata.elementType).includes(elementType))
            console.log(comboMetadata.elements.map(elementMetadata => elementMetadata.element.description))
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
        let routineValue: ComboType[] = []
        this.routine.routine.subscribe(value => routineValue = value)
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
