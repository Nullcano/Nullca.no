<div>
  <slot></slot>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
  }
</style>