<script>
	export let src = 'beam';
	import { onMount } from 'svelte';
	let lib_path = '/src/lib/icons/';

	src = src.includes('.svg') ? src : src + '.svg';
	src = src.includes('/') ? src : lib_path + src;

	let svgContent;

	const fetchSVG = async () => {
		try {
			const response = await fetch(src);
			if (!response.ok) {
				throw new Error(`Failed to fetch SVG: ${response.statusText}`);
			}
			svgContent = await response.text();
		} catch (error) {
			console.error(error);
		}
	};

	onMount(fetchSVG);
</script>

<!-- Your SVG icon component -->
<div class="iconsvg">
	{@html svgContent}
</div>

<style>
	/* Optional styling for the SVG */
	.iconsvg {
		width: 1.5em;
		height: 1.5em;
		fill: red; /* This allows you to edit the colors using CSS */
	}
</style>
