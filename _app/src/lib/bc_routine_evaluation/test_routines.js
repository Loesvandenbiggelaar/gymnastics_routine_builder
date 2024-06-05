
// load the all_elements file
import { allElements } from "../data/elements/all_elements.js";
/** @typedef {import("$lib/data/elements/all_elements.ts").ElementType} ElementType */


// based on the list of element ids (including combos), retreive the elements from the allElements object
/**
 * @param {string[][]} routine_ids
 * @param {string} language
 * @param {string} apparatus
 */
function create_routine(routine_ids, language, apparatus) {
    // @ts-ignore
    let routine = [];
    routine_ids.forEach((combo_ids) => {
        // @ts-ignore
        let combo = [];
        combo_ids.forEach((element_id) => {
            combo.push(allElements[language][apparatus].filter((element) => element["id"] == element_id)[0]);
        });
        // @ts-ignore
        routine.push(combo);
    });
    // @ts-ignore
    return routine;
}

// normal routine, enough elements, no repeated acrobatic elements, no repeated gymnastic elements, dismount done
const beam_normal_ids = [["1.101"],[ "2.303", "2.101", "2.303"], ["2.310"], ["4.107", "5.201"], ["4.107", "6.204"]]
export const beam_routine_normal = create_routine(beam_normal_ids, "en", "b");

// routine with no dismount
const beam_no_dismount_ids = [["1.101"],[ "2.303", "2.101", "2.303"], ["2.310"], ["4.107", "5.201"], ["4.107"]]
export const beam_routine_no_dismount = create_routine(beam_no_dismount_ids, "en", "b");

// routine with no gymnastic elements
const beam_no_gymnastic_ids = [["1.101"],["4.107", "5.201"], ["4.107", "6.204"], ["4.107", "5.201"]]
export const beam_routine_no_gymnastic = create_routine(beam_no_gymnastic_ids, "en", "b");