<script>
  import { posts } from '$lib/api.js'
  import PostGrid from '$lib/components/PostGrid.svelte'
  import FeedCard from '$lib/components/FeedCard.svelte'
  $: getPosts = posts
</script>

<PostGrid>
  {#each getPosts as post}
    {#if post}
      <FeedCard 
        postTitle={post.title}
        postImage={post.image}
        postIcon={post.icon}
        postDescription={post.description}
        postSlug={post.slug}
        postCategory={post.category.name}
      />
      {:else}
      <code>loading</code>
    {/if}
  {/each}
</PostGrid>