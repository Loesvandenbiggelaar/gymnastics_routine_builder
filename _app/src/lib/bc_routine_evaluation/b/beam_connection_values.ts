import type { ConnectionValueOptions } from "../types"

export const cvD1: ConnectionValueOptions = [{
    type: "acro with flight",
    detail: {
        description: "Acro with flight, can be the same elements and can include mount and dismount",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
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
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "DEFGH"], value: 0.2 }
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
            { combo: ["A", "BCDEFGH"], value: 0.1 }
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
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "DEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "serieBonus",
    detail: {
        description: "Seriebonus, all combinations of acro and dance elements are allowed. Maximum of 2 acro elements after each other",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: false, // TODO: dance elements cannot be repeated, acrobatic elements can be repeated
        strictOrder: false,
        combos: [
            { combo: ["ABCDEFGHI", "BCDEFGHI", "BCDEFGHI"], value: 0.1 }
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
}]

export const cvD2: ConnectionValueOptions = [{
    type: "acro with flight",
    detail: {
        description: "Acro with flight, can be the same elements and can include mount and dismount",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["ABCDEFGH", "CDEFGH"], value: 0.2 },
            { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
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
            { combo: ["A", "BCDEFGH"], value: 0.1 }
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
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["BCDEFGH", "BCDEFGH"], value: 0.2 },
            { combo: ["ABCDEFGH", "CDEFGH"], value: 0.2 }
        ]
    }
},
{
    type: "serieBonus",
    detail: {
        description: "Seriebonus, all combinations of acro and dance elements are allowed. Maximum of 2 acro elements after each other",
        elementTypes: ["dance", "acrobatic"],
        uniqueElements: false, // TODO: dance elements cannot be repeated, acrobatic elements can be repeated
        strictOrder: false,
        combos: [
            { combo: ["ABCDEFGHI", "ABCDEFGHI", "BCDEFGHI"], value: 0.1 }
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
}]

export const cvD3: ConnectionValueOptions = [{
    type: "acro with or without flight",
    detail: {
        description: "Acro with or without flight, can be the same elements and can include mount and dismount",
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
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["ABCDEFGH", "CDEFGH"], value: 0.2 },
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
}]

export const cvD4: ConnectionValueOptions = [{
    type: "acro with or without flight",
    detail: {
        description: "Acro with or without flight, can be the same elements and can include mount and dismount",
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
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 },
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
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 },
        ]
    }
}
]

export const cvD5: ConnectionValueOptions = [{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["TA", "ABDCEFGH"], value: 0.1 }
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
        ]
    }
}
]

export const cvD6: ConnectionValueOptions = [{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        combos: [
            { combo: ["TA", "ABDCEFGH"], value: 0.1 }
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
        ]
    }
}
]
