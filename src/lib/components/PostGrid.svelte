<div>
  <slot></slot>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media only screen and (max-width: 90em) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 60em) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>