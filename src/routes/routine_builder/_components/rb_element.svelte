<script>
	export let element = {};
</script>

<div class="wrapper">
	<p id="number">{element.number}</p>
	<h3 id="name">{element.description}</h3>
</div>

<style>
	.wrapper {
		display: flex;
		background-color: darkblue;
		padding: 0.2rem;
		border-radius: var(--bc_border-radius);
	}
</style>
