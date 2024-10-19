import type { Supplement, Levels } from "../types";
import * as ConnectionValues from "./floor_connection_values";
import * as CompositionalRequirements from "./floor_compositional_requirements";

const H1: Supplement = {
    maxDV: 10,
    allowedDifficulty: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    connectionValuesAndBonus: ConnectionValues.cvH1,
    compositionalRequirements: CompositionalRequirements.crH1,
}

// const D2: Supplement = {
//     maxDV: 8,
//     allowedDifficulty: ["A", "B", "C"],
//     minAcro: 3,
//     minDance: 3,
//     connectionValuesAndBonus: ConnectionValues.cvD2,
//     compositionalRequirements: CompositionalRequirements.crD2,
//     acroLines: AcroLines.alD2
// }

// const D3: Supplement = {
//     maxDV: 7,
//     allowedDifficulty: ["TA", "A", "B", "C"],
//     minAcro: 2,
//     minDance: 3,
//     connectionValuesAndBonus: ConnectionValues.cvD3,
//     compositionalRequirements: CompositionalRequirements.crD3,
//     acroLines: AcroLines.alD3
// }

// const D4: Supplement = {
//     maxDV: 7,
//     allowedDifficulty: ["TA", "A", "B"],
//     minAcro: 2,
//     minDance: 3,
//     connectionValuesAndBonus: ConnectionValues.cvD4,
//     compositionalRequirements: CompositionalRequirements.crD4,
//     acroLines: AcroLines.alD4
// }

// const D5: Supplement = {
//     maxDV: 6,
//     allowedDifficulty: ["TA", "A"],
//     minAcro: 2,
//     minDance: 3,
//     connectionValuesAndBonus: ConnectionValues.cvD5,
//     compositionalRequirements: CompositionalRequirements.crD5,
//     acroLines: AcroLines.alD5
// }

// const D6: Supplement = {
//     maxDV: 6,
//     allowedDifficulty: ["SA", "TA", "A"],
//     minAcro: 2,
//     minDance: 3,
//     connectionValuesAndBonus: ConnectionValues.cvD6,
//     compositionalRequirements: CompositionalRequirements.crD6,
//     acroLines: AcroLines.alD6
// }




export const routineEvaluationFloorMen: { [key in typeof Levels[number]]: Supplement } = { "H1": H1 }
// export const routineEvaluationFloorMen: { [key in typeof Levels[number]]: Supplement } = { "D1": D1, "D2": D2, "D3": D3, "D4": D4, "D5": D5, "D6": D6 }
