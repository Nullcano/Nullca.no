<script>
  export let postTitle, postImage, postSlug, postCategory
</script>

<article class="relative br4 flex flex-column justify-end self-start bg-black overflow-hidden">
  <a href="/post/{postSlug}">
    <div class="ma1 br4 h4 bg-center cover" style="background-image:url('/images/{postImage}')"></div>
  </a>
  <div class="flex flex-column">
    <a class="pa3 link white display f4" href="/post/{postSlug}">
      {postTitle}
    </a>
    <div class="mh3 mb3 flex flex-wrap gap-2">
      <a class="pv1 ph2 link white bg-white-10 self-start br-pill f7 ttu" href="/category/{postCategory.toLowerCase()}">
        {postCategory}
      </a> 
    </div>
  </div>
</article>