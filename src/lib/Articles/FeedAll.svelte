<script>
	import { data } from '$lib/data.js';
	import ItemsGrid from '$lib/ItemsGrid.svelte';
	import PostCard from '$lib/PostCard.svelte';
	let entries = data.filter((entry) => entry.type === 'articles').sort((a, b) => b.date - a.date);
</script>

<ItemsGrid>
	{#each entries as item}
		<PostCard {item} />
	{/each}
</ItemsGrid>
