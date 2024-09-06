import type{ CompositionalRequirements } from "./types"

export const crD1: CompositionalRequirements = {
    1: {
        description: "A dance passage composed of 2 different jumps or hops, directly or indirectly connected, with at least 1 jump with 180° leg split in a transverse/sideways split or straddle position",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeAfterEachOther: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "A",
                group: [1],
                keywords: ["split", "180"],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "A",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "Salto with a 360° twist",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4,5],
                keywords: ["salto", "360"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acro line with 2 saltos", 
        elementsShouldBeConnected: false,
        elementsShouldBeInTheSameCombo: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4,5],
                keywords: ["salto"],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4,5],
                keywords: ["salto"],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Salto forward and salto backward (no aerials)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4],
                keywords: ["salto", ["forward", "fwd"]],
                antiKeywords: ["aerial"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [5],
                keywords: ["salto", ["backward", "bwd"]],
                antiKeywords: ["aerial"],
                specificElements: []
            }
        ]
    }
}

export const crD2: CompositionalRequirements = {
    1: {
        description: "A dance passage composed of 2 different jumps or hops, directly or indirectly connected, with at least 1 jump with 180° leg split in a transverse/sideways split or straddle position",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeAfterEachOther: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "A",
                group: [1],
                keywords: ["split", "180"],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "A",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "Salto with a 180° twist",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4,5],
                keywords: ["salto", ["180", "270", "360", "540", "720", "900", "1080"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acro line with a salto stretched", // in D2 a acro line is with at least 2 acrobatic elements
        elementsShouldBeConnected: false,
        elementsShouldBeInTheSameCombo: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4,5],
                keywords: ["stretched"],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["areal"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Salto forward and salto backward (no aerials)",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4],
                keywords: ["salto", ["forward", "fwd"]],
                antiKeywords: ["aerial"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [5],
                keywords: ["salto", ["backward", "bwd"]],
                antiKeywords: ["aerial"],
                specificElements: []
            }

        ]
    }
}

export const crD3: CompositionalRequirements = {
    1: {
        description: "A dance passage composed of 2 different jumps or hops, directly or indirectly connected, with at least 1 jump with 180° leg split in a transverse/sideways split or straddle position",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeAfterEachOther: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: ["split", "180"],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "Salto backwards or forwards",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [4,5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acro line with at least 2 elements with flight", 
        elementsShouldBeConnected: false,
        elementsShouldBeInTheSameCombo: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["areal"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["areal"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "Salto streched forward / backward, or salto with 180° twist",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "A",
                group: [4,5],
                keywords: ["salto", ["stretch", "180", "270", "360", "540", "720", "900", "1080"]],
                antiKeywords: ["aerial"],
                specificElements: []
            }

        ]
    }
}

export const crD4: CompositionalRequirements = {
    1: {
        description: "A dance passage composed of 2 different jumps or hops, directly or indirectly connected, with at least 1 jump with 180° leg split in a transverse/sideways split or straddle position",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeAfterEachOther: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: ["split", "180"],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "Salto backwards or forwards",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [4,5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acro line with at least 2 elements with flight", 
        elementsShouldBeConnected: false,
        elementsShouldBeInTheSameCombo: true,
        elementsShouldBeUnique: false,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["areal"],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: ["areal"],
                specificElements: []
            }
        ]
    },
    4: {
        description: "an acrobatic element backwards and an acrobatic element forwards / sideways with flight and hand support",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 5],
                keywords: [["bwd", "backward", "flic-flac"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3],
                keywords: [["round-off", "handspring"]],
                antiKeywords: [],
                specificElements: []
            }

        ]
    }
}

export const crD5: CompositionalRequirements = {
    1: {
        description: "A dance passage composed of 2 different jumps or hops, directly or indirectly connected, with at least 1 jump with leg split",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeAfterEachOther: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: [["split", "135"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "An acrobatic element forward or sideways",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3,4],
                keywords: [["fwd", "forward", "round-off", "handspring", "salto"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acrobatic element backwards", 
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 5],
                keywords: [["flic-flac", "bwd", "backward", "salto"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    4: {
        description: "An acro line of at least 2 different elements, of which at least 1 with flight",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeInTheSameCombo: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3, 4, 5],
                keywords: [["flic-flac", "round-off", "handspring", "salto"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3,4,5],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }

        ]
    }
}


export const crD6: CompositionalRequirements = {
    1: {
        description: "A dance passage composed of 2 different jumps or hops, directly or indirectly connected",
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elementsShouldBeAfterEachOther: true,
        elements: [
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["dance"],
                minimalValue: "TA",
                group: [1],
                keywords: [],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    2: {
        description: "An acrobatic element with flight",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3,4],
                keywords: [["round-off", "handspring", "salto", "aerial", "flic-flac"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    3: {
        description: "An acrobatic element forward / sideways and an acrobatic element backwards", 
        elementsShouldBeAfterEachOther: false,
        elementsShouldBeConnected: false,
        elementsShouldBeUnique: true,
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3,4],
                keywords: [["cartweel", "round-off", "handspring", "salto", "fwd"]],
                antiKeywords: [],
                specificElements: []
            },
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [3,5],
                keywords: [["flic-flac", "bwd", "backward", "salto"]],
                antiKeywords: [],
                specificElements: []
            }
        ]
    },
    4: {
        description: "A dance element with at least 360° turn, on one leg or jumped.",
        elements: [
            {
                type: ["acrobatic"],
                minimalValue: "TA",
                group: [1,2],
                keywords: ["turn", "360"],
                antiKeywords: [],
                specificElements: []
            }

        ]
    }
}
