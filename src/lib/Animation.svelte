<section class="animation">
  <img src="../animation.webp" alt="Nullcano library animation" />
</section>

<style>
  section {
    position: absolute;
    top: 0;
    width: 100%;
    height: 33.333vh;
    overflow: hidden;
    opacity: .1;
  }
  section img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }
  section:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, hsla(200, 15%, 8%, 0) 0%, hsla(200, 15%, 8%, 1) 100%);
  }
</style>