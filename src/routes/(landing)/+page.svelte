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

<div class="vw-100 vh-100 cover" style="background:url({illustration}) center"></div>

<a class="link fixed top-0 left-0 mh4 mv3 pa3 h3 white-70 hover-white" href="/">
  <svg viewBox="0 0 50 14" xmlns="http://www.w3.org/2000/svg">
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

<a class="enter link fixed pa3 pa4-l f5 f3-l ttu bg-black-50 bd-blur br-pill" href="/feed">
  Please, after you
</a>

<style>
  .title-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
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
  .enter {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform .25s linear;
  }
  .enter:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
</style>