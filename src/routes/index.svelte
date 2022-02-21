<script>
  import { posts } from '../data.js'
  import SEO from '$lib/SEO/index.svelte';
  import website from '$lib/config/website';
  import About from '$lib/About.svelte'
  import Time from 'svelte-time'

  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  const { author, siteUrl } = website

  let title = 'Home'

  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ]

  let metadescription = 'The purpose of this website is to provide a comprehensive and up to date archive of media and information about the video game industry while also preserve its history.';
  const featuredImageAlt = 'The purpose of this website is to provide a comprehensive and up to date archive of media and information about the video game industry while also preserve its history.';
  const featuredImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=512&overlay',
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: 'Home page',
  };
  const ogImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=512&overlay',
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=512&overlay',
    alt: featuredImageAlt,
  };
  const twitterImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=512&overlay',
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
    slug: '',
    entityMeta,
    datePublished: '2022-01-03T14:19:33.000+0100',
    lastUpdated: '2022-01-03T14:19:33.000+0100',
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage,
  };
</script>

<SEO {...seoProps} />

<About />

<h3>Recent articles</h3>

<div class="container">
  <div class="post-grid">
    {#each sortedPosts as post}
      <div class="grid-item">
        <div class="post">
          <div class="image">
            <a sveltekit:prefetch href={`/${post.category.toLowerCase()}/${post.slug}`}>
              <img src="../assets/thumbs/{post.slug}.png" alt={post.title}>
            </a>
            <a href={`/${post.category.toLowerCase()}`}>
              <div class="category">{post.category}</div>
            </a>
          </div>
          <div class="content">
            <h3 class="title">
              <a sveltekit:prefetch href={`/${post.category.toLowerCase()}/${post.slug}`}>{post.title}</a>
            </h3>
            <div class="excerpt">{@html post.content}</div>
            <div class="meta">
              <span>Posted <Time relative timestamp={post.date} /></span>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>  
</div>