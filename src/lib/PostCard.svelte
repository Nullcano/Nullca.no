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
		margin-bottom: 2rem;
		width: 320px;
		display: inline-block;
		position: relative;
		-webkit-transform-origin: bottom;
		transform-origin: bottom;
		transition: all .25s linear;
		box-shadow: -.2rem .2rem 0 white;
		mix-blend-mode: luminosity;
	}
	.post-card-link:nth-child(odd) {
		margin-bottom: 5rem;
	}
	.post-card-link:before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    border-top: 40px solid hsl(240, 13%, 9%);
    border-left: 40px solid transparent;
    width: 0;
}
	.post-card-link:hover {
		margin-bottom: 3rem;
		filter: contrast(1);
		box-shadow: -.2rem .2rem 0 #ff0069;
	}
	.post-card-link:nth-child(odd):hover {
		margin-bottom: 4rem;
	}
	.post-card-thumb {
		margin: 0;
		width: 100%;
		overflow: hidden;
		transition: all 0.25s linear;
	}
</style>
