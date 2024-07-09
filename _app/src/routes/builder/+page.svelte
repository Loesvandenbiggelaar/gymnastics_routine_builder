<script lang="ts">
	// Import Components
	import {getElement } from '$lib/stores/debug_get_routines';
	import { data } from '$lib/stores/datastore';
	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';
	import { onMount } from 'svelte';
	import {beamRoutine1} from '$lib/data/test_data/beam_routines_en';
	
	let inputValue = '';

	$: routine = $data.routineMutations.routine

	$: $routine, $data.calcDiff.dscore = $data.calcDiff.calculate()


	function processInput() {
		// Process the input value
		// 'b' = beam 
		$data.routineMutations.addElement(getElement("b", inputValue))
	}

	onMount(() => {
		// replace the value of the routine with the beam routine
		
		$data.routineMutations.routine.set(beamRoutine1)
		
		$data.calcDiff.dscore = $data.calcDiff.calculate()

	});
</script>


<!-- show all the values of the Dscore -->

totalDifficulty: {$data.calcDiff.dscore.totalDifficulty}
<br>
difficulty: {$data.calcDiff.dscore.difficultyValue}
<br>
compositionalRequirements: {$data.calcDiff.dscore.compositionalRequirements}
<br>
connectionValue: {$data.calcDiff.dscore.connectionValue}
<br>
SerieBonus: {$data.calcDiff.dscore.serieBonus}
<br>
DismountBonus : {$data.calcDiff.dscore.dismountBonus}


<div class="builderWrapper">
	{#each $routine as combo, comboIndex}
		<!-- Combo -->
		<div class="comboWrapper" id="combo-{comboIndex}">
			{#if combo.elements.length > 0}
			-------
				{#each combo.elements as element, elementIndex}
					{#if combo.elements.length > 0}
						<BuilderElement {element} {elementIndex} {comboIndex} />
					{:else}
						<!-- NO ELEMENTS IN THIS COMBO -->
					{/if}
				{/each}
			{:else}
				<!-- No combo -->
			{/if}
		</div>
	{/each}
</div>

<!-- Input -->
<input type="text" bind:value={inputValue} style="color: black;" on:keydown={(event) => {
	if (event.key === 'Enter') {
		processInput();
	}
}} />

<!-- Button to trigger the function -->
<button on:click={processInput}>[Add]</button>

<br>

<button on:click={() => $data.routineMutations.empty()}>[Delete Routine]</button>