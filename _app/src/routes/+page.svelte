<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import Datatable from '$lib/components/Datatable.svelte';
	import Filter from '$lib/components/core/Filter.svelte';
</script>

<div class="filterbar">
	<ApparatusPicker />
	<Filter icon>
		<svelte:fragment slot="name">Filter</svelte:fragment>
		<svelte:fragment slot="popup">THIS IS THE POPUP!</svelte:fragment>
	</Filter>
</div>
<Datatable />

<style>
	.filterbar {
		display: flex;
		gap: 0.5rem;
	}
</style>
