<script>
  export let title
</script>

<div class="page-title">
  <h1 class="title">
    {title}
  </h1>
</div>

<style>
  .page-title {
    position: relative;
    padding: 2rem;
    font-size: 2vw;
    font-family: 'Krona One', sans-serif;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    .page-title {
      margin-bottom: 1rem;
      padding: 1rem;
    }
  }
</style>