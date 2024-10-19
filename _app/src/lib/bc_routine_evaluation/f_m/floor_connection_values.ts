import type { ConnectionValueOptions } from "../types"

export const cvH1: ConnectionValueOptions = [{
    type: "salto's",
    detail: {
        description: "Salto's",
        elementTypes: ["acrobatic"],
        uniqueElements: false,
        strictOrder: false,
        combos: [
            { combo: ["A", "B"], value: 0.1 },
            { combo: ["A", "C"], value: 0.1 },
            { combo: ["B", "B"], value: 0.1 },
            { combo: ["B", "C"], value: 0.1 },
            { combo: ["C", "C"], value: 0.2 },
            { combo: ["DEFGH", "DEFGH"], value: 0.2 }
        ]
    }
},]
