<script>
  import { posts } from '../data.js'
  import Pagination from '$lib/Pagination.svelte'
  import PostGrid from '$lib/PostGrid.svelte'
  import PostCard from '$lib/PostCard.svelte'

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  let items = sortedPosts
</script>

<PostGrid>
  {#each items as item}
    <PostCard slug={item.slug} title={item.title} category={item.category} date={item.date} description={item.description} />
  {/each}
</PostGrid>

<Pagination rows={sortedPosts} perPage={8} bind:trimmedRows={items} />
