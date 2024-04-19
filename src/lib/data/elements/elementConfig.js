//Language support
import * as m from '$paraglide/messages.js';

// configuration of the encoding protocol
import { goto } from '$app/navigation'; // goto to trigger a page navigation with the script
import { browser } from '$app/environment'; //used to check if the browser page has loaded
import { page } from '$app/stores'; //used to get the current page
import { get } from 'svelte/store'; //used to get the value of a store

export const placeholderElement = {
	number: '0.000',
	description: 'Insert text here',
	difficulty: 'N/A',
	value: '0.0',
	group: '0',
	type: 'placeholder',
	breakdown: { draai: null, salto: null, group: 'placeholder' }
};

export const apparatusConfig = {
	mens: [
		{ name: m.apparatus_vault(), icon: 'vault.svg', id: 'vault', abb: 'v' },
		{ name: 'rings', icon: 'rings.svg', id: 'rings', abb: 'r' },
		{ name: 'pommel horse', icon: 'pommel_horse.svg', id: 'pommel horse', abb: 'ph' },
		{ name: 'high bar', icon: 'high_bar.svg', id: 'high bar', abb: 'hb' },
		{ name: 'parallel bars', icon: 'parallel_bars.svg', id: 'parallel bars', abb: 'pb' },
		{ name: m.apparatus_floor(), icon: 'floor.svg', id: 'floor', abb: 'f' }
	],
	womens: [
		{ name: m.apparatus_vault(), icon: 'vault.svg', id: 'vault', abb: 'v' },
		{ name: m.apparatus_beam(), icon: 'beam.svg', id: 'beam', abb: 'b' },
		{ name: m.apparatus_uneven_bars(), icon: 'uneven_bars.svg', id: 'uneven bars', abb: 'ub' },
		{ name: m.apparatus_floor(), icon: 'floor.svg', id: 'floor', abb: 'f' }
	]
};

let apparatusURLkey = 'a';
let urlKeySplit = '_';
let defaultMW = 'womens';
let defaultApparatus = 0;

export function apparatusUpdateURLParam(selectedMW, apparatus) {
	const _params = new URLSearchParams(get(page).url.searchParams);
	_params.set(apparatusURLkey, selectedMW.charAt(0) + urlKeySplit + apparatus.abb);
	return goto(`?${_params.toString()}`); //update URL with a navigate action
}

export function getApparatusInfoFromURLParam() {
	const _params = new URLSearchParams(get(page).url.searchParams);
	const _mwChar = _params.get(apparatusURLkey).split(urlKeySplit)[0];
	const _apCode = _params.get(apparatusURLkey).split(urlKeySplit)[1];
	const _mw = Object.keys(apparatusConfig).find((key) => key.charAt(0) == _mwChar) || defaultMW; //Return mens or womens, if unidentified use default
	const _ap =
		apparatusConfig[_mw].find((ap) => ap.abb == _apCode) || apparatusConfig[_mw][defaultApparatus];
	return { _mw, _ap };
}
