<script>
  export let title, description
</script>

<div class="page-title">
  <h1 class="title">
    {title}
  </h1>
  {#if description}
  <p>
    {@html description}
  </p>
  {/if}
</div>

<style>
  .page-title {
    position: relative;
    padding: 2rem;
  }
  p {
    max-width: 720px;
  }
  @media only screen and (max-width: 768px) {
    .page-title {
      margin-bottom: 1rem;
      padding: 1rem;
    }
  }
</style>