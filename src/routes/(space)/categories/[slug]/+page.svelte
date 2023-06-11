<script>
	import * as config from '$lib/config'
	import ProjectGrid from '$lib/components/ProjectGrid.svelte'
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import TitleIconText from '$lib/components/titles/TitleIconText.svelte'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<TitleIconText text="{data.slug.charAt(0).toUpperCase() + data.slug.slice(1)}" icon="/images/{data.slug.toLowerCase()}.png" />
	<ProjectGrid>
		{#if data.posts && data.posts.length > 0}
			{#each data.posts as post}
				<a href="/projects/{post.slug}">
					<ProjectCard icon={post.icon} title={post.title} image={post.image} body={post.description} />
				</a>
			{/each}
		{:else}
			<p>No articles found.</p>
		{/if}
		<div></div>
		<div></div>
	</ProjectGrid>
</section>

<style>
	a {
		display: block;
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		color: var(--light-100);
	}
</style>
