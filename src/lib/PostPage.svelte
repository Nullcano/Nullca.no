<script>
  import Time from 'svelte-time'
  import { slugify } from '$lib/utils'
  export let item
  let y
</script>

<svelte:window bind:scrollY={y} />

<article class="contained item-page">
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
      <p>{@html p}</p>
    {/each}
  </div>
  <a href="/">
    <div class="back">← Back</div>
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
    font-style: italic;
    color: hsl(260, 8%, 60%)
  }
  h1 {
    font-size: 3rem;
    margin: 1rem;
  }
  .body {
    margin: 0 auto;
    padding: 1rem;
    width: 700px;
    max-width: 100%;
    background: hsl(260, 8%, 8%);
    border-radius: 1rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: var(--reset-light);
  }
  .title {
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
    gap: 1rem;
  }
  .cover {
    margin: 0;
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
    overflow: hidden;
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
  @media (max-width: 768px) {
    .cover {
      width: 100%;
    }
    .title {
      padding: 0;
      flex-direction: column;
    }
    .info {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    }
    p {
      font-size: 1.25rem;
    }
    h1 {
      margin: 1rem;
      font-size: 1.5rem;
    }
    .date-info {
      margin: 0;
    }
    .body {
      padding: 0 1rem;
    }
  }
</style>