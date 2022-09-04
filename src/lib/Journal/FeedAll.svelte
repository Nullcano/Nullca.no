<script>
	import { data } from '../../data';
	import ItemsColumn from '$lib/ItemsColumn.svelte';
	import PostListItem from '$lib/PostListItem.svelte';
	let entries = data.filter((entry) => entry.type === 'journal').sort((a, b) => b.date - a.date);
</script>

<ItemsColumn>
	{#each entries as item}
		<PostListItem {item} />
	{/each}
</ItemsColumn>
