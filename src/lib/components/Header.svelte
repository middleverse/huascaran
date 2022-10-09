<!-- Header.svelte -->

<header class="p-6 pb-3 lg:pb-6">
	<nav class="mx-auto">
		<a class="logo-header text-4xl lg:text-6xl" href="/">middleverse</a>

		<ul
			class="flex text-orange-500 text-opacity-90 text-lg lg:text-lg text-center font-semibold underline decoration-white-200 decoration-4 underline-offset-4 pt-3"
		>
			<li class="flex-1 mr-2">
				<a class=" block lg:py-2 lg:px-4" href="/blog">BLOG</a>
			</li>
			<li class="flex-1 mr-2">
				<a class="block lg:py-2 lg:px-4" href="/about">ABOUT</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		vertical-align: middle;
	}

	.logo-header {
		font-family: 'Redacted Script', cursive;
		font-weight: 300;
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
