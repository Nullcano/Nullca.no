<script>
	import { goto } from '$app/navigation';
	import ContextBar from '$lib/ContextBar.svelte';
</script>

<svelte:head>
	<title>Explore \ Steffen Wold</title>
	<meta property="og:title" content="Explore \ Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id" />
	<meta property="og:description" content="Steffen Wold's personal website." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<ContextBar showClose={false}>
	<div class="filler"></div>
</ContextBar>

<section>
	<div class="article-page">
		<div class="inner">
      <div class="title flex column content-end gap-2">
				<svg viewBox="0 0 44 32">
					<polygon points="2,2 42,2 22,30" />
					SVG:404
				</svg>
        <div class="heading featured">Explore</div>
      </div>
			<div class="routes mv3 grid col-2 gap-3">
				<a class="pa3" href="/projects">
					<svg viewBox="0 0 32 44">
						<polygon points="2,2 2,44 30,22" />
						SVG:404
					</svg>
					<div class="text featured">
						Projects
					</div>
				</a>
				<a class="pa3" href="/journal">
					<svg viewBox="0 0 32 44">
						<polygon points="2,2 2,44 30,22" />
						SVG:404
					</svg>
					<div class="text featured">
						Articles
					</div>
				</a>
			</div>
			<div class="routes mv3 grid col-2 gap-3">
				<a class="pa3" href="/projects">
					<svg viewBox="0 0 32 44">
						<polygon points="2,2 2,44 30,22" />
						SVG:404
					</svg>
					<div class="text featured">
						Resources
					</div>
				</a>
				<a class="pa3" href="/journal">
					<svg viewBox="0 0 32 44">
						<polygon points="2,2 2,44 30,22" />
						SVG:404
					</svg>
					<div class="text featured">
						Academy Journal
					</div>
				</a>
			</div>
    </div>
  </div>
  <div class="filler">
    <div class="cta">
      <div class="button pointer" on:click={() => goto("/")}>
        <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="m9.207 8.5 6.646 6.646-.707.707L8.5 9.207l-6.646 6.646-.707-.707L7.793 8.5 1.146 1.854l.707-.707L8.5 7.793l6.646-6.646.707.707L9.207 8.5z"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    height: 100vh;
		display: grid;
		grid-template-columns: 1fr 5rem;
	}
  .title {
		margin-top: 10rem;
	}
	.title svg {
		margin-bottom: 1rem;
		width: 1.5vw;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.heading {
		display: flex;
		flex-direction: column;
		font-size: 8rem;
		line-height: .8;
	}
	.routes a {
		padding-top: 15rem;
		border: 1px solid #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.routes svg {
		width: 1.5vw;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.text {
		font-size: 3rem;
		display: flex;
		align-items: flex-end;
	}
</style>