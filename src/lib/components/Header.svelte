<!-- Header.svelte -->

<header>
	<a class="logo-header" href="/">middleverse</a>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 30px 30px;
		vertical-align: middle;
	}

	ul {
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.logo-header {
		font-family: 'Inknut Antiqua', serif;
		font-size: 1.5rem;
		font-weight: 700;
	}
</style>
