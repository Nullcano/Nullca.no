<script>
  import * as config from '$lib/config'
  import { onMount, onDestroy } from 'svelte'
  import Logo from '$lib/components/Logo.svelte'

  let intervalId
  let imageUrl = '/images/holo-skeleton.webp'
  let isAlternative = false

  const alternativeImage = '/images/active-skeleton.webp'

  let title = 'Nullcano'
  let title2 = 'AKA <i>Steffen</i> IRL'
  let animatedTitle = ''
  let animatedTitle2 = ''

  const startRandomInterval = () => {
    intervalId = setInterval(changeImage, getRandomInterval());
  };

  const stopRandomInterval = () => {
    clearInterval(intervalId);
  };

  const changeImage = () => {
    imageUrl = isAlternative ? '/images/holo-skeleton.webp' : alternativeImage;
    isAlternative = !isAlternative;
    setTimeout(() => {
      imageUrl = '/images/holo-skeleton.webp';
    }, 250);
    setTimeout(changeImage, getRandomInterval());
  };

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 5000) + 1000;
  };

  onMount(() => {
    startRandomInterval();

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
      }, 200);
    };

    const animateTitle2 = () => {
      animatedTitle2 = '';
      let index = 0;
      const interval = setInterval(() => {
        if (index >= title2.length) {
          clearInterval(interval);
        } else {
          animatedTitle2 += title2[index];
          index++;
        }
      }, 100);
    }

    animateTitle();
    setTimeout(animateTitle2, 1600);
  });

  onDestroy(() => {
    stopRandomInterval();
  });
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <div class="circles">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  <figure>
    <img src={imageUrl} alt="Holo Skeleton">
  </figure>
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
</section>

<style>
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  .circles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .circles:before {
    content: '';
    position: absolute;
    top: 3rem;
    left: 3rem;
    right: 3rem;
    bottom: 3rem;
    border-radius: 3rem;
    border: 3px solid #ff00765e;
    mix-blend-mode: overlay;
  }
  .circle {
    position: absolute;
    width: 30vw;
    height: 30vh;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid #ff00765e;
    animation: scaleMore 2s linear infinite;
    mix-blend-mode: overlay;
  }
  @keyframes scaleMore {
    0% { width: 30vw; height: 30vh; opacity: 0; }
    50% { width: 60vw; height: 60vh; opacity: 1; }
    100% { width: 90vw; height: 90vh; opacity: 0; }
  }
  .circle:nth-child(1) {
    animation-delay: 5s;
  }
  .circle:nth-child(2) {
    animation-delay: 5.5s;
  }
  .circle:nth-child(3) {
    animation-delay: 6s;
  }
  .circle:nth-child(4) {
    animation-delay: 6.5s;
  }
  
  .logo-provider {
    position: relative;
    width: 6rem;
  }

  figure {
    position: absolute;
    top: 0;
    left: 0;
    transform: none;
    width: 50vw;
    height: 100vh;
    mix-blend-mode: exclusion;
  }

  figure img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
  }
  figure::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, transparent, hsl(256, 24%, 6%));
    z-index: 0;
  }
  .title {
    position: relative;
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-text-stroke: 2px whitesmoke;
    background-image: url('/images/holo.webp');
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitle {
    position: relative;
    font-family: monospace;
    font-size: 3rem;
    text-transform: uppercase;
    color: whitesmoke;
  }
  a {
    margin-top: 6rem;
    position: relative;
    border: .25rem solid #ff00765e;
    padding: 1rem 2rem;
    display: inline-block;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    background-image: url('/images/holo.webp');
    background-position: center;
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
      -webkit-text-stroke: 1px whitesmoke;
    }
    .subtitle {
      font-size: 1.5rem;
    }
    a {
      font-size: 1rem;
    }
  }
</style>
