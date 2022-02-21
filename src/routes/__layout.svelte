<script>
  import '../styles/nullstrap.css'
  import '../styles/global.css'
  import Logo from '$lib/Logo.svelte'
  import Searchbar from '$lib/Searchbar.svelte'
  import Support from '$lib/Support.svelte'
  import LeftSidebar from '$lib/LeftSidebar.svelte'
  import Page from '$lib/Page.svelte'
  import Disclaimer from '$lib/Disclaimer.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <title>Nullcano</title>
</svelte:head>

<main>
  <header>
    <Logo />
    <Searchbar />
    <Support />
  </header>
  <div class="wrapper">
    <aside class="left">
      <LeftSidebar />
    </aside>
    <section class="page">
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
  </div>
</main>

<style>
  main {
    position: relative;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3.5rem 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
  }
  .wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  header {
    width: 100%;
    height: 3.5rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
  section.page {
    position: relative;
    max-height: 100vh;
    overflow-y: auto;
  }
  footer {
    padding: 1rem;
  }
  footer .inner {
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>