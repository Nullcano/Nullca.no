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
    padding: 3rem;
    font-size: 2rem;
    font-family: 'Krona One', sans-serif;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      text-align: center;
    }
  }
</style>