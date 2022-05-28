<script>
	import { data } from '../../data';
	import ItemsGrid from '$lib/ItemsGrid.svelte';
	import PostCard from '$lib/PostCard.svelte';
	let entries = data.find((entry) => entry.type === 'blog');
	entries.sort((a, b) => b.date - a.date);
</script>

<ItemsGrid>
	{#each entries as item}
		<PostCard {item} />
	{/each}
</ItemsGrid>
