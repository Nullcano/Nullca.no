<script>
	import CTA from '$lib/CTA.svelte';
</script>

<div class="splash">
	<div class="contained">
		<div class="intro">
			<div class="name">Steffen Wold</div>
			<div class="title">Frontend <br />developer</div>
			<div class="alt-title">Explorer</div>
			<div class="location">
				<span>Innlandet, </span>
				<span class="flag">Norway</span>
			</div>
		</div>
		<div class="cta">
			<CTA />
		</div>
	</div>
	<figure>
		<div class="ground" />
		<div class="avatar" />
	</figure>
</div>

<style>
	.splash {
		position: relative;
		width: 100%;
		min-height: 70vh;
		display: flex;
		align-items: center;
	}
	.contained {
		margin: 0 auto;
		padding: 2rem 4rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.intro {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		font-family: 'HypatiaSansPro', sans-serif;
		text-transform: uppercase;
		line-height: 1.2;
	}
	.name {
		margin: 0;
		font-size: 3.6rem;
	}
	.title {
		position: relative;
		font-size: 4.6rem;
		color: transparent;
		-webkit-text-stroke: 2px #fff;
	}
	.title::after {
		content: '';
		position: absolute;
		top: 8rem;
		left: -0.5rem;
		width: 0;
		height: 1rem;
		background: linear-gradient(to right, hsl(50, 50%, 40%), hsl(50, 50%, 60%), hsl(50, 50%, 40%));
		border-radius: 0.5rem;
		animation: 0.5s scrap 1s linear forwards;
	}
	.alt-title {
		position: relative;
		left: -0.5rem;
		font-size: 0;
		background-image: linear-gradient(
			135deg,
			hsl(50, 55%, 40%),
			hsl(50, 55%, 80%),
			hsl(50, 55%, 40%)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transform: rotate(5deg);
		animation: 0.5s appear 1.5s linear forwards;
	}
	@keyframes scrap {
		0% {
			width: 0;
		}
		100% {
			width: 26rem;
		}
	}
	@keyframes appear {
		0% {
			font-size: 0;
		}
		100% {
			font-size: 5.5rem;
		}
	}
	.location {
		font-size: 1.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.flag {
		padding: 0 1rem;
		display: inline-flex;
		background-image: linear-gradient(
			to right,
			#f74444,
			#f74444 25%,
			#fff 25%,
			#fff 40%,
			#0051ff 40%,
			#0051ff 60%,
			#fff 60%,
			#fff 75%,
			#f74444 75%,
			#f74444
		);
		background-size: 100%;
		border-radius: 999px;
		color: transparent;
	}
	.cta {
		margin-top: 3rem;
	}
	figure {
		pointer-events: none;
		position: absolute;
		margin: 0;
		padding: 0;
		right: 0;
		width: 50vw;
		height: 100%;
		image-rendering: crisp-edges;
		image-rendering: pixelated;
	}
	.avatar {
		position: absolute;
		bottom: 280px;
		right: 240px;
		width: 80px;
		height: 232px;
		background: url('/avatar.gif');
		background-size: cover;
	}
	.ground {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 448px;
		height: 360px;
		background: url('/ground.gif');
		background-size: cover;
	}

	@media (max-width: 768px) {
		.splash {
			flex-direction: column;
		}
		.contained {
			padding: 2rem 1rem;
		}
		.intro {
			width: 100%;
			margin-bottom: 2rem;
		}
		.name {
			font-size: 2.5rem;
		}
		.title {
			font-size: 3.5rem;
		}
		.title::after {
			top: 6rem;
			width: 0;
			height: 0.75rem;
		}
		.alt-title {
			font-size: 0;
		}
		.location {
			font-size: 1.25rem;
		}
		.cta {
			margin-top: 2rem;
		}
		figure {
			position: relative;
			width: 100%;
			height: 60vh;
			flex-direction: column;
		}
		@keyframes scrap {
			0% {
				width: 0;
			}
			100% {
				width: 20rem;
			}
		}
		@keyframes appear {
			0% {
				font-size: 0;
			}
			100% {
				font-size: 4rem;
			}
		}
	}
</style>
