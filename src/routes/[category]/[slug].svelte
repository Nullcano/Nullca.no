<script context="module">
    export async function load({ fetch, params }) {
    const {category, slug} = params
    const res = await fetch(`/${category}/${slug}.json`)
    const { post } = await res.json()
    if (res.ok) {
      return {
        props: {
          post
        }
      }
    }
    return {
      status: 301,
      body: { message: 'This page is not currently archived.' }
    }
  }
</script>

<script>
  import PageTitle from '$lib/PageTitle.svelte'

  function stripHTML(str) {
    if ((str===null) || (str===''))
      return false;
    else
      str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '').replace(/\n/g, '');
  }

  export let post
</script>

<svelte:head>
  <title>{post.title} - Nullcano</title>
  <meta property="og:title" content="{post.title} - Nullcano">
  <meta property="og:site_name" content="Nullcano">
  <meta property="og:url" content="https://nullca.no/{post.category.toLowerCase()}/{post.slug}">
  <meta property="og:description" content="{stripHTML(post.content)}">
  <meta property="og:type" content="article">
  <meta property="og:image" content="https://nullca.no/assets/thumb/{post.slug}.png">
</svelte:head>

<article class="post">
  <PageTitle title={post.title} description={post.description} />
  <div class="body">
    {@html post.content}
  </div>
  <div class="buttons">
    <a href="/{post.category.toLowerCase()}">More {post.category} articles</a>
    <a href="/all">All articles</a>
  </div>
</article>

<style>
  .body {
    margin: 2rem;
    font-size: 1.2em;
    line-height: 1.5em;
  }
  .buttons {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>