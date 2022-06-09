<section class="profile-header">
	<div class="cover" />
	<div class="contained container">
		<div class="avatar" />
		<div class="info">
			<h1 class="name">Steffen Wold</h1>
			<h2 class="title">Frontend developer</h2>
			<h3 class="location">Innlandet, Norway</h3>
		</div>
	</div>
</section>

<style>
	.profile-header {
		position: relative;
		margin-top: -5rem;
	}
	.cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 12rem;
		background-color: hsl(260, 8%, 6%);
		background-image: url('/ground.gif');
		background-size: 80% auto;
		background-position: 100% 20%;
		background-repeat: no-repeat;
		image-rendering: crisp-edges;
		image-rendering: pixelated;
	}
	.cover::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 12rem;
		background-image: linear-gradient(to top, hsl(260, 8%, 6%), transparent);
	}
	.container {
		position: relative;
		top: 2.25rem;
		padding-top: 3rem;
		left: 2rem;
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	.avatar {
		width: 6rem;
		height: 6rem;
		border: 3px solid var(--accent-color);
		background-color: hsl(260, 8%, 4%);
		background-image: url('/avatar.gif');
		background-size: 100%;
		background-position: top center;
		border-radius: 50%;
		image-rendering: crisp-edges;
		image-rendering: pixelated;
	}
	h1,
	h2,
	h3 {
		margin: 0;
		font-weight: normal;
	}
	h1 {
		font-size: 2rem;
		margin: 0;
		text-shadow: 0px 0px 0.5rem #000;
	}
	h2 {
		font-size: 1.25rem;
		margin: 0;
	}
	h3 {
		font-size: 1rem;
		margin: 0;
		color: hsl(260, 8%, 60%);
	}
	@media (max-width: 768px) {
		.container {
			left: 0;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
		h1 {
			font-size: 1.5rem;
		}
		h2 {
			font-size: 1rem;
		}
		h3 {
			font-size: 0.75rem;
		}
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
