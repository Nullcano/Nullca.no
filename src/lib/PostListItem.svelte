<script>
	export let item
</script>

<a href={`/${item.type}/${item.slug}`} class="post-list-item-link">
	<figure class="post-list-item-thumb">
		<img src="../thumb/{item.slug}.{item.fileType}" alt="{item.title}" />
	</figure>
  <div>
    <h2>{item.title}</h2>
    <p>{item.content[0]}</p>
  </div>
</a>

<style>
	.post-list-item-link {
		margin: 0 auto;
		width: 90%;
		display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
		transition: all .25s linear;
    text-decoration: none;
	}
	.post-list-item-thumb {
		margin: 0;
    display: block;
		width: 5rem;
    height: 5rem;
	}
</style>
