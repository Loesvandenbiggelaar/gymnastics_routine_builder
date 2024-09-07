import type { CompositionalRequirements } from "./types"

export const crD1: CompositionalRequirements = {
    1: {
        description: "You are allowed to perform 2 times",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: []
    },
    2: {
        description: "The best score counts for allround competition, the average score for an apparatus competition",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: []
    }
}

export const crD2: CompositionalRequirements = {
    1: {
        description: "You are allowed to perform 2 times",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [],
                keywords: [],
                antiKeywords: [],
                specificElements: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.10", "1.11", "1.12", "1.20", "1.21", "1.22", "1.23", "1.24", "1.30", "1.31", "1.40", "1.41", "1.42", "1.50", "1.51", "1.52", "1.53", "1.60", "1.61", "1.62", "2.10", "3.11", "3.20", "4.10", "4.11"]
            },
        ]
    },
    2: {
        description: "The best score counts for allround competition, the average score for an apparatus competition",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: []
    }
}

export const crD3: CompositionalRequirements = {
    1: {
        description: "You are allowed to perform 2 times",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [],
                keywords: [],
                antiKeywords: [],
                specificElements: ["1.00", "1.01", "1.02", "1.10", "1.11", "1.12", "1.20", "1.21", "1.22"]
            },
        ]
    },
    2: {
        description: "The best score counts for allround competition, the average score for an apparatus competition",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            
        ]
    }
}

export const crD4: CompositionalRequirements = {
    1: {
        description: "You are allowed to perform 2 times",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [],
                keywords: [],
                antiKeywords: [],
                specificElements: ["1.00", "1.01", "1.02", "1.10", "1.11", "1.12", "1.20", "1.21", "1.22"]
            },
        ]
    },
    2: {
        description: "The best score counts for allround competition, the average score for an apparatus competition",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: []
    }
}

export const crD5: CompositionalRequirements = {
    1: {
        description: "You are allowed to perform 2 times",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [],
                keywords: [],
                antiKeywords: [],
                specificElements: ["1.00", "1.01", "1.02", "1.10", "1.11", "1.12", "1.20", "1.21", "1.22"]
            },
        ]
    },
    2: {
        description: "The best score counts for allround competition, the average score for an apparatus competition",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: []
    }
}

export const crD6: CompositionalRequirements = {
    1: {
        description: "You are allowed to perform 2 times",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "SA",
                group: [],
                keywords: [],
                antiKeywords: [],
                specificElements: ["SA1", "SA2", "SA3", "SA4", "0.80", "1.00", "1.01", "1.10", "1.20"]
            },
        ]
    },
    2: {
        description: "The best score counts for allround competition, the average score for an apparatus competition",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: []
    }
}
