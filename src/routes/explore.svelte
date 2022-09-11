<script>
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/PageTitle.svelte';
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

<div class="page">
	<PageTitle title="Explore" />
	<div class="routes">
		<a href="/concepts">
			<svg viewBox="0 0 44 32">
				<polygon points="2,2 42,2 22,30" />
				SVG:404
			</svg>
			<div class="text featured">
				<span>Concepts</span>
			</div>
		</a>
		<a href="/projects">
			<svg viewBox="0 0 44 32">
				<polygon points="2,2 42,2 22,30" />
				SVG:404
			</svg>
			<div class="text featured">
				<span>Projects</span>
			</div>
		</a>
		<a href="/articles">
			<svg viewBox="0 0 44 32">
				<polygon points="2,2 42,2 22,30" />
				SVG:404
			</svg>
			<div class="text featured">
				<span>Articles</span>
			</div>
		</a>
		<a href="/resources">
			<svg viewBox="0 0 44 32">
				<polygon points="2,2 42,2 22,30" />
				SVG:404
			</svg>
			<div class="text featured">
				<span>Resources</span>
			</div>
		</a>
		<a href="/journal">
			<svg viewBox="0 0 44 32">
				<polygon points="2,2 42,2 22,30" />
				SVG:404
			</svg>
			<div class="text featured">
				<span>Academy Journal</span>
			</div>
		</a>
	</div>
	<div class="h1"></div>
</div>

<div class="button cta" on:click={() => goto("/")}>
	<svg class="flip-x" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
	</svg>
</div>

<style>
	.routes {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
	}
	.routes a {
		position: relative;
		padding: 2rem;
		height: 30rem;
		border: 1px solid rgba(255,255,255,.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}
	.routes a:after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 20rem;
		background: hsla(240, 13%, 50%, .1);
		transform: skewY(0) translateY(20rem);
		transition: all .3s linear;
	}
	.routes a:hover {
		color: inherit;
	}
	.routes a:hover::after {
		transform: skewY(15deg) translateY(2.5rem);
	}
	.routes svg {
		width: 1rem;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
		transition: transform .3s linear;
	}
	.routes a:hover svg {
		transform: rotate(-90deg);
	}
	.text {
		position: relative;
		font-size: 1.5rem;
	}
	.text span {
		position: absolute;
		display: block;
		width: 25rem;
		transform: rotate(-90deg) translate(0, 0);
		transform-origin: top left;
	}
	@media screen and (max-width: 60em) {
		.routes {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	@media screen and (max-width: 30em) {
		.routes {
			grid-template-columns: repeat(3, 1fr);
		}
		.routes a {
			padding: 1rem;
			gap: 1rem;
		}
		.routes a:hover::after {
			transform: skewY(10deg) translateY(2rem);
		}
	}
</style>