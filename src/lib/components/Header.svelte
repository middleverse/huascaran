<!-- Header.svelte -->

<header>
	<nav class="mx-auto">
		<a class="logo-header" href="/">middleverse</a>

		<ul
			class="flex text-blue-500 text-xl text-center font-medium underline decoration-blue-200 decoration-2 underline-offset-8"
		>
			<li class="flex-1 mr-2">
				<a class=" block py-2 px-4" href="/blog">BLOG</a>
			</li>
			<li class="flex-1 mr-2">
				<a class="block py-2 px-4" href="/about">ABOUT</a>
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
</style>
