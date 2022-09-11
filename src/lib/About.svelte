<script>
	import { goto } from '$app/navigation';
</script>

<div class="page">
	<div class="title">
		<svg viewBox="0 0 44 32">
			<polygon points="2,2 42,2 22,30" />
			SVG:404
		</svg>
		<div class="dob featured">NO.211192.53-57</div>
		<div class="name featured">
			<span>Steffen</span>
			<span>Wold</span>
		</div>			
	</div>
	<div class="description">
		<p>
			Frontend developer based in Innlandet, Norway. Passionate about technology, user interfaces and modern web applications.
			Inspired by efficiency and productivity. Currently on internship at <a href="https://ikomm.no" target="_blank">Ikomm</a>.
		</p>
		<div class="explore-button flex pointer" on:click={() => goto("/explore")}>
			<div class="button-text featured">
				<span>Explore</span>
			</div>
			<div class="button">
				<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
				</svg>
			</div>
		</div>
	</div>
	<figure>
		<img src="images/a-photo-of-a-cyborg-in-a-norwegian-landscape.png" alt="Cyborg in a Norwegian landscape" />
	</figure>
</div>	

<div class="button cta" on:click={() => goto("/explore")}>
	<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
	</svg>
</div>

<style>
	.page {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 5rem;
	}
	.title {
		grid-area: 1 / 1 / 2 / 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
	}
	.title svg {
		margin-bottom: 1rem;
		width: 1.5rem;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.dob {
		font-size: 1.5rem;
		color: rgba(255,255,255,.5);
	}
	.name {
		display: flex;
		flex-direction: column;
		font-size: 7.5rem;
		font-weight: 700;
		line-height: 1;
	}
	figure {
		grid-area: 1 / 2 / 3 / 3; 
		position: relative;
		width: calc(100% + 10rem);
		height: 75vh;
		mix-blend-mode: luminosity;
		filter: brightness(.5);
		overflow: hidden;
	}
	figure img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
	.description {
		grid-area: 2 / 1 / 3 / 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2.5rem;
		font-size: 1.25rem;
		color: rgba(255,255,255,.5);
	}
	.explore-button {
		color: #fff;
		align-self: flex-end;
	}
	.button-text {
		position: relative;
		margin-right: -1px;
		padding: 0 1rem;
		height: 2.5rem;
		border: 1px solid rgba(255,255,255,.1);
		display: grid;
		place-content: center;
	}
	.button-text::before, .button-text::after {
		content: '';
		position: absolute;
		width: 1rem;
		height: 1px;
		background: rgba(255,255,255,.5);
		transition: all .25s linear;
	}
	.button-text::before {
		top: -1px;
		left: -1px;
	}
	.explore-button:hover .button-text::before {
		left: calc(100% - 1rem);
	}
	.explore-button:hover .button-text::after {
		right: calc(100% - 1rem);
	}
	.button-text::after {
		bottom: -1px;
		right: -1px;
	}
	@media screen and (max-width: 60em) {
		.page {
			height: auto;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}
		.title {
			margin-top: 5rem;
			grid-area: auto;
		}
		.name {
			font-size: 5rem;
		}
		.description {
			grid-area: auto;
		}
		.explore-button {
			align-self: flex-start;
		}
		figure {
			grid-area: auto;
			position: relative;
			left: -2.5rem;
			width: calc(100% + 10rem);
			height: 20rem;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			overflow: hidden;
			z-index: 10;
		}
	}
	@media screen and (max-width: 30em) {
		.title {
			margin-top: 2.5rem;
		}
		.dob {
			font-size: 1rem;
		}
		.name {
			font-size: 2.5rem;
		}
		figure {
			left: -1rem;
		}
	}
</style>
