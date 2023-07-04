<script>
  import * as config from '$lib/config'
  import { onMount, onDestroy } from 'svelte'
  import Logo from '$lib/components/Logo.svelte'

  let interval
  let illustration = `"data:image/svg+xml,%3Csvg viewBox='0 0 320 180' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M114.5 84L105.5 73.5L95.5 81.6042M114.5 84L99 99L67 136.5H249L235 121M114.5 84L133 66L148 47L153 54L161 51L169 59L172 48L205 88L217 101M95.5 81.6042L104 94M95.5 81.6042L92 76.5L87 72.5L77.5 58.5L57 86L44.5 98M44.5 98L15 136.5M44.5 98L40.5 96L34 87.5L25.5 99.5L21 101.5L-0.50001 128M-9.77516e-06 165.75H320M-9.77516e-06 138.75H320M-9.77516e-06 141.75H320M-9.77516e-06 146.75H320M-9.77516e-06 154.75H320M-9.77516e-06 179.5H320M-9.77516e-06 136.5H320M137 179.5L144 136.5M91 179.5L112 136.5M46 179.5L76 136.5M-4 179.5L39 136.5M183 179.5L176 136.5M229 179.5L208 136.5M274 179.5L244 136.5M324 179.5L281 136.5M172 64.5L182.5 94.5L197 136.5M98 136.5L144.5 59L149 52M125.5 136.5L146 80.5L153.5 59M224 136.5L191 80.5L179 60M225 110L217 101M225 110L235 121M225 110L235 97.5L246 107M217 101L228 89.5L241 78.5L255.786 95.2571M235 121L246 107M255.786 95.2571L256 95.5M255.786 95.2571L246 107M255.786 95.2571L256 95L267 84L301 117L320 131M154 40L157 37.0236H163L166 40H154ZM153 26.5L156 29.5L156.035 36L153 39V26.5ZM167 39L164 36V29.5L167 26.5V39ZM154 12H166L163 15H157L154 12ZM153 25.5039V13L156.035 16.0236L156 22.5L153 25.5039ZM167 13V25.5039L164.047 22.5L164 16L167 13Z' stroke='white' stroke-opacity='0.1' stroke-width='0.5' fill='none' /%3E%3C/svg%3E"`

  let title = 'Nullcano'
  let title2 = 'AKA Steffen IRL'
  let animatedTitle = ''
  let animatedTitle2 = ''

  onMount(() => {
    const animateTitle = () => {
      animatedTitle = '';
      let index = 0;
      const interval = setInterval(() => {
        if (index >= title.length) {
          clearInterval(interval);
        } else {
          animatedTitle += title[index];
          index++;
        }
      }, 150);
    };

    const animateTitle2 = () => {
      animatedTitle2 = '';
      let index = 0;
      interval = setInterval(() => {
        if (index >= title2.length) {
          clearInterval(interval);
        } else {
          animatedTitle2 += title2[index];
          index++;
        }
      }, 150);
    }

    animateTitle();
    setTimeout(animateTitle2, 1500);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section class="br4 vw-100 vh-100 cover" style="background:url({illustration}) center">
  <div class="pa5-l w-100 measure-l h-100 bg-black-20 bd-blur">
    <div class="content w-100 h-100 flex flex-column space-between">
      <div class="ma5 h3 self-start">
        <Logo />
      </div>
      <div class="f2 mt5 mh5 self-start" data-title="{animatedTitle}">
        {#if animatedTitle}
          {animatedTitle}
          {:else}
          &nbsp;
        {/if}
      </div>
      <div class="f4 mb5 mh5 self-start" data-title="{animatedTitle2}">
        {#if animatedTitle2}
          {@html animatedTitle2}
          {:else}
          &nbsp;
        {/if}
      </div>
      <a class="ma5 pa3 ttu ba b--white-10 grow self-start" href="/feed">
        Please, after you
      </a>  
    </div>  
  </div>
</section>

<style>

</style>