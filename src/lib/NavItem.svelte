<script>
  export let link, icon, title
</script>

<a href="{link}">
  <div class="nav-card">
    <div class="card-icon">
      <img src="{icon}" alt="{title}" />
    </div>
    <div class="card-title">{title}</div>
  </div>
</a>

<style>
  .nav-card {
		padding: 1rem;
		background-color: hsl(256, 25%, 16%);
		transition: background-color .2s linear;
		border-radius: 1rem;
	}

	.nav-card:hover {
		background-color: hsl(256, 25%, 12%);
	}

	.card-icon {
		padding: .5rem;
		width: 3rem;
		height: 3rem;
		border-radius: 1rem;
		background-color: hsl(256, 25%, 24%);
	}

	.card-title {
		margin-top: 1rem;
		font-size: 1.5rem;
	}
</style>