<script lang="ts">
	import { apparatusConfig } from '$lib/data/elements/apparatusConfig';
	import { selectedApparatus, updateSelectedApparatus } from '$lib/stores/datastore';
	// Import Components
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	// Import filters
	import { dataFilters } from '$lib/stores/datastore';

	let dropdownValue: string;

	const popupSettings: PopupSettings = {
		event: 'click',
		target: 'popupDropdown',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
	$: updateSelectedApparatus(dropdownValue);

	$: apparatusConfig_filtered = apparatusConfig.filter(
		(apparatus) => $dataFilters.sex === 'both' || apparatus.sex_id == $dataFilters.sex
	);

	$: console.debug(`Apparatus filter: ${$dataFilters.sex}`, `List: ${apparatusConfig_filtered}`);
</script>

<button
	class="btn w-48 variant-outline-primary flex items-center justify-center gap-2"
	use:popup={popupSettings}
>
	<Icon icon="mdi:weight-lifter" class="w-6 h-6" />

	{$selectedApparatus.full_name}
</button>

<div class="card w-48 shadow-xl py-2" data-popup="popupDropdown">
	<RadioGroup class="w-full flex-1">
		{#each ['m', 'both', 'w'] as sex}
			<RadioItem
				bind:group={$dataFilters.sex}
				name="justify"
				value={sex}
				class="flex justify-center items-center"
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
	<ListBox rounded="rounded-none">
		{#each apparatusConfig_filtered as apparatus}
			<ListBoxItem bind:group={dropdownValue} name="medium" value={apparatus.id}>
				<span class="flex items-center justify-start gap-2">
					<Icon icon={apparatus.icon} />
					{apparatus.full_name}
				</span>
			</ListBoxItem>
		{/each}
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
