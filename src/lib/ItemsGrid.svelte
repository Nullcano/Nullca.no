<div class="items-grid">
	<div class="inner">
		<slot />
		<slot />
	</div>
</div>

<style>
	.items-grid {
		padding-top: 24px;
		width: 100%;
		white-space: nowrap;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	.inner {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: end;
		-ms-flex-align: end;
		align-items: flex-end;
		-webkit-animation: marquee 10s linear infinite;
		animation: marquee 10s linear infinite;
		animation-play-state: running;
		-webkit-backface-visibility: hidden;
		-webkit-transform-style: preserve-3d;
		will-change: transform;
	}
	@keyframes marquee {
		to {
			-webkit-transform: translateX(-100%);
			transform: translateX(-50%);
		}
	}
</style>
