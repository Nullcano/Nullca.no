<div id="root">
  <div class="cube">
    <div class="box box-front">
    </div>
    <div class="box box-back">
    </div>
    <div class="box box-left">
    </div>
    <div class="box box-right">
    </div>
    <div class="box box-top">
    </div>
    <div class="box box-bottom">
    </div>
  </div>
</div>

<style>
  #root {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1500px;
    pointer-events: none;
  }

  .cube {
    position: relative;
    transform-style: preserve-3d;
    animation: 5s rotate linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }
    to {
      transform: rotate3d(0.5, 1, 0.33, 360deg);
    }
  }

  .box {
    position: absolute;
    width: 16rem;
    height: 16rem;
    background-image: url('../slices.webp');
    background-position: center center;
    background-size: cover;
  }

  .box-front {
    transform: translateX(-8rem) translateY(-8rem) translateZ(8rem);
  }

  .box-back {
    transform: translateX(-8rem) translateY(-8rem) translateZ(-8rem);
  }

  .box-left {
    transform: translateX(-16rem) translateY(-8rem) rotateY(90deg);
  }

  .box-right {
    transform: translateY(-8rem) rotateY(90deg);
  }

  .box-top {
    transform: translateX(-8rem) rotateX(90deg);
  }

  .box-bottom {
    transform: translateX(-8rem) translateY(-16rem) rotateX(90deg);
  }
  
  @media (max-width: 768px) {
    .cube {
      transform: scale(0.8);
    }
  }
</style>