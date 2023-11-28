<script>
  export let title, image, body
</script>

<div class="card-provider">
  <article class="card">
    <figure>
      <img src="/images/{image}" alt={title}>
    </figure>
    <header>
      <h3 class="title">{title}</h3>
    </header>
    <div class="body">
      {@html body}
    </div>
  </article>
</div>

<style>
  .card-provider {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .card {
    position: relative;
    padding: 1.5rem;
    display: grid;
    grid-template-rows: auto auto 1fr;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 1.5rem;
    overflow: visible;
  }
  header {
    margin-block: 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: normal;
  }
  figure {
    position: relative;
    margin: 0;
    padding-bottom: 75%;
    width: 100%;
    border-radius: 1.5rem;
    overflow: hidden;
    height: 0;
  }
  figure img {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
</style>