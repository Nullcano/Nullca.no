<script>
  import Emblem from '$lib/Emblem.svelte'
</script>

<a href="/">
  <div class="banner" role="banner" aria-roledescription="Banner with logo and title">
    <div class="emblem">
      <Emblem />
    </div>
    <div class="title featured">
      <span>Steffen</span>
    </div>
    <div class="null"></div>
  </div>
</a>

<style>
  .banner {
    width: 5rem;
    height: 10rem;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    color: rgb(22, 22, 22);
  }
  a:hover {
    text-decoration: none;
  }
  .title {
    font-size: 1.5rem;
    letter-spacing: .1rem;
  }
</style>