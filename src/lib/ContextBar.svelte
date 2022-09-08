<script>
  export let showClose;
</script>

<div class="context-bar">
  <div class="inner">
    <slot />
  </div>
  {#if showClose}
    <div class="close">X</div>
  {/if}
</div>

<style>
	.context-bar {
		position: absolute;
		top: 5rem;
		right: 0;
		left: 5rem;
		height: 5rem;
		display: grid;
		grid-template-columns: 1fr 5rem;
		border-top: 1px solid rgba(255,255,255,.1);
		border-bottom: 1px solid rgba(255,255,255,.1);
	}
  .inner {
    padding: 0 5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
	.close {
		width: 5rem;
		height: 5rem;
		display: grid;
		place-content: center;
		font-size: 3rem;
	}
</style>