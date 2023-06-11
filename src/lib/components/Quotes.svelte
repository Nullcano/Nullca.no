<script>
  const quotes = [
    "Screens are the limit, and they are getting smaller",
    "Imagination has no boundaries, except the ones we impose on our own minds.",
    "In a world of screens, let your thoughts expand beyond the pixels.",
    "Life's canvas is vast, but it takes a curious mind to explore its hidden corners.",
    "Greatness lies not in the size of the stage, but in the magnitude of one's passion.",
    "Like stars in the night sky, our dreams shine brightest when we step away from the glare of screens.",
    "Unleash the power of your soul, for it knows no limits even in the tiniest of spaces.",
    "In the realm of ideas, the size of the screen matters not; it's the brilliance of the concept that captivates.",
    "Embrace the vastness of the world beyond the screen, for true experiences lie in the realm of the tangible.",
    "Let your thoughts roam free, unbound by the confines of screens and behold the miracles of the physical world.",
    "Within the smallest screens, great stories are told; but it is in the grand tapestry of existence that we truly find ourselves."
  ]
</script>

<blockquote>
  <abbr>QOTS</abbr>
  {quotes[Math.floor(Math.random() * quotes.length)]}
</blockquote>

<style>
  blockquote {
    margin: 6rem 0;
    font-style: italic;
    color: var(--light-60);
    font-size: 13px;
  }
  abbr:after {
    content: '';
    position: relative;
    top: .2rem;
    margin-inline: .5rem;
    display: inline-block;
    width: .25rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: rgba(255,255,255,.5);
  }
</style>