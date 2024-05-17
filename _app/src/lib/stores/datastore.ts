import { writable } from 'svelte/store';
import { apparatusConfig, type ApparatusConfigEntry } from '$lib/data/elements/apparatusConfig';

export let selectedApparatus = writable(apparatusConfig[0]);
// Create a writable store for the selected apparatus
export let modalElement = writable();
// Create a writable store for the modal element

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
import { search_tags } from '$lib/data/elements/search_tags';

export type SearchListEntry = {
	value: string;
	type?: 'tag' | 'search';
	color?: string;
	customIcon?: string;
	disabled?: boolean;
};

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
		searchList: Array<SearchListEntry>;
		availableSearchTags: Array<string>;
		searchProperties: Array<string>;
		sex: 'm' | 'w' | 'both';
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
			availableSearchTags: search_tags?.[this.selectedLanguage]?.[this.selectedApparatus] || [],
			searchProperties: ['id', 'description', 'value'] as const,
			sex: 'both'
		};
	}
	public logData() {
		console.log(this.elementData);
		let i = 0;
		console.log(i in Object.keys(this.rawData));
	}

	/**
	 * Sets the apparatus of the filter. If input is not a valid key in rawData, console error is logged.
	 * @param _input - Key of apparatus in rawData
	 */
	public setApparatus(_input?: string) {
		_input = _input || this.selectedApparatus;
		const _database = this.apparatusData;
		// Check if input is a valid key in rawData
		if (!Object.keys(_database).includes(_input)) {
			return console.error(`Invalid apparatus: ${_input}`, Object.keys(_database));
		}
		// Set apparatus and update data
		let _apparatus = _input as keyof typeof _database;
		this.elementData = Object.values(_database[_apparatus]);
		// update
		this.search();
		data.update(() => this);
	}

	// a public function that sets the search properties and updates the filtered data ($data.filteredData)
	public searchMultiple(searchList?: SearchListEntry[], database?: Object[]) {
		// Set 'searches' to be the array of strings to go through
		let searches: string[];
		// If no search list is provided, use the stored search list
		if (!searchList) searchList = this.filterOptions.searchList;
		// If the searchList is an array of SearchListEntry objects, convert it to an array of strings
		if (
			Array.isArray(searchList) &&
			searchList.length > 0 &&
			typeof searchList[0].value === 'string'
		) {
			searches = searchList.map((searchListEntry) => searchListEntry.value);
		} else {
			throw new Error('Search list must be an array of either SearchListEntry or string');
		}

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
		if (this.filterOptions.searchList.length > 0) _database = this.searchMultiple();
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

	public updateLanguage(lang?: string) {
		this.userSettings.lang = lang || this.userSettings.lang;
		// Set selected apparatus and language to narrow down dataset
		this.selectedLanguage = Object.keys(this.rawData).includes(this.userSettings.lang)
			? this.userSettings.lang
			: this.availableLanguages[0];
		// Narrow down dataset to selected apparatus and language
		this.apparatusData = this.rawData[this.selectedLanguage];
		// Update search tag list
		this.filterOptions.availableSearchTags =
			search_tags?.[this.selectedLanguage]?.[this.selectedApparatus] || [];

		//Update and refresh data
		data.update(() => this);
	}
}

// Import dataset from json
import rawData from '$lib/data/elements/women/nl_elements.json';
import { allElements } from '$lib/data/elements/all_elements';
const defaultUserSettings = {
	lang: 'nlx',
	apparatus: 'v_w'
};
// Instantiate data store
export let data = writable(new ElementData(allElements, defaultUserSettings));
