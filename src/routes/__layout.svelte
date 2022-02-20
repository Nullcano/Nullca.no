<script>
  import '../styles/nullstrap.css'
  import '../styles/global.css'
  import Navbar from '$lib/Navbar.svelte'
  import Sidebar from '$lib/Sidebar.svelte'
  import Page from '$lib/Page.svelte'
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

<style>
  main {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
  }
</style>