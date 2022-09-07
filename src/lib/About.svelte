
<section>
	<div class="about">
		<div class="info-label">
			<strong>Priority</strong>
			<span>Frontend Development</span>
		</div>
		<div class="info">
			<div class="title featured">
				<div class="dob">NO-211192</div>
				<div class="name">
					<span>Steffen</span>
					<span>Wold</span>
				</div>
			</div>
			<div class="divider"></div>
			<p>
				Based in Innlandet, Norway. Passionate about technology, user interfaces, and modern web applications.
				Inspired by efficiency and productivity. Currently on internship at <a href="https://ikomm.no" target="_blank">Ikomm</a>.
			</p>
		</div>
	</div>
	<div class="filler"></div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 5rem;
	}
	.about {
		position: relative;
		top: 20rem;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.info {
		position: relative;
		padding-top: 32rem;
		display: flex;
		flex-direction: column;
	}
	.title {
		position: absolute;
		top: 10rem;
		right: 5.6rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transform: rotate(-90deg);
	}
	.dob {
		font-size: 1.5rem;
	}
	.name {
		display: flex;
		flex-direction: column;
		font-size: 12rem;
		line-height: .8;
	}
	.info-label {
		margin: 10rem;
		display: flex;
		flex-direction: column;
		text-transform: uppercase;
	}
	.info-label strong {
		font-size: .8rem;
		color: rgba(255,255,255,.5);
		font-weight: normal;
		letter-spacing: .1rem;
	}
	.info-label strong:before {
		content: '';
		margin-right: .5rem;
		display: inline-block;
		vertical-align: middle;
		width: 1.5rem;
		height: 1px;
		background: rgba(255,255,255,.5);
	}
	.divider {
		position: relative;
		right: -5rem;
		margin: 3rem 0;
		width: calc(100% - 10rem);
		height: 2px;
		background: rgba(255,255,255,.5);
	}
	p {
		font-size: 1rem;
	}

	@media screen and (max-width: 60em) {
		.info {
			margin: 1rem;
		}
		.about {
			grid-template-columns: 1fr;
		}
	}
</style>
