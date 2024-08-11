export type ConnectionValueDetail = { 
    description: string, 
    elementTypes: ("dance" | "acrobatic" | undefined)[],
    uniqueElements: boolean,
    strictOrder: boolean, 
    single: boolean, 
    combos: { combo: string[], value: number }[] }

type ConnectionValueOptions = { type: string, detail: ConnectionValueDetail }[]

export const levels = ["D1", "D2", "D3", "D4", "D5", "D6"]

const connectionValuesD1: ConnectionValueOptions = [{
    type: "acro with flight",
    detail: {
        description: "Acro with flight, can be the same elements and can include mount and dismount",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        single: false,
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
    type: "turns", // TODO 
    detail: {
        description: "turns, two different elements",
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
    type: "mix",
    detail: {
        description: "mix elements, two different elements",
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
    type: "serieBonus",
    detail: {
        description: "Seriebonus, all combinations of acro and dance elements are allowed. Maximum of 2 acro elements after each other",
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
    type: "dismountBonus",
    detail: {
        description: "Dismount bonus",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        single: true,
        combos: [
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}]

const connectionValuesD2: ConnectionValueOptions = [{
    type: "acro with flight",
    detail: {
        description: "Acro with flight, can be the same elements and can include mount and dismount",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        single: false,
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
        single: false,
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
        single: false,
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
        single: false,
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
        single: true,
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
        single: true,
        combos: [
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}]

const connectionValuesD3: ConnectionValueOptions = [{
    type: "acro with or without flight",
    detail: {
        description: "Acro with or without flight, can be the same elements and can include mount and dismount",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        single: false,
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
        single: false,
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
        single: false,
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
        single: true,
        combos: [
            { combo: ["BCDEFGH"], value: 0.2 }
        ]
    }
}]

const connectionValuesD4: ConnectionValueOptions = [{
    type: "acro with or without flight",
    detail: {
        description: "Acro with or without flight, can be the same elements and can include mount and dismount",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        single: false,
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
        single: false,
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
        single: false,
        combos: [
            { combo: ["A", "A"], value: 0.1 },
            { combo: ["ABCDEFGH", "BCDEFGH"], value: 0.2 },
        ]
    }
}
]

const connectionValuesD5: ConnectionValueOptions = [{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        single: false,
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
        single: false,
        combos: [
            { combo: ["TAABCDEFGH", "ABCDEFGH"], value: 0.1 },
        ]
    }
}
]

const connectionValuesD6: ConnectionValueOptions = [{
    type: "dance",
    detail: {
        description: "Dance elements, two different elements",
        elementTypes: ["dance"],
        uniqueElements: true,
        strictOrder: false,
        single: false,
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
        single: false,
        combos: [
            { combo: ["TAABCDEFGH", "ABCDEFGH"], value: 0.1 },
        ]
    }
}
]

type CompositionalRequirements = {
	[x: string]: any
    [key: number]: {
        description: string,
        elementsShouldBeConnected: boolean,
        elementsShouldBeUnique: boolean,
        elements: {
            type: ("dance" | "acrobatic")[],
            minimalValue: string,
            group: number[],
            keywords: (string | string[])[],
            antiKeywords: (string | string[])[],
            specificElements: string[]
        }[]
    }
}
const compositionalRequirementsD1: CompositionalRequirements= {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 180° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: true,
        elements:[
            {
                type:["dance"],
                minimalValue: "A",
                group:[2],
                keywords:["180", "split", ["jump","leap"]],
                antiKeywords:[],
                specificElements: []
            },
            {
                type:["dance"],
                minimalValue: "A",
                group:[2, 3],
                keywords:[],
                antiKeywords:[],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3 or rol/flair",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements:[
            {
                type:["dance"],
                minimalValue: "A",
                group:[3],
                keywords:[],
                antiKeywords:[],
                specificElements: ["1.303", "1.403", "1.304", "1.207", "1.308", "4.203", "4.204", "4.304", "4.105", "4.305", "4.206", "4.306", "4.307", "5.405"]
            }        
        ]
    },
    3: {
        description: "One acrobatic series, with at least one element with flight",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements:[
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[5],
                keywords:[],
                antiKeywords:["roll"],
                specificElements: []
            },
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[],
                antiKeywords:["roll"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Acrobatic elements in different directions (backwards and forward/sideways)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements:[
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[["backwards", "bwd", "flic-flac"]],
                antiKeywords:["roll"],
                specificElements: []
            },
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[["forward", "fwd", "sideways", "side", "swd"]],
                antiKeywords:["roll"],
                specificElements: []
            }
        ]
    },

}

const compositionalRequirementsD2: CompositionalRequirements= {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 180° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements:[
            {
                type:["dance"],
                minimalValue: "A",
                group:[2],
                keywords:["180", "split", ["jump","leap"]],
                antiKeywords:[],
                specificElements: []
            },
            {
                type:["dance"],
                minimalValue: "A",
                group:[2, 3],
                keywords:[],
                antiKeywords:[],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3 or rol/flair",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements:[
            {
                type:["dance"],
                minimalValue: "A",
                group:[3],
                keywords:["turn"],
                antiKeywords:[],
                specificElements: ["1.303", "1.403", "1.304", "1.207", "1.308", "4.203", "4.204", "4.304", "4.105", "4.305", "4.206", "4.306", "4.307", "5.405"]
            }        
        ]
    },
    3: {
        description: "One acrobatic series",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements:[
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[],
                antiKeywords:["roll"],
                specificElements: []
            },
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[],
                antiKeywords:["roll"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Two different acrobatic elements",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements:[
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[],
                antiKeywords:["roll"],
                specificElements: []
            },
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[],
                antiKeywords:["roll"],
                specificElements: []
            }
        ]
    }
}


const compositionalRequirementsD3: CompositionalRequirements= {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 180° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements:[
            {
                type:["dance"],
                minimalValue: "TA",
                group:[2],
                keywords:["180", "split", ["jump","leap"]],
                antiKeywords:[],
                specificElements: []
            },
            {
                type:["dance"],
                minimalValue: "TA",
                group:[2, 3],
                keywords:[],
                antiKeywords:[],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3 or rol/flair",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements:[
            {
                type:["dance"],
                minimalValue: "TA",
                group:[3],
                keywords:["turn"],
                antiKeywords:[],
                specificElements: ["1.303", "1.403", "1.304", "1.207", "1.308", "4.203", "4.204", "4.304", "4.105", "4.305", "4.206", "4.306", "4.307", "5.405"]
            }        
        ]
    },
    3: {
        description: "Two different acrobatic elements, of which 1 at least A value",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements:[
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[],
                antiKeywords:[],
                specificElements: []
            },
            {
                type:["acrobatic"],
                minimalValue: "TA",
                group:[4,5],
                keywords:[],
                antiKeywords:[],
                specificElements: []
            }
        ]
    },
    4: {
        description: "An acrobatic element through or to handstand (minimum A value)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements:[
            {
                type:["acrobatic"],
                minimalValue: "A",
                group:[4,5],
                keywords:[["handstand", "hstd", "cartweel", "walkover", "handspring", "flic-flac"]],
                antiKeywords:[],
                specificElements: []
            }
        ]
    }
}

export type Supplement =  {
    maxDV: number;
    allowedDifficulty: string[];
    minAcro: number;
    minDance: number;
    connectionValuesAndBonus: ConnectionValueOptions;
    compositionalRequirements: CompositionalRequirements;
}

const D1:Supplement = {
    maxDV: 8,
    allowedDifficulty: ["A", "B", "C", "D"],
    minAcro: 3,
    minDance: 3,
    connectionValuesAndBonus: connectionValuesD1,
    compositionalRequirements: compositionalRequirementsD1
};

const D2:Supplement = {
    maxDV: 8,
    allowedDifficulty: ["A", "B", "C"],
    minAcro: 3,
    minDance: 3,
    connectionValuesAndBonus: connectionValuesD2,
    compositionalRequirements: compositionalRequirementsD2
};

const D3:Supplement = {
    maxDV: 8,
    allowedDifficulty: ["TA", "A", "B", "C"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: connectionValuesD3,
    compositionalRequirements: compositionalRequirementsD3
};

const D4:Supplement = {
    maxDV: 7,
    allowedDifficulty: ["TA", "A", "B"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: connectionValuesD4,
    compositionalRequirements: compositionalRequirementsD1
};

const D5:Supplement = {
    maxDV: 6,
    allowedDifficulty: ["TA", "A"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: connectionValuesD5,
    compositionalRequirements: compositionalRequirementsD1
};

const D6:Supplement = {
    maxDV: 6,
    allowedDifficulty: ["SA", "TA", "A"],
    minAcro: 2,
    minDance: 3,
    connectionValuesAndBonus: connectionValuesD6,
    compositionalRequirements: compositionalRequirementsD1
};




export const routineEvaluationBeam: { [key in typeof levels[number]]: Supplement } = {"D1": D1, "D2": D2, "D3": D3, "D4": D4, "D5": D5, "D6": D6}

export function getComboDescription(comboType: string): ConnectionValueDetail {
    return connectionValuesD1.filter(combo => combo.type == comboType)[0].detail
}
