// The type of all apparatsu options to validate the apparatuses
const comboEncodingSeparator: string = '-'
const elementEncodingSeparator: string = '_'

// Types for the Routine
import { type ElementType } from '$lib/data/elements/all_elements'
import { writable, type Writable } from 'svelte/store'

export type RoutineMessage = {
	msg: string
	type: 'info' | 'warning' | 'error' | string
	priority?: number
}
export type ElementMetadata = { 
	element: ElementType, 
	order?: number, 
	isRepeated?: Boolean, 
	value?: number, 
	elementType?: "dance" | "acrobatic", 
	devaluated?:Boolean,
	hasDifficulty?:Boolean 
}

export type ComboType = {
	elements: ElementMetadata[]
	// title?: string
	// type?: 'acro' | 'dance' | 'mix' | 'salto' | string
	value?: number
	// hasSameElements?: boolean
	isAcroLine?: boolean
	messages?: RoutineMessage[]
}

// Helper function to encode a string (including Unicode) to base-64
function encodeToBase64(input: string): string {
	const encoder = new TextEncoder()
	const encoded = encoder.encode(input)
	return btoa(String.fromCharCode(...encoded))
}

// Helper function to decode a base-64 encoded string
function decodeFromBase64(encoded: string): string {
	const decoded = atob(encoded)
	const bytes = new Uint8Array(decoded.split('').map(char => char.charCodeAt(0)))
	const decoder = new TextDecoder()
	return decoder.decode(bytes)
}

export class RoutineMutations {
	routine: Writable<ComboType[]> = writable([])

	// get array of combos
	private getRoutine(): ComboType[] {
		let val: ComboType[] = []
		const unsubscribe = this.routine.subscribe(($routine) => val = $routine)
		unsubscribe()
		return val
	}

	public empty() {
		this.routine.set([])
	}

	// remove empty arrays from the routine
	private removeEmptyCombos() {
		this.routine.set(this.getRoutine().filter(combo => combo.elements.length > 0))
	}


	/**
	 * Add a combo to the routine.
	 * 
	 * @param combo - The combo to add to the routine.
	 */
	private addCombo(combo: ComboType) {
		this.routine.update(routine => [...routine, combo])
	}

	/**
	 * Remove a combo from the routine.
	 * 
	 * @param comboIndex - The index of the combo in the routine.
	 */
	public removeCombo(comboIndex: number) {
		this.routine.update(routine => {
			routine.splice(comboIndex, 1)
			return routine
		})
	}

	/**
	 * Add an element to a combo in the routine.
	 * If no combo exists at the specified index, create a new combo with the element.
	 * 
	 * @param element - The element to add to the combo.
	 * @param comboIndex - The index of the combo in the routine. Defaults to a large number to indicate adding to a new combo.
	 */
	public addElement(element: ElementType, comboIndex: number = 1e8) {
		if (!element) return
		let routineValue: ComboType[] = []
		this.routine.subscribe(value => routineValue = value)
		if (routineValue[comboIndex]) {
			routineValue[comboIndex].elements.push({ element: element })
		} else {
			this.addCombo({ elements: [{ element: element }] })
		}
		this.routine.set(routineValue) // Set the updated value back to the routine store
	}

	/**
	 * Remove an element from a combo in the routine.
	 * 
	 * @param comboIndex - The index of the combo in the routine.
	 * @param elementIndex - The index of the element in the combo.
	 */
	removeElement(comboIndex: number, elementIndex: number) {
		let r: ComboType[] = []
		const unsubscribe = this.routine.subscribe(value => r = value)
		unsubscribe()
		r[comboIndex].elements.splice(elementIndex, 1)
		this.routine.set(r)
		this.removeEmptyCombos()
	}

