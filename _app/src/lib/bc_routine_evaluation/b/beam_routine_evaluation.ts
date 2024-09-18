import type { Supplement, Levels } from "../types"
import * as ConnectionValues from "./beam_connection_values"
import * as CompositionalRequirements from "./beam_compositional_requirements"

const D1: Supplement = {
    maxDV: 8,
    allowedDifficulty: ["A", "B", "C", "D"],
    minAcro: 3,
    minDance: 3,
    connectionValuesAndBonus: ConnectionValues.cvD1,
    compositionalRequirements: CompositionalRequirements.crD1
}

const D2: Supplement = {
    maxDV: 8,
    allowedDifficulty: ["A", "B", "C"],
    minAcro: 3,
    minDance: 3,
    connectionValuesAndBonus: ConnectionValues.cvD2,
    compositionalRequirements: CompositionalRequirements.crD2
}

const D3: Supplement = {
    maxDV: 8,
    allowedDifficulty: ["TA", "A", "B", "C"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: ConnectionValues.cvD3,
    compositionalRequirements: CompositionalRequirements.crD3
}

const D4: Supplement = {
    maxDV: 7,
    allowedDifficulty: ["TA", "A", "B"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: ConnectionValues.cvD4,
    compositionalRequirements: CompositionalRequirements.crD4
}

const D5: Supplement = {
    maxDV: 6,
    allowedDifficulty: ["TA", "A"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: ConnectionValues.cvD5,
    compositionalRequirements: CompositionalRequirements.crD5
}

const D6: Supplement = {
    maxDV: 6,
    allowedDifficulty: ["SA", "TA", "A"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: ConnectionValues.cvD6,
    compositionalRequirements: CompositionalRequirements.crD6
}

export const routineEvaluationBeam: { [key in typeof Levels[number]]: Supplement } = { "D1": D1, "D2": D2, "D3": D3, "D4": D4, "D5": D5, "D6": D6 }
