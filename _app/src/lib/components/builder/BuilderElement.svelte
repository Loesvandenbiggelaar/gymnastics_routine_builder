<script lang="ts">
	import Icon from '@iconify/svelte';
	export let element: ElementMetadata;
	export let elementIndex: number;
	export let comboIndex: number;
	import type { ElementMetadata } from '$lib/stores/routineMutations';
	import { data } from '$lib/stores/datastore';

</script>

<div class="element">
	<div class="element-description">{element.element.value} {element.element.description}</div>
	<button id="deleteElement" class="btn" on:click={() => $data.routineMutations.removeElement(comboIndex,elementIndex)}
		><Icon icon="mdi:delete" /></button
	>
	<button id="moveElementUp" class="btn" on:click={() => $data.routineMutations.moveElementBack(comboIndex, elementIndex)}
		><Icon icon="mdi:arrow-up" /></button
	>
	<button id="moveElementUp" class="btn" on:click={() => $data.routineMutations.moveElementForward(comboIndex, elementIndex)}
	><Icon icon="mdi:arrow-down" /></button
>
</div>
