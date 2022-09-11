<script>
	import Time from 'svelte-time';
	export let item;
</script>

<a href={`/${item.type}/${item.slug}`} class="post-card-link">
	<div class="timestamp">
		<Time timestamp={item.date} />
	</div>
	<div class="post-card-title featured">
		<span>{item.title}</span>
	</div>
</a>

<style>
	.post-card-link {
		position: relative;
		width: 100%;
		height: 10rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: all .25s linear;
		z-index: 10;
	}
	.post-card-link::before {
		content: '';
    position: absolute;
    top: 0;
		left: 0;
		width: 100%;
		height: 10rem;
		border: 1px solid rgba(255,255,255,.1);
		transition: all .25s linear;
	}
	.post-card-link::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
		right: -1.5rem;
		width: 3rem;
		height: 3rem;
    background: hsl(240, 13%, 9%);
    border-top: 1px solid rgba(255,255,255,.1);
		transform: rotate(-45deg);
		transition: all .25s linear;
		pointer-events: none;
}
	.post-card-link:hover::before  {
    top: .5rem;
		left: .5rem;
	}
	.post-card-link:hover::after {
    bottom: -2rem;
		right: -2rem;
	}
	.timestamp {
		text-transform: uppercase;
		color: rgba(255,255,255,.5);
	}
	.post-card-title {
		font-size: 1.5rem;
	}
</style>
