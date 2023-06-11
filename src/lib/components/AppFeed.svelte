<script>
  import { bots } from '$lib/bots.js'
  import FeedCard from '$lib/components/FeedCard.svelte';
</script>

<div class="feed">
  {#each $bots as bot}
    {#each bot.posts as post}
      <FeedCard 
        botPortrait={bot.portrait}
        botName={bot.name}
        botLink={bot.profileSlug}
        postTitle={post.title}
        postImage={post.image}
        postDescription={post.description}
        postSlug={post.slug}
        postCategory={post.category}
      />
    {/each}
  {/each}
</div>

<style>
  .feed {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>