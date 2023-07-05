<script>
  import MiniProfile from "./profiles/MiniProfile.svelte"

  let categories = ['Bots', 'Apps', 'Games', 'Graphics', 'Notes', 'UI-UX']
</script>

<div class="category-list flex flex-wrap gap-4">
  {#each categories as category}
    <MiniProfile image="/images/{category.toLowerCase()}.png" name={category} link="/categories/{category.toLowerCase()}" />
  {/each}
</div>