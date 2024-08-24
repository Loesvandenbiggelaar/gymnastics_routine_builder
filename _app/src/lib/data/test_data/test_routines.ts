
import { createRoutine } from '$lib/bc_routine_evaluation/get_elements_and_routines';


// --------------------------------
// beam routines

// normal routine, enough elements, no repeated acrobatic elements, no repeated gymnastic elements, dismount done
const beam_normal_ids = [["1.101"],[ "2.303", "2.101", "2.303"], ["2.310"],["5.312", "5.512"], ["4.107", "5.201"], ["4.107", "6.204"]]
export const beam_routine_normal = createRoutine("b", beam_normal_ids, "en");

// routine with no dismount
const beam_no_dismount_ids = [["1.101"],[ "2.303", "2.101", "2.303"], ["2.310"], ["4.107", "5.201"], ["4.107"]]
export const beam_routine_no_dismount = createRoutine("b", beam_no_dismount_ids, "en");

// routine with no gymnastic elements
const beam_no_gymnastic_ids = [["1.101"],["4.107", "5.201"], ["4.107", "6.204"], ["4.107", "5.201"]]
export const beam_routine_no_gymnastic = createRoutine("b", beam_no_gymnastic_ids, "en");

const beam_loes_ids = [["1.207", "4.204"],["2.202", "2.112"], ["3.101"], ["1.214"], ["2.110"], ["6.102"]]
export const beam_routine_loes = createRoutine("b", beam_loes_ids, "en");


// --------------------------------
// floor routines

const floor_normal_ids = [["3.106", "5.201"], ["1.205", "1.211"], ["3.105", "4.302"], ["2.307", "1.213"]]
export const floor_routine_normal = createRoutine("f_w", floor_normal_ids, "en");
