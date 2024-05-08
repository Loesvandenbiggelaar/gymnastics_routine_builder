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

	//CSS Settings
	let cssClasses: string = '';
	export { cssClasses as class };
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
			value: (v: { difficulty: string }) =>
				getProp(v, 'difficulty').replace('TA', '1A').replace('SA', '0A'),
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
	] as any;

	//RENDER DATA!!
	$: renderedData = $data.filteredData as any[];
</script>

<div id="table_wrapper" class={cssClasses}>
	<SvelteTable
		rows={renderedData}
		{columns}
		on:clickRow={showElementInModal}
		classNameTable="lx-table alternating"
		classNameThead="sticky-header"
		rowKey="id"
	></SvelteTable>
	<hr class="divider" />
</div>

<style>
	#table_wrapper {
		overflow-x: auto;
		overflow-y: auto;
		height: 100%;
	}

	.divider {
		margin: 0.5rem 10dvw;
		opacity: 0.5;
		padding-bottom: 10px;
	}
</style>
