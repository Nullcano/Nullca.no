<script>
  import '../styles/normalize.css'
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
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:wght@300&display=swap');

  main {
    position: relative;
    margin: 0 auto;
    width: calc(100% - 10rem);
    min-height: 100vh;
  }
  
  @media (max-width: 768px) {
    main {
      margin: 5rem auto;
      width: 95%;
      border-bottom: 0;
      border-left: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>