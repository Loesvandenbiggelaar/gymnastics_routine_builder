// Apparatus config
// The array that keeps track of the different apparatuses
// In this new config, the difference between mens and womens is omitted, merging it into 1 array (apart from overlapping apparatuses)

// Type of each apparatus config entry
// (for easier manipulation when needed)
export type ApparatusConfigEntry = {
	name: string;
	icon: string;
	id: string;
	data_name: string;
	sex: 'Mens' | 'Womens';
	sex_id: 'm' | 'w';
};

export const apparatusConfig: ApparatusConfigEntry[] = [
	{
		name: 'Vault',
		icon: 'vault.svg',
		id: 'v_w',
		data_name: 'vault',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Beam',
		icon: 'beam.svg',
		id: 'b',
		data_name: 'beam',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Uneven Bars',
		icon: 'uneven_bars.svg',
		id: 'ub',
		data_name: 'uneven bars',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Floor',
		icon: 'floor.svg',
		id: 'f_w',
		data_name: 'floor',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Vault',
		icon: 'vault.svg',
		id: 'v_m',
		data_name: 'vault',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Rings',
		icon: 'rings.svg',
		id: 'r',
		data_name: 'rings',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Pommel Horse',
		icon: 'pommel_horse.svg',
		id: 'ph',
		data_name: 'pommel horse',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'High Bar',
		icon: 'high_bar.svg',
		id: 'hb',
		data_name: 'high bar',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Parallel Bars',
		icon: 'parallel_bars.svg',
		id: 'pb',
		data_name: 'parallel bars',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Floor',
		icon: 'floor.svg',
		id: 'f_m',
		data_name: 'floor',
		sex: 'Mens',
		sex_id: 'm'
	}
];
