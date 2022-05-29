<script>
  import CTA from '$lib/CTA.svelte'
</script>

<div class="profile">
  <div class="contained">
    <div class="intro">
      <div class="name">Steffen Wold</div>
      <div class="title">Frontend <br/>developer</div>
      <div class="location">
        <span>Innlandet, </span>
        <span class="flag">Norway</span>
      </div>
    </div>
    <div class="cta">
      <CTA />
    </div>
  </div>
  <figure>
    <div class="ground"></div>
    <div class="avatar"></div>
  </figure>
</div>

<style>
  .profile {
    position: relative;
    width: 100%;
    min-height: 70vh;
    display: flex;
    align-items: center;
  }
  .contained {
    margin: 0 auto;
    padding: 2rem 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .intro {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Rammetto One';
    text-transform: uppercase;
    line-height: 1.2;
  }
  .name {
    margin: 0;
    font-size: 2.5rem;
  }
  .title {
    font-size: 3.5rem;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }
  .location {
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .flag {
    padding: 0 1rem;
    display: inline-flex;
    background-image: linear-gradient(to right, #f74444, #f74444 25%, #fff 25%, #fff 40%, #0051ff 40%, #0051ff 60%, #fff 60%, #fff 75%, #f74444 75%, #f74444);
    background-size: 100%;
    border-radius: 999px;
    color: transparent;
  }
  .cta {
    margin-top: 3rem;
  }
  figure {
    position: absolute;
    margin: 0;
    padding: 0;
    right: 0;
    width: 50vw;
    height: 100%;
  }
  .avatar {
    position: absolute;
    bottom: 280px;
    right: 240px;
    width: 80px;
    height: 232px;
    background: url('../avatar.gif');
    background-size: cover;
    image-rendering: crisp-edges;
  }
  .ground {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 448px;
    height: 360px;
    background: url('../ground.gif');
    background-size: cover;
    image-rendering: crisp-edges;
  }

  @media (max-width: 768px) {
    .profile {
      flex-direction: column;
    }
    .contained {
      padding: 2rem 1rem;
    }
    .intro {
      width: 100%;
      margin-bottom: 2rem;
    }
    .name {
      font-size: 1.75rem;
    }
    .title {
      font-size: 2.5rem;
    }
    .location {
      font-size: 1.25rem;
    }
    .cta {
      margin-top: 2rem;
    }
    figure {
      position: relative;
      width: 100%;
      height: 50vh;
      flex-direction: column;
    }
  }
</style>