<script lang="ts">
	import { data } from '$lib/stores/datastore';
	export let tag: string;
	import Icon from '@iconify/svelte';
</script>

<span class="badge variant-filled-surface">
	{tag}
	<button
		class="btn hover:opacity-50 text-xs"
		on:click={() =>
			($data.filterOptions.searchList = $data.filterOptions.searchList.filter((t) => t !== tag))}
	>
		<Icon icon="mdi:close" />
	</button>
</span>

<style>
	.badge {
		height: 1.6em;
		display: flex;
		justify-content: space-between;
		align-items: bottom;
		gap: 0.5em;
	}

	.btn {
		padding: 0;
	}
</style>
