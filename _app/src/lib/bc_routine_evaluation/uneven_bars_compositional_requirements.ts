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
            group: [],
            keywords: ["salto"],
            antiKeywords: [],
            specificElements: []
        }]
    }
}
