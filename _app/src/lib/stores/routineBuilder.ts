// TODO get type directly from allElements
import { allElements } from '$lib/data/elements/all_elements';
// The type of all apparatsu options to validate the apparatuses
export type ApparatusOptions = keyof (typeof allElements)[0];
const comboEncodingSeparator: string = '-';
const elementEncodingSeparator: string = '_';

// Types for the Routine
import { type ElementType } from '$lib/data/elements/all_elements';
type RoutineMessage = {
	msg: string;
	type: 'info' | 'warning' | 'error' | string;
	priority?: number;
};
type ComboType = {
	elements: ElementType[] | [];
	title?: string;
	type?: 'acro' | 'dance' | 'mix' | 'salto' | string;
	value?: number;
	hasSameElements?: boolean;
	messages?: RoutineMessage[];
};
// end of types

function decodeRoutine(encodedRoutine: string) {
	return [];
}

function encodeElement(element: ElementType) {
	const id = element.id;
	return parseFloat(id).toString();
}

function decodeElement(encodedElement: string, database: ElementType[]) {
	const id = parseFloat(encodedElement).toString();
	// find the object that has a matching id in the database
	return database.find((element) => element.id === id);
}

class Routine {
	apparatus: ApparatusOptions;
	routine: ComboType[] = [];
	flatRoutine: [ElementType[]] = [[]];

	constructor(apparatus: ApparatusOptions, encodedRoutine?: string) {
		this.apparatus = apparatus;
		this.routine = encodedRoutine ? decodeRoutine(encodedRoutine) : []; // decodes the encoded routine when given
	}
}
