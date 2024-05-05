<script lang="ts">
	import { apparatusConfig } from '$lib/data/elements/apparatusConfig';
	import { selectedApparatus, updateSelectedApparatus } from '$lib/stores/datastore';
	// Import Components
	import { ListBox, ListBoxItem, filter } from '@skeletonlabs/skeleton';
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import Filter from '$lib/components/core/Filter.svelte';

	// Import filters
	import { filterValues } from '$lib/stores/datastore';

	let dropdownValue: string;

	const popupSettings: PopupSettings = {
		event: 'click',
		target: 'popupDropdown',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
	$: updateSelectedApparatus(dropdownValue);

	$: apparatusConfig_filtered = apparatusConfig.filter(
		(apparatus) => $filterValues.sex === 'both' || apparatus.sex_id == $filterValues.sex
	);

	$: console.debug(`Apparatus filter: ${$filterValues.sex}`, `List: ${apparatusConfig_filtered}`);
</script>

<button
	use:popup={popupSettings}
	class="btn w-48 variant-outline-primary flex items-center justify-between gap-2"
>
	<span class="flex flex-row gap-2">
		<Icon icon="mdi:weight-lifter" class="w-6 h-6" />
		{$selectedApparatus.full_name}
	</span>
	<span>
		<Icon icon="mdi:chevron-down" />
	</span>
</button>

<div class="card w-48 shadow-xl z-50" data-popup="popupDropdown">
	<RadioGroup class="w-full flex-1 variant-outline-secondary">
		{#each ['m', 'both', 'w'] as sex}
			<RadioItem
				bind:group={$filterValues.sex}
				name="justify"
				value={sex}
				class="flex justify-center items-center"
				active="variant-filled-secondary"
			>
				<Icon
					icon={sex === 'm'
						? 'mdi:gender-male'
						: sex === 'w'
							? 'mdi:gender-female'
							: 'mdi:ampersand'}
				/>
			</RadioItem>
		{/each}
	</RadioGroup>
	<ListBox rounded="rounded-none" class="w-full max-h-[18em] overflow-y-auto ">
		{#each apparatusConfig_filtered as apparatus}
			<ListBoxItem bind:group={dropdownValue} name="medium" value={apparatus.id}>
				<span class="flex items-center justify-start gap-2">
					<Icon icon={apparatus.icon} />
					{apparatus.full_name}
				</span>
			</ListBoxItem>
		{/each}
	</ListBox>
</div>
