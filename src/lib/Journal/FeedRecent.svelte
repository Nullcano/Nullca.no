<script>
	import { data } from '$lib/data';
	import ItemsGrid from '$lib/ItemsGrid.svelte';
	import PostCard from '$lib/PostCard.svelte';
	let entries = data.filter((entry) => entry.type === 'journal').sort((a, b) => b.date - a.date).slice(0, 4);
</script>

<ItemsGrid>
	{#each entries as item}
		<PostCard {item} />
	{/each}
</ItemsGrid>
