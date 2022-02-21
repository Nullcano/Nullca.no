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
  <meta property="og:description" content="Nullcano is a personally curated, but comprehensive archive of media and information about video games, and the industry surrounding it, while preserving its history.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="">
</svelte:head>

<PageTitle title="Nullcano" description="Welcome to this personally curated video game archive that I am constantly growing. I sincerely hope you will find something useful. My goal is to index as much content and information about everything in the realm of video games and make them easily accessible with my global search filter." />

<PageSubtitle title="Recent posts" />

<AllPosts />