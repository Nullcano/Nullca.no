<script>
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let image, name, link
</script>

{#if link}
  <div class="relative flex items-center gap-2 self-start white">
    <Avatar image={image} size="s" variant={'circle'} link={link} text={name} />
    <a href={link}>{name}</a>
  </div>
{:else}
  <div class="relative flex items-center gap-2 self-start white">
    <Avatar image={image} size="s" variant={'circle'} link={null} text={name} />
    <span>{name}</span>
  </div>
{/if}