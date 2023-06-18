<script>
  import MiniProfile from "./profiles/MiniProfile.svelte"

  let categories = ['Articles', 'Applications', 'Artwork', 'Bots', 'Games']
</script>

<div class="category-list">
  {#each categories as category}
    <MiniProfile image="/images/{category.toLowerCase()}.png" name={category} link="/categories/{category.toLowerCase()}" />
  {/each}
</div>

<style>
  .category-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>