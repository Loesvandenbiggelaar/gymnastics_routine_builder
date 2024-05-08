<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import Datatable from '$lib/components/Datatable.svelte';
	import Filter from '$lib/components/core/Filter.svelte';
	import Search from '$lib/components/core/Search.svelte';
</script>

<svelte:head>
	<title>Elements Table</title>
</svelte:head>

<div class="filterbar">
	<ApparatusPicker />
	<Search />
	<Filter icon>
		<svelte:fragment slot="name">Filter</svelte:fragment>
		<svelte:fragment slot="popup">popup...</svelte:fragment>
	</Filter>
</div>
<Datatable />

<style>
	.filterbar {
		margin: 0.5rem 0;
		display: flex;
		gap: 0.5rem;
	}
</style>
