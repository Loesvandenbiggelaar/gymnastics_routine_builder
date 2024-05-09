<script lang="ts">
	// Import Components
	import Card from '$lib/components/core/Card.svelte';
	import { cardItems } from '$lib/modules/cardItems';
	import { allElements } from '$lib/data/elements/all_elements';
	import '$lib/themes/vars.css';

	console.error('allElements', allElements[Object.keys(allElements)[0]]);

	import { data } from '$lib/stores/datastore';
	console.error('data', $data.rawData);
	console.error('language = ', $data.selectedLanguage);
	console.error('language data', $data.apparatusData);
	console.error('apparatus = ', $data.selectedApparatus);
	console.error('apparatus data', $data.elementData);
</script>

<svelte:head>
	<title>Gymnastics Companion</title>
</svelte:head>

<!-- Cool mesh background -->
<!-- <div class="mesh" /> -->

<!-- Cards -->
<section id="cards">
	<div class="card-wrapper">
		{#each cardItems as item}
			<Card {item} />
		{/each}
	</div>
</section>

<style>
	#cards {
		margin-left: auto;
	}
	.card-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
</style>
