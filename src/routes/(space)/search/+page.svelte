<script>
  import * as config from '$lib/config';
  import Stack from '$lib/components/Stack.svelte';
  import ProjectRow from '$lib/components/ProjectRow.svelte';

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

<section>
  <!-- svelte-ignore a11y-autofocus -->
  <input type="text" placeholder="Search Projects..." bind:value={searchInput} on:input={handleSearch} autofocus />
  <Stack gap="l">
    {#if searchResults.length > 0}
      {#each searchResults as post}
        <a href="/projects/{post.slug}">
          <ProjectRow icon={post.icon} title={post.title} image={post.image} body={post.description} />
        </a>
      {/each}
      {:else}
      <p>No results found</p>
    {/if}
  </Stack>
</section>

<style>
	a {
		color: var(--light-75);
		text-decoration: none;
	}
	a:hover {
		color: var(--light-100);
	}
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
