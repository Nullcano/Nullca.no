<script>
  import '../styles/global.css'
  import '../styles/media.css'
  import Navbar from '$lib/Navbar.svelte'
  import Sidebar from '$lib/Sidebar.svelte'
  import Page from '$lib/Page.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <title>Nullcano</title>
</svelte:head>

<Navbar />
<main>
  <Sidebar />
  <Page>
    <slot></slot>
  </Page>
</main>
<Footer />

<style>
  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
  }
</style>