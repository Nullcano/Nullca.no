<script>
  import website from '$lib/config/website.js';
  import OpenGraph from './OpenGraph.svelte';
  import SchemaOrg from './SchemaOrg.svelte';
  import Twitter from './Twitter.svelte';
  const {
    author,
    entity,
    facebookAuthorPage,
    facebookPage,
    ogLanguage,
    siteLanguage,
    siteShortTitle,
    siteTitle,
    siteUrl,
    githubPage,
    twitterUsername,
  } = website;
  export let article = false;
  export let breadcrumbs = [];
  export let entityMeta = null;
  export let lastUpdated;
  export let datePublished;
  export let metadescription;
  export let slug;
  export let timeToRead = 0;
  export let title;
  const defaultAlt = 'Nullcano';
  export let featuredImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay',
    alt: defaultAlt,
    width: 672,
    height: 448,
    caption: 'Home page',
  };
  export let ogImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay',
    alt: defaultAlt,
  };
  export let ogSquareImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay',
    alt: defaultAlt,
  };
  export let twitterImage = {
    url: 'https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay',
    alt: defaultAlt,
  };
  const url = `${siteUrl}/${slug}`;
  const pageTitle = `${siteTitle} - ${title}`;
  const openGraphProps = {
    article,
    datePublished,
    lastUpdated,
    image: ogImage,
    squareImage: ogSquareImage,
    metadescription,
    ogLanguage,
    pageTitle,
    siteTitle,
    url,
    ...(article ? { datePublished, lastUpdated } : {}),
  };
  const schemaOrgProps = {
    article,
    author,
    breadcrumbs,
    datePublished,
    entity,
    lastUpdated,
    entityMeta,
    featuredImage,
    metadescription,
    siteLanguage,
    siteTitle,
    siteTitleAlt: siteShortTitle,
    siteUrl,
    title: pageTitle,
    url,
    facebookPage,
    githubPage,
    twitterUsername,
    featuredImage,
  };
  const twitterProps = {
    article,
    author,
    twitterUsername,
    image: twitterImage,
    timeToRead,
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metadescription} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <html lang={siteLanguage} />
</svelte:head>

<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />