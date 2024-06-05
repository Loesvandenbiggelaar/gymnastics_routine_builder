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

// check if the last element is a dismount. 
// Return true if last element is of group 6. otherwise false.
// Only tested for women
/**
 * @param {ElementType[]} routine_flat
 */
export function is_dismount_done(routine_flat) {
	const length_routine = routine_flat.length;
	let last_element = routine_flat[length_routine - 1];
	if (last_element['group_number'] == '6') {
		return true;
	} else {
		return false;
	}
}