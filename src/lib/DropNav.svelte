<script>
	import { page } from '$app/stores'
  import CTA from './CTA.svelte'
  let isActive = true

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

{#if isActive}
<nav class="navbar">
	{#each items as item}
		<a href={item.path} class:active={$page.url.pathname === item.path}>
			<div class="label">{item.title}</div>
		</a>
	{/each}
  <div class="cta">
    <CTA />
  </div>
  <div class="close-nav" on:click={toggleNav}>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
  </div>
</nav>
{/if}

<style>
	.navbar {
		position: fixed;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    left: 0;
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #141316;
		transition: all .25s linear;
    z-index: 4;
	}
	a {
    width: 100%;
    display: grid;
    place-content: center;
	}
  .label {
    width: 100%;
    padding: .5rem 0;
  }
  .icon {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    fill: var(--accent-color);
    transition: all .25s linear;
    cursor: pointer;
  }
  .icon:hover {
    transform: scale(1.2);
    fill: var(--accent-color-hover);
  }
  .cta {
    margin-top: 2rem;
  }
</style>
