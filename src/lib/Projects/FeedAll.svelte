<script>
	import { data } from '../../data';
	import ItemsGrid from '$lib/ItemsGrid.svelte';
	import PostCard from '$lib/PostCard.svelte';
	let entries = data.filter((entry) => entry.type === 'projects').sort((a, b) => b.date - a.date);
</script>

<ItemsGrid>
	{#each entries as item}
		<PostCard {item} />
	{/each}
</ItemsGrid>
