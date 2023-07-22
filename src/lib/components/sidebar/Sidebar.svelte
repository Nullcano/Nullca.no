<script>
  import { posts } from '$lib/api'
  import Avatar from '$lib/components/media/Avatar.svelte'

  let categories = ['Notes', 'Apps', 'UI-UX', 'Graphics', 'Games', 'Bots']
</script>

<aside class="br b--dark-gray">
  <div class="flex flex-column">
    {#each categories as category}
    {@const totalPosts = posts.filter(post => post.category.name == category).length}
      <a class="ph3 hover-bg-white-10" href="/category/{category.toLowerCase()}">
        <div class="cat-item relative w-100 h3 grid grid-x-auto-fill items-center gap-3">
          <Avatar image="/images/{category.toLowerCase()}.png" size="s" variant={'circle'} link={null} text={category} />
          <div class="meta flex flex-column gap-1">
            <div>{category}</div>
            <div class="white-50">{totalPosts} articles</div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</aside>

<style>
  aside {
    position: sticky;
    top: 4rem;
		width: 4rem;
		height: calc(100vh - 4rem);
		overflow-x: hidden;
		overflow-y: auto;
    transition: width .2s linear;
	}
	aside:hover {
		width: 16rem;
	}
  .cat-item {
    min-width: max-content;
  }
</style>