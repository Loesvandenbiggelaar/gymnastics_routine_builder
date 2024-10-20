import type { arcolineType } from "../types"

export const alD1: arcolineType = {
    max: 4,
    min: 2,
    requirement: {
        description: "At least 2 elements with flight, of which at least one salto.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["aerial"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: ["salto"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    }
}
export const alD2: arcolineType = {
    max: 4,
    min: 2,
    requirement: {
        description: "At least 2 elements with flight, of which at least one salto.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["aerial"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: ["salto"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    }
}
export const alD3: arcolineType = {
    max: 4,
    min: 2,
    requirement: {
        description: "Minimal one element with flight.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["aerial"],
                specificElements: []
            }
        ]
    }
}
export const alD4: arcolineType = {
    max: 4,
    min: 2,
    requirement: {
        description: "Minimal one element with flight.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["aerial"],
                specificElements: []
            }
        ]
    }
}
export const alD5: arcolineType = {
    max: 3,
    min: 2,
    requirement: {
        description: "Minimal one element with flight.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["aerial"],
                specificElements: []
            }
        ]
    }
}
export const alD6: arcolineType = {
    max: 3,
    min: 1,
    requirement: {
        description: "Minimal one acrobatic element.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    }
}
