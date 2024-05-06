<script lang="ts">
	// Modals
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import ElementModal from '$lib/components/ElementModal.svelte';

	// Import Iconify
	import Icon from '@iconify/svelte';

	// Import filter data
	import { filterValues, data, modalElement } from '$lib/stores/datastore';

	// Importing the json from local file
	import { selectedApparatus } from '$lib/stores/datastore';
	import rawData from '$lib/data/elements/women/nl_elements.json';

	///
	//Modal Settings
	const modalComponent: ModalComponent = {
		ref: ElementModal
	};
	const datatableModal: ModalSettings = {
		type: 'component',
		component: modalComponent
	};
	const modalStore = getModalStore();

	let DEPRECATED_data: Array<Object> = Object.values(rawData[$selectedApparatus.data_name]);
	let DEPRECATED_filteredData: Array<Object> = DEPRECATED_data;
	$data.setApparatus('vault');

	function updateDataByApparatus(input) {
		const _apparatus = Object.keys(rawData).includes(input.data_name)
			? input.data_name
			: Object.keys(rawData)[0];
		DEPRECATED_filteredData = DEPRECATED_data = Object.values(rawData[_apparatus]);
	}
	// Update data based on selected apparatus
	$: updateDataByApparatus($selectedApparatus);

	// Modal
	// Show element in modal
	function showElementInModal(e: any) {
		if (!e.detail || !e.detail.row) {
			throw new Error('No row found in event detail');
		}
		// Set element from event
		const modalElement = e.detail.row;
		// Set modal data in store
		$modalElement = modalElement;

		// Show modal
		modalStore.trigger(datatableModal);

		console.debug('Showing element in modal:', modalElement);
	}

	// Svelte Table (https://www.npmjs.com/package/svelte-table)
	import SvelteTable from 'svelte-table';

	// Get property from row object
	function getProp(row: any, prop: string) {
		return row?.[prop] || 'N/A';
	}

	// define column configs
	const columns = [
		{
			key: 'id',
			title: '#',
			value: (v: { id: string }) => getProp(v, 'id'),
			sortable: true,
			headerClass: 'text-left'
		},
		{
			key: 'description',
			title: 'Description',
			value: (v: { description: string }) => getProp(v, 'description'),
			renderValue: (v: { description: string }) =>
				`<div class="lx-table-row">${getProp(v, 'description')}</div>`,
			parseHTML: true,
			sortable: true,
			headerClass: 'text-left'
		},
		{
			key: 'value',
			title: 'Value',
			value: (v: { value: string }) => getProp(v, 'value'),
			sortable: true,
			headerClass: 'text-left'
		},
		{
			key: 'difficulty',
			title: 'Difficulty',
			// Replace the string 'TA' with the Unicode character '\u0000'. The Unicode character '\u0000' is a zero-width space, so when rendering the difficulty value, 'TA' will not be visible.
			value: (v: { difficulty: string }) => getProp(v, 'difficulty').replace('TA', '0'),
			renderValue: (v: { difficulty: string }) => getProp(v, 'difficulty').toUpperCase(),
			sortable: true,
			headerClass: 'text-left'
		}
		// ,
		// {
		// 	key: 'button',
		// 	title: 'add',
		// 	value: () => 'Add to routine',
		// 	renderComponent: {
		// 		component: Icon,
		// 		props: { icon: 'mdi:plus' }
		// 	},
		// 	sortable: false
		// }
	];

	//RENDER DATA!!
	$: renderedData = $data.filteredData;
</script>

<SvelteTable
	rows={renderedData}
	{columns}
	on:clickRow={showElementInModal}
	classNameTable="lx-table alternating"
	rowKey="id"
></SvelteTable>
