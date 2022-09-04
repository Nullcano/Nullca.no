<script>
	import About from '$lib/About.svelte';
	import ProjectsRecent from '$lib/Projects/FeedRecent.svelte';
	import JournalRecent from '$lib/Journal/FeedRecent.svelte';
	import BlogRecent from '$lib/Blog/FeedRecent.svelte';
	import SubTitle from '$lib/SubTitle.svelte';
</script>

<svelte:head>
	<title>Steffen Wold</title>
	<meta property="og:title" content="Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id" />
	<meta property="og:description" content="Steffen Wold's personal website." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="landing">
	<About />
	<ProjectsRecent />
</div>

<style>
	.landing {
		width: 100%;
		height: 100vh;
		display: flex;
    flex-direction: column;
    justify-content: space-between;
		overflow: hidden;
	}
</style>
