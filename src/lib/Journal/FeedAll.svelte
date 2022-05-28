<script>
	import { data } from '../../data';
	import ItemsColumn from '$lib/ItemsColumn.svelte';
	import PostCard from '$lib/PostCard.svelte';
	let entries = data.find((entry) => entry.type === 'journal').sort((a, b) => b.date - a.date);
</script>

<ItemsColumn>
	{#each entries as item}
		<PostCard {item} />
	{/each}
</ItemsColumn>
