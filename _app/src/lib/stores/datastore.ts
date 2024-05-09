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

/**
 * Class containing the data for a specific apparatus
 * @class
 *
 *
 * Properties:
 * - rawData: An object containing language:{apparatus: [elements]}. This object is used to fetch the elements for the selected apparatus and language.
 * - availableLanguages: An array of all languages that are available in the rawData object. This is used to set the default language and to filter the elements.
 * - userSettings: An object containing the user's settings for the apparatus and language.
 *   - lang: The selected language. This is used to select the elements from the rawData object.
 *   - apparatus: The selected apparatus. This is used to filter the elements.
 */

import { availableApparatuses, availableLanguages } from '$lib/data/elements/all_elements';

export class ElementData {
	rawData: Record<string, Record<string, any>>;
	availableLanguages: Array<keyof typeof this.rawData>;
	availableApparatuses: string[];

	userSettings: {
		lang: string;
		apparatus: string;
	};

	selectedLanguage: string;
	selectedApparatus: string;
	apparatusData: Record<string, any>;
	elementData: Array<any>;
	filteredData: Array<any>;
	filterOptions: {
		search: string;
		searchList: Array<string>;
		searchProperties: Array<string>;
	};

	constructor(
		rawData: Record<string, Record<string, any>>,
		_userSettings?: { lang?: string; apparatus?: string }
	) {
		this.rawData = rawData;
		this.availableLanguages = Object.keys(rawData) as Array<keyof typeof this.rawData>;
		this.availableApparatuses = availableApparatuses;
		this.userSettings = {
			lang: _userSettings?.lang ? _userSettings.lang : this.availableLanguages[0],
			apparatus: _userSettings?.apparatus ? _userSettings.apparatus : this.availableApparatuses[0]
		};

		//Set selected apparatus and language to narrow down dataset
		this.selectedLanguage = Object.keys(this.rawData).includes(this.userSettings.lang)
			? this.userSettings.lang
			: this.availableLanguages[0];
		this.selectedApparatus = this.availableApparatuses.includes(this.userSettings.apparatus)
			? this.userSettings.apparatus
			: this.availableApparatuses[0];

		// Narrow down dataset to selected apparatus and language
		this.apparatusData = this.rawData[this.selectedLanguage];
		this.elementData = this.apparatusData[this.selectedApparatus];

		//Set filters
		this.filteredData = this.elementData;
		this.filterOptions = {
			search: '' as string,
			searchList: [],
			searchProperties: ['id', 'description', 'value'] as const
		};
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
		const _database = this.apparatusData;
		// Check if input is a valid key in rawData
		if (!Object.keys(_database).includes(input))
			return console.error(`Invalid apparatus: ${input}`, Object.keys(_database));
		// Set apparatus and update data
		let _apparatus = input as keyof typeof _database;
		this.elementData = Object.values(_database[_apparatus]);
		// update
		this.search();
		data.update(() => this);
	}

	// a public function that sets the search properties and updates the filtered data ($data.filteredData)
	public searchMultiple(searchList?: string[] | string, database?: Object[]) {
		//
		let searches: string[]; // put the list in a more readable variable
		if (Array.isArray(searchList) && searchList) searches = searchList;
		else searches = this.filterOptions.searchList;

		const _database = database || this.elementData;
		// use private function to return filtered list and set filteredData
		var multiFilterList = _database;
		for (const searchValue of searches) {
			multiFilterList = this.returnFilterBySearch(searchValue, multiFilterList);
		}

		// Combine lists in filteredDataLists and store in combinedList
		return this.returnFilterBySearch(this.filterOptions.search, multiFilterList);
	}

	// a public function that sets the search input and updates the filtered data ($data.filteredData)
	public search(searchInput?: string) {
		//
		if (searchInput) this.filterOptions.search = searchInput;
		let _searchInput = this.filterOptions.search || ''; //private searchInput to be matched
		let _database;

		// If multiple search filters, prefilter the database
		if (this.filterOptions.searchList.length > 0) _database = this.searchMultiple(_searchInput);
		//use private function to return filtered list and set filteredData
		this.filteredData = this.returnFilterBySearch(_searchInput, _database);

		console.debug(
			'Data... Search:',
			this.filterOptions.search,
			this.filterOptions.searchProperties
		);

		data.update(() => this);
	}

	// a private function that returns a list of filtered elements using a search input (as string)
	// Optionally pick a database, useful for filtering the filtered list further! (default is $data.elementData)
	public returnFilterBySearch(searchValue: string, database?: Object[]) {
		if (!database) database = this.elementData;
		let _searchProps = this.filterOptions.searchProperties;
		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		const filteredList = database.filter((element) => {
			// search each element in the array
			return Object.entries(element).some(([key, value]) => {
				// check if the value matches the search input
				return (
					// check if the value matches the search props (fields)
					(_searchProps?.includes(key.toString()) ||
						_searchProps === undefined ||
						_searchProps.length === 0) &&
					// check if the value matches the search input
					value.toString().toLowerCase().includes(searchValue.toLowerCase())
				);
			});
		});
		// return the filtered list
		return filteredList;
	}

	public setSearchProperties(searchProps: string[] | string) {
		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		this.filterOptions.searchProperties =
			typeof searchProps === 'string' ? [searchProps] : searchProps;
		// update the filtered data and notify the store
		console.debug('selected search properties', this.filterOptions.searchProperties);

		// Update and refresh search
		data.update(() => this);
		this.search();
	}
}

// Import dataset from json
import rawData from '$lib/data/elements/women/nl_elements.json';
import { allElements } from '$lib/data/elements/all_elements';
const defaultUserSettings = {
	lang: 'nl',
	apparatus: 'v_w'
};
// Instantiate data store
export let data = writable(new ElementData(allElements, defaultUserSettings));
