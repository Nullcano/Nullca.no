<script>
  import * as config from '$lib/config';
  import PostGrid from '$lib/components/PostGrid.svelte'
  import FeedCard from '$lib/components/FeedCard.svelte'

  export let data;
  let posts = data.posts;

  let searchInput = "";
  let searchResults = [];

  function handleSearch() {
    if (searchInput.length >= 3) {
      searchResults = posts.filter(post =>
        post.title && post.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase())) ||
        post.description && post.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        post.content && post.content.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      searchResults = [];
    }
  }
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>


<!-- svelte-ignore a11y-autofocus -->
<input type="text" placeholder="Search Projects..." bind:value={searchInput} on:input={handleSearch} autofocus />

<PostGrid>
  {#if searchResults.length > 0}
    {#each searchResults as post}
      <FeedCard 
        botPortrait={null}
        botName={null}
        botLink={null}
        postTitle={post.title}
        postImage={post.image}
        postIcon={post.icon}
        postDescription={post.description}
        postSlug={post.slug}
        postCategory={post.category}
      />
    {/each}
    <div></div>
    <div></div>
    {:else}
    <p>No results found</p>
  {/if}
</PostGrid>

<style>
	input {
    width: 100%;
    margin-bottom: 3rem;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
		font-size: 1.5rem;
		text-transform: capitalize;
    color: inherit;
    border: 0;
    background: transparent;
	}
  input:focus {
    outline: 0;
  }
</style>
