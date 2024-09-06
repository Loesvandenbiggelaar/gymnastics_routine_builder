import type { ConnectionValueOptions } from "./types"

export const cvD1: ConnectionValueOptions = [{
    type: "salto's directly connected",
    detail: {
        description: "Salto's directly connected",
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
    type: "Salto's indirectly connected",
    detail: {
        description: "Salto's indirectly connected",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "A", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["A", "A", "C"], value: 0.2 },
            { combo: ["A", "DEFGH"], value: 0.2 },
        ]
    }
},
{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "turns", // TODO
    detail: {
        description: "turns, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["BCDEFGH", "BCDEFGH"], value: 0.1 }
        ]
    }
},
{
    type: "mix",
    detail: {
        description: "mix elements, two different elements",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: true,
        strictOrder: true,
        combos: [
            { combo: ["BCDEFGH", "ABCDEFGH"], value: 0.1 },
            { combo: ["CDEFGH", "ABCDEFGH"], value: 0.2 }
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
    type: "salto's directly connected",
    detail: {
        description: "Salto's directly connected",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 },
        ]
    }
},
{
    type: "Salto's indirectly connected",
    detail: {
        description: "Salto's indirectly connected",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["BCDEFGH", "BCDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "CDEFGH"], value: 0.2 },
        ]
    }
},
{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "turns", // TODO
    detail: {
        description: "turns, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["BCDEFGH", "BCDEFGH"], value: 0.1 }
        ]
    }
},
{
    type: "mix",
    detail: {
        description: "mix elements, two different elements",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.1 },
            { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.2 }
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
    type: "salto's directly connected",
    detail: {
        description: "Salto's directly connected",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 },
        ]
    }
},
{
    type: "Salto's indirectly connected",
    detail: {
        description: "Salto's indirectly connected",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 },
        ]
    }
},
{
    type: "acro",
    detail: {
        description: "Acro directly connected, two elements with flight, of which one salto",
        elementTypes: ["acrobatic"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.1 }
        ]
    }
},
{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["BCDEFGH", "BCDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "CDEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "mix",
    detail: {
        description: "mix elements, two different elements",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.1 },
            { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.2 }
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

export const cvD4: ConnectionValueOptions = [
    {
        type: "acro",
        detail: {
            description: "Acro directly connected, two elements with flight, of which one salto",
            elementTypes: ["acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.1 },
                { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 }
            ]
        }
    },
    {
        type: "dance",
        detail: {
            description: "Dance elements, two different elements",
            elementTypes: ["dance"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["A", "A"], value: 0.1 },
                { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 }
            ]
        }
    },
    {
        type: "mix",
        detail: {
            description: "mix elements, two different elements",
            elementTypes: ["dance", "acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.1 }
            ]
        }
    }
]

export const cvD5: ConnectionValueOptions = [
    {
        type: "acro",
        detail: {
            description: "Acro directly connected, two elements with flight, of which one salto",
            elementTypes: ["acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["ABCDEFGH", "ABCDEFGH"], value: 0.1 }
            ]
        }
    },
    {
        type: "dance",
        detail: {
            description: "Dance elements, two different elements",
            elementTypes: ["dance"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["TA", "A"], value: 0.1 }
            ]
        }
    },
    {
        type: "mix",
        detail: {
            description: "mix elements, two different elements",
            elementTypes: ["dance", "acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["TAABCDEFGH", "ABCDEFGH"], value: 0.1 },
                { combo: ["ABCDEFGH", "TAABCDEFGH"], value: 0.1 }
            ]
        }
    }
]

export const cvD6: ConnectionValueOptions = [
    {
        type: "acro",
        detail: {
            description: "Acro directly connected, two elements with flight, of which one salto",
            elementTypes: ["acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["TAABCDEFGH", "TAABCDEFGH"], value: 0.1 }
          ]
        }
    },
    {
        type: "dance",
        detail: {
            description: "Dance elements, two different elements",
            elementTypes: ["dance"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["TA", "TAA"], value: 0.1 }
            ]
        }
    },
    {
        type: "mix",
        detail: {
            description: "mix elements, two different elements",
            elementTypes: ["dance", "acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            combos: [
                { combo: ["TAABCDEFGH", "TAABCDEFGH"], value: 0.1 }
            ]
        }
    }
]
