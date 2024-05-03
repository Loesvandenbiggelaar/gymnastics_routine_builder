import { writable } from 'svelte/store';
import { apparatusConfig } from '$lib/data/elements/apparatusConfig';

export let selectedApparatus = writable(apparatusConfig[0]);
// Create a function to update the selected apparatus and ensure it is a valid type
export const updateSelectedApparatus = (newApparatus: (typeof apparatusConfig)[0] | string) => {
	if (typeof newApparatus === 'object' && apparatusConfig.includes(newApparatus)) {
		selectedApparatus.set(newApparatus);
	} else if (typeof newApparatus === 'string') {
		const apparatusWithIdMatch = apparatusConfig.find((apparatus) => apparatus.id === newApparatus);
		if (apparatusWithIdMatch) {
			selectedApparatus.set(apparatusWithIdMatch);
			console.debug(
				`Selected apparatus: ${apparatusWithIdMatch?.name} (${apparatusWithIdMatch?.sex})`
			);
		}
	}
};

type DataFilter = {
	sex?: 'm' | 'w' | 'both';
	apparatus?: string;
};
export let dataFilters = writable<DataFilter>({
	// default values
	sex: 'both',
	apparatus: 'vault'
});
