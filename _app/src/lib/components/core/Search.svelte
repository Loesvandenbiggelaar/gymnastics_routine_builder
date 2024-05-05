<script lang="ts">
	import { filterValues } from '$lib/stores/datastore';
	export let placeholder = 'Search...';
</script>

<input
	type="text"
	bind:value={$filterValues.search}
	{placeholder}
	class="input input-bordered w-full"
/>
