<script>
  import * as config from '$lib/config'
	import { client } from '$lib/client'
	import TitleIconText from '$lib/components/titles/TitleIconText.svelte'
	import Divider from '$lib/components/Divider.svelte'
	import Avatar from '$lib/components/media/Avatar.svelte'

  export let data
	let post = data.post

	function handleAchievement() {
		if ($client.achievements[0].unlocked) {
			return
		}
		$client.achievements[0].unlocked = true
		$client.coin += $client.achievements[0].reward
		$client.currentXP += $client.achievements[0].xp
	}
</script>

<svelte:head>
  <title>{post?.title} - {config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{post?.title} - {config.title}" />
</svelte:head>

<article class="br4 ba b--dark-gray overflow-hidden">
	{#if post}
		<div class="page-cover w-100 h5 cover bb b--dark-gray" style="background: url('/images/{post.image}') center"></div>
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
						<a class="ml4 pv2 ph3 br2 ba b--purple" href="/launch/{post.slug}" on:click={handleAchievement}>Launch App</a>
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