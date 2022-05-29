<script>
  import Time from 'svelte-time'
  import { slugify } from '$lib/utils'
  export let item
  let y
</script>

<svelte:window bind:scrollY={y} />

<article class="item-page">
  <div class="content">
    <div class="title">
      <figure class="cover">
        <img src="../thumb/{item.slug}.{item.fileType}" alt={item.title}>
      </figure>
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
    object-fit: cover;
    border-radius: 1rem;
    filter: grayscale(1);
    opacity: .5;
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
    border: 2px solid var(--darken-dark);
  }
  .tag:hover {
    background: var(--darken-dark);
  }
  .body {
    margin: 0 auto;
    width: 700px;
    max-width: 100%;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    .cover {
      display: none;
    }
    .title {
      padding: 0;
      flex-direction: column;
    }
    h1 {
      margin: 1rem;
      font-size: 2rem;
    }
    .date-info {
      margin: 0;
    }
    .body {
      padding: 0 1rem;
    }
  }
</style>