<script>
  import PageTitle from '$lib/PageTitle.svelte'
  import PageSubtitle from '$lib/PageSubtitle.svelte'
  import AllPosts from '$lib/AllPosts.svelte'
</script>

<svelte:head>
  <title>Frontpage - Nullcano</title>
  <meta property="og:title" content="Frontpage - Nullcano">
  <meta property="og:site_name" content="Nullcano">
  <meta property="og:url" content="https://nullca.no">
  <meta property="og:description" content="Nullcano is a personally curated video game archive that is always growing. The goal is to index all types of media, files and articles about video games, the community surrounding it and make it easily accessible while also preserving its history.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="">
</svelte:head>

<PageTitle title="Nullcano" description="This is a personally curated video game archive that is always growing. The goal is to index all types of media, files and articles about video games, the community surrounding it and make it easily accessible while also preserving its history." />

<PageSubtitle title="Recent posts" />

<AllPosts />