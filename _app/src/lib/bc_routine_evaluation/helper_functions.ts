// @ts-ignore
/** @typedef {import("$lib/data/elements/all_elements.ts").ElementType} ElementType */

import type { ComboType, ElementMetadata } from "$lib/stores/routineMutations"

// round a value to 2 decimal places
/**
 * @param {number} val
 */
/**
 * Round a value to 2 decimal places.
 * @param {number} val - The value to round.
 * @returns {number} - The rounded value.
 */
export function roundValue(val:number):number {
	return Number((Math.round(val * 100) / 100).toFixed(2));
}

/**
 * Check if the routine is done.
 * 
 * @param {ComboType[]} routine - The routine to check.
 * @returns {boolean} - True if the routine is done, false otherwise.
 */
export function dismountDone(routine: ComboType[]): boolean {
	// get the last element of the routine
	const last_element = routine[routine.length - 1].elements[routine[routine.length - 1].elements.length - 1]
	if (last_element.element.group_number == '6') {
		return true
	} else {
		return false
	}
}

/**
 * Sort the elements in a combo by value.
 * 
 * @param {ElementMetadata[]} elements_array - The elements to sort.
 * @returns {ElementMetadata[]} - The sorted elements.
 */
export function sort_elements(elements_array: ElementMetadata[]): ElementMetadata[] {
	return elements_array.sort((a, b) => {
		return b.element.value - a.element.value;
	});
}

/**
 *  slice an array in all possible combinations of a certain length
 *  e.g. ["a", "b", "b", "a"] can be sliced in ["a", "b", "b"] and ["b", "b", "a"], if we chose length 3
 * @param array 
 * @param length 
 * @returns 
 */
export function sliceArray(array:ElementMetadata[], length:number) {
	return  array.map((_, index) => {
		if (index + length <= array.length) {
			return array.slice(index, index + length)
		}
	}).filter((el) => el != undefined)

}

/**
 * permute the array. 
 * @param array the array to permute
 * @returns all possible permutations of the array, as an array of arrays
 */
function permute(array:string[]):string[][] {
	if (array.length <= 2) return array.length === 2 ? [array, [array[1], array[0]]] : [array];
	return array.reduce((acc, item, i) =>
	  acc.concat(permute([...array.slice(0, i), ...array.slice(i + 1)]).map(val => [item, ...val])), [] as string[][]);
}

export function compareArrayBonus(combo:string[], bonus: string[], strictOrder:boolean) {
	// console.log("comparing","combo", combo,"bonus", bonus)

	// assert the combo and the bonus have the same length
	if (combo.length != bonus.length) {
	console.log("[WARNING] lengths not equal; returning false")	
	return false
	}
	// if strictOrder is false, we need to check every combination of the combo
	// i.e. we need to permute the combo options
	var res: boolean
	if (strictOrder) {
		res = combo.every((el, index) => bonus[index].includes(el))
		// console.log("res1", res)
		return res
	} else {
		res = permute(combo).some((el:string[]) => {
			 return el.every((el, index) => bonus[index].includes(el))
			})

		// console.log("res2", res)
		return res
	}

}