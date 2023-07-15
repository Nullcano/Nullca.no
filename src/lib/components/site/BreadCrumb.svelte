<script>
  export let items
</script>

<div>
  {#each items as item}
    <span>{item}</span>
  {/each}
</div>