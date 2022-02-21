<script context="module">
  import { posts, categories } from '../../data.js'
  import slugify from '$lib/utils'
  export async function load({ params }) {
    const { category } = params
    return {
      props: {
        categoryPosts: posts.filter(post => slugify(post.category) === category).sort((a, b) => { return new Date(b.date) - new Date(a.date) }),
        title: categories.filter(cat => cat.slug === category)[0].title,
        description: categories.filter(cat => cat.slug === category)[0].description,
        slug: categories.filter(cat => cat.slug === category)[0].slug
      }
    }
  }
</script>

<script>  
  import { paginate, PaginationNav } from 'svelte-paginate'
  import PageTitle from '$lib/PageTitle.svelte'
  import PageSubtitle from '$lib/PageSubtitle.svelte'
  import PostGrid from '$lib/PostGrid.svelte'
  import PostCard from '$lib/PostCard.svelte'

  export let categoryPosts, title, description, slug

  let items = categoryPosts
  let currentPage = 1
  let pageSize = 12

  $: paginatedItems = paginate({ items, pageSize, currentPage })
</script>

<svelte:head>
  <title>{title} - Nullcano</title>
  <meta property="og:title" content="{title} - Nullcano">
  <meta property="og:site_name" content="Nullcano">
  <meta property="og:url" content="https://nullca.no/{slug}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://nullca.no/assets/topic/{title}.png">
</svelte:head>

<PageTitle title={title} description={description} />

<PageSubtitle title="All {title} articles" />

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
