<script>
	import DropNav from './DropNav.svelte';

	export let buttonSize = 'big';
	export let hasMenu = false;
	let menuOpen = false;

	const toggleNav = () => {
		menuOpen = !menuOpen;
	};

	$: menuOpen;
</script>

<div class="button-group">
	<a href="/about">
		<div class="button button-{buttonSize}">
			<div class="icon" />
			<span>Profile</span>
		</div>
	</a>
	<a href="mailto:woldsteffen@gmail.com">
		<div class="button button-icon-{buttonSize}">
			<svg
				class="icon"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 455.861 455.861"
				style="enable-background:new 0 0 455.861 455.861"
				xml:space="preserve"
				><path
					d="m52.616 139.032 102.427 88.898-102.427 88.898c-6.162 5.349-6.823 14.68-1.474 20.843 5.349 6.162 14.68 6.821 20.842 1.474l105.6-91.651 40.663 35.292c2.778 2.411 6.231 3.616 9.684 3.616s6.906-1.205 9.684-3.616l40.663-35.292 105.6 91.651c6.162 5.348 15.493 4.688 20.842-1.474 5.349-6.163 4.688-15.494-1.474-20.843L300.819 227.93l102.427-88.898c6.163-5.349 6.823-14.68 1.474-20.843s-14.682-6.822-20.842-1.474L227.931 252.063 71.984 116.715c-6.162-5.348-15.494-4.687-20.842 1.474-5.349 6.163-4.688 15.494 1.474 20.843z"
				/><path
					d="M441.088 63.154H14.774C6.615 63.154 0 69.77 0 77.929v300.003c0 8.16 6.615 14.774 14.774 14.774h426.313c8.16 0 14.774-6.614 14.774-14.774V77.929c.001-8.159-6.613-14.775-14.773-14.775zm-14.774 300.003H29.549V92.703h396.765v270.454z"
				/></svg
			>
		</div>
	</a>
	{#if hasMenu}
		<div class="button button-menu" on:click={toggleNav}>
			<svg class="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
				/></svg
			>
		</div>
	{/if}
</div>

{#if menuOpen}
	<div class="holder" on:click={toggleNav}>
		<DropNav />
	</div>
{/if}

<style>
	.holder {
		position: fixed;
	}
	.button-group {
		display: flex;
		gap: 1rem;
	}
	.button {
		color: white;
		border: 2px solid transparent;
		cursor: pointer;
	}
	.button-small {
		padding: 0 2rem;
		height: 3rem;
		border-radius: 999px;
	}
	.button-big {
		padding: 0 4rem;
		height: 4rem;
		border-radius: 999px;
		font-size: 1.5rem;
	}
	.button-small,
	.button-big {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--accent-color);
	}
	.button-icon-big,
	.button-icon-small {
		display: grid;
		place-content: center;
		border-radius: 999px;
		background: linear-gradient(135deg, hsl(50, 50%, 40%), hsl(50, 50%, 60%), hsl(50, 50%, 40%));
	}
	.button-icon-small {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
	.button-icon-big {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
	}
	.button-icon-small .icon {
		width: 1.75rem;
	}
	.button-icon-big .icon {
		width: 2.25rem;
	}
	.button-menu {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
	.button-menu .icon {
		fill: var(--accent-color);
		transition: all 0.25s linear;
	}
	.button-menu:hover .icon {
		fill: var(--accent-color-hover);
	}
	@media (min-width: 768px) {
		.button-menu {
			display: none;
		}
	}
</style>
