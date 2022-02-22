<div class="backdrop">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="iconAbove">
    <defs>
      <linearGradient gradientTransform="rotate(45)" id="b" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="10%" style="stop-color:hsl(200,15%,8%);stop-opacity:0"/>
        <stop offset="100%" style="stop-color:hsl(200,15%,10%);stop-opacity:1"/>
      </linearGradient>
    </defs>
    <path d="M11.93 89a246.66 246.66 0 0 1 28.68-37.55c1-1.07.23-2.78-.56-4-7.63-11.63-16.8-23.23-18.1-37.08 8.09 10.35 18.38 18.72 28.58 27 1 .84 2.54 1.69 3.56.84a338.83 338.83 0 0 1 42.5-30.16 309.61 309.61 0 0 1-32.37 39.7c-.9.93-.07 2.44.75 3.45A134.87 134.87 0 0 1 88.42 94l-37-32.12c-.45-.39-1.13-.79-1.58-.4Q39.1 70.7 27.8 79.27C22.83 83 17.72 86.74 11.93 89z" data-name="Shape 109" fill="none"/>
  </svg>
</div>

<style>
  .backdrop {
    pointer-events: none;
    position: fixed;
    bottom: -10vw;
    right: -10vw;
    width: 50vw;
    display: grid;
    place-content: center;
  }
  svg {
    width: 100%;
    stroke: url(#b);
    stroke-width: 1px;
    fill: linear-gradient(to right, hsl(200, 15%, 9%), hsl(200, 15%, 9%));
  }
</style>