	/**
	 * Move an element from one combo to another in the routine.
	 * 
	 * @param currentComboIndex - The index of the current combo in the routine.
	 * @param currentElementIndex - The index of the current element in the current combo.
	 * @param newComboIndex - The index of the new combo in the routine.
	 * @param newElementIndex - The index to insert the element in the new combo.
	 */
	public moveElement(currentComboIndex: number, currentElementIndex: number, newComboIndex: number, newElementIndex: number) {

		let routineValue = this.getRoutine()
		const element = routineValue[currentComboIndex].elements.splice(currentElementIndex, 1)[0]


		if (routineValue[newComboIndex]) {
			routineValue[newComboIndex].elements.splice(newElementIndex, 0, element)
		} else {
			routineValue[newComboIndex] = { elements: [element] }
		}

		this.routine.set(routineValue)
		this.removeEmptyCombos()

	}

	public moveElementBack(comboIndex: number, elementIndex: number) {
		const newComboIndex = elementIndex === 0 ? comboIndex === 0 ? 0 : comboIndex - 1 : comboIndex;
		const newElementIndex = elementIndex === 0 ? this.getRoutine()[newComboIndex].elements.length : elementIndex - 1;
		this.moveElement(comboIndex, elementIndex, newComboIndex, newElementIndex)
	}

	public moveElementForward(comboIndex: number, elementIndex: number) {
		const newComboIndex = comboIndex === this.getRoutine().length - 1 ? this.getRoutine().length - 1 : comboIndex + 1;
		const newElementIndex = newComboIndex === comboIndex ? elementIndex + 1 : 0;
		this.moveElement(comboIndex, elementIndex, newComboIndex, newElementIndex)
	}


	/**
	 * Move a combo from one index to another in the routine.
	 * 
	 * @param currentIndex - The current index of the combo in the routine.
	 * @param newIndex - The new index to move the combo to in the routine.
	 */
	// public moveCombo(currentIndex: number, newIndex: number) {
	// 	const combo = this.routine.splice(currentIndex, 1)[0]
	// 	this.routine.splice(newIndex, 0, combo)
	// }

	/**
	 * Return the routine as a list of lists of element IDs.
	 * 
	 * @returns The routine as a list of lists of element IDs.
	 */
	public getRoutineIds() {
		let val: ComboType[] = []
		const unsubscribe = this.routine.subscribe(($routine) => val = $routine)
		unsubscribe()
		return val.map((combo) => combo.elements.map((element) => element.element.id))
	}

	/**
	 * Encode the routine into a base-64 encoded string.
	 * 
	 * @returns The base-64 encoded string representing the routine.
	 */
	// public encodedRoutine() {
	// 	return encodeToBase64(this.routine.map((combo) => combo.elements.map((element) => element.element.id).join(elementEncodingSeparator)).join(comboEncodingSeparator))
	// }

	/**
	 * Decode an encoded routine string and return the decoded routine.
	 * 
	 * @param encodedRoutine - The encoded routine string to decode.
	 * @returns The decoded routine as an array of ComboType objects.
	 */
	// public decodeRoutine(encodedRoutine: string): ComboType[] {
	// 	const database = allElements["en"][this.apparatus]
	// 	const decoded = decodeFromBase64(encodedRoutine)
	// 	const comboStrings = decoded.split(comboEncodingSeparator)
	// 	return comboStrings.map((comboString) => {
	// 		const elementStrings = comboString.split(elementEncodingSeparator)
	// 		return { elements: elementStrings.map((elementId) => ({ element: database.find((element) => element.id === elementId) })) } as ComboType
	// 	})
	// }

	// // given a combo index and element index, move that element 1 back
	// public moveElementBack(comboIndex: number, elementIndex: number) {
	// 	if (elementIndex > 0) {
	// 		const element = this.routine[comboIndex].elements.splice(elementIndex, 1)[0]
	// 		this.routine[comboIndex].elements.splice(elementIndex - 1, 0, element)
	// 		this.update()
	// 	}
	// }


	// public calcDiff() {
	// 	if (this.routineFlatten.length > 0) {
	// 		console.log("total_difficulty", this.difficulty.do())

	// 		// console.log("diff:", this.difficulty)

	// 	}
	// }

}

// const encodedRoutine="MS4xMDEtMi4zMDNfMi4xMDFfMi4zMDMtMi4zMTAtNS4zMTJfNS4zMTItNC4xMDdfNS4yMDEtNC4xMDdfNi4yMDQ="
