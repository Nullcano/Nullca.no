<script>
  import Time from 'svelte-time'
  export let slug, title, category, date, description
</script>

<article class="post-card">
  <figure class="post-card__thumbnail">
    <a href={`/${category.toLowerCase()}/${slug}`} class="post-card__link">
      <img src={`../assets/thumbs/${slug}.png`} alt={title} class="post-card__img">
    </a>
  </figure>
  <div class="post-card__content">
    <h2 class="post-card__title">
      <a href={`/${category.toLowerCase()}/${slug}`} class="post-card__link">
        {title}
      </a>
    </h2>
    <p class="post-card__description">
      {description}
    </p>
    <div class="post-card__meta">
      <span class="post-card__time">
        Archived in <a href={`/${category.toLowerCase()}`}>{category}</a>  <Time relative timestamp={date} />
      </span>
    </div>
  </div>
</article>

<style>
  .post-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
    background: hsl(200, 15%, 12%);
    box-shadow: .5rem .5rem 1rem hsla(0, 0%, 0%, .1);
  }
  .post-card__thumbnail {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 50%;
    overflow: hidden;
    background-color: hsl(200, 15%, 4%);
  }
  .post-card__thumbnail img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(1.5) rotate(15deg);
    width: 100%;
    height: auto;
  }
  .post-card__thumbnail::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-35deg, hsla(200, 15%, 8%, .5), hsla(200, 15%, 16%, .5));
    transition: opacity .5s;
    pointer-events: none;
  }
  .post-card__content {
    flex: 1;
    padding: 1rem;
  }
  .post-card__title {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1.25rem;
  }
  .post-card__description {
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 1rem;
  }
  .post-card__meta {
    display: flex;
    align-items: center;
    font-size: .8rem;
  }
</style>