
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

const floor_normal_ids = [["3.106", "5.201"], ["1.205", "1.211"], ["3.105", "4.302", "5.301"], ["2.307", "1.213"]]
export const floor_routine_normal = createRoutine("f_w", floor_normal_ids, "en");



// --------------------------------
// vault routines

const vault_normal_ids = [["1.10"], ["1.11"]]
export const vault_yamashitas = createRoutine("v_w", vault_normal_ids, "en")

// --------------------------------
// uneven bars routines
const ub_normal_ids_d1 = [["1.101"], ["1.101"], ["2.305", "5.207"], ["1.104", "2.101", "3.201", "3.201", "6.305"], ]
export const ub_routine_normal_d1 = createRoutine("ub", ub_normal_ids_d1, "en");

const ub_normal_ids_d4 = [["1.101", "2.001", "2.105"], ["5.008", "3.004"], ["6.101"]]
export const ub_routine_normal_d4 = createRoutine("ub", ub_normal_ids_d4, "en");

// --------------------------------
// floor men
const floor_men_h1 = [["1.7"], ["2.13", "2.20", "2.20"], ["3.1", "3.31", "3.31"], ["1.19"], ["1.49"]]
export const floor_men_routine_h1 = createRoutine("f_m", floor_men_h1, "en")
