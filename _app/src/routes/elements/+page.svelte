<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import Datatable from '$lib/components/Datatable.svelte';
	import SearchTags from '$lib/components/SearchTags.svelte';
	import Filter from '$lib/components/core/Filter.svelte';
	import Search from '$lib/components/core/Search.svelte';
</script>

<svelte:head>
	<title>Elements Table</title>
</svelte:head>

<section id="elements_table">
	<div class="filterbar">
		<ApparatusPicker />
		<Search />
		<SearchTags />
		<Filter icon="mdi:tune-vertical-variant">
			<svelte:fragment slot="name">More Filters</svelte:fragment>
			<svelte:fragment slot="popup">popup...</svelte:fragment>
		</Filter>
	</div>
	<Datatable class="pb-10" />
</section>

<style>
	#elements_table {
		padding: 0.3em;
		height: calc(100dvh - 6rem);
		padding-bottom: 3rem;
		/* Sick fade out effect for overflowing text */
		--fadeout-gradient-mask: linear-gradient(to bottom, #000 90%, transparent);
		mask-image: var(--fadeout-gradient-mask);
		-moz-mask-image: var(--fadeout-gradient-mask);
		-webkit-mask-image: var(--fadeout-gradient-mask);
		-o-mask-image: var(--fadeout-gradient-mask);
	}
	.filterbar {
		margin: 0.5rem 0;
		padding: 0.5rem;
		display: flex;
		gap: 0.5rem;
	}
</style>
