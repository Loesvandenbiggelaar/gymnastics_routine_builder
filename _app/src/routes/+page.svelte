<script lang="ts">
	// Import Components
	import Card from '$lib/components/core/Card.svelte';
	import { cardItems } from '$lib/modules/cardItems';
	import '$lib/themes/vars.css';
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
