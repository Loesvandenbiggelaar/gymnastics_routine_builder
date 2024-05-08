<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import Datatable from '$lib/components/Datatable.svelte';
	import Filter from '$lib/components/core/Filter.svelte';
	import Search from '$lib/components/core/Search.svelte';
	import '$lib/themes/vars.css';
</script>

<svelte:head>
	<title>Gymnastics Companion</title>
</svelte:head>

<div class="mesh" />

<style>
	.filterbar {
		margin: 0.5rem 0;
		display: flex;
		gap: 0.5rem;
	}
</style>
