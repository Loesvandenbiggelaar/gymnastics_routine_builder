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

export const cvD2: ConnectionValueOptions = [{
    type: "The same or different elements",
    detail: {
        description: "The same or different elements",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
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
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}
]

export const cvD3: ConnectionValueOptions = [{
    type: "The same or different elements",
    detail: {
        description: "The same or different elements",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["BCDEFGH", "BCDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "CDEFGH"], value: 0.2 }
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
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}
]

export const cvD4: ConnectionValueOptions = [{
    type: "The same or different elements",
    detail: {
        description: "The same or different elements",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 }
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
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}
]

export const cvD5: ConnectionValueOptions = [{
    type: "The same or different elements",
    detail: {
        description: "The same or different elements",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["TAABCDEFGH", "ABCDEFGH"], value: 0.1 }
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
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}
]

export const cvD6: ConnectionValueOptions = [{
    type: "The same or different elements",
    detail: {
        description: "The same or different elements",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["TAABCDEFGH", "TAABCDEFGH"], value: 0.1 }
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
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}
]
