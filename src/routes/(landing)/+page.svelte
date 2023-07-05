<script>
  import { onMount } from "svelte"
  import * as config from '$lib/config'

  let duration = 15
  let repeat = 2
  let paused = false
  let pauseOnHover = false
  let hovered = false

  let illustration = `"data:image/svg+xml,%3Csvg viewBox='0 0 320 180' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M114.5 84L105.5 73.5L95.5 81.6042M114.5 84L99 99L67 136.5H249L235 121M114.5 84L133 66L148 47L153 54L161 51L169 59L172 48L205 88L217 101M95.5 81.6042L104 94M95.5 81.6042L92 76.5L87 72.5L77.5 58.5L57 86L44.5 98M44.5 98L15 136.5M44.5 98L40.5 96L34 87.5L25.5 99.5L21 101.5L-0.50001 128M-9.77516e-06 165.75H320M-9.77516e-06 138.75H320M-9.77516e-06 141.75H320M-9.77516e-06 146.75H320M-9.77516e-06 154.75H320M-9.77516e-06 179.5H320M-9.77516e-06 136.5H320M137 179.5L144 136.5M91 179.5L112 136.5M46 179.5L76 136.5M-4 179.5L39 136.5M183 179.5L176 136.5M229 179.5L208 136.5M274 179.5L244 136.5M324 179.5L281 136.5M172 64.5L182.5 94.5L197 136.5M98 136.5L144.5 59L149 52M125.5 136.5L146 80.5L153.5 59M224 136.5L191 80.5L179 60M225 110L217 101M225 110L235 121M225 110L235 97.5L246 107M217 101L228 89.5L241 78.5L255.786 95.2571M235 121L246 107M255.786 95.2571L256 95.5M255.786 95.2571L246 107M255.786 95.2571L256 95L267 84L301 117L320 131M154 40L157 37.0236H163L166 40H154ZM153 26.5L156 29.5L156.035 36L153 39V26.5ZM167 39L164 36V29.5L167 26.5V39ZM154 12H166L163 15H157L154 12ZM153 25.5039V13L156.035 16.0236L156 22.5L153 25.5039ZM167 13V25.5039L164.047 22.5L164 16L167 13Z' stroke='white' stroke-opacity='0.1' stroke-width='0.25' fill='none' /%3E%3C/svg%3E"`

  onMount(async () => {
    const container = document.querySelector("#container");

    container.onmouseover  = () => { hovered = true  }
    container.onmouseleave = () => { hovered = false }
  })
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<div class="title-container">
  <div class="content" class:paused={paused || (pauseOnHover && hovered)}>
    {#each Array(repeat) as _, i}
      <div class="text" style="animation-duration: {duration}s">
        <div class="title ma0 display ttu">Nullcano</div>
      </div>
    {/each}
  </div>
</div>

<div class="absolute absolute-fill w-100 h-100 cover" style="background:url({illustration}) center"></div>

<section class="relative vh-100 flex flex-column justify-center items-center">
  <div class="pa4 br4 flex flex-column justify-center items-center gap-4 ba bw1 b--white-10">
    <a class="link db white-70 hover-white" href="/">
      <svg class="h3" viewBox="0 0 50 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 13H30V3L32 4V8L34 7V4L30 2V0L36 3V13H34V9L32 10V13Z" fill="currentColor"/>
        <path d="M0 3V13H2V6L4 7V13H6V3H4V5L2 4V3H0Z" fill="currentColor"/>
        <path d="M7 13V3H9V11H11V3H13V13H7Z" fill="currentColor"/>
        <path d="M37 3V13H39V6L41 7V13H43V3H41V5L39 4V3H37Z" fill="currentColor"/>
        <path d="M14 14V3H16V11L18 10V12L14 14Z" fill="currentColor"/>
        <path d="M18 14V3H20V11L22 10V12L18 14Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 3V13H50V3H44ZM48 5H46V11H48V5Z" fill="currentColor"/>
        <path d="M23 3L29 0V7H27V3L25 4V11H27V9H29V13H23V3Z" fill="currentColor"/>
      </svg>
    </a>
    
    <svg class="h5" viewBox="0 0 31 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 54H6L15.5 63.5L25 54H19M14 5C14 11 1 14 1 18.5C1 23 14 25 14 30C14 36 1 39 1 43.5C1 48 14 50 14 55M14 35C14 30 1 28 1 23.5C1 19 14 16 14 10M14 40C14 35 1 33 1 28.5C1 24 14 21 14 15M14 45C14 40 1 38 1 33.5C1 29 14 26 14 20M14 50C14 45 1 43 1 38.5C1 34 14 31 14 25M17 5C17 11 30 14 30 18.5C30 23 17 25 17 30C17 36 30 39 30 43.5C30 48 17 50 17 55M17 35C17 30 30 28 30 23.5C30 19 17 16 17 10M17 40C17 35 30 33 30 28.5C30 24 17 21 17 15M17 45C17 40 30 38 30 33.5C30 29 17 26 17 20M17 50C17 45 30 43 30 38.5C30 34 17 31 17 25M14 0V57M17 0V57" stroke="url(#paint0_linear_8_25)" stroke-width="0.5" fill="none" />
      <defs>
      <linearGradient id="paint0_linear_8_25" x1="12" y1="63" x2="12" y2="0" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      </defs>
    </svg>
    
    <a class="enter link pa3 pa4-l f5 f4-l ttu bg-black-50 bd-blur br-pill grow" href="/feed">
      Please, after you
    </a>  
  </div>
</section>

<style>
  .title-container {
    position: fixed;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    pointer-events: none;
  }
  .title {
    white-space: nowrap;
    line-height: 40vw;
    font-size: 40vw;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255,255,255,.25);
  }
  .content {
    width: 100000px;
  }
  .text {
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
  }
  .paused .text {
    animation-play-state: paused;
  }
  @keyframes animation {
    100% {
      transform: translateX(-100%);
    }
  }
</style>