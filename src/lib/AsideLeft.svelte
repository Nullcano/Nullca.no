<script>
  import Banner from '$lib/Banner.svelte'
</script>

<aside>
  <Banner />
  <nav>
    <div class="inner featured">
      <a href="/projects">
        <div class="nav-link">projects</div>
      </a>
      <a href="/archives">
        <div class="nav-link">archives</div>
      </a>
      <a href="https://github.com/Nullcano" target="blank">
        <div class="nav-link">github</div>
      </a>
      <a href="mailto:woldsteffen@gmail.com">
        <div class="nav-link">contact</div>
      </a>
    </div>
  </nav>
</aside>

<style>
  aside {
    position: relative;
    width: 5rem;
    align-self: flex-start;
  }
  nav {
    position: relative;
    top: -1px;
    width: 5rem;
    height: 25rem;
    display: grid;
    place-content: center;
    border: 1px solid white;
    overflow: hidden;
  }
  .inner {
    position: relative;
    display: flex;
    transform: rotate(-90deg);
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: inherit;
    background: inherit;
  }
  .nav-link {
    padding: .5rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
</style>