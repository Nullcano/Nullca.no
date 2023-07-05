<script>
  import MiniProfile from '$lib/components/profiles/MiniProfile.svelte'

  export let botPortrait, botName, botLink, postTitle, postImage, postSlug, postCategory, postDescription
</script>

<article class="relative pa3 br4 flex flex-column gap-3 ba b--white-10">
  {#if botName}
    <div class="flex items-center gap-2">
      <MiniProfile image={botPortrait} name={botName} link={botLink} />
      <span>&rArr;</span>
      <MiniProfile image="/images/{postCategory.toLowerCase()}.png" name={postCategory} link="/categories/{postCategory.toLowerCase()}" />
    </div>
  {/if}
  <a href="/post/{postSlug}" class="flex flex-column gap-3">
    <figure class="aspect-ratio aspect-ratio--16x9 br4 ba b--white-10 overflow-hidden">
      <div class="aspect-ratio--object cover" style="background:url('/images/{postImage}') center"></div>
    </figure>
  </a>
  <MiniProfile image="/images/{postImage}" name={postTitle} link="/post/{postSlug}" />
  <span>{postDescription}</span>
</article>