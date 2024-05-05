<script lang="ts">
	// @ts-nocheck
	// Import Iconify
	import Icon from '@iconify/svelte';
	// Importing the json from local file
	import json from '$lib/data/elements/women/nl_elements.json';
	``;
	let data: Array<Object> = Object.values(json['vault']);
	let filteredData: Array<Object> = data;

	// Modal
	function showElementInModal(e: any) {
		if (!e.detail || !e.detail.row) {
			throw new Error('No row found in event detail');
		}
		const elementID = e.detail.row;
		console.log(elementID);
	}

	// Svelte Table (https://www.npmjs.com/package/svelte-table)
	import SvelteTable from 'svelte-table';
	const rows: Array<Object> = filteredData || [{}];

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
		},
		{
			key: 'button',
			title: 'add',
			value: () => 'Add to routine',
			renderComponent: {
				component: Icon,
				props: { icon: 'mdi:plus' }
			},
			sortable: false
		}
	];
</script>

<SvelteTable
	{rows}
	{columns}
	on:clickRow={showElementInModal}
	classNameTable="lx-table alternating"
	rowKey="id"
></SvelteTable>
