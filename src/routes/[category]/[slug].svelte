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
  import SEO from '$lib/SEO/index.svelte'
  import website from '$lib/config/website.js'
  const { author, siteUrl } = website;
  let title = `${post.title} - Nullcano`
  const breadcrumbs = [
    {
      name: post.title,
      slug: post.slug,
    },
  ];
  function stripHTML(str) {
    if ((str===null) || (str===''))
      return false
    else
      str = str.toString()
    return str.replace( /(<([^>]+)>)/ig, '').replace(/\n/g, '')
  }
  let metadescription = stripHTML(post.content)
  const featuredImageAlt = post.title
  const featuredImage = {
    url: `../assets/thumbs/${post.slug}.png`,
    alt: stripHTML(post.content),
    width: 672,
    height: 448,
    caption: stripHTML(post.content),
  };
  const ogImage = {
    url: `../assets/thumbs/${post.slug}.png`,
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: `../assets/thumbs/${post.slug}.png`,
    alt: featuredImageAlt,
  };
  const twitterImage = {
    url: `../assets/thumbs/${post.slug}.png`,
    alt: featuredImageAlt,
  };
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  };
  const seoProps = {
    title,
    slug: post.slug,
    entityMeta,
    datePublished: '2022-01-03T14:19:33.000+0100',
    lastUpdated: '2022-01-03T14:19:33.000+0100',
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage,
  };
</script>

<SEO {...seoProps} />

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