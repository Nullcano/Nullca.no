<script>
  export let article = false;
  export let author;
  export let breadcrumbs;
  export let datePublished;
  export let entity;
  export let lastUpdated;
  export let featuredImage;
  export let metadescription;
  export let siteLanguage;
  export let siteTitle;
  export let siteTitleAlt;
  export let siteUrl;
  export let title;
  export let url;
  export let githubPage;
  export let twitterUsername;
  export let entityMeta = null;
  const schemaOrgEntity =
    entityMeta !== null
      ? {
          '@type': ['Person', 'Organization'],
          '@id': `${siteUrl}/#/schema/person/`,
          name: author,
          image: {
            '@type': 'ImageObject',
            '@id': `${siteUrl}/#personlogo`,
            inLanguage: siteLanguage,
            url: entityMeta.url,
            width: entityMeta.faviconWidth,
            height: entityMeta.faviconHeight,
            caption: author,
          },
          logo: {
            '@id': `${siteUrl}/#personlogo`,
          },
          sameAs: [
            `https://twitter.com/${twitterUsername}`,
            `https://github.com/${githubPage}`,
          ],
        }
      : null;
  const schemaOrgWebsite = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteTitle,
    description: siteTitleAlt,
    publisher: {
      '@id': `${siteUrl}/#/schema/person/`,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: `${siteUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    ],
    inLanguage: siteLanguage,
  };
  const schemaOrgImageObject = {
    '@type': 'ImageObject',
    '@id': `${url}#primaryimage`,
    inLanguage: siteLanguage,
    url: featuredImage.url,
    contentUrl: featuredImage.url,
    width: featuredImage.width,
    height: featuredImage.height,
    caption: featuredImage.caption,
  };
  const schemaOrgBreadcrumbList = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: breadcrumbs.map((element, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        '@id': `${siteUrl}/${element.slug}`,
        url: `${siteUrl}/${element.slug}`,
        name: element.name,
      },
    })),
  };
  const schemaOrgWebPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    primaryImageOfPage: {
      '@id': `${url}#primaryimage`,
    },
    datePublished,
    dateModified: lastUpdated,
    author: {
      '@id': `${siteUrl}/#/schema/person/`,
    },
    description: metadescription,
    breadcrumb: {
      '@id': `${url}#breadcrumb`,
    },
    inLanguage: siteLanguage,
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [url],
      },
    ],
  };
  let schemaOrgArticle = null;
  if (article) {
    schemaOrgArticle = {
      '@type': 'Article',
      '@id': `${url}#article`,
      isPartOf: {
        '@id': `${url}#webpage`,
      },
      author: {
        '@id': `${siteUrl}/#/schema/person/`,
      },
      headline: title,
      datePublished,
      dateModified: lastUpdated,
      mainEntityOfPage: {
        '@id': `${url}#webpage`,
      },
      publisher: {
        '@id': `${siteUrl}/#/schema/person/`,
      },
      image: {
        '@id': `${url}#primaryimage`,
      },
      articleSection: ['blog'],
      inLanguage: siteLanguage,
    };
  }
  const schemaOrgPublisher = {
    '@type': ['Person', 'Organization'],
    '@id': `${siteUrl}/#/schema/person/`,
    name: entity,
    image: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#personlogo`,
      inLanguage: siteLanguage,
      url: `${siteUrl}/assets/rodneylab-logo.png`,
      contentUrl: `${siteUrl}/assets/rodneylab-logo.png`,
      width: 512,
      height: 512,
      caption: entity,
    },
    logo: {
      '@id': `${siteUrl}/#personlogo`,
    },
    sameAs: [
      `https://twitter.com/${twitterUsername}`,
      `https://github.com/${githubPage}`,
    ],
  };
  const schemaOrgArray = [
    schemaOrgEntity,
    schemaOrgWebsite,
    schemaOrgImageObject,
    schemaOrgWebPage,
    schemaOrgBreadcrumbList,
    ...(article ? [schemaOrgArticle] : []),
    schemaOrgPublisher,
  ];
  const schemaOrgObject = {
    '@context': 'https://schema.org',
    '@graph': schemaOrgArray,
  };
  let jsonLdString = JSON.stringify(schemaOrgObject);
  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
  {@html jsonLdScript}
</svelte:head>