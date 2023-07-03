<script>
  export let link, image, text, size, variant
</script>

{#if !link}
  <div class="avatar
    {
      size === 'xs' ? 'w1 h1' :
      size === 's' ? 'w2 h2' :
      size === 'm' ? 'w3 h3' :
      size === 'l' ? 'w4 h4' :
      size === 'xl' ? 'w5 h5' : ''
    } {
      variant === 'rounded' ? 'br3' : 
      variant === 'circle' ? 'br-100' : ''
    } overflow-hidden">
    <img src={image} alt={text} />
  </div>
  {:else}
  <a href={link} alt={text} data-sveltekit-preload-data="off">
    <div class="avatar 
      {
        size === 'xs' ? 'w1 h1' :
        size === 's' ? 'w2 h2' :
        size === 'm' ? 'w3 h3' :
        size === 'l' ? 'w4 h4' :
        size === 'xl' ? 'w5 h5' : ''
      } {
        variant === 'rounded' ? 'br3' : 
        variant === 'circle' ? 'br-100' : ''
      } overflow-hidden">
      <img src={image} alt={text} />
    </div>
  </a>
{/if}