<div class="about">
	<div class="title">
		<h1>Steffen Wold</h1>
		<div class="links for-desktop">
			<a href="https://github.com/Nullcano" target="_blank">Github</a>
			<a href="mailto:woldsteffen@gmail.com">Email</a>
		</div>
	</div>
	<h2>Frontend Developer</h2>
	<p>
		Based in Innlandet, Norway. Passionate about technology, user interfaces, and modern web applications.
		Inspired by efficiency and productivity. Currently on internship at <a href="https://ikomm.no" target="_blank">Ikomm</a>.
	</p>
	<div class="links for-mobile">
		<a href="https://github.com/Nullcano" target="_blank">Github</a>
		<a href="mailto:woldsteffen@gmail.com">Email</a>
	</div>
	<a class="archive" href="/journal">
		[Archived] Academy Journal
	</a>
</div>

<style>
	.about {
		padding: 4rem;
		position: relative;
		width: 60rem;
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}
	.title {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	.links {
		align-items: flex-start;
		gap: 1rem;
	}
	.links.for-desktop {
		flex-direction: column;
	}
	.links.for-mobile {
		margin-top: 1rem;
	}
	h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 2.5rem;
	}
	p {
		margin-top: 1rem;
		max-width: 32rem;
		font-size: 1rem;
	}
	a.archive {
		margin-top: 1rem;
		align-self: start;
	}
	@media screen and (max-width: 60em) {
		.about {
			padding: 2rem;
		}
		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 1.5rem;
		}
	}
</style>
