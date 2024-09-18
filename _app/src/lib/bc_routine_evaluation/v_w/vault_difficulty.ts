import { DifficultyClass } from "../difficulty_class"
import type { Dscore } from "../types"

export class calculateDifficultyVault extends DifficultyClass {
    calculate(): Dscore {
        this.identifyValueOfElements()
        this.identifyTypeOfElement()
        this.checkNrOfScores()
        this.checkFromDifferentGroup()
        this.checkElements()
        this.addGeneralMessage("The average of all the jumps are calculated", "info")
        this.dscore.difficultyValue = this.calculateAverage()
        return this.dscore
    }

    identifyValueOfElements(): void {
        this.routine.map(comboMetadata => {
            comboMetadata.elements.map(elementMetadata => {
                elementMetadata.value = Number(elementMetadata.element.value)
            })
        })

    }

    calculateHighest(): number {
        let highest_value = 0

        this.routine.forEach(comboMetadata =>
            comboMetadata.elements.forEach(element => {
                if (element.element.value > highest_value) {
                    highest_value = element.value? element.value : 0
                }

            }))
        return highest_value

    }

    calculateAverage(): number {
        let sum = 0
        let nr_of_scores = 0

        this.routine.forEach(comboMetadata =>
            comboMetadata.elements.forEach(element => {
                sum += element.value? element.value : 0
                nr_of_scores += 1
            }))

        return sum / nr_of_scores
    }

    checkNrOfScores(): void {
        let nr_of_scores = 0
        this.routine.forEach(comboMetaData => comboMetaData.elements.forEach(element => nr_of_scores += 1))

        if (nr_of_scores > 2) {
            this.addGeneralMessage("You have more than 2 elements!", "info")
        }
    }

    checkFromDifferentGroup(): void {
        let groups: string[] = []
        this.routine.forEach(comboMetaData => comboMetaData.elements.forEach(element => {
            groups.push(element.element.group_number)
        })
        )

        const set_groups = new Set(groups)
        if (groups.length != set_groups.size){
            this.addGeneralMessage("Jumps from the same group!", "info")
        }
    }


    checkElements():void {
        const requirement = this.supplement.compositionalRequirements[1]
        let is_allowed = true

        this.routine.forEach(comboMetaData => comboMetaData.elements.forEach(element => {
            const elem = requirement.elements[0]

            if (elem){
            const allowed = this.checkIfElementRequirementIsMet(element, requirement.elements[0])
            if (!allowed) {
                element.devaluated = true
                element.value = 0
                if (is_allowed) is_allowed = false
            }
        }
        }))
        if (!is_allowed){
            this.addGeneralMessage("One or more elements are not allowed!", "warning")
        }
    }

}
