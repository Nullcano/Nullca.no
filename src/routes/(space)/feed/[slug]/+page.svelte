<script>
  import * as config from '$lib/config'
	import { client } from '$lib/client'
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

{#if post}
  <article>
    <hgroup>
      {#if post.image}
        <div class="icon" style="background-image: url('/images/{post.icon}')"></div>
      {/if}
      <div class="title">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div class="tags">
          {#each post.tags as tag}
            <a class="tag" href="/tags/{tag}">{tag}</a>
          {/each}
        </div>
      </div>
			{#if post.launchable}
				<a class="launch" href="/launch/{post.slug}" on:click={handleAchievement}>Launch App</a>
			{/if}
    </hgroup>
    <div class="post">
      {@html post.content}
    </div>
  </article>
{:else}
  <p>Loading...</p>
{/if}

<style>
	article {
		position: relative;
	}
	hgroup {
		padding: 1.5rem;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1.5rem;
		align-items: center;
		background: var(--dark-200);
		border-radius: 1.5rem;
	}
	.icon {
		width: 10rem;
		height: 10rem;
		border-radius: 1.5rem;
		background-position: center;
		background-size: cover;
	}
	h1 {
		margin: 0;
		font-size: 2.5rem;
		text-transform: capitalize;
	}
	p {
		margin-block: .5rem 1rem;
	}
	.tags {
		display: flex;
		gap: 1rem;
	}
	.tag {
		display: block;
		padding: .25rem 1rem;
		border-radius: 60em;
		background: var(--dark-80);
		color: var(--light-80);
		text-decoration: none;
		text-transform: uppercase;
		font-size: 14px;
		transition: all .2s linear;
	}
	.tag:hover {
		background: var(--dark-60);
		color: var(--light-100);
	}
	.launch {
		padding: 1rem 2rem;
		font-size: 1.25rem;
		text-transform: uppercase;
		background: var(--light-20);
		border-radius: 1rem;
		color: var(--light-80);
		text-decoration: none;
		transition: all .2s linear;
	}
	.launch:hover {
		background: var(--dark-80);
	}
	.post {
		max-inline-size: 60ch;
		margin-inline: 1.5rem;
	}
</style>
