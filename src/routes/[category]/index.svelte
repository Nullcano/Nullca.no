<script context="module">
  import { posts } from '../../data.js'
  export async function load({ params }) {
    const { category } = params
    return {
      props: {
        posts: posts.filter(post => post.category === category),
        title: category.charAt(0).toUpperCase() + category.slice(1)
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

  export let title
</script>

<div class="page-title">
  <h1 class="title">{title} articles</h1>
</div>

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
