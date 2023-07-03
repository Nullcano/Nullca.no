<script>
  import * as config from '$lib/config'
  import { onMount, onDestroy } from 'svelte'
  import Logo from '$lib/components/Logo.svelte'

  let interval
  let images = ['/images/s-1.webp', '/images/s-2.webp', '/images/s-3.webp', '/images/s-4.webp'];
  let currentIndex = 0;

  let title = 'Nullcano'
  let title2 = 'AKA Steffen IRL'
  let animatedTitle = ''
  let animatedTitle2 = ''

  function updateImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  onMount(() => {
    interval = setInterval(updateImage, 150);

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

<section>
  <figure>
    <img src={`${images[currentIndex]}`} alt="Skeleton">
  </figure>
  <div class="content">
    <div class="logo-provider">
      <Logo />
    </div>
    <div class="title" data-title="{animatedTitle}">
      {#if animatedTitle}
        {animatedTitle}
        {:else}
        &nbsp;
      {/if}
    </div>
    <div class="subtitle" data-title="{animatedTitle2}">
      {#if animatedTitle2}
        {@html animatedTitle2}
        {:else}
        &nbsp;
      {/if}
    </div>
    <a href="/feed">
      Please, after you...
    </a>  
  </div>
</section>

<style>
  section {
    position: relative;
    margin: 3rem auto;
    padding: 3rem;
    max-width: 60em;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border: 1px solid hsl(0, 0%, 20%);
  }
  .logo-provider {
    position: relative;
    width: 6rem;
  }
  figure {
    position: relative;
    width: 20rem;
    height: 0;
    padding-bottom: 150%;
    mix-blend-mode: exclusion;
  }
  figure img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .25;
    z-index: -1;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .title {
    position: relative;
    font-size: 3rem;
    color: hsl(0, 0%, 80%);
  }
  .subtitle {
    position: relative;
    font-size: 1.5rem;
    color: hsl(0, 0%, 80%);
  }
  a {
    margin-top: 6rem;
    position: relative;
    border: 1px solid hsl(0, 0%, 20%);
    padding: 1rem 2rem;
    align-self: self-start;
    font-weight: 600;
    text-align: center;
    background: hsl(0, 0%, 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .25s linear;
  }
  a:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width:60em) {
    .title {
      font-size: 3rem;
    }
    .subtitle {
      font-size: 1.5rem;
    }
    a {
      font-size: 1rem;
    }
  }
</style>
