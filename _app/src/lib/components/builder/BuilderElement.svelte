<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';
	export let element: ElementMetadata;
	export let elementIndex: number;
	export let comboIndex: number;
	import {routineBuilder} from '$lib/stores/routineBuilder'
	import type { ElementMetadata } from '$lib/stores/routineBuilder';
	

	function deleteElementFromCombo() {$routineBuilder.removeElement(comboIndex,elementIndex)}
	function moveElementUp(){
		console.log(comboIndex, elementIndex)
		$routineBuilder.moveElementBack(comboIndex,elementIndex)
	}

</script>

<div class="element">
	<div class="element-description">{element.element.description}</div>
	<button id="deleteElement" class="btn" on:click={deleteElementFromCombo}
		><Icon icon="mdi:delete" /></button
	>
	<button id="moveElementUp" class="btn" on:click={moveElementUp}
		><Icon icon="mdi:arrow-up" /></button
	>
	<!-- <button id="moveElementUp" class="btn" on:click={moveElementUp}
	><Icon icon="mdi:arrow-down" /></button
> -->
</div>
