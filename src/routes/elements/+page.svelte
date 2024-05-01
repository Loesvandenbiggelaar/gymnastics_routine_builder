<script>
	import { onMount } from 'svelte';
	let _mounted = false;
	//
	import * as m from '$paraglide/messages.js';
	// Iconify for cool icons!
	import Icon from '@iconify/svelte';
	// Custom local svg component
	import IconSVG from '$lib/components/IconSVG.svelte';

	// Import apparatus picker
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';

	import { setUrlParams, getUrlParams } from '$lib/functions/UrlParamFunctions.js'; // Import functions to get and set URL parameters (for sharing)
	import { apparatusConfig, apparatusURLkey } from '$lib/data/elements/elementConfig.js';

	// Import Modal
	import Modal from './_components/Modal.svelte';

	let showModal = false;
	let modalElement = {};

	function showElementInModal(e) {
		const elementID = e.detail[1]._cells[0].filteredData;
		const element = filteredData.find((el) => el.number == elementID);
		modalElement = element;
		showModal = true;
		return;
	}

	// GridJS and elements data
	import Grid from 'gridjs-svelte';
	const c_num = '#';
	const columns = [
		{ name: c_num, id: 'id' },
		{ name: m.element_table_header_description(), id: 'description' },
		{ name: m.element_table_header_value(), id: 'value' },
		{ name: m.element_table_header_difficulty(), id: 'difficulty' }
	];
	// Importing the json from local file
	import json from '$lib/data/elements/women/nl_elements.json';
	$: filteredData = [{}];

	function getApparatus() {
		const selectedApparatusID = getUrlParams(apparatusURLkey);
		const selectedApparatusEntry = Object.entries(apparatusConfig).find(
			([_, config]) => config.id === selectedApparatusID
		);
		const _selectedApparartus = selectedApparatusEntry
			? selectedApparatusEntry[1].data_name
			: 'vault'; // Get selected apparatus from URL, else default to vault
		console.debug(`Selected apparatus: ${_selectedApparartus}`);
		return _selectedApparartus;
	}

	$: selectedApparatus = {};
	$: selectedApparatus.data_name = selectedApparatus?.data_name || 'vault';
	$: selectedApparatus, filterDataByApparatus();
	function filterDataByApparatus() {
		const selectedAppData = json[selectedApparatus.data_name];
		if (selectedAppData) {
			filteredData = Object.values(selectedAppData);
		} else {
			console.error('No data found for selected apparatus:', selectedApparatus.data_name);
		}
	}

	onMount(async () => {
		_mounted = true;
		filteredData = Object.values(json[selectedApparatus.data_name]);
	});
</script>

<!-- Modal for Elements -->
<Modal bind:showModal bind:modalElement bind:selectedApparatus />

<!-- Header Component -->
<h1>{m.page_elements_title()}</h1>
<ApparatusPicker bind:selectedApparatus on:change={filterDataByApparatus} />
<Grid data={filteredData} {columns} search sort pagination on:rowClick={showElementInModal} />
<p>
	{m.lorem_ipsum()}
</p>

<style>
	/* Import Grid Styles */
	@import '$lib/styles/gridJS_style.css';
</style>
