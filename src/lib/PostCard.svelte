<script>
	export let item
</script>

<a href={`/${item.type}/${item.slug}`} class="post-card-link">
	<figure class="post-card-thumb">
		<img src="../thumb/{item.slug}.{item.fileType}" alt="{item.title}" />
	</figure>
</a>

<style>
	.post-card-link {
		margin-right: 1rem;
		width: 320px;
		display: inline-block;
		position: relative;
		filter: grayscale(1);
		-webkit-transform-origin: bottom;
		transform-origin: bottom;
		transition: all .25s linear;
	}
	.post-card-link:hover {
		margin-bottom: 1rem;
		filter: grayscale(0);
	}
	.post-card-thumb {
		margin: 0;
		width: 100%;
		overflow: hidden;
		transition: all 0.25s linear;
	}
</style>
