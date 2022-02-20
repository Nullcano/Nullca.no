<script context="module">
  export async function load({ fetch, params }) {
    const slug = params.slug
    const res = await fetch(`/p/${slug}.json`)
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
      // error: new Error('Could not fetch that post')
      redirect: '/p'
    }
  }
</script>

<script>
  export let post
  let categorySlug = post.category.toLowerCase()
</script>

<div class="single-post">
  <h2 class="title">{post.title}</h2>
  <div class="body">
    {@html post.content}
  </div>
  <div class="buttons">
    <a href="/t/{categorySlug}">More {post.category} posts</a>
    <a href="/p">All posts</a>  
  </div>
</div>