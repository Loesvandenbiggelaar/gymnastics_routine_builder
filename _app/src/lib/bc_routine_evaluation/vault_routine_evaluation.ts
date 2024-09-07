import type { Levels, Vault } from "./types"
import  * as CompositionalRequirements  from "./vault_compositional_requirements"

const D1: Vault = {
    compositionalRequirements: CompositionalRequirements.crD1
}

const D2: Vault = {
    compositionalRequirements: CompositionalRequirements.crD2
}

const D3: Vault = {
    compositionalRequirements: CompositionalRequirements.crD3
}

const D4: Vault = {
    compositionalRequirements: CompositionalRequirements.crD4
}

const D5: Vault = {
    compositionalRequirements: CompositionalRequirements.crD5
}

const D6: Vault = {
    compositionalRequirements: CompositionalRequirements.crD6
}




export const routineEvaluationVault:{ [key in typeof Levels[number]]: Vault }=  {
    "D1": D1,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D6": D6
}
