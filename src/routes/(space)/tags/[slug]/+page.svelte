<script>
	import * as config from '$lib/config'
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<h2>Projects tagged "{data.slug}"</h2>
	<ProjectGrid>
		{#each data.posts as post}
			<a href="/projects/{post.slug}">
				<ProjectCard icon={post.icon} title={post.title} image={post.image} body={post.description} />
			</a>
		{/each}
		<div></div>
		<div></div>
	</ProjectGrid>
</section>

<style>
	h2 {
		margin: 0;
	}
	a {
		display: block;
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		color: var(--light-100);
	}
</style>
