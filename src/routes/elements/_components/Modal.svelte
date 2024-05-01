<!-- Modal for elements -->
<script>
	// Import IconSvg for custom svg icons
	import IconSvg from '$lib/components/IconSVG.svelte';
	import Icon from '@iconify/svelte';

	export let showModal; // boolean

	export let modalElement = {};

	let placeholderImage = 'https://loremflickr.com/300/200';
	let placeholderSymbols = 'https://loremflickr.com/300/100';

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- MODAL CONTENT -->
	<div id="modal">
		<div class="modal buttons">
			<button id="clipboard"><Icon icon="ic:baseline-content-copy" /></button>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-autofocus -->
			<button id="close" autofocus on:click|stopPropagation={() => dialog.close()}
				><Icon icon="line-md:close-small" /></button
			>
		</div>
		<p class="modal topbar number">{modalElement.id}</p>
		<p class="modal topbar apparatus">__Cheesecake__</p>
		<div class="modal icon">
			<IconSvg src="vault.svg" />
			<!-- REPLACE THIS FUCKER -->
		</div>
		<h3 class="modal description">{modalElement.description}</h3>
		<div class="modal info">
			<div class="infobox">
				<b>Value</b>
				<p class="value">{modalElement.value}</p>
			</div>
			<div class="infobox">
				<b>Difficulty</b>
				<p class="difficulty">{modalElement.difficulty}</p>
			</div>
			<div class="infobox">
				<b>Group</b>
				<p class="group">{modalElement.group}</p>
			</div>
			<div class="infobox">
				<b>Type</b>
				<p class="type">{modalElement.type}</p>
			</div>
		</div>
		<div class="modal media">
			<div class="image">
				<img src={modalElement.imagePath || placeholderImage} alt="Element in steps" />
			</div>
			<div class="symbols">
				<img src={modalElement.imagePath || placeholderSymbols} alt="Symbols for jury notation" />
			</div>
			<div class="video"></div>
		</div>
	</div>
	<!-- END OF MODAL CONTENT -->
</dialog>

<style>
	dialog {
		max-width: 36em;
		border-radius: 1em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.6);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	#modal {
		display: grid;
		grid-template-areas:
			'number apparatus buttons'
			'description description icon'
			'info info info'
			'media media media';
		grid-template-rows: 2em auto auto auto;
	}

	#modal p {
		margin: 0;
	}

	.modal.buttons {
		grid-area: buttons;
		display: flex;
		justify-content: end;
		border: solid var(--color-text) thin;
		border-radius: 10px;
	}

	button {
		all: unset;
		/* Alignment */
		display: block;
		padding: 0.3em;
		display: flex;
		align-items: center;
		justify-content: center;
		/* Box settings */
		background: none;
		border-radius: 10px;
		box-shadow: none;
		/* Cursor */
		cursor: pointer;
		aspect-ratio: 1 / 1;
	}

	button:hover {
		background: var(--color-base-secondary);
	}

	button#close:hover {
		background: red;
	}

	.modal.topbar {
		display: flex;
		align-items: center;
		font-size: 0.8em;
	}
	.modal.number {
		grid-area: number;
	}

	.modal.apparatus {
		grid-area: apparatus;
		justify-content: end;
		padding-right: 1em;
	}

	.modal.icon {
		width: 3em;
		aspect-ratio: 1 / 1;
		grid-area: icon;
		color: var(--color-accent);
	}

	.modal.description {
		margin: 0px;
		grid-area: description;
	}

	.modal.media {
		grid-area: media;
	}

	.modal.info {
		/* Grid placement */
		grid-area: info;
		margin: 1.2em 0;
		/* Flex settings */
		display: flex;
		justify-content: space-evenly;
		gap: 0.6em;
	}

	.infobox {
		/* Flex settings */
		display: flex;
		flex-direction: column;
		align-items: center;

		/* Text settings */
		font-size: 0.8em;

		/* Box settings */
		background-color: var(--color-base-secondary);
		padding: 0.4em;
		border-radius: 1em;
		width: 100%;
	}

	.modal.media {
		display: grid;
		grid-template-areas:
			'image video'
			'symbols video';
	}

	.media .image {
		grid-area: image;
	}

	.media .symbols {
		grid-area: symbols;
	}

	.media .video {
		grid-area: video;
	}
</style>
