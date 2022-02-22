<script context="module">
  import { posts, categories } from '../../data.js'
  import slugify from '$lib/utils'
  export async function load({ params }) {
    const { category } = params
    return {
      props: {
        categoryPosts: posts.filter(post => slugify(post.category) === category).sort((a, b) => { return new Date(b.date) - new Date(a.date) }),
        title: categories.filter(cat => cat.slug === category)[0].title,
        description: categories.filter(cat => cat.slug === category)[0].description,
        slug: categories.filter(cat => cat.slug === category)[0].slug
      }
    }
  }
</script>

<script>  
  import Pagination from '$lib/Pagination.svelte'
  import PageTitle from '$lib/PageTitle.svelte'
  import PageSubtitle from '$lib/PageSubtitle.svelte'
  import PostGrid from '$lib/PostGrid.svelte'
  import PostCard from '$lib/PostCard.svelte'

  export let categoryPosts, title, description, slug

  let items  
</script>

<svelte:head>
  <title>{title} - Nullcano</title>
  <meta property="og:title" content="{title} - Nullcano">
  <meta property="og:site_name" content="Nullcano">
  <meta property="og:url" content="https://nullca.no/{slug}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://nullca.no/assets/topic/{title}.png">
</svelte:head>

<PageTitle title={title} description={description} />

<PageSubtitle title="All {title} articles" />

{#if items}
  <PostGrid>
    {#each items as item}
      <PostCard slug={item.slug} title={item.title} category={item.category} date={item.date} description={item.description} />
    {/each}
  </PostGrid>
{/if}

<Pagination rows={categoryPosts} perPage={8} bind:trimmedRows={items} />
