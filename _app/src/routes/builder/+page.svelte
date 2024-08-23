<script lang="ts">
	// Import Components
	import { getElement } from '$lib/stores/debug_get_routines';
	import { data } from '$lib/stores/datastore';
	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';
	import WarningBubble from '$lib/components/builder/WarningBubble.svelte';
	import { onMount } from 'svelte';
	import { beamRoutine1, beamRoutineLoes } from '$lib/data/test_data/beam_routines_en';

	let inputValue = '';

	$: routine = $data.routineMutations.routine;
	$: $routine, ($data.calcDiff.dscore = $data.calcDiff.calculate());
	$: $data, $data.calculateDScore();

	function processInput() {
		// Process the input value
		// 'b' = beam
		$data.routineMutations.addElement(getElement('b', inputValue));
	}

	onMount(() => {
		// replace the value of the routine with the beam routine
		// $data.routineMutations.routine.set(beamRoutine1)
		$data.routineMutations.addElement(getElement('b', '1.303'));
		$data.routineMutations.addElement(getElement('b', '5.303'));
		$data.routineMutations.addElement(getElement('b', '5.201'));
		$data.routineMutations.addElement(getElement('b', '5.202'));
		$data.routineMutations.addElement(getElement('b', '2.210'));
		$data.routineMutations.addElement(getElement('b', '2.210'));
		$data.routineMutations.addElement(getElement('b', '2.202'));
		$data.routineMutations.moveElement(2, 0, 1, 1);
		// $data.routineMutations.addElement(getElement("b", "2.204"))
		$data.calcDiff.dscore = $data.calcDiff.calculate();
	});
</script>

<!-- dropdown to select the level -->
<div style="display: flex; justify-content: flex-end;">
	<select
		bind:value={$data.level}
		style="color:black; border: 1px solid #ccc; border-radius: 10px;"
	>
		<option value="D1" selected>D1</option>
		<option value="D2">D2</option>
		<option value="D3">D3</option>
		<option value="D4">D4</option>
		<option value="D5">D5</option>
		<option value="D6">D6</option>
	</select>
</div>

<!-- show all the values of the Dscore -->

totalDifficulty: {$data.calcDiff.dscore.totalDifficulty}
<br />
difficulty: {$data.calcDiff.dscore.difficultyValue}
<br />
compositionalRequirements: {$data.calcDiff.dscore.compositionalRequirements}
<br />
connectionValue: {$data.calcDiff.dscore.connectionValue}
<br />
SerieBonus: {$data.calcDiff.dscore.serieBonus}
<br />
DismountBonus : {$data.calcDiff.dscore.dismountBonus}

<br />
<br />
{#if $data.calcDiff.neutralDeduction < 0}
	<strong>Neutral Deductions: {$data.calcDiff.neutralDeduction}</strong>
{/if}

<br /> <br />
{#if $data.calcDiff.messages.length > 0}
	<div id="routineWarnings">
		<h4 class="warningHeader">Warning messages</h4>
		{#each $data.calcDiff.messages as message}
			<WarningBubble message={message.msg} warningType={message.type} />
		{/each}
	</div>
{/if}

<section id="builder">
	<div class="builderHead">
		<div class="name">Routine Name</div>
	</div>
	<div class="builderWrapper">
		{#each $routine as combo, comboIndex}
			<!-- Combo -->
			<div class="comboWrapper" id="combo-{comboIndex}">
				{#if combo.elements.length > 0}
					{#each combo.messages || [] as message}
						<div>{message.msg}</div>
					{/each}

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
</section>

<!-- Input -->
<input
	type="text"
	bind:value={inputValue}
	style="color: black;"
	on:keydown={(event) => {
		if (event.key === 'Enter') {
			processInput();
		}
	}}
/>

<!-- Button to trigger the function -->
<button on:click={processInput}>[Add]</button>

<br />

<!-- Big Delete Button -->
<button on:click={() => $data.routineMutations.empty()}>[Delete Routine]</button>

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

	#routineWarnings {
		display: flex;
		flex-direction: column;
		/* Styling */
		padding: 0.5em;
		border-radius: 1em;
		background-color: rgb(var(--color-warning-100));
		border: 1px solid rgb(var(--color-warning-500));
	}

	.warningHeader {
		/* Text */
		font-size: 14px;
		font-weight: 900;
		font-family: 'Kode Mono', monospace;
	}
</style>
