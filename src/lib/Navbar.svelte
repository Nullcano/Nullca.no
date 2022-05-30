<script>
	import { page } from '$app/stores';

	let isActive = false;

	function toggleNav() {
		isActive = !isActive;
	}

	let items = [
		{
			title: 'Index',
			path: '/'
		},
		{
			title: 'Projects',
			path: '/projects'
		},
		{
			title: 'Journal',
			path: '/journal'
		},
		{
			title: 'Blog',
			path: '/blog'
		}
	];
</script>

<nav class="navbar">
	{#each items as item}
		<a href={item.path} class:active={$page.url.pathname === item.path}>
			<span class="title">{item.title}</span>
		</a>
	{/each}
	<div tabindex="0" class="more-nav">
		<svg
			class="icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 290 290"
			style="enable-background:new 0 0 290 290"
			xml:space="preserve"
			><path
				d="M255 110c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35zM35 110c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35zM145 110c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35z"
			/>
		</svg>
		<div class="nav-items">
			<a href="https://github.com/Nullcano" target="_blank">GitHub</a>
		</div>
	</div>
</nav>

<style>
	nav {
		position: relative;
		display: flex;
		align-items: center;
		gap: 2rem;
		transition: all 0.25s linear;
	}
	a {
		position: relative;
		width: 100%;
		height: 100%;
	}
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--accent-color);
		transition: all 0.25s linear;
	}
	.active::after {
		width: 100%;
	}
	span {
		position: relative;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1rem;
		color: hsl(0, 0%, 100%);
	}
	.more-nav {
		display: grid;
		place-content: center;
	}
	.icon {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--accent-color);
		cursor: pointer;
	}
	.nav-items {
		position: absolute;
		width: 8rem;
		left: calc(50% - 4rem);
		top: 3rem;
		display: none;
		flex-direction: column;
		text-align: center;
		gap: 1rem;
		background: hsl(260, 8%, 4%);
	}
	.nav-items a {
		padding: 1rem;
	}
	.more-nav:focus-within > .nav-items {
		display: flex;
	}
	@media (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
