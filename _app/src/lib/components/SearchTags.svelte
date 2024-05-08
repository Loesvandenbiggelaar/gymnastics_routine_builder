<script lang="ts">
	import { data } from '$lib/stores/datastore';
	import SearchTag from '$lib/components/core/SearchTag.svelte';
</script>

<div id="tagWrapper">
	{#each $data.filterList.searchList as tag}
		<SearchTag {tag} />
	{/each}
</div>

<style>
	#tagWrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}
</style>
