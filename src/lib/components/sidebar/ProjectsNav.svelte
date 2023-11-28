<script>
  import { posts } from '$lib/api'

  let categories = [
    {
      name: 'Notes',
      posts: posts.filter(p => p.category == 'Notes')
    }, {
      name: 'Apps',
      posts: posts.filter(p => p.category == 'Apps')
    }, {
      name: 'UI-UX',
      posts: posts.filter(p => p.category == 'UI-UX')
    }, {
      name: 'Graphics',
      posts: posts.filter(p => p.category == 'Graphics')
    }, {
      name: 'Games',
      posts: posts.filter(p => p.category == 'Games')
    }, {
      name: 'Bots',
      posts: posts.filter(p => p.category == 'Bots')
    }
  ]

  const showPosts = () => {
    postsAreVisible = !postsAreVisible
  }
</script>

<aside class="flex flex-column gap-2">
  <span class="ma0 ph2 pa3 white-50 bb bw1 b--near-black">All projects</span>
  <div class="overflow-y-auto">
    {#each categories as category}
      <a class="link white pv2 ph3 br3 hover-bg-white-10 flex items-center justify-between" href="/category/{category.name.toLowerCase()}" on:click={showPosts}>
        <div class="flex items-center gap-3">
          <div class="icon w1 h1 br-100 bg-white-10"></div>
          <div>{category.name}</div>
        </div>
        <div class="pv1 ph2 f6 bg-white-10 br2">{category.posts.length}</div>
      </a>
      {#each category.posts as post}
        <div class="white-50">{post.name}</div>
      {/each}
    {/each}
  </div>
</aside>

<style>
  aside {
    position: sticky;
    top: 4rem;
    width: 16rem;
		height: calc(100vh - 4rem);
		overflow-x: hidden;
		overflow-y: auto;
    transition: width .2s linear;
	}
</style>