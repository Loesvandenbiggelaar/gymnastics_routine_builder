import type{ CompositionalRequirements } from "./types"


export const crD1: CompositionalRequirements = {
    1: {
        description: "An element with flight from low bar to high bar, or from high bar to low bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [],
            keywords: [],
            antiKeywords: [],
            specificElements: ["2.403", "2.206", "2.406", "2.307", "2.407", "3.503", "3.304", "3.404", "3.504", "3.307", "3.407", "3.309", "4.302", "4.402", "4.205", "4.305", "4.405", "4.505", "4.208", "4.308", "4.508", "5.301", "5.202", "5.502", "5.404", "5.207", "5.307", "5.409", "5.509"]
        }]
    },
    2: {
        description: "Cast to handstand",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [],
            keywords: ["cast", ["hstd", "handstand"]],
            antiKeywords: [],
            specificElements: []
        }]
    },
    3: {
        description: "An circle element from group 2,4 or 5, to or trough handstand",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [2,4,5],
            keywords: [["handstand", "hstd"]],
            antiKeywords: [],
            specificElements: []
        }]
    },
    4: {
        description: "An element with at least 180 turn",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [2,3,4,5],
            keywords: ["turn"],
            antiKeywords: [],
            specificElements: []
        }]
    }
}

export const crD2: CompositionalRequirements = {
    1: {
        description: "An element with flight from low bar to high bar, or from high bar to low bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [],
            keywords: [],
            antiKeywords: [],
            specificElements: ["2.403", "2.206", "2.406", "2.307", "2.407", "3.503", "3.304", "3.404", "3.504", "3.307", "3.407", "3.309", "4.302", "4.402", "4.205", "4.305", "4.405", "4.505", "4.208", "4.308", "4.508", "5.301", "5.202", "5.502", "5.404", "5.207", "5.307", "5.409", "5.509"]
        }]
    },
    2: {
        description: "Cast to above horizontal",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [],
            keywords: ["cast"],
            antiKeywords: [],
            specificElements: []
        }]
    },
    3: {
        description: "An circle element from group 2,4 or 5, of at least B value (no flight)",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "B",
            group: [2,4,5],
            keywords: [],
            antiKeywords: ["flight"],
            specificElements: []
        }]
    },
    4: {
        description: "An element with at least 180 turn",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [2,3,4,5],
            keywords: ["turn"],
            antiKeywords: [],
            specificElements: []
        }]
    }
}

export const crD3: CompositionalRequirements = {
    1: {
        description: "Two different kips",
        elementsShouldBeUnique: true,
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: ["kip"],
            antiKeywords: [],
            specificElements: []
        },
        {
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: ["kip"],
            antiKeywords: [],
            specificElements: []
        }]
    },
    2: {
        description: "Cast to horizontal",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: ["cast"],
            antiKeywords: [],
            specificElements: []
        }]
    },
    3: {
        description: "Two different elements, or one element of B value, from group 2,4 or 5 (no flight)",
        elementsShouldBeUnique: true,
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,4,5],
            keywords: [],
            antiKeywords: ["flight"],
            specificElements: []
        },
        {
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,4,5],
            keywords: [],
            antiKeywords: ["flight"],
            specificElements: []
        }]
    },
    4: {
        description: "An element with at least 180 turn",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [1,2,3,4,5],
            keywords: ["turn"],
            antiKeywords: [],
            specificElements: []
        }]
    }
}

export const crD4: CompositionalRequirements = {
    1: {
        description: "A kip",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: ["kip"],
            antiKeywords: [],
            specificElements: []
        }]
    },
    2: {
        description: "Cast to horizontal",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: ["cast"],
            antiKeywords: [],
            specificElements: []
        }]
    },
    3: {
        description: "An element from group 2,4 or 5 (no flight)",
        elementsShouldBeUnique: true,
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,4,5],
            keywords: [],
            antiKeywords: ["flight"],
            specificElements: []
        }]
    },
    4: {
        description: "An element with change from low bar to high bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,3,4,5],
            keywords: [],
            antiKeywords: [],
            specificElements: ["5.008", "5.105", "5.106", "5.108"]
        }]
    }
}

export const crD5: CompositionalRequirements = {
    1: {
        description: "2 swings on high bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: [],
            antiKeywords: [],
            specificElements: ["3.002"]
        },
        {
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: [],
            antiKeywords: [],
            specificElements: ["3.002"]
        }
    ]
    },
    2: {
        description: "Cast to horizontal",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: ["cast"],
            antiKeywords: [],
            specificElements: []
        }]
    },
    3: {
        description: "An element from group 2,4 or 5 (no flight)",
        elementsShouldBeUnique: true,
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,4,5],
            keywords: [],
            antiKeywords: ["flight"],
            specificElements: []
        }]
    },
    4: {
        description: "An element with change from low bar to high bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,3,4,5],
            keywords: [],
            antiKeywords: [],
            specificElements: ["5.008", "5.105", "5.106", "5.108"]
        }]
    }
}


export const crD6: CompositionalRequirements = {
    1: {
        description: "an element from group 3",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [3],
            keywords: [],
            antiKeywords: [],
            specificElements: []
        }]
    },
    2: {
        description: "An element on the low bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [],
            keywords: [],
            antiKeywords: [],
            specificElements: []
        }]
    },
    3: {
        description: "An element from group 2,4 or 5 (no flight)",
        elementsShouldBeUnique: true,
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,4,5],
            keywords: [],
            antiKeywords: ["flight"],
            specificElements: []
        }]
    },
    4: {
        description: "An element on the high bar, or with change from low bar to high bar",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "TA",
            group: [2,3,4,5],
            keywords: [],
            antiKeywords: [],
            specificElements: ["5.008", "5.105", "5.106", "5.108", "3.002","3.003", "3.004", "1.104", "1.105"]
        }]
    }
}
