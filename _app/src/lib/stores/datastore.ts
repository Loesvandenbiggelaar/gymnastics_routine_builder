import { writable } from 'svelte/store';
import { apparatusConfig, type ApparatusConfigEntry } from '$lib/data/elements/apparatusConfig';

export let selectedApparatus = writable(apparatusConfig[0]);
// Create a writable store for the selected apparatus
export let modalElement = writable();
// Create a writable store for the modal element
// TODO set type for elements

// Create a function to update the selected apparatus and ensure it is a valid type
/**
 * Update the selected apparatus.
 * If newApparatus is an object from apparatusConfig, set it as selected.
 * If newApparatus is a string, find the apparatus in apparatusConfig with the same id as newApparatus and set it as selected.
 * @param {(typeof apparatusConfig)[0] | string} newApparatus - The new apparatus to set as selected.
 */
export const updateSelectedApparatus = (newApparatus: (typeof apparatusConfig)[0] | string) => {
	if (typeof newApparatus === 'object' && apparatusConfig.includes(newApparatus)) {
		// Check if newApparatus is an object from apparatusConfig
		selectedApparatus.set(newApparatus); // Set newApparatus as selected
	} else if (typeof newApparatus === 'string') {
		// Check if newApparatus is a string
		const apparatusWithIdMatch = apparatusConfig.find((apparatus) => apparatus.id === newApparatus); // Find the apparatus in apparatusConfig with the same id as newApparatus
		if (apparatusWithIdMatch) {
			// Check if apparatusWithIdMatch exists
			selectedApparatus.set(apparatusWithIdMatch); // Set apparatusWithIdMatch as selected
			console.debug(
				`Selected apparatus: ${apparatusWithIdMatch?.name} (${apparatusWithIdMatch?.sex})` // Log the selected apparatus
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

export class ElementData {
	rawData: Object;
	elementData: Object[];
	apparatus: keyof typeof this.rawData;
	filteredData: Object[];
	// A list of all the filters
	filterList: {
		search?: string;
		searchProperties?: string[];
	};
	constructor(rawData: Object, apparatus?: string) {
		// Initialize data
		this.rawData = rawData as Object;
		this.apparatus = (apparatus ? apparatus : Object.keys(rawData)[0]) as keyof typeof this.rawData;
		this.elementData = Object.values(rawData[this.apparatus]);
		this.filteredData = this.elementData;
		this.filterList = {};
		this.filterList.search = '' as string;
		this.filterList.searchProperties = ['id', 'description', 'value'];
	}
	public logData() {
		console.log(this.elementData);
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
			return console.error(`Invalid apparatus: ${input}`, Object.keys(this.rawData));
		// Set apparatus and update data
		let _apparatus = input as keyof typeof this.rawData;
		this.elementData = Object.values(this.rawData[_apparatus]);
		// update
		this.search();
		data.update(() => this);
	}

	public search(searchInput?: string) {
		if (searchInput) this.filterList.search = searchInput;
		let _searchInput = this.filterList.search || ''; //private searchInput to be matched
		// let _searchProps = typeof searchProps === 'string' ? [searchProps] : searchProps;
		let _searchProps = this.filterList.searchProperties;

		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		this.filteredData = this.elementData.filter((element) => {
			// search each element in the array
			return Object.entries(element).some(([key, value]) => {
				// check if the value matches the search input
				return (
					// check if the value matches the search props (fields)
					(_searchProps?.includes(key.toString()) ||
						_searchProps === undefined ||
						_searchProps.length === 0) &&
					// check if the value matches the search input
					value.toString().toLowerCase().includes(_searchInput.toLowerCase())
				);
			});
		});
		// update the filtered data and notify the store

		console.debug('Data...Searching:', this.filterList.search, this.filterList.searchProperties);

		data.update(() => this);
	}

	public setSearchProperties(searchProps: string[] | string) {
		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		this.filterList.searchProperties =
			typeof searchProps === 'string' ? [searchProps] : searchProps;
		// update the filtered data and notify the store
		console.debug('selected search properties', this.filterList.searchProperties);

		// Update and refresh search
		data.update(() => this);
		this.search();
	}
}

// Import dataset from json
import rawData from '$lib/data/elements/women/nl_elements.json';
// Instantiate data store
export let data = writable(new ElementData(rawData, Object.keys(rawData)[0]));
