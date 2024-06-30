<script lang="ts">
	// Import Components
	import ApparatusPicker from '$lib/components/ApparatusPicker.svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';

	import { createRoutine, getElement } from '$lib/stores/debug_get_routines';

	import {routineBuilder} from '$lib/stores/routineBuilder'
	// console.log("my routine", routineBuilder.getRoutineIds())
	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';


	$routineBuilder.addElement(getElement("b", "1.101"))
	console.log("default:routine", $routineBuilder.routine)


	let inputValue = '';

	function processInput() {
		// Process the input value here
		console.log('Input value:', inputValue);
		// Call your function with the input value
		// console(inputValue);
		$routineBuilder.addElement(getElement("b", inputValue))
		console.log("routine", $routineBuilder.getRoutineIds())
	}

	function deleteButton(){
		console.log($routineBuilder.routine)
		console.log("deleting")
		$routineBuilder.empty()
		console.log($routineBuilder.routine)
	}

$: console.log($routineBuilder.routine)
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
<button on:click={processInput}>Process Input</button>


<!-- Big Delete Button -->
<button class="deleteButton" on:click={deleteButton}>Delete Routine</button>