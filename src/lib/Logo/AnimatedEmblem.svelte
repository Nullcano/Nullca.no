<svg class="emblem" viewBox="0 0 44 32">
  <polygon points="2,2 42,2 22,30" class="triangle-stroke" />
  <polygon points="10,6 34,6 22,23" class="triangle-stroke" />
  <polygon points="16,9 28,9 22,17" class="triangle-fill" />
    SVG:404
</svg>

<style>
  .emblem {
    width: 3rem;
    display: block;
    stroke-width: 2;
  }
  .triangle-stroke {
    fill: transparent;
    stroke: white;
    transform: scale(0);
    animation: grow .5s linear forwards;
    animation-delay: .75s;
  }
  .triangle-fill {
    fill: white;
    stroke: transparent;
    transform: scale(0);
    animation: grow .5s linear forwards;
    animation-delay: 1s;
  }
  .triangle-stroke:first-child {
    animation: grow .5s linear forwards;
    animation-delay: .5s;
  }
  @keyframes grow {
    to {
      transform: scale(1);
    }
  }
</style>