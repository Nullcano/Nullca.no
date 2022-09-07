
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
			<div class="outer-title">
				<div class="inner-title">
					<div class="title">
						<div class="content featured">
							<svg viewBox="0 0 44 32">
								<polygon points="2,2 42,2 22,30" />
								SVG:404
							</svg>
							<div class="dob">NO-211192</div>
							<div class="name">
								<span>Steffen</span>
								<span>Wold</span>
							</div>	
						</div>
					</div>
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
		display: grid;
		grid-template-columns: 1fr 5rem;
	}
	.about {
		position: relative;
		top: 15rem;
		height: calc(100vh - 15rem);
		display: grid;
		grid-template-columns: 1fr 1fr;
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
	.outer-title {
		display: table;
		vertical-align: bottom;
	}
	.inner-title {
		padding: 50% 0;
		height: 0;
	}
	.title {
		margin-top: -50%;
		display: block;
		transform-origin: top left;
		transform: rotate(-90deg) translate(-100%);
		white-space: nowrap;
	}
	.title .content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	svg {
		width: 1.5rem;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.dob {
		font-size: 1.5rem;
	}
	.name {
		display: flex;
		flex-direction: column;
		font-size: 14rem;
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
