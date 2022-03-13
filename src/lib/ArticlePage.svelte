<script>
  import Time from 'svelte-time'
  import { slugify } from '$lib/utils'
  export let item
  let y
</script>

<svelte:window bind:scrollY={y} />

<figure class="splash">
  {#if item.gallery}
    <img 
    style="transform: translate(0, -{y / 2}px); will-change:transform; transition:none" src={item.gallery[0]} alt={item.title}>
    {:else}
    <img src="../no-cover.webp" alt={item.title}>
  {/if}
</figure>

<article class="item-page">
  <div class="content">
    <div class="title">
      {#if item.image}
        <figure class="cover">
          <img src={item.image} alt={item.title}>
        </figure>
      {:else}
        <figure class="cover">
          <img src="../no-icon.webp" alt={item.title}>
        </figure>
      {/if}
      <div class="info">
        <h1>{item.title}</h1>
        <div class="date-info">
          <span class="date">Posted <Time relative timestamp={item.date} /></span>
        </div>
        {#if item.tags}
          <div class="tags">
            {#each item.tags.slice(0, 5) as tag}
              <a href={`/tags/${slugify(tag)}`} class="tag">
                {tag}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="body">
      {#each item.content as p}
        <p>{p}</p>
      {/each}
    </div>
  </div>
  <a href="/journal">
    <div class="back">← Back to journal</div>
  </a>
</article>

<style>
  .back {
    padding: 2rem;
    font-size: 1.5rem;
  }
  .splash {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    z-index: -1;
  }
  .splash::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, hsla(220, 25%, 3%, .5) 0%, hsla(220, 25%, 3%, 1) 90%);
  }
  .splash img {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
  }
  .item-page {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .date-info {
    margin: 1rem 0;
  }
  .date-info span {
    display: block;
    margin: 1rem;
  }
  h1 {
    font-size: 4vw;
    margin: 2rem 1rem;
    font-family: 'Krona One', sans-serif;
    text-transform: uppercase;
  }
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    color: var(--reset-light);
  }
  .content {
    position: relative;
  }
  .title {
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
  .cover {
    width: 24rem;
    height: 12rem;
    overflow: hidden;
  }
  .cover img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
  .tags {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
    gap: .5rem;
  }
  .tag {
    padding: .25rem .5rem;
    border-radius: 999px;
    background: var(--reset-dark);
    border: 2px solid var(--darken-dark);
  }
  .tag:hover {
    background: var(--darken-dark);
  }
  .body {
    padding: 1rem;
    border-radius: 1rem;
    background: hsl(160, 25%, 5%);
    border: 2px solid hsl(160, 25%, 25%);
  }
  @media (max-width: 768px) {
    .title {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>