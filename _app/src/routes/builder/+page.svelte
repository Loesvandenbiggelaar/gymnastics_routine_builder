<script lang="ts">
	// Import Components
	import { getElement } from '$lib/bc_routine_evaluation/get_elements_and_routines';
	import { data } from '$lib/stores/datastore';
	import BuilderElement from '$lib/components/builder/BuilderElement.svelte';
	import WarningBubble from '$lib/components/builder/WarningBubble.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	//
	import { onMount } from 'svelte';
	import { floor_routine_normal, beam_routine_loes, ub_routine_normal_d1 } from '$lib/data/test_data/test_routines';

	let inputValue = '';

	$: routine = $data.routineMutations.routine;
	$: $routine, ($data.calcDiff.dscore = $data.calcDiff.resetAndCalculate());
	$: $data, $data.calculateDScore();

	function processInput() {
		// Process the input value
		// 'b' = beam
		$data.routineMutations.addElement(getElement('ub', inputValue));
	}

	$: warningMessages = $data.calcDiff.messages
		.slice()
		.sort((a, b) => (a.priority || 0) - (b.priority || 0));


	onMount(() => {
		$data.routineMutations.routine.set(ub_routine_normal_d1);
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

<Accordion>
	<AccordionItem background="bg-warning-500" disabled={warningMessages.length <= 0}>
		<!-- Warnings -->
		<svelte:fragment slot="lead">
			<Icon
				class={warningMessages.length == 0 ? 'text-success-500' : 'text-error-500'}
				icon={warningMessages.length == 0 ? 'mdi:check' : 'mdi:warning'}
			/>
		</svelte:fragment>
		<svelte:fragment slot="summary">
			{#if $data.calcDiff.neutralDeduction < 0}
				<h4 class="displayHeader underline text-error-500">
					Warning, Neutral Deduction: {$data.calcDiff.neutralDeduction}
				</h4>
			{:else if warningMessages.length == 0}
				<h4 class="displayHeader">No Warnings</h4>
			{:else if warningMessages.length == 1}
				<h4 class="displayHeader">Warning: {warningMessages[0].msg}</h4>
			{:else}
				<h4 class="displayHeader">Warnings ({warningMessages.length})</h4>
			{/if}
		</svelte:fragment>
		<svelte:fragment slot="content">
			{#if warningMessages.length > 0}
				<div class="warningContainer">
					{#each warningMessages as message}
						<WarningBubble message={message.msg} warningType={message.type} />
					{/each}
				</div>
			{/if}
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<!-- Difficulty -->
		<svelte:fragment slot="lead">
			<Icon icon="mdi:bullseye-arrow" />
		</svelte:fragment>
		<svelte:fragment slot="summary">
			<h4 class="displayHeader">Total Difficulty {$data.calcDiff.dscore.totalDifficulty}</h4>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<dl class="list-dl">
				{#each Object.entries($data.calcDiff.dscore) as [key, element]}
				{#if key !== 'totalDifficulty'}
					<div>
						<span class="difficultyElement flex-auto">
							<dt>{key}</dt>
							<dd>{element}</dd>
						</span>
					</div>
				{/if}
				{/each}
			</dl>
		</svelte:fragment>
	</AccordionItem>
	{#if true}
		<AccordionItem disabled={$data.calcDiff.compositionalRequirements.length <= 0}>
			<!-- Compositional Requirements -->
			<svelte:fragment slot="lead">
				<Icon icon="mdi:information-outline" />
			</svelte:fragment>
			<svelte:fragment slot="summary">
				<h4 class="displayHeader">Compositional Requirements</h4>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<ul class="list">
					{#each $data.calcDiff.compositionalRequirements as cr}
						<li class="cr list-item">
							{cr.met} {cr.requirement}
						</li>
					{/each}
				</ul>
			</svelte:fragment>
		</AccordionItem>
	{/if}
</Accordion>
{#if $data.calcDiff.neutralDeduction < 0}
	<strong>Neutral Deductions: {$data.calcDiff.neutralDeduction}</strong>
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

	.warningContainer {
		display: flex;
		flex-direction: column;
		/* Styling */
		padding: 0.5em;
		border-radius: 1em;
		background-color: rgb(var(--color-warning-100));
		border: 1px solid rgb(var(--color-warning-500));
	}

	.displayHeader {
		/* Text */
		font-size: 14px;
		font-weight: 900;
		font-family: 'Kode Mono', monospace;
	}
</style>
