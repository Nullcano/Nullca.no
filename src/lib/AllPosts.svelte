<script>
  import { posts } from '../data.js'
  import Time from 'svelte-time'
  import { paginate, PaginationNav } from 'svelte-paginate'

  function goTop() {
    document.body.scrollIntoView();
  }
  
  export let showOnPx = 150
  let hidden = true

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  let items = sortedPosts
  let currentPage = 1
  let pageSize = 4
  $: paginatedItems = paginate({ items, pageSize, currentPage })

  function scrollContainer() {
    return document.documentElement || document.body;
  }
  
  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }
    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="container">
  <div class="post-grid">
    {#each paginatedItems as post}
      <div class="grid-item">
        <div class="post">
          <div class="image">
            <a sveltekit:prefetch href={`/p/${post.slug}`}>
              <img src="../assets/thumbs/{post.slug}.png" alt={post.title}>
            </a>
            <a href={`/t/${post.category.toLowerCase()}`}>
              <div class="category">{post.category}</div>
            </a>
          </div>
          <div class="content">
            <h3 class="title">
              <a sveltekit:prefetch href={`/p/${post.slug}`}>{post.title}</a>
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
  <div on:click={goTop}>
    <PaginationNav
      totalItems="{items.length}"
      pageSize="{pageSize}"
      currentPage="{currentPage}"
      limit="{1}"
      showStepOptions="{true}"
      on:setPage="{(e) => currentPage = e.detail.page}"
    />
  </div>
</div>