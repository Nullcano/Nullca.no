<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<div class="tab-panel">
		<slot />
	</div>
{/if}

<style>
	.tab-panel {
		padding: 1rem;
	}
</style>
