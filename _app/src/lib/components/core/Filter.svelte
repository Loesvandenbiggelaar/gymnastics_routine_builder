<script lang="ts">
	// Action and popups for filter
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	export let onclick = () => {};
	let popupSettings: PopupSettings | boolean | undefined = undefined;
	export { popupSettings as popup };

	if (typeof popupSettings === 'boolean' && popupSettings === true) {
		popupSettings = {
			event: 'click',
			target: 'filter-popup',
			placement: 'bottom'
		};
	}

	// Class (optional)
	let css_class: string = '';
	export { css_class as class };
	export let buttonClass: string = '';

	// Icon
	import Icon, { iconExists } from '@iconify/svelte';
	export let icon: string | boolean = false; // icon can be a string or boolean, false (no icon) by default
	let _icon = icon
		? typeof icon === 'string' && iconExists(icon)
			? icon
			: 'mdi:chevron-down'
		: false;
</script>

{#if popupSettings}
	<button
		on:click={onclick}
		use:popup={popupSettings}
		class="btn min-w-28 variant-outline-primary flex items-center justify-between gap-2 {buttonClass}"
	>
		<slot name="name" />
		<span>
			{#if _icon}
				<Icon icon={_icon} />
			{/if}
		</span>
	</button>
	<div class="card p-2 z-10 {css_class}" data-popup={popupSettings.target}>
		<slot name="popup" />
	</div>
{:else}
	<button
		on:click={onclick}
		class="btn min-w-28 variant-outline-primary flex items-center justify-between gap-2 {buttonClass}"
	>
		<slot name="name" />
		<span>
			{#if _icon}
				<Icon icon={_icon} />
			{/if}
		</span>
	</button>
{/if}
