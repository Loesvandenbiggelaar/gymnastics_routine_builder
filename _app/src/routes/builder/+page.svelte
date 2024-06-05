<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';

	let testElement: ElementType = {
		id: '1.1',
		description: 'From hdst. lower to L-sit or strad. L-sit (2 s.).',
		group_number: '1',
		group_name: 'Non-acrobatic elements ',
		difficulty: 'A',
		type: 'non-acrobatic',
		value: 0.1,
		images: {
			figure: ['/data/elements/men//images/floor/element\\page43_element_1.1_Im27.png'],
			symbol: ['/data/elements/men//images/floor/symbol\\page43_element_1.1_Im10.png']
		}
	};

	let combo: ElementType[] = []; //an array of elements
	let routine: (typeof combo)[] = [[testElement, testElement, testElement]]; // an array of combo's

	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';
</script>

<!-- Search and Filter -->
<!-- Builder -->
<div class="builderWrapper">
	{#each routine as combo, comboNumber}
		<!-- Combo -->
		<div class="comboWrapper" id="combo-{comboNumber}">
			{#if combo.length > 0}
				{#each combo as element, elementNumber}
					{#if combo.length > 0}
						<BuilderElement {element} {elementNumber} />
					{:else}
						NO ELEMENTS IN THIS COMBO
					{/if}
				{/each}
			{:else}
				<!-- When no combo's are found -->
				No combo
			{/if}
		</div>
	{/each}
</div>
