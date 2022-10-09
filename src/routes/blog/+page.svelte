<script>
	export let data;
</script>

<div class="">
	<h1 class="text-3xl font-bold">Blog</h1>

	<ul>
		{#each data?.posts as post}
			<li>
				<h2 class="text-xl underline">
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
</div>
