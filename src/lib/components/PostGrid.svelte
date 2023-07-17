<div>
  <slot></slot>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
</style>