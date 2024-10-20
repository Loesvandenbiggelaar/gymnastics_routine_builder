<script lang="ts">
	import { data } from '$lib/stores/datastore';
	import type { SearchEntry } from '$lib/stores/datastore';
	export let tag: SearchEntry;
	import Icon, { iconExists } from '@iconify/svelte';

	export const compactTag: boolean = false;
	const tagDisabled = tag?.disabled || false;
	const tagType = tag?.type;
	var tagIcon: string;
	const tagText = tag?.friendly || tag.value || 'ERROR';

	// Set tag icon
	if (tag?.customIcon && iconExists(tag.customIcon)) tagIcon = tag?.customIcon;
	else if (tagType === 'tag') tagIcon = 'mdi:tag';
	else if (tag.modifier === 'not') tagIcon = 'mdi:select-search';
	else if (tagType === 'search') tagIcon = 'mdi:magnify';
</script>

<span class="badge variant-filled-surface" class:disabled={tagDisabled}>
	<span id="tagIcon" class:hidden={!tagIcon || compactTag}>
		<Icon icon={tagIcon} />
	</span>
	{tagText}
	<button
		id="tagRemove"
		title="Remove tag"
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

	.disabled {
		opacity: 0.5;
	}
</style>
