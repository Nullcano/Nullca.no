<script>
  export let gap
</script>

<div class="gap-{gap}">
  <slot></slot>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
  .gap-s {
    gap: .25rem
  }
  .gap-m {
    gap: .5rem
  }
  .gap-l {
    gap: 1rem
  }
  .gap-xl {
    gap: 1.5rem
  }
</style>