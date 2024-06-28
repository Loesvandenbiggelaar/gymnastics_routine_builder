// TODO get type directly from allElements
import { allElements } from '$lib/data/elements/all_elements'
// The type of all apparatsu options to validate the apparatuses
export type ApparatusOptions = keyof (typeof allElements)[0]
const comboEncodingSeparator: string = '-'
const elementEncodingSeparator: string = '_'

// Types for the Routine
import { type ElementType } from '$lib/data/elements/all_elements'
import { get } from 'http'
import { createCombo, createRoutine, getElement } from './debug_get_routines'
type RoutineMessage = {
	msg: string
	type: 'info' | 'warning' | 'error' | string
	priority?: number
}
type ComboType = {
	elements: ElementType[]
	title?: string
	type?: 'acro' | 'dance' | 'mix' | 'salto' | string
	value?: number
	hasSameElements?: boolean
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




export class Routine {
	apparatus: ApparatusOptions
	routine: ComboType[] = [];
	flatRoutine: [ElementType[]] = [[]];

	constructor(apparatus: ApparatusOptions, encodedRoutine?: string) {
		// console.log("apparatus", apparatus)
		this.apparatus = apparatus
		this.routine = encodedRoutine ? this.decodeRoutine(encodedRoutine) : [] // decodes the encoded routine when given
	}


	/**
	 * Add a combo to the routine.
	 * 
	 * @param combo - The combo to add to the routine.
	 */
	private addCombo(combo: ComboType) {
		this.routine.push(combo)
	}

	/**
	 * Remove a combo from the routine.
	 * 
	 * @param comboIndex - The index of the combo in the routine.
	 */
	public removeCombo(comboIndex: number) {
		this.routine.splice(comboIndex, 1)
	}

	/**
	 * Add an element to a combo in the routine.
	 * If no combo exists at the specified index, create a new combo with the element.
	 * 
	 * @param element - The element to add to the combo.
	 * @param comboIndex - The index of the combo in the routine. Defaults to a large number to indicate adding to a new combo.
	 */
	public addElement(element: ElementType, comboIndex: number = 1e8) {
		if (this.routine[comboIndex]) {
			this.routine[comboIndex].elements.push(element)
		} else {
			this.addCombo({ elements: [element] })
		}
	}

	/**
	 * Remove an element from a combo in the routine.
	 * 
	 * @param comboIndex - The index of the combo in the routine.
	 * @param elementIndex - The index of the element in the combo.
	 */
	public removeElement(comboIndex: number, elementIndex: number) {
		this.routine[comboIndex].elements.splice(elementIndex, 1)
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
		const element = this.routine[currentComboIndex].elements.splice(currentElementIndex, 1)[0]
		if (this.routine[newComboIndex]) {
			this.routine[newComboIndex].elements.splice(newElementIndex, 0, element)
		} else {
			this.routine[newComboIndex] = { elements: [element] }
		}
	}

	/**
	 * Move a combo from one index to another in the routine.
	 * 
	 * @param currentIndex - The current index of the combo in the routine.
	 * @param newIndex - The new index to move the combo to in the routine.
	 */
	public moveCombo(currentIndex: number, newIndex: number) {
		const combo = this.routine.splice(currentIndex, 1)[0]
		this.routine.splice(newIndex, 0, combo)
	}

	/**
	 * Return the routine as a list of lists of element IDs.
	 * 
	 * @returns The routine as a list of lists of element IDs.
	 */
	public getRoutineIds() {
		return this.routine.map((combo) => combo.elements.map((element) => element.id))
	}

	/**
	 * Encode the routine into a base-64 encoded string.
	 * 
	 * @returns The base-64 encoded string representing the routine.
	 */
	public encodedRoutine() {
		return encodeToBase64(this.routine.map((combo) => combo.elements.map((element) => element.id).join(elementEncodingSeparator)).join(comboEncodingSeparator))
	}

	/**
	 * Decode an encoded routine string and return the decoded routine.
	 * 
	 * @param encodedRoutine - The encoded routine string to decode.
	 * @returns The decoded routine as an array of ComboType objects.
	 */
	public decodeRoutine(encodedRoutine: string): ComboType[] {
		const database = allElements["en"][this.apparatus]
		const decoded = decodeFromBase64(encodedRoutine)
		const comboStrings = decoded.split(comboEncodingSeparator)
		return comboStrings.map((comboString) => {
			const elementStrings = comboString.split(elementEncodingSeparator)
			return { elements: elementStrings.map((elementId) => database.find((element) => element.id === elementId) as ElementType) } as ComboType
		})
	}
}



const routine = new Routine('b')

routine.addElement(getElement('b', '1.101') as ElementType)
console.log("add element:", routine.getRoutineIds())

routine.addElement(getElement('b', '2.303') as ElementType, 0)
console.log("add element:", routine.getRoutineIds())

routine.addElement(getElement('b', '2.101') as ElementType, 0)
console.log("add element:", routine.getRoutineIds())

routine.addElement(getElement('b', '5.312') as ElementType, 1)
console.log("add element:", routine.getRoutineIds())

routine.removeElement(0, 1)
console.log("remove element:", routine.getRoutineIds())

routine.moveElement(0, 0, 1, 0)

console.log("move element:", routine.getRoutineIds())

routine.moveCombo(0, 1)
console.log("move combo:", routine.getRoutineIds())

console.log("encoded routine:", routine.encodedRoutine())

console.log("decoded routine:", routine.decodeRoutine(routine.encodedRoutine()))

