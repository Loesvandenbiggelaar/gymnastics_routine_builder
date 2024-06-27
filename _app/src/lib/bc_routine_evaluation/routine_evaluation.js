export const comboOptionD1 = [{
        type: "Acro met vlucht, (mag opsprong en afsprong zijn)",
        detail: {
            description: "Acro met vlucht, (mag opsprong en afsprong zijn)",
            elementTypes: ["acrobatic"],
            uniqueElements: true,
            strictOrder: false,
            single: false,
            combos: [
                { combo: ["B", "B"], value: 0.1 },
                { combo: ["BCDEFGH", "CDEFGH"], value: 0.2 }
            ]
        }
    },
    {
        type: "Dans",
        detail: {
            description: "dans elementen",
            elementTypes: ["dance"],
            uniqueElements: false,
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
        type: "Draaien", // TODO 
        detail: {
            description: "draaien",
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
        type: "Mix",
        detail: {
            description: "mix verbinding",
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
        type: "SerieBonus",
        detail: {
            description: "Seriebonus",
            elementTypes: ["dance", "acrobatic"],
            uniqueElements: false, // TODO: dance elements cannot be repeated, acrobatic elements can be repeated
            strictOrder: false,
            single: true,
            combos: [
                { combo: ["A", "B", "B"], value: 0.1 }
            ]
        }
    },
    {
        type: "dismount_bonus",
        detail: {
            description: "dismount_bonus",
            elementTypes: ["acrobatic"],
            uniqueElements: false,
            strictOrder: false,
            single: true,
            combos: [
                { combo: ["BCDEFGH"], value: 0.2 }
            ]
        }
    }];
export function getComboDescription(comboType) {
    return comboOptionD1.filter(combo => combo.type == comboType)[0].detail;
}
