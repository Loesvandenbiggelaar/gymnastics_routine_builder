<script lang="ts">
	import Icon from '@iconify/svelte';
	import WarningBubble from '$lib/components/builder/WarningBubble.svelte';
	//
	export let element: ElementMetadata;
	export let elementIndex: number;
	export let comboIndex: number;
	import { data } from '$lib/stores/datastore';
	import { onMount } from 'svelte';
	import type { ElementMetadata } from '$lib/stores/routineMutations';

	$: dragging = false;
	function isDragging() {
		dragging = true;
	}

	let mouse = { x: 0, y: 0 };

	function mouseMove(e: MouseEvent) {
		mouse = { x: e.clientX, y: e.clientY };
	}

	onMount(() => {
		document.addEventListener('mouseup', mouseRelease);
	});

	function mouseRelease() {
		if (!dragging) return;
		dragging = false;
	}

	$: elementTypeMsg = element?.elementType || 'element';
</script>

<div
	class="routineBuilderElement bg-surface-100-800-token text-surface-900-50-token"
	class:dragging
	id="{comboIndex}.{elementIndex}"
>
	<div class="elementHead">
		<div class="announcer">{element.element.id} {elementTypeMsg} {element.hasDifficulty}</div>
		{#if element.isRepeated}
			<WarningBubble warningType="repeated" message="Element is repeated" />
		{/if}
		{#if element.devaluated}
			<WarningBubble message="Warning! element is devaluated" />
		{/if}
	</div>
	<!-- Content Section -->
	<div class="elementContent">
		<div class="elementDescription">{element.value} {element.element.description}</div>
		<br />

		<!-- <div>{element.isRepeated}</div> -->
		<!-- Drag Handle -->
		<button id="draghandle" class="dragHandle btn" on:mousedown={isDragging}>
			<Icon icon="mdi:drag" />
		</button>
	</div>
	<!-- Buttons -->
	<div class="elementButtonRow">
		<button
			id="deleteElement"
			class="btn"
			on:click={() => $data.routineMutations.removeElement(comboIndex, elementIndex)}
			><Icon icon="mdi:delete" /></button
		>
		<button
			id="moveElementUp"
			class="btn"
			on:click={() => $data.routineMutations.moveElementBack(comboIndex, elementIndex)}
			><Icon icon="mdi:arrow-up" /></button
		>
		<button
			id="moveElementUp"
			class="btn"
			on:click={() => $data.routineMutations.moveElementForward(comboIndex, elementIndex)}
			><Icon icon="mdi:arrow-down" /></button
		>
	</div>
</div>

<style>
	.routineBuilderElement {
		display: flex;
		flex-direction: column;

		/* Coloring */
		background-color: rgb(var(--color-primary-300));

		/* Layout */
		border-radius: inherit;
		width: 100%;
		overflow: hidden;

		/* Animation */
		transition: all 0.2s ease-in-out;
	}

	.routineBuilderElement > * {
		padding: 0.1em 0.5em;
	}

	.routineBuilderElement:hover {
		box-shadow: 0 2px 2px 2px rgba(27, 66, 117, 0.747);
	}

	.routineBuilderElement.dragging {
		opacity: 0.5;
		animation: wobble 0.5s ease infinite;
	}

	.elementHead {
		grid-area: head;
		display: flex;
		/* Colors */
		background-color: rgb(var(--color-primary-500));
		color: rgb(var(--on-primary));
	}

	.elementHead .announcer {
		font-size: 9pt;
		font-weight: 900;
		font-family: 'Kode Mono', monospace;
	}

	.elementContent {
		display: flex;
		justify-content: space-between;
	}

	.elementDescription {
		grid-area: description;
	}

	.dragHandle {
		grid-area: draghandle;
	}

	.elementButtonRow {
		display: flex;
		grid-area: buttons;
	}

	@keyframes wobble {
		0%,
		100% {
			transform: rotate(0);
		}
		33% {
			transform: rotate(-0.5deg);
		}
		66% {
			transform: rotate(0.5deg);
		}
	}
</style>
