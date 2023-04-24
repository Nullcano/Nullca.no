<div class="grid-nav">
  <slot></slot>
</div>

<style>
  .grid-nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1rem;
  }
</style>