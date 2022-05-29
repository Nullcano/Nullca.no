<script>
  import '../styles/global.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'

	let mX = 0, mY;
	
	function handle_mousemove(e) {
		mX = e.pageX;
    mY = e.pageY;
	}

	$: (mX, mY);
</script>

<svelte:window on:mousemove={handle_mousemove}/>

<div class="parallax">
  <i style="transform: translate(-{mX/280}%, -{mY/280}%)"></i>
  <i style="transform: translate(-{mX/240}%, -{mY/240}%)"></i>
  <i style="transform: translate(-{mX/200}%, -{mY/200}%)"></i>
  <i style="transform: translate(-{mX/160}%, -{mY/160}%)"></i>
  <i style="transform: translate(-{mX/120}%, -{mY/120}%)"></i>
</div>

<Header />
<slot></slot>
<Footer />

<style>
  .parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 75vh;
    overflow: hidden;
    filter: grayscale(1);
    opacity: 0.05;
    z-index: -1;
  }
  .parallax::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, hsl(260, 8%, 8%) 100%);
    z-index: 0;
  }
  i {
    position: absolute;
    top: calc(50% - 70vh);
    left: calc(50% - 70vw);
    width: 140vw;
    height: 140vh;
    background-size: cover;
    background-position: bottom center;
    background-repeat: repeat-x;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    transition: background-position 1s linear;
  }
  i:nth-child(1) {
    background-image: url('/parallax/1.png');
  }
  i:nth-child(2) {
    background-image: url('/parallax/2.png');
  }
  i:nth-child(3) {
    background-image: url('/parallax/3.png');
  }
  i:nth-child(4) {
    background-image: url('/parallax/4.png');
  }
  i:nth-child(5) {
    background-image: url('/parallax/5.png');
  }
</style>