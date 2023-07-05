<script>
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<aside class="fixed top-0 right-0 pv3 ph4 bottom-0 flex flex-column items-center justify-between z-1">
  <div class="flex">
    <a class="w3 h3 pa2 flex items-center justify-center bg-black-50 br-100" href="/feed">
      HI
    </a>
  </div>
  <div></div>
  <div class="w3 h3 pa2 flex items-center justify-center bg-black-50 br-100 tc pointer" on:click={scrollUp} on:keydown={scrollUp}>
    GO UP
  </div>
</aside>