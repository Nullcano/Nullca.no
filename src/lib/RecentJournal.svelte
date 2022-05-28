<script>
  import Marquee from 'svelte-fast-marquee'
</script>

<a href="./journal">
  <div class="button">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16"><path d="M15.09 12.79a1 1 0 0 0-.086-1.638L15 5.33 14 6v5.15a1.001 1.001 0 0 0-.092 1.629l-.378.502a2.48 2.48 0 0 0-.53 1.498v1.222H13.815a.88.88 0 0 0 .853-.664l.331-1.336v2h1v-1.21a2.486 2.486 0 0 0-.534-1.505zM8 0 0 4l8 5 8-5-8-4z"/><path d="M8 10 3 6.67v1.71C3 9.29 5.94 12 8 12s5-2.71 5-3.62V6.67z"/></svg>
    </div>
    <div class="text">
      <span>Academy</span>
      <span>Journal</span>
    </div>
  </div>
</a>

<style>
  .button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: .5rem 1rem;
    display: flex;
    gap: 1rem;
    color: white;
    background: black;
    border-radius: 999px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 1rem;
    font-family: 'Righteous', sans-serif;
    text-transform: uppercase;
  }
  svg {
    height: 2rem;
    fill: currentColor;
  }
  @media (max-width: 768px) {

  }
</style>