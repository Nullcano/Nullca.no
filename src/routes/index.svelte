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
		<div class="title">
			<SubTitle subtitle={'Experiments'} />
			<a href="/projects">
				<div class="link"><span>View all </span>&rArr;</div>
			</a>
		</div>
		<ProjectsRecent />
	</section>
	<section class="section">
		<div class="title">
			<SubTitle subtitle={'Academy Journal'} />
			<a href="/journal">
				<div class="link"><span>View all </span>&rArr;</div>
			</a>
		</div>
		<JournalRecent />
	</section>
	<section class="section">
		<div class="title">
			<SubTitle subtitle={'Recent Blog Articles'} />
			<a href="/blog">
				<div class="link"><span>View all </span>&rArr;</div>
			</a>
		</div>
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
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.link {
		padding: .5rem 1rem;
		font-size: 1.25rem;
		text-transform: uppercase;
	}
	@media (max-width: 768px) {
		.link span {
			display: none;
		}
	}
</style>
