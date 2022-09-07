<section>
	<div class="about">
		<div class="left">
			<div class="info-label">
				<strong>Priority</strong>
				<span>Frontend Development</span>
			</div>
			<div class="info-label">
				<strong>Project</strong>
				<span>Sweet CSS</span>
			</div>
		</div>
		<div class="info">
			<div class="title items-end content-end featured">
				<div class="name">
					<span>Steffen</span>
					<span>Wold</span>
				</div>	
				<div class="flex items-center gap-3">
					<svg viewBox="0 0 44 32">
						<polygon points="2,2 42,2 22,30" />
						SVG:404
					</svg>
					<div class="dob">NO-211192</div>
				</div>
			</div>
			<div class="divider"></div>
			<div class="description">
				<p>
					Based in Innlandet, Norway. Passionate about technology, user interfaces, and modern web applications.
					Inspired by efficiency and productivity. Currently on internship at <a href="https://ikomm.no" target="_blank">Ikomm</a>.
				</p>
			</div>	
		</div>
	</div>
	<div class="filler"></div>
</section>

<style>
	section {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 5rem;
		overflow: hidden;
	}
	.about {
		position: relative;
		top: 15rem;
		height: calc(100vh - 15rem);
		display: grid;
		grid-template-columns: 1fr 1fr;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.left {
		padding: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}
	.info-label {
		position: relative;
		left: 50%;
		margin-left: -5rem;
		display: flex;
		flex-direction: column;
		align-self: flex-start;
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
	.info {
		position: relative;
		padding: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 2rem;
	}
	.title {
		margin-top: -5rem;
		display: flex;
		gap: 2rem;
	}
	svg {
		width: 1.5vw;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.dob {
		font-size: 2vw;
	}
	.name {
		display: flex;
		flex-direction: column;
		font-size: 10rem;
		line-height: .8;
	}
	.divider {
		position: relative;
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
		margin: 0 auto;
		width: 70%;
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
