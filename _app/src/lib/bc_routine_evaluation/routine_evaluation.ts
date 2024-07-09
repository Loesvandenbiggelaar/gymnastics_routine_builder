// import { ElementType } from "../data/elements/all_elements"

// export type ElementMetadata = { element: ElementType, order?: number, isRepeated?: Boolean, value?: number, elementType?: "dance" | "acrobatic" }

// export type ComboMetadata = { combo: ElementMetadata[], combinationType?: "dance" | "acrobatic" | "mix", value: number }

// export type RoutineMetadata = ComboMetadata[]

// export type Routine = ElementType[][]

export type Combo = { combo: string[], value: number }

export type ComboDescription = { description: string, elementTypes: ("dance" | "acrobatic" | undefined)[], uniqueElements: boolean, strictOrder: boolean, single: boolean, combos: Combo[] }

export type ComboOptions = { type: string, detail: ComboDescription }[]


export const comboOptionD1: ComboOptions = [{
    type: "Acro met vlucht, (mag opsprong en afsprong zijn)",
    detail: {
        description: "Acro met vlucht, (mag opsprong en afsprong zijn)",
        elementTypes: ["acrobatic"],
        uniqueElements: true,
        strictOrder: false,
        single: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "Dans",
    detail: {
        description: "dans elementen",
        elementTypes: ["dance"],
        uniqueElements: false,
        strictOrder: false,
        single: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "DEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "Draaien", // TODO 
    detail: {
        description: "draaien",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        single: false,
        combos: [
            { combo: ["A", "BCDEFGH"], value: 0.1 }
        ]
    }
},
{
    type: "Mix",
    detail: {
        description: "mix verbinding",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: true,
        strictOrder: false,
        single: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "DEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "SerieBonus",
    detail: {
        description: "Seriebonus",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: false, // TODO: dance elements cannot be repeated, acrobatic elements can be repeated
        strictOrder: false,
        single: true,
        combos: [
            { combo: ["ABCDEFGHI", "BCDEFGHI", "BCDEFGHI"], value: 0.1 }
        ]
    }
},
{
    type: "dismount_bonus",
    detail: {
        description: "dismount_bonus",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        single: true,
        combos: [
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}]


export function getComboDescription(comboType: string): ComboDescription {
    return comboOptionD1.filter(combo => combo.type == comboType)[0].detail
}