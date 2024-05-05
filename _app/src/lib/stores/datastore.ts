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

type FilterValuesType = {
	sex?: 'm' | 'w' | 'both';
	apparatus?: string;
	search: string;
};
export let filterValues = writable<FilterValuesType>({
	// default values
	sex: 'both',
	apparatus: 'vault',
	search: ''
});

export class ElementFilter {
	rawData: Object;
	data: Object[];
	apparatus: keyof typeof this.rawData;
	filteredData: Object[];
	constructor(rawData: Object, apparatus?: string) {
		this.rawData = rawData as Object;
		this.apparatus = (apparatus ? apparatus : Object.keys(rawData)[0]) as keyof typeof this.rawData;
		this.data = Object.values(rawData[this.apparatus]);
		this.filteredData = this.data;
	}
	public logData() {
		console.log(this.data);
		let i = 0;
		console.log(i in Object.keys(this.rawData));
	}

	/**
	 * Sets the apparatus of the filter. If input is not a valid key in rawData, console error is logged.
	 * @param input - Key of apparatus in rawData
	 */
	public setApparatus(input: string) {
		// Check if input is a valid key in rawData
		if (!Object.keys(this.rawData).includes(input))
			return console.error(`Invalid apparatus: ${input}`);
		// Set apparatus and update data
		let _apparatus = input as keyof typeof this.rawData;
		this.data = Object.values(this.rawData[_apparatus]);
	}

	public search(searchInput: string, searchProps?: string[] | string) {
		let _searchProps = typeof searchProps === 'string' ? [searchProps] : searchProps;
		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		this.filteredData = this.data.filter((element) => {
			// search each element in the array
			return Object.values(element).some((value) => {
				// check if the value matches the search input
				return (
					// check if the value matches the search props (fields)
					(_searchProps?.includes(value.toString()) || _searchProps === undefined) &&
					// check if the value matches the search input
					value.toString().toLowerCase().includes(searchInput.toLowerCase())
				);
			});
		});
	}
}

// Import dataset from json
import rawData from '$lib/data/elements/women/nl_elements.json';
// Instantiate data store
export let data = writable(new ElementFilter(rawData, Object.keys(rawData)[0]));
