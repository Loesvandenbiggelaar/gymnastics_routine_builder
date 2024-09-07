import { apparatusConfig } from '$lib/data/elements/apparatusConfig'
import { availableApparatuses, type ElementType } from '$lib/data/elements/all_elements'
import { search_tags } from '$lib/data/elements/search_tags'
import { writable } from 'svelte/store'
import { RoutineMutations } from './routineMutations'
import { routineEvaluationBeam } from '$lib/bc_routine_evaluation/beam_routine_evaluation'
import { routineEvaluationFloor } from '$lib/bc_routine_evaluation/floor_routine_evaluation'
import { routineEvaluationVault } from '$lib/bc_routine_evaluation/vault_routine_evaluation'
// Import dataset from json
import { allElements } from '$lib/data/elements/all_elements'
import { calculateDifficultyBeam} from '$lib/bc_routine_evaluation/beam_difficulty'
import { calculateDifficultyFloor} from '$lib/bc_routine_evaluation/floor_difficulty'
import { calculateDifficultyVault } from '$lib/bc_routine_evaluation/vault_difficulty'
import type { Supplement, Vault } from '$lib/bc_routine_evaluation/types'
import type { DifficultyClass } from '$lib/bc_routine_evaluation/difficulty_class'


export let selectedApparatus = writable(apparatusConfig[0])
// Create a writable store for the selected apparatus
export let modalElement = writable()
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


export type SearchModifiers = 'exact' | 'not' | 'fuzzy' | 'property'
export type SearchEntry = {
	value: string
	friendly?: string
	type?: 'tag' | 'search'
	color?: string
	customIcon?: string
	disabled?: boolean
	modifier?: SearchModifiers
	searchProperties?: string[]
}

const routineEvaluations: Record<string, Record<string, Supplement | Vault>> = {"b": routineEvaluationBeam, "f_w": routineEvaluationFloor, "v_w": routineEvaluationVault}
const calculateDifficulty: Record<string, any > = {"b": calculateDifficultyBeam, "f_w": calculateDifficultyFloor, "v_w": calculateDifficultyVault} 

export class ElementData {
	level: string = "D1"
	rawData: Record<string, Record<string, any>>
	availableLanguages: Array<keyof typeof this.rawData>
	availableApparatuses: string[]
	userSettings: {
		lang: string
		apparatus: string
	}
	selectedLanguage: keyof typeof this.rawData
	selectedApparatus: string
	apparatusData: Record<string, any>
	elementData: Array<any>
	filteredData: Array<any>
	filterOptions: {
		search: string
		searchList: Array<SearchEntry>
		availableSearchTags: Array<string>
		searchProperties: Array<string>
		sex: 'm' | 'w' | 'both'
	}

	routineStorage: Record<string, RoutineMutations> = {}
	routineMutations: RoutineMutations
	calcDiff: DifficultyClass

	routineEvaluation: Supplement | Vault

	constructor(
		rawData: Record<string, Record<string, any>>,
		_userSettings?: { lang?: string; apparatus?: string }
	) {
		this.rawData = rawData
		this.availableLanguages = Object.keys(rawData) as Array<keyof typeof this.rawData>
		this.availableApparatuses = availableApparatuses
		this.userSettings = {
			lang: _userSettings?.lang ? _userSettings.lang : this.availableLanguages[0],
			apparatus: _userSettings?.apparatus ? _userSettings.apparatus : this.availableApparatuses[0]
		}

		//Set selected apparatus and language to narrow down dataset
		this.selectedLanguage = Object.keys(this.rawData).includes(this.userSettings.lang)
			? this.userSettings.lang
			: this.availableLanguages[0]
		this.selectedApparatus = this.availableApparatuses.includes(this.userSettings.apparatus)
			? this.userSettings.apparatus
			: this.availableApparatuses[0]

		// Narrow down dataset to selected apparatus and language
		this.apparatusData = this.rawData[this.selectedLanguage]
		this.elementData = this.apparatusData[this.selectedApparatus]

		//Set filters
		this.filteredData = this.elementData
		const _lang = this.selectedLanguage as keyof typeof search_tags
		const _langTags = search_tags?.[_lang]
		const _app = this.selectedApparatus as keyof typeof _langTags
		this.filterOptions = {
			search: '' as string,
			searchList: [],
			availableSearchTags: _langTags?.[_app] || [],
			searchProperties: ['id', 'description', 'value'] as const,
			sex: 'both'
		}

		// loop over all the available apparatuses and create an object of {apparatus: routine}
		for (const apparatus of this.availableApparatuses) {
			this.routineStorage[apparatus] = new RoutineMutations()
		}
		this.selectedApparatus = "v_w"
		this.routineMutations = this.routineStorage[this.selectedApparatus]
		this.routineEvaluation = routineEvaluations[this.selectedApparatus][this.level]
	
		
		this.calcDiff = new calculateDifficulty[this.selectedApparatus](this.routineMutations, this.routineEvaluation)
	}
	public logData() {
		console.log(this.elementData)
		let i = 0
		console.log(i in Object.keys(this.rawData))
	}

