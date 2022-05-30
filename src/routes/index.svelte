<script>
	import Splash from '$lib/Splash.svelte';
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

<section>
	<Splash />
</section>

<div class="contained">
	<section class="section">
		<SubTitle subtitle={'Experiments'} />
		<ProjectsRecent />
	</section>
	<section class="section">
		<SubTitle subtitle={'Academy Journal'} />
		<JournalRecent />
	</section>
	<section class="section">
		<SubTitle subtitle={'Recent Blog Articles'} />
		<BlogRecent />
	</section>
</div>

<style>
	.contained {
		position: relative;
		top: -5rem;
	}
	.section {
		margin: 1rem 0 2rem 0;
	}
</style>
