import type{ CompositionalRequirements } from "./types"

export const crD1: CompositionalRequirements = {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 180° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "A",
                group: [2],
                keywords: ["180", "split", ["jump", "leap"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "A",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3 or rol/flair",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "A",
                group: [3],
                keywords: [],
                antiKeywords: [],
                specificElements: ["1.303", "1.403", "1.304", "1.207", "1.308", "4.203", "4.204", "4.304", "4.105", "4.305", "4.206", "4.306", "4.307", "5.405"]
            }
        ]
    },
    3: {
        description: "One acrobatic series, with at least one element with flight",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [5],
                keywords: [],
                antiKeywords: ["roll"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: ["roll"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Acrobatic elements in different directions (backwards and forward/sideways)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [["backwards", "bwd", "flic-flac"]],
                antiKeywords: ["roll"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [["forward", "fwd", "sideways", "side", "swd"]],
                antiKeywords: ["roll"],
                specificElements: []
            }
        ]
    },

}

export const crD2: CompositionalRequirements = {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 180° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["dance"],
                minimalValue: "A",
                group: [2],
                keywords: ["180", "split", ["jump", "leap"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "A",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3 or rol/flair",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["dance"],
                minimalValue: "A",
                group: [3],
                keywords: ["turn"],
                antiKeywords: [],
                specificElements: ["1.303", "1.403", "1.304", "1.207", "1.308", "4.203", "4.204", "4.304", "4.105", "4.305", "4.206", "4.306", "4.307", "5.405"]
            }
        ]
    },
    3: {
        description: "One acrobatic series",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: ["roll"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: ["roll"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Two different acrobatic elements",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: ["roll"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: ["roll"],
                specificElements: []
            }
        ]
    }
}

export const crD3: CompositionalRequirements = {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 180° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2],
                keywords: ["180", "split", ["jump", "leap"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3 or rol/flair",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [3],
                keywords: ["turn"],
                antiKeywords: [],
                specificElements: ["1.303", "1.403", "1.304", "1.207", "1.308", "4.203", "4.204", "4.304", "4.105", "4.305", "4.206", "4.306", "4.307", "5.405"]
            }
        ]
    },
    3: {
        description: "Two different acrobatic elements, of which 1 at least A value",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [4, 5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    4: {
        description: "An acrobatic element through or to handstand (minimum A value)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [["handstand", "hstd", "cartweel", "walkover", "handspring", "flic-flac"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    }
}

export const crD4: CompositionalRequirements = {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 135° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2],
                keywords: [["135", "180"], "split", ["jump", "leap"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [3],
                keywords: ["turn"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acrobatic element of at least A value",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            },
        ]
    },
    4: {
        description: "An acrobatic element through or to handstand (minimum A value)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [["handstand", "hstd", "cartweel", "walkover", "handspring", "flic-flac"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    }

}

export const crD5: CompositionalRequirements = {
    1: {
        description: "One connection of at least 2 different dance elements, 1 being a leap or jump with 135° split (cross or side), or straddle position",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2],
                keywords: [["135", "180"], "split", ["jump", "leap"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [3],
                keywords: ["turn"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acrobatic element of at least TA value",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [4, 5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            },
        ]
    },
    4: {
        description: "An acrobatic element through or to handstand (minimum A value)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4, 5],
                keywords: [["handstand", "hstd", "cartweel", "walkover", "handspring", "flic-flac"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    }
}

export const crD6: CompositionalRequirements = {
    1: {
        description: "One connection of at least 2 different dance elements.",
        elementsShouldBeConnected: true,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [2, 3],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "A turn from group 3",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [3],
                keywords: ["turn"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "A movement close to the beam; where the torso is close to the beam. this does not have to be an element",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic", "dance"],
                minimalValue: "A",
                group: [4, 5],
                keywords: ["rol"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    4: {
        description: "An hold element or (hand)stand",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [],
                keywords: [],
                antiKeywords: [],
                specificElements: ["4.101", "4.102", "4.202", "4.103", "4.203", "4.002", "4.003"]
            }
        ]
    }

}
