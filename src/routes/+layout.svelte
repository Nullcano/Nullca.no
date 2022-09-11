<script>
	import '../styles/sweet.css';
	import '../styles/fonts.css';
	import '../styles/global.css';
	import OverlayNavigation from '$lib/OverlayNavigation.svelte';
</script>

<div class="diagonal-lines"></div>
<main>
	<slot />
</main>
<OverlayNavigation />

<style>
	.diagonal-lines {
		position: fixed;
		width: 20rem;
		height: 2.5rem;
		top: 2.5rem;
		left: 50%;
		margin-left: -10rem;
		background-size: .75rem .75rem;
		background-image:  repeating-linear-gradient(to right, rgba(255,255,255,.1), rgba(255,255,255,.1) 2px, transparent 2px, transparent);
		transform: skew(45deg);
	}
	main {
		margin: 0 10rem;
		padding-top: 10rem;

	}
	@media screen and (max-width: 90em) {
		main {
			margin: 0 5rem;
		}
	}
	@media screen and (max-width: 60em) {
		main {
			margin: 0 2.5rem;
		}
	}
	@media screen and (max-width: 30em) {
		main {
			margin: 0 1rem;
		}
	}
</style>