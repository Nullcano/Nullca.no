<script>
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<aside class="fixed top-0 right-0 pa3 bottom-0 flex flex-column items-center justify-between z-1">
  <div class="orb w3 h3 ba b--white-10 br-100"></div>
  <div></div>  
  <div class="w3 h3 pa2 flex items-center justify-center bg-black-50 br-100 tc pointer" on:click={scrollUp} on:keydown={scrollUp}>
    GO UP
  </div>
</aside>

<style>
  .orb {
    position: relative;
    animation: rotatoA 4s linear infinite;
    box-shadow: inset 0px 0px .5rem hsla(0, 0%, 100%, 0.1);
  }
  .orb:before, .orb:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: 1px solid rgba(255,255,255,.1);
    box-shadow: inset 0px 0px .5rem hsla(0, 0%, 100%, 0.1);
    background: hsla(0, 0%, 100%, 0.1);
    transform: translate(-50%, -50%);
  }
  .orb:before {
    animation: rotatoB 3s linear infinite;
  }
  .orb:after {
    animation: rotatoB 5s linear infinite;
  }
  @keyframes rotatoA {
    from { transform: rotateY(0) }
    to { transform: rotateY(360deg) }
  }
  @keyframes rotatoB {
    from { transform: translate(-50%, -50%) rotateX(0) }
    to { transform: translate(-50%, -50%) rotateX(-360deg) }
  }
</style>