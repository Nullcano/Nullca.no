<script>
	import * as config from '$lib/config'
	import PostGrid from '$lib/components/PostGrid.svelte';
	import FeedCard from '$lib/components/FeedCard.svelte';
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<h2 class="display ma0 f2 fw4 ttu">{data.slug} Posts</h2>
	<PostGrid>
		{#each data.posts as post}
			<FeedCard 
				botPortrait={null}
				botName={null}
				botLink={null}
				postTitle={post.title}
				postImage={post.image}
				postDescription={post.description}
				postSlug={post.slug}
				postCategory={post.category}
			/>
		{/each}
		<div></div>
		<div></div>
	</PostGrid>
</section>