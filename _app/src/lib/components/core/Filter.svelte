<script lang="ts">
	// Action and popups for filter
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	export let onclick = () => {};
	export let popupSettings: PopupSettings = { event: 'click', target: 'filter' };

	// Class (optional)
	let css_class: string = '';
	export { css_class as class };

	// Icon
	import Icon, { iconExists } from '@iconify/svelte';
	export let icon: string | boolean = false; // icon can be a string or boolean, false (no icon) by default
	let _icon = icon
		? typeof icon === 'string' && iconExists(icon)
			? icon
			: 'mdi:chevron-down'
		: false;
</script>

<button
	on:click={onclick}
	use:popup={popupSettings}
	class="btn min-w-28 variant-outline-primary flex items-center justify-between gap-2 {css_class}"
>
	<slot />
	<span>
		{#if _icon}
			<Icon icon={_icon} />
		{/if}
	</span>
</button>
