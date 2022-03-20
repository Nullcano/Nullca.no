<script>
  import Time from 'svelte-time'
  import { stripHTML, slugify } from '$lib/utils'
  export let item
</script>

<article class="post-card">
  <figure class="post-card__thumbnail">
    <a href={`/journal/${item.slug}`} class="post-card__link">
      {#if item.image}
        <img src={item.image} alt={item.title} class="post-card__img" />
        {:else}
        <img src="../no-cover.webp" alt={item.title} class="post-card__img" />
      {/if}
    </a>
  </figure>
  <div class="post-card__content">
    <h2 class="post-card__title">
      <a href={`/journal/${item.slug}`} class="post-card__link">
        {item.title}
      </a>
    </h2>
    <div class="post-card__time">
      Posted <Time timestamp={item.date} />
    </div>
    <p class="post-card__description">
      {stripHTML(item.content.join(' '))}
    </p>
    {#if item.tags}
    <div class="post-card__tags">
      {#each item.tags.slice(0, 5) as tag}
        <a href={`/tags/${slugify(tag)}`} class="post-card__tag">
          {tag}
        </a>
      {/each}
    </div>
    {/if}
  </div>
</article>

<style>
  .post-card {
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
  }
  .post-card__thumbnail {
    position: relative;
    width: 20rem;
    height: 10rem;
  }
  .post-card__thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1rem;
    transition: all .2s ease-in-out;
  }
  .post-card:hover .post-card__thumbnail img {
    transform: scale(1.25) rotate(5deg);
  }
  .post-card__content {
    padding: 1rem;
  }
  .post-card__time {
    margin-bottom: .5rem;
  }
  .post-card__title {
    margin-bottom: 0.5rem;
  }
  .post-card__description {
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1.5;
    overflow: hidden;
  }
  .post-card__tags {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
    gap: .5rem;
  }
  .post-card__tag {
    padding: .25rem .5rem;
    border-radius: .25rem;
    background: var(--reset-dark);
  }
  .post-card__tag:hover {
    background: var(--darken-dark);
  }
  @media (max-width: 768px) {
    .post-card {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      border-bottom: 2px solid var(--reset-dark);
    }
    .post-card__thumbnail {
      display: none;
    }
    .post-card__content {
      padding: 0 1rem;
    }
    .post-card__time {
      margin-bottom: .5rem;
    }
    .post-card__title {
      margin-bottom: 0.5rem;
    }
    .post-card__description {
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-height: 1.5;
      overflow: hidden;
    }
    .post-card__tags {
      display: flex;
      flex-wrap: wrap;
      font-size: .8rem;
      gap: .5rem;
    }
    .post-card__tag {
      padding: .25rem .5rem;
      border-radius: .25rem;
      background: var(--reset-dark);
    }
    .post-card__tag:hover {
      background: var(--darken-dark);
    }
  }
</style>