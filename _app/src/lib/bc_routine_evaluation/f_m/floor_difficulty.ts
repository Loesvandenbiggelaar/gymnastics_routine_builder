import type { ElementType } from "$lib/data/elements/all_elements"
import type { ElementMetadata } from "$lib/stores/routineMutations"
import { DifficultyClass } from "../difficulty_class"
import type { Dscore } from "../types"
import { sort_elements } from "../utils"

export class calculateDifficultyFloorMen extends DifficultyClass {
    calculate(): Dscore {
        this.identifyTypeOfElement()
        this.identifyValueOfElements()
        this.identifyRepeatedElements()
        this.addBonusForElements()
        
        this.dscore.difficultyValue = this.countDifficultyElementsStudents()
        this.dscore.connectionValue = this.countConnectionValue()
        this.dscore.compositionalRequirements = this.countCompositionalRequirements()


        this.checkForNeutralDeductions()
        return this.dscore
    }

    // students don't specify a max number of elements from a group.
    countDifficultyElementsStudents(): number {
        var difficultyValue = 0
        var _total_nr_elements = this.supplement.maxDV
        var _found_elements: ElementType[] =[]

        var elements: ElementMetadata[] = this.routine.flatMap(combo =>
            combo.elements.map(element => element)
        )

        sort_elements(elements).map(elementMetadata => {
            if (_total_nr_elements > 0) {
                if (!_found_elements.includes(elementMetadata.element)) {
                    console.log(elementMetadata)
                    difficultyValue += elementMetadata.value ?? 0
                    _found_elements.push(elementMetadata.element)
                    _total_nr_elements -= 1
                    // elementMetadata.value = elementMetadata.element.value
                    elementMetadata.hasDifficulty = true
                }
                else {
                    elementMetadata.value = 0
                    elementMetadata.hasDifficulty = false
                }
            }
        })

        console.log(difficultyValue)
        return difficultyValue
    }


    // every element which is executed without big deductions get a difficulty bonus
    addBonusForElements(): void {
        this.addGeneralMessage("Every element executed without big deductions gets a bonus", "info")
        const _bonus: { [key: string]: number } = {"A": 0.1, "B": 0.2, "C": 0.3, "D": 0.4, "E": 0.4, "F": 0.4, "G": 0.4, "H": 0.4, "I": 0.4}
        this.routine.map(comboMetadata => {
            comboMetadata.elements.map(elementMetadata => {
                if (!elementMetadata.isRepeated) {
                    elementMetadata.value =( elementMetadata.value || 0 )+ _bonus[elementMetadata.element.difficulty]
                }
            })
        })
        
    }

    // if the number number of counting elements is too low, we have to add a neutral deduction
    checkForNeutralDeductions(): void {
        const _deduction: Record<number,number> = {6:3, 5:4, 4:5, 3:6, 2:7, 1:8} // only for H1; TODO: add for other levels

        var _routine_length: number = 0
        this.routine.map(comboMetadata => {
            comboMetadata.elements.map(elementMetadata => {
                if (elementMetadata.hasDifficulty) {
                    _routine_length += 1
                }
            })
        })

     if (Object.keys(_deduction).includes(_routine_length.toString())) {
       this.neutralDeduction -= _deduction[_routine_length]
       this.addGeneralMessage(`Neutral deduction of -${_deduction[_routine_length]} because only ${_routine_length}  element(s) are counted `, "warning")
    }

}
    

}
