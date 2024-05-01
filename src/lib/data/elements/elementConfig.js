//Language support
import * as m from '$paraglide/messages.js';

export const apparatusURLkey = 'a';
export const apparatusFilterURLkey = 'af';

// Placeholder element (unused)
export const placeholderElement = {
	number: '0.000',
	description: 'Insert text here',
	difficulty: 'N/A',
	value: '0.0',
	group: '0',
	type: 'placeholder',
	breakdown: { draai: null, salto: null, group: 'placeholder' }
};

// Apparatus config
// The dictionary that keeps track of the different apparatuses
// In this new config, the difference between mens and womens is omitted, merging it into 1 dictionary (apart from overlapping apparatuses)
export const apparatusConfig = {
	v_w: {
		name: m.apparatus_vault(),
		icon: 'vault.svg',
		id: 'v_w',
		data_name: 'vault',
		sex: m.sex_womens(),
		sex_id: 'w'
	},
	b: {
		name: m.apparatus_beam(),
		icon: 'beam.svg',
		id: 'b',
		data_name: 'beam',
		sex: m.sex_womens(),
		sex_id: 'w'
	},
	ub: {
		name: m.apparatus_uneven_bars(),
		icon: 'uneven_bars.svg',
		id: 'ub',
		data_name: 'uneven bars',
		sex: m.sex_womens(),
		sex_id: 'w'
	},
	f_w: {
		name: m.apparatus_floor(),
		icon: 'floor.svg',
		id: 'f_w',
		data_name: 'floor',
		sex: m.sex_womens(),
		sex_id: 'w'
	},
	v_m: {
		name: m.apparatus_vault(),
		icon: 'vault.svg',
		id: 'v_m',
		data_name: 'vault',
		sex: m.sex_mens(),
		sex_id: 'm'
	},
	r: {
		name: 'rings',
		icon: 'rings.svg',
		id: 'r',
		data_name: 'rings',
		sex: m.sex_mens(),
		sex_id: 'm'
	},
	ph: {
		name: 'pommel horse',
		icon: 'pommel_horse.svg',
		id: 'ph',
		data_name: 'pommel horse',
		sex: m.sex_mens(),
		sex_id: 'm'
	},
	hb: {
		name: 'high bar',
		icon: 'high bar.svg',
		id: 'hb',
		data_name: 'high bar',
		sex: m.sex_mens(),
		sex_id: 'm'
	},
	pb: {
		name: 'parallel bars',
		icon: 'parallel_bars.svg',
		id: 'pb',
		data_name: 'parallel bars',
		sex: m.sex_mens(),
		sex_id: 'm'
	},
	f_m: {
		name: m.apparatus_floor(),
		icon: 'floor.svg',
		id: 'f_m',
		data_name: 'floor',
		sex: m.sex_mens(),
		sex_id: 'm'
	}
};

export const defaultApparatus = apparatusConfig.v_w;

// OLD CONFIG FOR ARCHIVE
// export const apparatusConfig = {
// 	mens: [
// 		{ name: m.apparatus_vault(), icon: 'vault.svg', id: 'vault', abb: 'v' },
// 		{ name: 'rings', icon: 'rings.svg', id: 'rings', abb: 'r' },
// 		{ name: 'pommel horse', icon: 'pommel_horse.svg', id: 'pommel horse', abb: 'ph' },
// 		{ name: 'high bar', icon: 'high_bar.svg', id: 'high bar', abb: 'hb' },
// 		{ name: 'parallel bars', icon: 'parallel_bars.svg', id: 'parallel bars', abb: 'pb' },
// 		{ name: m.apparatus_floor(), icon: 'floor.svg', id: 'floor', abb: 'f' }
// 	],
// 	womens: [
// 		{ name: m.apparatus_vault(), icon: 'vault.svg', id: 'vault', abb: 'v' },
// 		{ name: m.apparatus_beam(), icon: 'beam.svg', id: 'beam', abb: 'b' },
// 		{ name: m.apparatus_uneven_bars(), icon: 'uneven_bars.svg', id: 'uneven bars', abb: 'ub' },
// 		{ name: m.apparatus_floor(), icon: 'floor.svg', id: 'floor', abb: 'f' }
// 	]
// };
