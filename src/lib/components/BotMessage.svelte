<script>
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let name, portrait, confidenceLevel, confidenceValue, text, profileSlug;
</script>

<div class="ml4 mb3 pa3 br3 mw6 grid grid-x-auto-fill gap-2 self-start bg-black-50">
  <Avatar image={portrait} text={name} link={profileSlug} size="s" variant="rounded" />
  <div class="w-100">
    <div class="flex gap-2">
      <a class="white-50" href={profileSlug} alt={name} data-sveltekit-preload-data="off">{name}</a>
      <div class="flex gap-2 confidence {confidenceLevel.toLowerCase()} nowrap">
        <img class="w1 h1" src="/images/{confidenceLevel.toLowerCase()}.svg" alt={confidenceLevel}>
        {#if confidenceLevel != "Confused"}
          <span class="db">{confidenceValue}% {confidenceLevel}</span>
          {:else}
          <span class="db">{confidenceLevel}</span>
        {/if}
      </div>
    </div>
    <div class="pt2">
      {text}
    </div>
  </div>
</div>

<style>
  .confident {
    color: hsl(140, 50%, 50%);
  }
  .conventional {
    color: hsl(40, 75%, 50%);
  }
  .confused {
    color: hsl(345, 100%, 50%);
  }
</style>