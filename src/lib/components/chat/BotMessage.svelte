<script>
  import Avatar from '$lib/components/media/Avatar.svelte';

  export let name;
  export let portrait;
  export let text;
  export let confidenceLevel;
  export let confidenceValue;
</script>

<div class="message relative mh3 mb3 grid grid-x-auto-fill gap-2 self-start">
  <Avatar image={portrait} text={name} link={null} size="s" variant="circle" />
  <div class="w-100">
    <div class="flex gap-2">
      <span class="white-50">{name}</span>
      <div class="flex gap-2 confidence {confidenceLevel.toLowerCase()} nowrap">
        <img class="w1 h1" src={"/images/" + confidenceLevel.toLowerCase() + ".svg"} alt={confidenceLevel} />
        {#if confidenceLevel !== "Confused"}
          <span class="db">{confidenceValue}% {confidenceLevel}</span>
        {:else}
          <span class="db">{confidenceLevel}</span>
        {/if}
      </div>
    </div>
    <div class="mt2 pa2 br3 bg-black-20 ba b--dark-gray">
      {@html text}
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

  .message {
    animation: appear .2s linear forwards;
  }

  @keyframes appear {
    from { left: -100% }
    to { left: 0 }
  }
</style>