	public calculateDScore() {
		console.log(this.level)
		this.calcDiff = new calculateDifficulty[this.selectedApparatus](this.routineMutations, routineEvaluations[this.selectedApparatus][this.level])
		this.calcDiff.dscore = this.calcDiff.resetAndCalculate()
	}

	/**
	 * Sets the apparatus of the filter. If input is not a valid key in rawData, console error is logged.
	 * @param _input - Key of apparatus in rawData
	 */
	public setApparatus(_input?: string) {
		_input = _input || this.selectedApparatus
		const _database = this.apparatusData
		// Check if input is a valid key in rawData
		if (!Object.keys(_database).includes(_input)) {
			return console.error(`Invalid apparatus: ${_input}`, Object.keys(_database))
		}
		// Set apparatus and update data
		let _apparatus = _input as keyof typeof _database
		this.elementData = Object.values(_database[_apparatus])
		this.routineMutations = this.routineStorage[this.selectedApparatus]
		this.routineEvaluation = routineEvaluations[this.selectedApparatus][this.level]
		// update
		this.search()
		data.update(() => this)
	}

	// a public function that sets the search properties and updates the filtered data ($data.filteredData)
	public searchMultiple(searchList?: SearchEntry[], database?: Object[]) {
		// If no search list is provided, use the stored search list
		if (!searchList) searchList = this.filterOptions.searchList

		const _database = database || this.elementData
		// use private function to return filtered list and set filteredData
		var multiFilterList = _database
		searchList.forEach((searchValue) => {
			multiFilterList = this.returnFilterBySearch(searchValue, multiFilterList)
		})
		// Combine lists in filteredDataLists and store in combinedList
		return this.returnFilterBySearch(this.filterOptions.search, multiFilterList)
	}

	// a public function that sets the search input and updates the filtered data ($data.filteredData)
	public search(searchInput?: string) {
		//
		if (searchInput) this.filterOptions.search = searchInput
		let _searchInput = this.filterOptions.search || '' //private searchInput to be matched
		let _database

		// If multiple search filters, prefilter the database
		if (this.filterOptions.searchList.length > 0) _database = this.searchMultiple()
		//use private function to return filtered list and set filteredData
		this.filteredData = this.returnFilterBySearch(_searchInput, _database)

		console.debug(
			'Datasearch:',
			`${this.filteredData.length} results found`,
			'\nSearchterm:',
			this.filterOptions.search,
			'\nSearchproperties:',
			this.filterOptions.searchProperties
		)

		data.update(() => this)
	}

	// a private function that returns a list of filtered elements using a search input (as string)
	// Optionally pick a database, useful for filtering the filtered list further! (default is $data.elementData)
	public returnFilterBySearch(searchInput: string | SearchEntry, database?: Object[]) {
		// If no database is provided, use the stored database
		if (!database) database = this.elementData
		let _searchEntry: SearchEntry =
			typeof searchInput === 'string' ? this.convertSearchStringToEntry(searchInput) : searchInput

		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		const filteredList = database.filter((element) => {
			// search each element in the array for a match
			return this.searchElementsWithModifier(_searchEntry, element)
		})
		// return the filtered list
		return filteredList
	}

