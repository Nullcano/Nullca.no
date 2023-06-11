<script>
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		height: 5rem;
		margin-inline: auto;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		background: var(--dark-200);
		border-radius: 1.5rem;
	}
	p {
		margin-inline: 3rem;
	}
</style>