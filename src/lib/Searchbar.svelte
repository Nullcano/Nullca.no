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

<svelte:head>
  {#if searchTerm !== ''}
    <style>
      .wrapper {
        filter: blur(3px);
      }
    </style>
  {/if}
</svelte:head>

<input type="text" placeholder="Search all articles..." bind:value={searchTerm} />

{#if searchTerm !== ''}
  <ul class="search-results">
    <div class="label">
      <span>Results for "{searchTerm}"</span>
    </div>
    {#each searchedPosts as post}
      <a href="/{post.category.toLowerCase()}/{post.slug}" on:click={() => { searchTerm = '' }}>
        <li>
          <img class="icon" src="../assets/thumbs/{post.slug}.png" alt={post.title} />
          <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </li>
      </a>
    {/each}
  </ul>
{/if}

<style>
  input {
    width: 100%;
    border: none;
    background: var(--darken-dark);
    color: var(--lighten-light);
    font-size: 1.25rem;
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
    top: 3rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 3rem);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: hsla(200, 15%, 10%, .95);
    transition: all .3s ease-in-out;
    overflow-y: auto;
    z-index: 9;
  }
  .search-results .label {
    position: sticky;
    top: 0;
    width: 100%;
    background: var(--darken-dark);
    font-size: 1.25rem;
  }
  .search-results .label span {
    display: block;
    padding: .5rem 4rem;
  }
  .search-results li {
    margin: 1rem;
    padding: 1rem 2rem;
    background: var(--darken-dark);
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 1rem;
    transition: all .2s ease-in-out;
  }
  .search-results li:hover {
    background: var(--reset-dark);
  }
  .search-results .icon {
    width: 5rem;
    height: auto;
    margin-right: 1rem;
    border-radius: .5rem;
  }
  @media only screen and (max-width: 768px) {
    input {
      width: 100%;
      font-size: 1.25rem;
    }
    .search-results {
      top: 3rem;
      font-size: .8rem;
    }
    .search-results li {
      margin: 1rem 0;
      padding: 1rem;
    }
    .search-results .icon {
      width: 4rem;
      margin-right: .5rem;
    }
  }
</style>