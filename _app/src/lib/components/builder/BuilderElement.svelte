<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';
	export let element: ElementMetadata;
	export let elementIndex: number;
	export let comboIndex: number;
	import { routineBuilder } from '$lib/stores/routineBuilder';
	import type { ElementMetadata } from '$lib/stores/routineBuilder';
	import { onMount } from 'svelte';

	function deleteElementFromCombo() {
		$routineBuilder.removeElement(comboIndex, elementIndex);
	}
	function moveElementUp() {
		console.log(comboIndex, elementIndex);
		$routineBuilder.moveElementBack(comboIndex, elementIndex);
	}

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
</script>

<div
	class="routineBuilderElement bg-surface-100-800-token text-surface-900-50-token"
	class:dragging
>
	<div class="elementHead">
		<div class="announcer">element</div>
	</div>
	<div class="elementDescription">{element.element.description}</div>
	<!-- Drag Handle -->
	<button id="draghandle" class="dragHandle btn" on:mousedown={isDragging}>
		<Icon icon="mdi:drag" />
	</button>
	<!-- Buttons -->
	<div class="rbeButtons">
		<button id="deleteElement" class="btn" on:click={deleteElementFromCombo}
			><Icon icon="mdi:delete" /></button
		>
		<button id="moveElementUp" class="btn" on:click={moveElementUp}
			><Icon icon="mdi:arrow-up" /></button
		>
		<button id="moveElementUp" class="btn" on:click={moveElementUp}
			><Icon icon="mdi:arrow-down" /></button
		>
	</div>
</div>

<style>
	.routineBuilderElement {
		display: grid;
		grid-template-areas:
			'head head head'
			'something description draghandle'
			'buttons buttons buttons';
		grid-template-columns: min-content 1fr min-content;

		/* Layout */
		border-radius: inherit;
		width: 100%;
		padding: 0.5em;

		/* Animation */
		transition: all 0.2s ease-in-out;
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
		border-bottom: 0.5px solid rgb(var(--color-surface-500));
	}

	.elementHead .announcer {
		font-size: 9pt;
		font-weight: 900;
		font-family: 'Kode Mono', monospace;
	}

	.elementDescription {
		grid-area: description;
	}

	.dragHandle {
		grid-area: draghandle;
	}

	.rbeButtons {
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
