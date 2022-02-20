<script>
  import Time from 'svelte-time'
  import { posts } from '../../../data.js'
  let topicPosts = posts.filter(post => post.category === 'Minecraft')
  let sortedPosts = topicPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
</script>

<h1>Minecraft</h1>

<h3>Posts</h3>

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