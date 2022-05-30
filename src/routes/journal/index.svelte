<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import SubTitle from '$lib/SubTitle.svelte';
	import FeedAll from '$lib/Journal/FeedAll.svelte';
</script>

<svelte:head>
	<title>Journal - Steffen Wold</title>
	<meta property="og:title" content="Journal - Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/journal" />
	<meta property="og:description" content="About Steffen Wold. Norwegian frontend developer." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="contained">
	<PageTitle title="Academy Journal" />
	<SubTitle subtitle="My journey through IKOMM Academy 2022" />
	<FeedAll />
</div>
