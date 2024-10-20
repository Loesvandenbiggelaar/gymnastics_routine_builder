export type ElementTypes = "dance" | "acrobatic" | "non-acrobatic" | undefined

export type ConnectionValueDetail = {
    description: string,
    elementTypes: ElementTypes[],
    uniqueElements: boolean,
    strictOrder: boolean,
    combos: { combo: string[], value: number }[]
}

export type ConnectionValueOptions = { type: string, detail: ConnectionValueDetail }[]

export const Levels = ["D1", "D2", "D3", "D4", "D5", "D6"]

export type Vault = {
    compositionalRequirements: CompositionalRequirements
}

export type Supplement = {
    maxDV: number
    allowedDifficulty: string[]
    minAcro?: number
    minDance?: number
    connectionValuesAndBonus: ConnectionValueOptions
    compositionalRequirements: CompositionalRequirements
    acroLines?: arcolineType
}

export type ElementRequirementDetail = {
    type: ElementTypes[],
    minimalValue: string,
    group: number[],
    keywords: (string | string[])[],
    antiKeywords: (string | string[])[],
    specificElements: string[]
}

export type Requirement = {
    description: string,
    elementsShouldBeConnected?: boolean,
    elementsShouldBeUnique?: boolean,
    elementsShouldBeInOrder?: boolean,
    elementsShouldBeInTheSameCombo?: boolean,
    elementsShouldBeAfterEachOther?: boolean,
    elements: ElementRequirementDetail[]
}

export type CompositionalRequirements = {
    [x: string]: any
    [key: number]: Requirement
}

export type Dscore = {
    difficultyValue: number
    compositionalRequirements?: number
    connectionValue?: number
    serieBonus?: number
    dismountBonus?: number
    totalDifficulty: number
}

export type arcolineType = {
    max: number,
    min: number,
    requirement: Requirement
}
