import type { Requirement } from '../types'

const stalderCircles: Requirement[] = [
    {
        description: "Stalder circles",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [4],
            keywords: [],
            antiKeywords: [],
            specificElements: []
        },
        {
            type: ["acrobatic"],
            minimalValue: "A",
            group: [6],
            keywords: [["stalder", "clear straddle"]],
            antiKeywords: [],
            specificElements: []
        }
        ]
    }
]

const pikeCircles: Requirement[] = [
    {
        description: "Pike circles",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [5],
            keywords: [],
            antiKeywords: [],
            specificElements: []
        },
        {
            type: ["acrobatic"],
            minimalValue: "A",
            group: [6],
            keywords: [["clear pike"]],
            antiKeywords: [],
            specificElements: []
        }
        ]
    }
]

const clearCircles: Requirement[] = [
    {
        description: "Clear hip circles",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [2],
            keywords: [],
            antiKeywords: ["cast"],
            specificElements: []
        },
        {
            type: ["acrobatic"],
            minimalValue: "A",
            group: [6],
            keywords: [["underswing"]],
            antiKeywords: ["pike underswing", "straddle underswing"],
            specificElements: []
        }
        ]
    }
]

export const techniques: Record<string, Requirement[]> = { "Stalder circles": stalderCircles, "Pike circles": pikeCircles, "Clear circles": clearCircles };

const lGrip: Requirement[] = [
    {
        description: "L-grip",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [1, 2, 3, 4, 5, 6],
            keywords: [["L-grip", "L grip"]],
            antiKeywords: [],
            specificElements: []
        }]
    }
]

const reverseGrip: Requirement[] = [
    {
        description: "Reverse grip",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [1, 2, 3, 4, 5, 6],
            keywords: [["reverse grip"]],
            antiKeywords: [],
            specificElements: []
        }]
    }
]

const normalGrip: Requirement[] = [
    {
        description: "Normal grip",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [1, 2, 3, 4, 5, 6],
            keywords: [],
            antiKeywords: ["reverse grip", "L-grip", "L grip"],
            specificElements: []
        }]
    }
]

export const grips = { "L-grip": lGrip, "Reverse grip": reverseGrip, "Normal grip": normalGrip }

const forward: Requirement[] = [
    {
        description: "Forward",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [1, 2, 3, 4, 5, 6],
            keywords: [["forward", "fwd"]],
            antiKeywords: [["backward", "bwd"]],
            specificElements: []
        }]
    }
]

const backward: Requirement[] = [
    {
        description: "Backward",
        elements: [{
            type: ["acrobatic"],
            minimalValue: "A",
            group: [1, 2, 3, 4, 5, 6],
            keywords: [["backward", "bwd"]],
            antiKeywords: [["forward", "fwd"]],
            specificElements: []
        }]
    }
]

export const directions = { "Forward": forward, "Backward": backward }
