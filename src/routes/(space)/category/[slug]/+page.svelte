<script>
	import * as config from '$lib/config'
	import PostGrid from '$lib/components/PostGrid.svelte'
	import FeedCard from '$lib/components/FeedCard.svelte'
	import Avatar from '$lib/components/media/Avatar.svelte'

	export let data

	$: posts = data.posts
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="br4 overflow-hidden ba b--dark-gray">
	<div class="page-cover w-100 h5 br4 br--top cover bb b--dark-gray" style="background: url('/images/covers/{data.slug.toLowerCase()}.png') center"></div>
	<div class="pa4  br--bottom">
		<div class="relative" style="margin-top:-6rem">
			<Avatar image="/images/{data.slug.toLowerCase()}.png" size="l" variant="circle" link={null} text={data.slug} />
		</div>
		<h1 class="display fw4">{data.name}</h1>
		<p class="measure white-50 lh-copy">{data.desc}</p>
		<PostGrid>
			{#if posts.length != 0}
				{#each posts as post}
					<FeedCard 
						postTitle={post.title}
						postIcon={post.icon}
						postImage={post.image}
						postDescription={post.description}
						postSlug={post.slug}
						postCategory={post.category.name}
					/>
				{/each}
				{:else}
				<p>No articles found.</p>
			{/if}
			<div></div>
			<div></div>
		</PostGrid>
	</div>
</section>