<script>
  import '../styles/global.css'
  import LogoBackground from '$lib/LogoBackground.svelte'
  import LogoIcon from '$lib/LogoIcon.svelte'
  import Searchbar from '$lib/Searchbar.svelte'
  import Sidebar from '$lib/Sidebar.svelte'
  import Page from '$lib/Page.svelte'
  import Animation from '$lib/Animation.svelte';
  import Disclaimer from '$lib/Disclaimer.svelte'
  import Footer from '$lib/Footer.svelte'
  let sidebar_show = false
</script>

<svelte:head>
  <title>Nullcano</title>
</svelte:head>

<LogoBackground />
<main>
  <header>
    <LogoIcon />
    <Searchbar />
    <button on:click={() => sidebar_show = !sidebar_show}>
      {#if !sidebar_show}
        <svg viewBox="0 0 384.97 384.97" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 384.97 384.97" xml:space="preserve">
          <path d="M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"/>
        </svg>
      {:else}
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="m8 8 32 32M8 40 40 8" stroke="url(#a)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      {/if}
    </button>
  </header>
  <div class="wrapper">
    <section class="page">
      <Animation />
      <Page>
        <slot></slot>
      </Page>
      <footer>
        <div class="inner">
          <Disclaimer />
          <Footer />
        </div>
      </footer>
    </section>
    <div class="navigation">
      <Sidebar bind:show={sidebar_show} />
    </div>
  </div>
</main>

<style>
  main {
    position: relative;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
  }
  button {
    width: 3rem;
    height: 3rem;
    background: var(--darken-dark);
    border: none;
    outline: none;
    color: hsl(200, 15%, 80%);
    cursor: pointer;
  }
  button svg {
    position: relative;
    width: 2rem;
    height: 2rem;
    fill: url(#a);
  }
  button svg:hover {
    fill: var(--secondary-accent);
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  header {
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
  section.page {
    position: relative;
    max-height: calc(100vh - 3.5rem);
    overflow-y: auto;
  }
  footer {
    padding: 2rem 1rem;
  }
  footer .inner {
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .wrapper {
      height: calc(100vh - 3rem);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    footer {
      padding: 1rem .5rem;
    }
    footer .inner {
      margin: 0 auto;
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: .5rem;
    }
  }
</style>