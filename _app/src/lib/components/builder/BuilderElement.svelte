<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type ElementType } from '$lib/data/elements/all_elements';
	export let element: ElementType;
	export let elementNumber: number;

	function deleteElementFromCombo() {}
</script>

<div class="element">
	<div class="element-description">{element.description}</div>
	<button id="deleteElement" class="btn" on:click={deleteElementFromCombo}
		><Icon icon="mdi:delete" /></button
	>
</div>
