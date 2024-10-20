<script lang="ts">
	export let parent: any;
	import { modalElement, selectedApparatus } from '$lib/stores/datastore';
	const element = $modalElement;
</script>

<div class="wrapper card p-3">
	{#if element}
		<div class="card-body">
			<small class="text-muted">{element?.id}</small>
			<p class="card-text">{element?.description}</p>
			<small class="text-muted">{$selectedApparatus.name}</small>
		</div>
		<div class="card-footer">
			<small class="text-muted">{element?.value}</small>
		</div>
	{:else}
		<h3 class="h3">No element selected</h3>
	{/if}
</div>
