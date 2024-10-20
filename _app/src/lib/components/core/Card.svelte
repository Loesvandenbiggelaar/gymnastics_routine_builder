<script lang="ts">
	import { goto } from '$app/navigation';
	export var item: any = {};
	import '$lib/themes/vars.css';

	function clickAction() {
		const actionType = item?.action?.type;
		if (!actionType) return;
		if (actionType === 'link') {
			const link = item?.action?.href || '#';
			goto(link);
		}
	}
</script>

<button class="card shadow-lg" id="card" on:click={clickAction}>
	{#if item?.image?.src}
		<div
			class="backdrop"
			title={item?.image?.alt}
			style="background-image: url({item?.image?.src});"
		/>
	{/if}
	<div id="info">
		<span class="display-text font-bold card-title">{item?.name}</span>
		<div class="details">
			<p class="card-text">{item?.description}</p>
			{#if item?.chips}
				<div class="chips">
					{#each item?.chips as chip}
						<span class="chip badge variant-ghost-secondary">{chip}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</button>

<style>
	:root {
		--card-bg: var(--color-surface-200);
	}

	:global(.dark) {
		--card-bg: var(--color-surface-700);
	}
	#card {
		min-width: 20em;
		max-width: 35dvw;
		height: min(60dvh, 20em);
		/* Positiioning for the backdrop */
		position: relative;
		overflow: hidden;
		/* Animate */
		transition: box-shadow 0.5s ease-in-out;
		/* Shadow */
		box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.5);
	}

	#card:hover {
		box-shadow: 4px 4px 1em rgba(0, 0, 0, 1);
	}

	#info {
		transform: translateY(75%);
		transition: all 0.5s ease-in-out;
		--title-size: 1.8rem;
	}

	#card:hover #info {
		transform: translateY(0%);
		height: fit-content;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		/* Background image */
		background-size: cover;
		background-position: center;
		/* Zoom effect */
		transition:
			transform 1.4s ease,
			filter 1.4s ease;
		z-index: 0;
		/* Filter out colors to get a grayscale effect */
		-webkit-filter: grayscale(0%) blur(0px);
		filter: grayscale(0%) blur(0px);
	}
	.backdrop:hover {
		transform: scale(1.2);
		-webkit-filter: grayscale(80%) blur(2px);
		filter: grayscale(80%) blur(2px);
	}

	.backdrop::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgb(var(--card-bg));
		opacity: 0.3;
	}

	#info {
		/* Needed for z-index */
		position: absolute;
		inset: auto 0 0 0;
		z-index: 2;
		/* Positioning */
		/* Box styling */
		text-align: left;
		padding: 0.5em;
		/* Colouring */
		background: rgb(var(--card-bg));
	}

	.card-title {
		transition: all 0.4s ease-in-out;
		font-size: var(--title-size);
	}

	.card-text {
		font-size: 0.9rem;
		opacity: 0.8;
		padding-bottom: 0.5rem;
	}

	.chips {
		margin-top: 0.4em;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}

	.chips .chip {
		min-width: 5em;
		font-size: 0.75em;
		border-radius: 1em;
	}

	.fade-out-top {
		/* Fade out top */
		padding-top: 2em;
		--fadeout-gradient-mask: linear-gradient(to bottom, transparent, #000 1em, #000);
		mask-image: var(--fadeout-gradient-mask);
		-moz-mask-image: var(--fadeout-gradient-mask);
		-webkit-mask-image: var(--fadeout-gradient-mask);
		-o-mask-image: var(--fadeout-gradient-mask);
	}
</style>
