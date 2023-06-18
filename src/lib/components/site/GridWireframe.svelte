<div class="grid-lines"></div>

<style>
  .grid-lines {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: 
      linear-gradient(0deg, transparent calc(100% - 2px), rgba(255, 255, 255, .05) 100%),
      linear-gradient(90deg, transparent calc(100% - 2px), rgba(255, 255, 255, .05) 100%)
    ;
    background-size: 4rem 4rem;
    background-position: top center;
    z-index: -1;
  }
</style>