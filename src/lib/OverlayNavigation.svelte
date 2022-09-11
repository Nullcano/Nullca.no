<script>
  import Logo from '$lib/Logo/Logo.svelte';
  import FullscreenNavigation from '$lib/FullscreenNavigation.svelte';
  import ToggleFullscreenNavigation from '$lib/ToggleFullscreenNavigation.svelte';
  export let showFullscreenNav;
</script>

<a class="top-left" href="/">
  <Logo />
</a>

<div class="top-right">
  <ToggleFullscreenNavigation on:click={() => showFullscreenNav = !showFullscreenNav } />
</div>

{#if (showFullscreenNav)}
  <FullscreenNavigation on:click={() => showFullscreenNav = !showFullscreenNav } />
{/if}

<style>
  .top-left {
    position: fixed;
    top: 2.5rem;
    left: 2.5rem;
  }
  .top-right {
    position: fixed;
    top: 2.5rem;
    right: 2.5rem;
  }
  
</style>