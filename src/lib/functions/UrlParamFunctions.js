// configuration of the encoding protocol
import { goto } from '$app/navigation'; // goto to trigger a page navigation with the script
import { browser } from '$app/environment'; //used to check if the browser page has loaded
import { page } from '$app/stores'; //used to get the current page
import { get } from 'svelte/store'; //used to get the value of a store

// console.log(page)
// import bc_urlParam from "$lib/functions/urlParams.svelte"
// import urlParam from "$lib/functions/urlParams.svelte"
var encodingConfig = {};
encodingConfig.combo_split = '-'; //character that splits between combos
encodingConfig.element_split = '_'; // character that splits elements within combos
encodingConfig.protocol = 32; //protocol to use (don't ask how...)
encodingConfig.urlKey = 'bc'; //'key' to use in url parameter

export function convert_builder_config_to_encoded_string(config) {
	return config
		.flatMap((combo) => {
			return combo
				.map((element) => encodeElementNum(element.number))
				.join(encodingConfig.element_split);
		})
		.join(encodingConfig.combo_split);
}

async function getUrlSearchParams() {
	return new URLSearchParams(get(page).url.searchParams); //the url parameters
}

export async function setUrlParamsToBC(bc) {
	const _encodedString = await convert_builder_config_to_encoded_string(bc);
	console.debug('Encoded config: ', _encodedString); // mini description for debug logging
	await setUrlParams(encodingConfig.urlKey, _encodedString);
}

export async function setUrlParams(key, value) {
	if (!browser || !key) return; //Don't execute until initialised (to prevent 500 error), or when no key is provided
	const urlParams = await getUrlSearchParams(get(page)); // get url parameters
	if (value) {
		urlParams.set(key, value); //Set the parameter
	} else {
		urlParams.delete(key); //delete parameters when no elements are in the config
	}
	const urlString = `?${urlParams.toString()}`; //convert to string with '?'' in front
	return goto(`${urlString}`); //update URL with a navigate action
}

export async function setConfigToUrl(element) {
	//a function that sets the config based on the url
	var urlParam = await getUrlSearchParams(get(page));
	var bc_urlParam = urlParam.get(encodingConfig.urlKey); //get the url parameter
	if (!bc_urlParam) return;
	// console.log(bc_urlParam)
	// read the current url parameter for the builder_config and decode it into the array of numbers
	const decodedUrlString = decodeURLString(bc_urlParam);
	//take the decoded string and transform the numbers into the correct elements
	return convertNumbersToObjects(decodedUrlString, element);
}

//Convert the numbers to a string with the objects
export function convertNumbersToObjects(numbersArray, database) {
	// **1. Iterate through the outer array (list of combos), creating new inner arrays (the individual combo's) with objects:**
	return numbersArray.map((innerArray) => {
		//return the array of convertedInnerArray's
		let convertedInnerArray = []; //set as empty array

		innerArray.forEach((number) => {
			//go through the combo for each element within
			const matchingObject = database.find((el) => el.number === number); //find the element associated with the number
			convertedInnerArray.push(matchingObject || {}); //add to the list
		});
		return convertedInnerArray; //return this
	});
}

export function encodeElementNum(number) {
	//simple code to encode an element number formatted like #.### into a shorter string (usuallyy 3 characters)
	let integer = parseInt(parseFloat(number) * 1000); //convert the #.### to an integer number
	return integer.toString(encodingConfig.protocol); //encode with the specified encoding protocol (from dict)
}

export function decodeElementNum(code) {
	//simple code to decode a code back to an element number
	let number = parseInt(code, encodingConfig.protocol); //decode to integer
	return parseFloat(number / 1000).toString(); //back to string
}

export function decodeURLString(encodedString) {
	//function to decode the string version of the builder_config into an array of element numbers
	return encodedString.split(encodingConfig.combo_split).map((comboString) => {
		return comboString.split(encodingConfig.element_split).map(decodeElementNum);
	});
}
