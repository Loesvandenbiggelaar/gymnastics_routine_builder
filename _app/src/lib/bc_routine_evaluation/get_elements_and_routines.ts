// import the data
import { allElements, type ElementType } from '$lib/data/elements/all_elements'

// get the element from the database
export function getElement(apparatus:string, id: string, language?: string) {
    const element = allElements[language || "en"][apparatus].find((element) => element.id === id)
    return element as ElementType
}

// create a combo from a list of elements
export function createCombo(apparatus: string, elements: string[], language?: string) {
    return {elements: elements.map((element) =>  ({element: getElement(apparatus, element, language)}))}
}

// create a routine from a list of lists of elements
export function createRoutine(apparatus: string, routine: string[][], language?: string) {
    return routine.map((combo) => createCombo(apparatus, combo, language))
}
