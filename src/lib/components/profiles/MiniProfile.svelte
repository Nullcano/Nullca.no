<script>
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let image, name, link
</script>

{#if link}
  <a class="mini-profile relative pa2 pr3 flex items-center self-start white bg-black-50 b--white-10 br-pill" href="{link}">
    <Avatar image={image} size="s" variant={'circle'} />
    <div class="ml2">{name}</div>
  </a>
{:else}
  <div class="mini-profile relative pa2 pr3 flex items-center self-start white bg-black-50 b--white-10 br-pill">
    <Avatar image={image} size="s" variant={'circle'} />
    <div class="ml2">{name}</div>
  </div>
{/if}
