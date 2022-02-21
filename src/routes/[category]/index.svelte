<script context="module">
  import { posts, categories } from '../../data.js'
  export async function load({ params }) {
    const { category } = params
    return {
      props: {
        posts: posts.filter(post => post.category === category),
        title: category.charAt(0).toUpperCase() + category.slice(1),
        description: categories.filter(cat => cat.slug === category)[0].description
      }
    }
  }
</script>

<script>  
  import { paginate, PaginationNav } from 'svelte-paginate'
  import PageTitle from '$lib/PageTitle.svelte'
  import PostGrid from '$lib/PostGrid.svelte'
  import PostCard from '$lib/PostCard.svelte'

  let sortedPosts = posts.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
  let items = sortedPosts
  let currentPage = 1
  let pageSize = 12

  $: paginatedItems = paginate({ items, pageSize, currentPage })

  export let title, description
</script>

<svelte:head>
  <title>{title} - Nullcano</title>
  <meta property="og:title" content="{title} - Nullcano">
  <meta property="og:site_name" content="Nullcano">
  <meta property="og:url" content="https://nullca.no/{title.toLowerCase()}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://nullca.no/assets/topic/{title.toLowerCase()}.png">
</svelte:head>

<PageTitle title={title} description={description} />

<h2>All {title} articles</h2>

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

<style>
  .description {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
</style>