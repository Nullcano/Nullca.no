<script>
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let postTitle, postImage, postIcon, postSlug, postCategory, postDescription
</script>

<article class="relative br4 flex flex-column justify-end self-start cover overflow-hidden" style="background:url('/images/{postImage}') center">
  <div class="h3"></div>
  <a href="/post/{postSlug}">
    <div class="relative pa3 flex flex-column bg-black-50 bd-blur">
      <div style="margin-top:-3rem">
        <Avatar image="/images/{postIcon}" size="m" variant="circle" link={null} />
      </div>
      <div class="mt2">
        <div class="display f4">{postTitle}</div>
        <div class="desc mt2 white-50">{postDescription}</div>  
      </div>
    </div>
  </a>
  <div class="absolute top-0 right-0 ma2 ph3 br-pill bg-black-50 bd-blur">
    <a href="/category/{postCategory.toLowerCase()}">
      <div class="flex items-center justify-center gap-2 f6">
        <span class="white-50">Published in</span>
        <Avatar image="/images/{postCategory.toLowerCase()}.png" size="s" variant="circle" link={null} />
        <span>{postCategory}</span>
      </div>
    </a>
  </div>
</article>

<style>
  .desc {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>