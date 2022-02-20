<script>
  import { posts } from '../data.js'

  const stripHTML = (str) => {
    if ((str===null) || (str===''))
        return false;
    else
      str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '')
  }

  let searchTerm = ''

  $: searchedPosts = posts.filter((post) => {
    return stripHTML(post.content).toLowerCase().includes(searchTerm.toLowerCase()) || post.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
</script>

<input type="text" placeholder="Search all posts..." bind:value={searchTerm} />

{#if searchTerm !== ''}
  <ul class="search-results">
    <span>Results for "{searchTerm}"</span>
    {#each searchedPosts as post}
      <a href="/{post.category.toLowerCase()}/{post.slug}" on:click={() => { searchTerm = '' }}>
        <li>
          <img class="icon" src="../assets/thumbs/{post.slug}.png" alt={post.title} />
          <div>
            <h2>{post.title}</h2>
            {@html post.content}
          </div>
        </li>
      </a>
    {/each}
  </ul>
{/if}

<style>
  input {
    width: calc(100% - 1rem);
    border: none;
    border-radius: 9px;
    background: hsla(0, 0%, 12%, 0);
    color: hsl(0, 0%, 95%);
    font-size: 1.5rem;
    padding: .5rem 1rem;
    outline: none;
    opacity: .5;
    transition: all .3s ease-in-out;
  }
  input:focus {
    opacity: 1;
  }
  .search-results {
    position: absolute;
    top: 3.5rem;
    left: 0;
    padding: 1rem;
    width: 100%;
    height: calc(100vh - 3.5rem);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: hsla(0, 0%, 4%, .9);
    color: hsl(0, 0%, 95%);
    transition: all .3s ease-in-out;
    overflow-y: auto;
    z-index: 9;
  }
  .search-results li {
    margin: 1rem;
    padding: 1rem 2rem;
    background:hsl(0, 0%, 10%);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .search-results .icon {
    width: 5rem;
    margin-right: 1rem;
    border-radius: .5rem;
  }
</style>