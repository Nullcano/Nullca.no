<script>
	import TopBar from '$lib/components/topbar/TopBar.svelte'
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte'
	import Chat from '$lib/components/Chat/Chat.svelte'
	import '../../app.css'
</script>

<div class="relative min-vh-100">
	<div class="noise"></div>
	<TopBar />
	<div class="relative h-100 grid grid-x-auto-fill">
		<Sidebar />
		<div class="relative grid grid-x-fill-auto">
			<main class="ma3">
				<section class="mw8 center">
					<slot></slot>
				</section>
			</main>
			<Chat />
		</div>
	</div>
</div>

<style>
	.noise {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: .5;
	}
	.noise {
		background-image: url('/images/noise.gif');
		mix-blend-mode: multiply;
	}
</style>