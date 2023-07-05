<script>
  import * as config from '$lib/config'
	import { client } from '$lib/client'
	import TitleIconText from '$lib/components/titles/TitleIconText.svelte'
	import Divider from '$lib/components/Divider.svelte'

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

<article>
	{#if post}
		<div class="mb4 flex items-end justify-between">
			<TitleIconText text={post.title} icon="/images/{post.icon}" />
			<div class="flex items-center gap-2">
				{#each post.tags as tag}
					<a class="pv1 ph2 br-pill ba b--white-10 ttc" href="/tags/{tag}">{tag}</a>
				{/each}
				{#if post.launchable}
					<a class="ml4 pv2 ph3 br2 ba b--purple" href="/launch/{post.slug}" on:click={handleAchievement}>Launch App</a>
				{/if}
			</div>
		</div>
		<Divider />
    <div class="post measure lh-copy">
      {@html post.content}
    </div>
	{:else}
		<p>Loading...</p>
	{/if}
</article>

<style>
	article {
		position: relative;
	}
	p {
		margin-block: .5rem 1rem;
	}
</style>
