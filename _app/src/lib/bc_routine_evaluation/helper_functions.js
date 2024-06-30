// @ts-ignore
/** @typedef {import("$lib/data/elements/all_elements.ts").ElementType} ElementType */

// round a value to 2 decimal places
/**
 * @param {number} val
 */
export function roundValue(val) {
	return (Math.round(val * 100) / 100).toFixed(2);
}

// by flattening the routine we are ignoring the combos.
// for e.g. calculating the difficulty of a routine doesn't care about the combos.
/**
 * @param {ElementType[][]} routine
 */
export function flatten_routine(routine) {
	return routine.flat();
}

// // check if the last element is a dismount. 
// // Return true if last element is of group 6. otherwise false.
// // Only tested for women
// /**
//  * @param {ElementType[]} routine_flat
//  */
// export function is_dismount_done(routine_flat) {
// 	const length_routine = routine_flat.length;
// 	let last_element = routine_flat[length_routine - 1];
// 	if (last_element['group_number'] == '6') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

export function sort_elements(elements_array) {
	return elements_array.sort((a, b) => {
		return b.element.value - a.element.value;
	});
}

export function sliceArray(array, length) {
	/**
	 * Slice the combo. One combo can have multiple bonusses. 
	 * e.g. the combo ["a", "b", "b", "a"] can be sliced in ["a", "b", "b"] and ["b", "b", "a"]
	 * depending on the length, the combo is sliced in all possible combinations.
	 * 
	 * @param {string[]}
	 * 
	 * @returns {string[][]}
	 */

	return  array.map((_, index) => {
		if (index + length <= array.length) {
			return array.slice(index, index + length)
		}
	}).filter((el) => el != undefined)

}

function permute(arr) {
	if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
	return arr.reduce((acc, item, i) =>
	  acc.concat(permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])), []);
  }

export function compareArrayBonus(combo, bonus, strictOrder) {
	/**
	 * Compare the elements of the combo with the elements of the bonus. 
	 * 
	 * @param {string[]} combo
	 * @param {string[]} bonus
	 * 
	 * @returns {boolean}
	 */
	console.log("comparing","combo", combo,"bonus", bonus)


	// assert the combo and the bonus have the same length
	if (combo.length != bonus.length) {
	console.log("[WARNING] lengths not equal; returning false")	
	return false
	}
	// if strictOrder is false, we need to check every combination of the combo
	// i.e. we need to permute the combo options
	if (strictOrder) {
		const res = combo.every((el, index) => bonus[index].includes(el))
		// console.log("res1", res)
		return res
	} else {
		const res = permute(combo).some((el) => {
			 return el.every((el, index) => bonus[index].includes(el))
			})

		// console.log("res2", res)
		return res
	}

}