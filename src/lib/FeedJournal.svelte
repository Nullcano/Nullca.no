<script>
  import { journal } from '../data'
  import FeedColumns from '$lib/FeedColumns.svelte'
  import PostCard from '$lib/PostCard.svelte'
  let feed = journal.sort((a, b) => b.date - a.date)
</script>

<FeedColumns>
  {#each feed as item}
    <PostCard item={item} />
  {/each}
</FeedColumns>