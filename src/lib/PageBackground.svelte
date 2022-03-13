<script>
  export let image
</script>

<div class="page-bg" style="background-image: url('{image}')"></div>

<style>
  .page-bg {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    display: grid;
    place-content: center;
    background-position: center;
    background-size: cover;
    filter: blur(.5rem) hue-rotate(75deg);
    opacity: .25;
    z-index: -1;
  }
  .page-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(to bottom, var(--darken-dark-50) 0%, var(--darken-dark) 100%);
  }
</style>