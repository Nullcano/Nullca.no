<script>
  import Footer from '$lib/Footer.svelte'
</script>

<section>
  <div class="bg"></div>
  <div class="container">
    <slot></slot>
  </div>
  <Footer />
</section>

<style>
  section {
    position: relative;
    max-height: calc(100vh - 3rem);
    overflow-y: auto;
  }
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
  }
  .bg:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, hsla(0, 0%, 5%, .5) 0%, hsla(0, 0%, 5%, 1) 100%);
  }
  .container {
    position: relative;
  }
</style>