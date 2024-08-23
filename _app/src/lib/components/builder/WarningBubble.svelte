<script lang="ts">
	import { hide } from '@floating-ui/dom';

	let warningDict: Record<string, { color: string; icon: string }> = {
		warning: { color: 'rgb(var(--color-warning-500))', icon: 'mdi:alert-circle-outline' },
		repeated: { color: 'rgb(var(--color-warning-500))', icon: 'mdi:repeat' },
		error: { color: 'rgb(var(--color-error-500))', icon: 'mdi:alert' }
	};

	export let warningType: string;
	export let message = 'Warning!';
	export let hideIcon: boolean = false;

	export let icon: string | undefined = undefined;
	export let color: string | undefined = undefined;

	color = color || (warningType in warningDict ? warningDict[warningType].color : 'blue');
	icon =
		icon ||
		(warningType in warningDict ? warningDict[warningType].icon : 'mdi:alert-circle-outline');

	import Icon from '@iconify/svelte';
</script>

<div class="WarningBubble {warningType}" style:color>
	{#if !hideIcon}
		<Icon {icon} />
	{/if}
	<p class="warningMessage">{message}</p>
</div>

<style>
	.WarningBubble {
		display: flex;
		align-items: center;
		gap: 0.3em;
		padding: 0.2em 0.5em;
	}
	.warningMessage {
		/* Text */
		font-size: 9pt;
		font-weight: 900;
		font-family: 'Kode Mono', monospace;
	}
</style>
