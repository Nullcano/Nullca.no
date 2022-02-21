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
    <div class="navigation">
      <LeftSidebar />
    </div>
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
    main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 3rem 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    header {
      height: 3rem;
    }
    .navigation {
      order: 2;
    }
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