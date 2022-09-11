<script>
  import Emblem from "./Logo/Emblem.svelte";
</script>

<section class="fullscreen-nav" on:click>
  <a href="/">
    <Emblem />
  </a>
  <div class="h1"></div>
  <nav class="featured">
    <a href="/explore">
      <div class="nav-link">Explore</div>
    </a>
    <a href="https://github.com/Nullcano" target="blank">
      <div class="nav-link">github</div>
    </a>
    <a href="mailto:woldsteffen@gmail.com">
      <div class="nav-link">contact</div>
    </a>
  </nav>
</section>

<style>  
  .fullscreen-nav {
    position: fixed;
    top: 0;
    left: 0;
    padding: 5rem;
    width: 100vw;
    height: 100vh;
    background-color: var(--darkest);
    z-index: 90;
  }
  .fullscreen-nav nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .nav-link {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 30em) {
    .fullscreen-nav {
      padding: 2.5rem;
    }
  }
</style>