<script>
  import { posts } from '../data.js'
  import PostGrid from '$lib/PostGrid.svelte'
  import PostCard from '$lib/PostCard.svelte'
  import { paginate, PaginationNav } from 'svelte-paginate'

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  let items = sortedPosts
  let currentPage = 1
  let pageSize = 12
  $: paginatedItems = paginate({ items, pageSize, currentPage })
</script>

<PostGrid>
  {#each paginatedItems as post}
    <PostCard slug={post.slug} title={post.title} category={post.category} date={post.date} description={post.description} />
  {/each}
</PostGrid>

<PaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>