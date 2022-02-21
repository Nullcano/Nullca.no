<script>
  import Footer from '$lib/Footer.svelte'
</script>

<div class="bg"></div>
<div class="container">
  <slot></slot>
</div>

<style>
  .bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 12rem;
    background-image: url('https://namelessmc.com/uploads/template_banners/homepage_bg_trimmed.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: .5;
    z-index: 0;
  }
  .bg:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, hsla(200, 15%, 8%, .75) 0%, hsla(200, 15%, 8%, 1) 100%);
  }
  .container {
    position: relative;
  }
</style>