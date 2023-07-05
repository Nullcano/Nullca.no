<script>
  import { bots } from '$lib/bots.js'
  import PostGrid from '$lib/components/PostGrid.svelte'
  import FeedCard from '$lib/components/FeedCard.svelte'
</script>

<PostGrid>
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
</PostGrid>