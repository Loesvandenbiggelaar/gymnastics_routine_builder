import type{ CompositionalRequirements } from "../types"

export const crH1: CompositionalRequirements = {
    1: {
        description: "Element from group I",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic", "non-acrobatic"],
                minimalValue: "A",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "Element from group II",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic", "non-acrobatic"],
                minimalValue: "A",
                group: [2],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "Element from group III",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic", "non-acrobatic"],
                minimalValue: "A",
                group: [3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Element from group IV",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic", "non-acrobatic"],
                minimalValue: "A",
                group: [4],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
}
