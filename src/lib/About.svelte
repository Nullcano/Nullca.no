<script>
	import { goto } from '$app/navigation';
</script>

<section>
	<div class="article-page about">
		<div class="inner">
			<div class="article-header grid col-2 gap-3">
				<div class="title flex column content-end gap-2">
					<svg viewBox="0 0 44 32">
						<polygon points="2,2 42,2 22,30" />
						SVG:404
					</svg>
					<div class="dob featured">NO-211192</div>
					<div class="name featured">
						<span>Steffen</span>
						<span>Wold</span>
					</div>	
				</div>
				<figure>
					<img src="images/a-photo-of-a-cyborg-in-a-norwegian-landscape.png" alt="Cyborg in a Norwegian landscape" />
				</figure>
			</div>
			<div class="divider"></div>
			<div class="description">
				<p>
					Frontend developer based in Innlandet, Norway. Passionate about technology, user interfaces and modern web applications.
					Inspired by efficiency and productivity. Currently on internship at <a href="https://ikomm.no" target="_blank">Ikomm</a>.
				</p>
			</div>	
		</div>
	</div>
	<div class="filler">
		<div class="cta">
			<div class="button pointer" on:click={() => goto("/explore")}>
				<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 5rem;
	}
	.title {
		margin-top: 15rem;
	}
	.title svg {
		margin-bottom: 1rem;
		width: 1.5vw;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.dob {
		font-size: 2rem;
	}
	.name {
		display: flex;
		flex-direction: column;
		font-size: 8rem;
		line-height: .8;
	}
	figure {
		position: relative;
		width: 100%;
		height: 100%;
		mix-blend-mode: luminosity;
		filter: brightness(.5);
		border-bottom-left-radius: 999px;
		border-bottom-right-radius: 999px;
		overflow: hidden;
		z-index: 10;
	}
	figure img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
	.divider {
		position: relative;
		margin: 2.5rem auto;
		width: 100%;
		height: 1px;
		background: rgba(255,255,255,.5);
	}
	.divider::after {
		content: '';
		position: absolute;
		left: 0;
		width: 50%;
		height: 1px;
		background: #fff;
	}
	.description {
		margin-bottom: 5rem;
		font-size: 1.25rem;
		color: rgba(255,255,255,.5);
	}
	@media screen and (max-width: 60em) {

	}
</style>
