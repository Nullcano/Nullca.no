<script>
  import { posts } from '../data.js'
  import About from '$lib/About.svelte'
  import Time from 'svelte-time'

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
</script>

<About />

<h3>Recent posts</h3>

<div class="container">
  <div class="post-grid">
    {#each sortedPosts as post}
      <div class="grid-item">
        <div class="post">
          <div class="image">
            <a sveltekit:prefetch href={`/p/${post.slug}`}>
              <img src={post.image} alt={post.title}>
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
              <span>Posted <Time relative timestamp={post.date} format="YYYY/MM" /></span>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>  
</div>