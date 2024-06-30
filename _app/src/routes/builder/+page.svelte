<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';

	import { createRoutine, getElement } from '$lib/stores/debug_get_routines';

	import {routineBuilder} from '$lib/stores/routineBuilder'
	// console.log("my routine", routineBuilder.getRoutineIds())
	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';
	console.log("default:routine", $routineBuilder.routine)


	let inputValue = '';

	function processInput() {
		// Process the input value here
		console.log('Input value:', inputValue);
		// Call your function with the input value
		// console(inputValue);
		$routineBuilder.addElement(getElement("b", inputValue))
		console.log("routine", $routineBuilder.getRoutineIds())
		$routineBuilder.calcDiff()
	}

	function deleteButton(){
		console.log($routineBuilder.routine)
		console.log("deleting")
		$routineBuilder.empty()
		console.log($routineBuilder.routine)
	}

$: console.log($routineBuilder.routine)
// $: $routineBuilder.calcDiff()
$: console.log("total", $routineBuilder.difficulty.totalDifficulty)
</script>

<!-- Search and Filter -->
<!-- Builder -->



<div class="builderWrapper">
	{#each $routineBuilder.routine as combo, comboIndex}
		<!-- Combo -->
		<div class="comboWrapper" id="combo-{comboIndex}">
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

<!-- Input -->
<input type="text" bind:value={inputValue} style="color: black;" />

<!-- Button to trigger the function -->
<button on:click={processInput}>Add</button>

<br>

<!-- Big Delete Button -->
<button class="deleteButton" on:click={deleteButton}>Delete Routine</button>

<br>
<br>

difficulty: {$routineBuilder.difficulty.difficultyElements}