<script>
  import { posts } from '../data.js'
  import About from '$lib/About.svelte'
  import Time from 'svelte-time'

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
</script>

<About />

<h3>Recent articles</h3>

<div class="container">
  <div class="post-grid">
    {#each sortedPosts as post}
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
</div>