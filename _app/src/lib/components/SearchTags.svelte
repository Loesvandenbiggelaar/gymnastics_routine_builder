<script lang="ts">
	import { data } from '$lib/stores/datastore';
	import SearchTag from '$lib/components/core/SearchTag.svelte';
	import Icon from '@iconify/svelte';

	function clearAll() {
		$data.filterOptions.searchList = [];
	}

	$: tagList = $data.filterOptions.searchList;
</script>

{#if $data.filterOptions.searchList.length > 0}
	<div id="tagBox">
		<button
			class="btn btn-icon variant-outline-secondary"
			id="clearAll"
			on:click={clearAll}
			title="Clear all tags"
		>
			<Icon icon="mdi:clear-reverse" />
		</button>
		<div id="tagWrapper">
			{#each tagList as tag, index}
				<SearchTag {tag} />
			{/each}
		</div>
	</div>
{/if}

<style>
	#tagBox {
		display: flex;
		gap: 0.3em;
		justify-content: flex-start;
		align-items: center;
		min-width: 8rem; /* Adjust to your desired minimum width */
	}
	#tagWrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3em;
		justify-content: flex-start;
		align-items: center;
		min-width: 8rem; /* Adjust to your desired minimum width */
		width: min(100%, max(1rem, min-content));
		max-width: 12rem;
		height: 2.8em;
	}

	.btn {
		padding: 0;
		height: 2em;
		width: 2em;
	}
</style>
