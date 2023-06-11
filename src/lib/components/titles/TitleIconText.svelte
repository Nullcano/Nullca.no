<script>
  export let icon, text
</script>

<hgroup>
  <figure>
    <img src={icon} alt={text} />
  </figure>
  <h2>{text}</h2>
</hgroup>

<style>
  hgroup {
    display: flex;
    align-items: center;
    gap: 1rem;
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
    font-size: 1.25rem;
    text-transform: uppercase;
  }
</style>