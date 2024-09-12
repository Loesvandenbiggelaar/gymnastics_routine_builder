import type { ConnectionValueOptions } from './types'

export const cvD1: ConnectionValueOptions = [{
    type: "The same or different elements",
    detail: {
        description: "The same or different elements",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["B", "C"], value: 0.1 },
            { combo: ["CDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["BCDEFGH", "DEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "dismountBonus",
    detail: {
        description: "Dismount bonus",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["CDEFGH"], value: 0.2 }
        ]
    }
}

]
