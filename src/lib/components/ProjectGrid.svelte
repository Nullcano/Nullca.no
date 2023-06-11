<div>
  <slot></slot>
</div>

<style>
  div {
    margin-block: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1.5rem;
  }
</style>