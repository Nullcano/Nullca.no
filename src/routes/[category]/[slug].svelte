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
      redirect: `/${category}`
    }
  }
</script>

<script>
  export let post
</script>

<div class="post">
  <h2>{post.title}</h2>
  <div class="body">
    {@html post.content}
  </div>
  <div class="buttons">
    <a href="/{post.category.toLowerCase()}">More {post.category} articles</a>
    <a href="/all">All articles</a>
  </div>
</div>

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