<script>
	import { data } from '$lib/data';
	import ItemsGridMini from '$lib/ItemsGridMini.svelte';
	import PostCardMini from '$lib/PostCardMini.svelte';
	let entries = data.filter((entry) => entry.type === 'journal').sort((a, b) => b.date - a.date);
</script>

<ItemsGridMini>
	{#each entries as item}
		<PostCardMini {item} />
	{/each}
</ItemsGridMini>