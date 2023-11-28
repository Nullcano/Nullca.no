<script>
  import Avatar from '$lib/components/media/Avatar.svelte';

  export let name;
  export let portrait;
  export let text;
  export let confidenceLevel;
  export let confidenceValue;
</script>

<div class="message relative mb3 measure flex flex-column gap-2 self-start">
  <div class="flex items-center gap-2">
    <Avatar image={portrait} text={name} link={null} size="s" variant="circle" />
    <span>{name}</span>
    <div class="flex gap-2 confidence {confidenceLevel.toLowerCase()} nowrap">
      <img class="w1 h1" src={"/images/" + confidenceLevel.toLowerCase() + ".svg"} alt={confidenceLevel} />
      {#if confidenceLevel !== "Confused"}
        <span class="db">{confidenceValue}% {confidenceLevel}</span>
      {:else}
        <span class="db">{confidenceLevel}</span>
      {/if}
    </div>
  </div>
  <div class="pa3 br4 bg-black self-end">
    <span class="lh-copy">{@html text}</span>
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

  .message {
    animation: appear .2s linear forwards;
  }

  @keyframes appear {
    from { left: -100% }
    to { left: 0 }
  }
</style>
