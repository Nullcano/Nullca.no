<header>
  <div class="title">
    <svg width="1200" height="300" viewbox="0 0 1200 350">
      <text fill="transparent" x="600" y="310" font-size="330" text-anchor="middle">
        STEFFEN
      </text>
    </svg>
  </div>
</header>

<style>
  header {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .title {
    width: 100%;
    height: 16vw;
  }
  .title svg {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
  }
  svg text {
    position: relative;
    stroke: hsl(160, 25%, 75%);
    stroke-width: 3;
    font-family: 'Krona One', sans-serif;
    animation: text 3s linear forwards;
    pointer-events: none;
    user-select: none;
  }
  @keyframes text {
    0% {
      stroke-dasharray: 0 50%;
      stroke-dashoffset: 30%;
      fill: transparent;
    }
    50% {
      stroke-dasharray: 25% 25%;
      stroke-dashoffset: 0%;
      fill: transparent;
    }
    100% {
      stroke-dasharray: 50% 0;
      stroke-dashoffset: -30%;
      fill: hsl(160, 25%, 75%);
    }
  }
</style>