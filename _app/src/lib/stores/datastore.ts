import { writable } from 'svelte/store';
import { apparatusConfig } from '$lib/data/elements/apparatusConfig';

export const selectedApparatus = writable(apparatusConfig[0]);
// Create a function to update the selected apparatus and ensure it is a valid type
export const updateSelectedApparatus = (newApparatus: (typeof apparatusConfig)[0]) => {
	if (typeof newApparatus === 'object' && apparatusConfig.includes(newApparatus)) {
		selectedApparatus.set(newApparatus);
	}
};
