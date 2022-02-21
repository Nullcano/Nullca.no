<script>
  import { posts } from '../data.js'
  import About from '$lib/About.svelte'
  import Time from 'svelte-time'

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
</script>

<svelte:head>
  <title>Frontpage - Nullcano</title>
  <meta property="og:title" content="Frontpage - Nullcano">
  <meta property="og:site_name" content="Nullcano">
  <meta property="og:url" content="https://nullca.no">
  <meta property="og:description" content="Nullcano is a personally curated, but comprehensive archive of media and information about video games, and the industry surrounding it, while preserving its history.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="">
</svelte:head>

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