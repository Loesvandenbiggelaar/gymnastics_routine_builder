// Apparatus config
// The array that keeps track of the different apparatuses
// In this new config, the difference between mens and womens is omitted, merging it into 1 array (apart from overlapping apparatuses)

// Type of each apparatus config entry
// (for easier manipulation when needed)
export type ApparatusConfigEntry = {
	name: string;
	full_name?: string;
	icon: string;
	id: string;
	data_name: string;
	sex: 'Mens' | 'Womens';
	sex_id: 'm' | 'w';
};

export let apparatusConfig: ApparatusConfigEntry[] = [
	{
		name: 'Vault',
		icon: 'apparatus:vault',
		id: 'v_w',
		data_name: 'v_w',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Beam',
		icon: 'apparatus:beam',
		id: 'b',
		data_name: 'b',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Uneven Bars',
		icon: 'apparatus:uneven_bars',
		id: 'ub',
		data_name: 'ub',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Floor',
		icon: 'apparatus:floor',
		id: 'f_w',
		data_name: 'f_w',
		sex: 'Womens',
		sex_id: 'w'
	},
	{
		name: 'Vault',
		icon: 'apparatus:vault',
		id: 'v_m',
		data_name: 'v_m',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Rings',
		icon: 'apparatus:rings',
		id: 'r',
		data_name: 'r',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Pommel Horse',
		icon: 'apparatus:pommel_horse',
		id: 'ph',
		data_name: 'ph',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'High Bar',
		icon: 'apparatus:high_bar',
		id: 'hb',
		data_name: 'hb',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Parallel Bars',
		icon: 'apparatus:parallel_bars',
		id: 'pb',
		data_name: 'pb',
		sex: 'Mens',
		sex_id: 'm'
	},
	{
		name: 'Floor',
		icon: 'apparatus:floor',
		id: 'f_m',
		data_name: 'f_m',
		sex: 'Mens',
		sex_id: 'm'
	}
];

// Set full_name property to name, unless there are more objects with the same name.
// Then, set full_name to name + (sex)
for (let apparatusConfigEntry of apparatusConfig) {
	let sameNameCount = apparatusConfig.filter(
		(entry) => entry.name === apparatusConfigEntry.name
	).length;
	if (sameNameCount > 1) {
		apparatusConfigEntry.full_name =
			apparatusConfigEntry.name + ` ` + (apparatusConfigEntry.sex === 'Mens' ? '♂' : '♀');
	} else {
		apparatusConfigEntry.full_name = apparatusConfigEntry.name;
	}
}

// If the icon is not found in Iconidy with iconExists(), return the default icon
import { iconExists } from '@iconify/svelte';
apparatusConfig.forEach((apparatusConfigEntry) => {
	if (!iconExists(apparatusConfigEntry.icon)) {
		apparatusConfigEntry.icon = 'mdi:weight-lifter';
	}
});
