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
  import Time from 'svelte-time'
  import { paginate, PaginationNav } from 'svelte-paginate'

  let sortedPosts = posts.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
  let items = sortedPosts
  let currentPage = 1
  let pageSize = 9

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

<div class="page-title">
  <h1 class="title">{title}</h1>
  <p class="description">{description}</p>
</div>

<h2>All {title} articles</h2>

<div class="post-grid">
  {#each paginatedItems as post}
    <div class="grid-item">
      <div class="post">
        <div class="image">
          <a sveltekit:prefetch href={`/${post.category.toLowerCase()}/${post.slug}`}>
            <img src="../assets/thumbs/{post.slug}.png" alt={post.title}>
          </a>
          <a href={`/${post.category.toLowerCase()}`}>
            <div class="category">{post.category}</div>
          </a>
        </div>
        <div class="content">
          <h3 class="title">
            <a sveltekit:prefetch href={`/${post.category.toLowerCase()}/${post.slug}`}>{post.title}</a>
          </h3>
          <div class="excerpt">{@html post.content}</div>
          <div class="meta">
            <span>Posted <Time relative timestamp={post.date} /></span>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
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