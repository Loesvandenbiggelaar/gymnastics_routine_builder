<script lang="ts">
	import { apparatusConfig } from '$lib/data/elements/apparatusConfig';
	import { selectedApparatus, updateSelectedApparatus } from '$lib/stores/datastore';
</script>

<button class="btn variant-outline-primary">
	{$selectedApparatus.name}
</button>
