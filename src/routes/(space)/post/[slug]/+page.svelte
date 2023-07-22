<script>
  import * as config from '$lib/config'
	import CloseButton from '$lib/components/site/CloseButton.svelte'
	import Avatar from '$lib/components/media/Avatar.svelte'

  export let data
	let post = data.post
</script>

<svelte:head>
  <title>{post?.title} - {config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{post?.title} - {config.title}" />
</svelte:head>

<article class="relative br4 ba b--dark-gray overflow-hidden">
	{#if post}
		<div class="page-cover w-100 h5 cover bb b--dark-gray" style="background: url('/images/{post.image}') center"></div>
		<a href="/" class="absolute top-0 right-0 ma3">
			<CloseButton />
		</a>
		<div class="pa4">
			<div class="relative" style="margin-top:-6rem">
				<Avatar image="/images/{post.image}" size="l" variant="circle" link={null} text={post.title} />
			</div>
			<div class="flex justify-between">
				<h1 class="display fw4">{post.title}</h1>
				<div class="flex items-center gap-2">
					{#each post.tags as tag}
						<a class="pv1 ph2 br-pill ba b--dark-gray ttc" href="/tags/{tag}">{tag}</a>
					{/each}
					{#if post.launchable}
						{#if post.hasUrl != null}
							<a class="ml4 pv2 ph3 br2 ba b--purple" href={post.hasUrl} target="_blank">Launch App</a>
						{:else}
							<a class="ml4 pv2 ph3 br2 ba b--purple" href="/launch/{post.slug}">Launch App</a>
						{/if}
					{/if}
				</div>
			</div>
			<div class="measure lh-copy">
				{@html post.content}
			</div>
		</div>
		{:else}
		<p>Loading...</p>
	{/if}
</article>