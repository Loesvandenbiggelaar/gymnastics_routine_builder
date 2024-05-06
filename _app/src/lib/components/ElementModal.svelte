<script lang="ts">
	export let parent: any;
	export let element: Object | null;
</script>

<div class="wrapper card p-3">
	{#if element}
		<h3 class="h3">Title</h3>
	{:else}
		<h3 class="h3">No element selected</h3>
	{/if}
</div>
