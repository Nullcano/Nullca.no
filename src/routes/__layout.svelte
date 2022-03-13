<script>
  import '../styles/normalize.css'
  import '../styles/global.css'
  import Navbar from '$lib/Navbar.svelte'
  import Footer from '$lib/Footer.svelte'
  export let image
  $: image = image
</script>

<main>
  <Navbar />
  <slot></slot>
  <Footer />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:wght@300&display=swap');

  main {
    margin: 2px;
    padding: 2.5rem;
    width: calc(100% - 4px);
    min-height: 100vh;
    border-radius: 1em;
    background: hsl(160, 25%, 5%);
    background: linear-gradient(90deg, hsl(160, 25%, 5%) 11px, transparent 1%) center, linear-gradient(hsl(160, 25%, 5%) 11px, transparent 1%) center, hsl(160, 25%, 12.5%);
    background-size: 13px 13px;
  }
  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }
  }
</style>