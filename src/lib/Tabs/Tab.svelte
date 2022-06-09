<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
	<slot />
</button>

<style>
	button {
		margin: 0;
		padding: 0.5rem 1rem;
		background: none;
		border: none;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.5);
		cursor: pointer;
	}

	.selected {
		color: var(--accent-color-hover);
		border-bottom: 2px solid var(--accent-color-hover);
	}
</style>
