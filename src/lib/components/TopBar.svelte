<script>
  import Search from '$lib/components/Search.svelte'
</script>

<header class="fixed top-0 left-0 right-0 pv2 flex items-center justify-between z-1">
  <div class="f3 ttu display">
    <a href="/feed">Nullcano</a>
    </div>
  <Search />
  <div>
    <a class="ph3 pv2 br2 ba b--white-10" href="https://github.com/Nullcano" target="_blank">GitHub</a>
  </div>
</header>

<style>
  header {
    max-width: 100vw;
    padding: 1rem 8rem;
  }
</style>