	private convertSearchStringToEntry(searchString: string) {
		let _modifier: SearchModifiers | undefined
		let _property: string | undefined
		// Convert search string to entry
		let _searchInput = searchString.toString().toLocaleLowerCase()
		// Set modifiers
		// If it starts with !, set to 'not'
		if (_searchInput?.includes('!')) {
			_modifier = 'not'
			_searchInput = _searchInput.slice(1)
			// If it conatins :, set to 'property', set _property to the value before the :, set _searchInput to the value after the :
		} else if (_searchInput?.includes(':')) {
			_modifier = 'property'
			_property = _searchInput.split(':')[0]
			_searchInput = _searchInput.split(':')[1]
			// If it starts with =, set to 'exact'
		} else if (_searchInput?.startsWith('=')) {
			_modifier = 'exact'
			_searchInput = searchString.toString().slice(1) // remove the first character, but keep all other raw characters
			// If it starts with ~, set to 'fuzzy'
		} else if (_searchInput?.startsWith('~')) {
			_modifier = 'fuzzy'
			_searchInput = _searchInput.slice(1)
		}

		let searchEntry = {
			value: _searchInput,
			type: 'search',
			friendly: _searchInput,
			modifier: _modifier,
			searchProperties: _property
		} as SearchEntry
		return searchEntry
	}

	// Returns true if the searchValue matches the search criteria based on the searchModifier
	private searchElementsWithModifier(
		searchEntry: SearchEntry, // the search input
		element: ElementType | Object // the value in the element to match
	) {
		// If no searchValue is provided, return true
		if (!searchEntry) return true
		// Prefedefined modifiers
		let _modifier: SearchModifiers | undefined = searchEntry?.modifier
		let _searchInput: string = searchEntry.value
		// Set search properties to consider for (mis)matching
		let _searchProperties: string[] | undefined =
			searchEntry?.searchProperties || this.filterOptions?.searchProperties || undefined

		// If there is no search value, return true (match)
		if (_searchInput === '') return true

		// SEARCH
		let match: boolean = false // Add to data by default
		// Go through each property
		Object.entries(element).forEach(([key, value]) => {
			// Check if the property is in the search properties or if there are no search properties
			let propertyMatch =
				_searchProperties?.includes(key.toString()) ||
				_searchProperties.length === 0 ||
				_searchProperties === undefined

			if (match) return // If the element has a match, keep it in the list
			if (!propertyMatch) return // If the property is not in the search properties, don't consider it's value

			let _searchInputString = _searchInput.toString().toLocaleLowerCase()

			switch (_modifier) {
				case 'exact':
					match = value.toString().toLocaleLowerCase() === _searchInputString
					break
				case 'fuzzy':
					match = value.toString().toLocaleLowerCase().includes(_searchInputString)
					break
				default: // 'not'
					match = value.toString().toLocaleLowerCase().includes(_searchInputString)
					break
			}
		})
		// If there is a match, return the element. If the modifier is 'not', do the opposite
		return match !== (_modifier === 'not')
	}

	public setSearchProperties(searchProps: string[] | string) {
		// put search props in an array (if not already)
		// If undefined, leave it as undefined
		this.filterOptions.searchProperties =
			typeof searchProps === 'string' ? [searchProps] : searchProps
		// update the filtered data and notify the store
		console.debug('selected search properties', this.filterOptions.searchProperties)

		// Update and refresh search
		data.update(() => this)
		this.search()
	}

	public updateLanguage(lang?: string) {
		this.userSettings.lang = lang || this.userSettings.lang
		// Set selected apparatus and language to narrow down dataset
		this.selectedLanguage = Object.keys(this.rawData).includes(this.userSettings.lang)
			? this.userSettings.lang
			: this.availableLanguages[0]
		// Narrow down dataset to selected apparatus and language
		this.apparatusData = this.rawData[this.selectedLanguage]
		// Update search tag list
		const _lang = this.selectedLanguage as keyof typeof search_tags
		const _langTags = search_tags?.[_lang]
		const _app = this.selectedApparatus as keyof typeof _langTags
		this.filterOptions.availableSearchTags = _langTags?.[_app] || []

		//Update and refresh data
		data.update(() => this)
	}
}


const defaultUserSettings = {
	lang: 'nlx',
	apparatus: 'v_w'
}
// Instantiate data store
export let data = writable(new ElementData(allElements, defaultUserSettings))
