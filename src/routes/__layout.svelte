<script>
  import '../styles/global.css'
  import Header from '$lib/Header.svelte'
  import Navbar from '$lib/Navbar.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<main>
  <Header />
  <Navbar />
  <slot></slot>
  <Footer />
</main>

<style>
  main {
    position: relative;
    margin: 0 auto;
    padding: 0 5rem 5rem 5rem;
    width: 100%;
    min-height: 100vh;
  }
  
  @media (max-width: 768px) {
    main {
      padding: 5rem 0;
      width: 95%;
      border-bottom: 0;
      border-left: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>