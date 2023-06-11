<script>
  export let icon, text, link
</script>

<a href={link}>
  <article>
    <figure>
      <img src={icon} alt={text} />
    </figure>
    <h2>{text}</h2>
  </article>  
</a>

<style>
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  article {
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(255,255,255,.1);
    background-color: rgba(0,0,0,.25);
    color: #fff;
    text-decoration: none;
  }

  figure {
    margin: 0;
    padding: 0;
    width: 2rem;
    height: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
</style>