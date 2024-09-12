
import { sort_elements, compareArrayBonus, sliceArray } from './utils'
import type { ComboType, ElementMetadata } from '$lib/stores/routineMutations.js'
import type { Dscore, Requirement } from './types'
import { DifficultyClass } from './difficulty_class'
import { grips, directions, techniques } from './uneven_bars_root_skills'
import { root } from 'postcss'


export class calculateDifficultyUnevenBars extends DifficultyClass {
    calculate(): Dscore {
        this.identifyTypeOfElement()
        this.identifyValueOfElements()
        this.identifyRepeatedElements()
        this.checkKips()
        this.checkRootSkills()

        this.dscore.difficultyValue = this.countDifficultyValue()
        this.dscore.connectionValue = this.countConnectionValue()

        const detail = this.supplement.connectionValuesAndBonus

        // add the dismount bonus to the bonus
        const dismountBonusDetail = detail.filter(val => val.type == "dismountBonus")[0]
        if (dismountBonusDetail) this.dscore.dismountBonus += this.countDismountBonus(dismountBonusDetail.detail, "6")


        this.dscore.compositionalRequirements = this.countCompositionalRequirements()

        return this.dscore
    }

    countConnectionValue(): number {
        let bonus = 0
        const comboOptionSerie = this.supplement.connectionValuesAndBonus.filter(val => val.type != "dismountBonus")[0].detail
        // elements in a combo are allowed to be repeated one time for connection value

        this.routine.map((comboMetadata, index) => {
			// filter the combo that it contains all the different types of elements specified in the comboOption
			// var _comboElements = comboMetadata.elements.filter(elementMetadata => comboOptionSerie.elementTypes.includes(elementMetadata.elementType))
			
            // the elements in the combo are allowed to be repeated one time.
            // so we need to filter out the repeated elements

            const repeated_elements: string[] = []
            var _comboElements = comboMetadata.elements.map(elementMetadata => {
                if (elementMetadata.isRepeated) {
                    if (!repeated_elements.includes(elementMetadata.element.id)) {
                        repeated_elements.push(elementMetadata.element.id)
                        return elementMetadata
                    }
                }
                else {
                    return elementMetadata
                }
            }).filter(elementMetadata => elementMetadata != undefined)


            // get all the elements of the combos before the current combo
            const previous_elements = this.routine.slice(0, index).flatMap(comboMetadata => comboMetadata.elements).map(elementMetadata => elementMetadata.element.id)

            comboOptionSerie.combos.map(comboOption => {
				var _slicedElements: ElementMetadata[][] = sliceArray(_comboElements, comboOption.combo.length)
				if (comboOptionSerie.uniqueElements) {
					_slicedElements = _slicedElements.filter(slice => slice.every(elementMetadata => !elementMetadata.isRepeated && !previous_elements.includes(elementMetadata.element.id)))
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

        return bonus
    }

    checkKips() {
        // the kip can be used as a mount, and once in the routine.
        // so the second time it's used, it will still have difficulty.

        let nr_kips_done = 0
        // if there is a second kip, it will be counted as a difficulty element
        this.routine.forEach(comboMetadata => comboMetadata.elements.forEach(elementMetadata => {
            if (elementMetadata.element.id == "1.101") {
                nr_kips_done += 1
                if (nr_kips_done == 2) {
                    elementMetadata.value = 0.1
                    elementMetadata.hasDifficulty = true
                    elementMetadata.isRepeated = false
                }

            }
        }))
    }


    checkRootSkills() {
        // Only 3 elements in chronological order from the same root skill will be counted for DV, CR and CV
        // except: Kips, Giants (fwd/bwd) and Casts to HSTD
        // the root skill is determined by the entry into the skill (technique), grip type and the direction of the rotation (bwd or fwd) 

        let root_skill: Record<string, number> = {}
        this.routine.forEach(comboMetadata => comboMetadata.elements.forEach(elementMetadata => {
            const technique = this.getRootSkillType(elementMetadata, techniques)
            const grip = this.getRootSkillType(elementMetadata, grips)

            // if the direction is not defined, "Backward" is assumed
            const direction = this.getRootSkillType(elementMetadata, directions) ?? "Backward"

            if (technique) {
                const root_skill_key = technique + " with " + grip + " " + direction
                root_skill[root_skill_key] = (root_skill[root_skill_key] ?? 0) + 1
                if (root_skill[root_skill_key] <= 3) {
                    elementMetadata.hasDifficulty = true
                }
                else {
                    elementMetadata.devaluated = true
                    elementMetadata.hasDifficulty = false
                    elementMetadata.value = 0
                }
            }
        }
        ))

        // go over the root_skill object and add messages if the root skill is used more than 3 times
        Object.keys(root_skill).forEach(key => {
            if (root_skill[key] > 3) {
                this.addGeneralMessage(`The root skill '${key}' is used more than 3 times. Only the first 3 elements get difficulty!`, "error")
            }
        })
    }


    getRootSkillType(elementMetadata: ElementMetadata, type: Record<string, Requirement[]>): string | undefined {
        let found_value = undefined
        Object.keys(type).forEach(t => {
            const technique_values = type[t][0].elements
            technique_values.forEach(technique_value => {
                const met = this.checkIfElementRequirementIsMet(elementMetadata, technique_value)
                if (met) {
                    found_value = t
                }
            })

        })

        return found_value

    }


    countDifficultyValue(): number {
        // count the value of the x highest difficulty elements. 
        // the dismount is always counted.    
        let difficulty_values: number[] = []

        // get the dismount
        const dismount = this.routine[this.routine.length - 1].elements[this.routine[this.routine.length - 1].elements.length - 1]
        if (dismount.element.group_number != "6") {
            this.addGeneralMessage("The last element is not a dismount", "error")
            this.neutralDeduction -= 0.5
        }
        else {
            difficulty_values.push(dismount.value ?? 0)
        }

        const sorted_elements = sort_elements(this.routine.flatMap(combo => combo.elements))
        sorted_elements.filter(element => element.hasDifficulty != false).forEach(element => {
            if (element != dismount){
            difficulty_values.push(element.value ?? 0)
            }
        }
        )

        let sum = 0
        for (let i = 0; i < Math.min(difficulty_values.length, this.supplement.maxDV); i++) {
            sum += difficulty_values[i]
        }
        return sum


    }
}
