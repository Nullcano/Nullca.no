<script>
  import Navbar from './Navbar.svelte'

  export let buttonSize = 'big'
  export let hasMenu = false
  let menuOpen = false
  
  const toggleNav = () => {
    menuOpen = !menuOpen
  }

  $: menuOpen
</script>

<div class="button-group">
  <a href="/about">
    <div class="button button-{buttonSize}">
      <div class="icon"></div>
      <span>Profile</span>
    </div>
  </a>
  <a href="mailto:woldsteffen@gmail.com">
    <div class="button button-icon-{buttonSize}">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.861 455.861" style="enable-background:new 0 0 455.861 455.861" xml:space="preserve"><path d="m52.616 139.032 102.427 88.898-102.427 88.898c-6.162 5.349-6.823 14.68-1.474 20.843 5.349 6.162 14.68 6.821 20.842 1.474l105.6-91.651 40.663 35.292c2.778 2.411 6.231 3.616 9.684 3.616s6.906-1.205 9.684-3.616l40.663-35.292 105.6 91.651c6.162 5.348 15.493 4.688 20.842-1.474 5.349-6.163 4.688-15.494-1.474-20.843L300.819 227.93l102.427-88.898c6.163-5.349 6.823-14.68 1.474-20.843s-14.682-6.822-20.842-1.474L227.931 252.063 71.984 116.715c-6.162-5.348-15.494-4.687-20.842 1.474-5.349 6.163-4.688 15.494 1.474 20.843z"/><path d="M441.088 63.154H14.774C6.615 63.154 0 69.77 0 77.929v300.003c0 8.16 6.615 14.774 14.774 14.774h426.313c8.16 0 14.774-6.614 14.774-14.774V77.929c.001-8.159-6.613-14.775-14.773-14.775zm-14.774 300.003H29.549V92.703h396.765v270.454z"/></svg>
    </div>
  </a>
  {#if hasMenu}
  <div class="button button-icon-{buttonSize}" on:click={toggleNav}>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.861 455.861" style="enable-background:new 0 0 455.861 455.861" xml:space="preserve"><path d="m52.616 139.032 102.427 88.898-102.427 88.898c-6.162 5.349-6.823 14.68-1.474 20.843 5.349 6.162 14.68 6.821 20.842 1.474l105.6-91.651 40.663 35.292c2.778 2.411 6.231 3.616 9.684 3.616s6.906-1.205 9.684-3.616l40.663-35.292 105.6 91.651c6.162 5.348 15.493 4.688 20.842-1.474 5.349-6.163 4.688-15.494-1.474-20.843L300.819 227.93l102.427-88.898c6.163-5.349 6.823-14.68 1.474-20.843s-14.682-6.822-20.842-1.474L227.931 252.063 71.984 116.715c-6.162-5.348-15.494-4.687-20.842 1.474-5.349 6.163-4.688 15.494 1.474 20.843z"/><path d="M441.088 63.154H14.774C6.615 63.154 0 69.77 0 77.929v300.003c0 8.16 6.615 14.774 14.774 14.774h426.313c8.16 0 14.774-6.614 14.774-14.774V77.929c.001-8.159-6.613-14.775-14.773-14.775zm-14.774 300.003H29.549V92.703h396.765v270.454z"/></svg>
  </div>
  {/if}
</div>

{#if menuOpen}
<Navbar />
{/if}

<style>
  .button-group {
    display: flex;
    gap: 1rem;
  }
  .button {
    color: white;
    border: 2px solid transparent;
    cursor: pointer;
  }
  .button-small {
    padding: 0 2rem;
    height: 3rem;
    border-radius: 999px;
  }
  .button-big {
    padding: 0 4rem;
    height: 4rem;
    border-radius: 999px;
    font-size: 1.5rem;
  }
  .button-small, .button-big {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--accent-color);
  }
  .button-icon-big, .button-icon-small {
    display: grid;
    place-content: center;
    border-radius: 999px;
    background: var(--accent-color);
  }
  .button-icon-small {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .button-icon-big {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .button-icon-small .icon {
    width: 1.75rem;
  }
  .button-icon-big .icon {
    width: 2.25rem;
  }
</style>