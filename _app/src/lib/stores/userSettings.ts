import { writable } from 'svelte/store';
import { availableLanguages } from '$lib/data/elements/all_elements';
import { data } from '$lib/stores/datastore';
let $data: any;
data.subscribe((value) => ($data = value));

export const languages = availableLanguages;
export let languageDetails = {
	en: {
		name: 'English',
		localName: 'English',
		code: 'en',
		hasData: true
	},
	nl: {
		name: 'Dutch',
		localName: 'Nederlands',
		code: 'nl',
		hasData: true
	},
	fr: {
		name: 'French',
		localName: 'Français',
		code: 'fr',
		hasData: true
	},
	es: {
		name: 'Spanish',
		localName: 'Español',
		code: 'es',
		hasData: true
	}
};

// check if the language has data, and add that property
Object.entries(languageDetails).forEach(([key, value]) => {
	let _key: keyof typeof languageDetails = key as keyof typeof languageDetails;
	languageDetails[_key].hasData = availableLanguages.includes(value.code);
});

export class UserSettings {
	language: string;
	user?: {
		username: string;
		profilePicture: string;
	};
	constructor(settings?: {}) {
		this.language = 'en';
	}

	public setLanguage(lang?: string) {
		this.language = lang && languages.includes(lang) ? lang : this.getLocale();
		userSettings.update(() => this);
		$data.updateLanguage(this.language);
	}

	private getLocale() {
		return 'en';
	}
}

export let userSettings = writable(new UserSettings());
