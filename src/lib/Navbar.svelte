<script>
	import { page } from '$app/stores'

  let isActive = false

  function toggleNav () {
    isActive = !isActive
  }

	let items = [
		{
			title: 'Index',
			path: '/',
		}, {
			title: 'Projects',
			path: '/projects',
		}, {
			title: 'Journal',
			path: '/journal',
		}, {
			title: 'Blog',
			path: '/blog'
		}
	]
</script>

<nav class="navbar">
	{#each items as item}
		<a href={item.path} class:active={$page.url.pathname === item.path}>
			<span class="title">{item.title}</span>
		</a>
	{/each}
</nav>

<style>
	nav {
		position: relative;
		display: flex;
		align-items: center;
		gap: 2rem;
		transition: all .25s linear;
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
		transition: all .25s linear;
	}
	.active::after {
		width: 100%;
	}
	span {
		position: relative;
		padding: .5rem;
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 1rem;
		color: hsl(0, 0%, 100%);
	}
	@media (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
