<div class="post-grid">
  <slot></slot>
</div>

<style>
  .post-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 1rem;
  }
</style>