<script>
  import Search from '$lib/components/Search.svelte'
</script>

<div class="useless line-top"></div>
<div class="useless line-left"></div>
<div class="useless line-right"></div>
<div class="useless line-bottom"></div>

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

  .useless {
    position: fixed;
    background: rgba(255,255,255,.1);
  }

  .line-top {
    top: 1rem;
    left: 5rem;
    animation: width 3s linear forwards;
    height: 1px;
  }
  .line-bottom {
    bottom: 1rem;
    right: 5rem;
    animation: width 3s linear forwards;
    height: 1px;
  }
  .line-left {
    top: 5rem;
    left: 1rem;
    width: 1px;
    animation: height 3s linear forwards;
  }
  .line-right {
    bottom: 5rem;
    right: 1rem;
    width: 1px;
    animation: height 3s linear forwards;
  }

  @keyframes width {
    from { width: 0 }
    to { width: calc(100% - 10em) }
  }
  @keyframes height {
    from { height: 0 }
    to { height: calc(100% - 10em) }
  }
</style>