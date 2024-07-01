<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';

	import { createRoutine, getElement } from '$lib/stores/debug_get_routines';

	import { routineBuilder } from '$lib/stores/routineBuilder';
	// console.log("my routine", routineBuilder.getRoutineIds())
	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';
	console.log('default:routine', $routineBuilder.routine);

	// import test data
	import { beamRoutine1 } from '$lib/data/test_data/beam_routines_en';

	$: testRoutine = beamRoutine1;

	let inputValue = '';

	function processInput() {
		// Process the input value here
		console.log('Input value:', inputValue);
		// Call your function with the input value
		// console(inputValue);
		$routineBuilder.addElement(getElement('b', inputValue));
		console.log('routine', $routineBuilder.getRoutineIds());
		$routineBuilder.calcDiff();
	}

	function deleteButton() {
		console.log($routineBuilder.routine);
		console.log('deleting');
		$routineBuilder.empty();
		console.log($routineBuilder.routine);
	}

	$: console.log($routineBuilder.routine);
	// $: $routineBuilder.calcDiff()
	$: console.log('total', $routineBuilder.difficulty.totalDifficulty);
</script>

<!-- Search and Filter -->
<!-- Builder -->

<section id="builder">
	<div class="builderHead">
		<div class="name">Routine Name</div>
	</div>
	<div class="builderWrapper">
		{#each testRoutine as combo, comboIndex}
			<!-- Combo -->
			<div class="comboWrapper bg-primary-500 text-white" id="combo-{comboIndex}">
				<div class="comboHeader">
					<div class="announcer">Combo {comboIndex + 1}</div>
					<div class="buttons">buttons</div>
				</div>
				{#if combo.elements.length > 0}
					{#each combo.elements as element, elementIndex}
						{#if combo.elements.length > 0}
							<BuilderElement {element} {elementIndex} {comboIndex} />
						{:else}
							<!-- NO ELEMENTS IN THIS COMBO -->
						{/if}
					{/each}
				{:else}
					<!-- When no combo's are found -->
					<!-- No combo -->
				{/if}
			</div>
		{/each}
	</div>
</section>

<!-- Input -->
<input type="text" bind:value={inputValue} style="color: black;" />

<!-- Button to trigger the function -->
<button on:click={processInput}>Add</button>

<br />

<!-- Big Delete Button -->
<button class="deleteButton" on:click={deleteButton}>Delete Routine</button>

<br />
<br />

difficulty: {$routineBuilder.difficulty.difficultyElements}

<style>
	#builder {
		padding: 1em 0px;
		/* Max width */
		max-width: 240mm;
		margin: 0 auto;
	}
	.builderWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
	.comboWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 10px;
		/* Styling */
		padding: 0.5em;
		border-radius: 1em;
	}

	.comboHeader {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		/* Styling */
		padding: 0.3em;
		/* Text */
		font-weight: bold;
	}
</style>
