// these functions are used to get the routines from the server
// it is (for now) mainly used for debugging purposes
// given an apparatus, and a ID, get the element, as elementType

// import the data
import { allElements, type ElementType } from '$lib/data/elements/all_elements'
import type { ApparatusOptions } from './routineBuilder'


// get the element from the database
export function getElement(apparatus: ApparatusOptions, id: string, language?: string) {
    const element = allElements[language || "en"][apparatus].find((element) => element.id === id)
    return element as ElementType
}

// create a combo from a list of elements
export function createCombo(apparatus: ApparatusOptions, elements: string[], language?: string) {
    return elements.map((element) => getElement(apparatus, element, language))
}

// create a routine from a list of lists of elements
export function createRoutine(apparatus: ApparatusOptions, routine: string[][], language?: string) {
    return routine.map((combo) => createCombo(apparatus, combo, language))
}


