<script>
	import * as config from '$lib/config'
	import PostGrid from '$lib/components/PostGrid.svelte'
	import FeedCard from '$lib/components/FeedCard.svelte'
	import TitleIconText from '$lib/components/titles/TitleIconText.svelte'

	export let data

	let bot = data.bot[0]
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<TitleIconText text="{data.slug.charAt(0).toUpperCase() + data.slug.slice(1)}" icon="/images/{data.slug.toLowerCase()}.png" />
	<PostGrid>
		{#if bot}
			{#each bot.posts as post}
				<FeedCard 
					botPortrait={bot.portrait}
					botName={bot.name}
					botLink={bot.profileSlug}
					postTitle={post.title}
					postImage={post.image}
					postDescription={post.description}
					postSlug={post.slug}
					postCategory={post.category}
				/>
			{/each}
		{:else}
			<p>No articles found.</p>
		{/if}
		<div></div>
		<div></div>
	</PostGrid>
</section>