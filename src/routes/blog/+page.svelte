<script>
	export let data;
</script>

<div class="p-3">
	<h1 class="text-3xl font-bold mb-6 text-center">Archive</h1>

	<ul>
		{#each data?.posts as post}
			<li class="pb-3">
				<h2 class="text-lg font-semibold underline">
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<span class="text-sm font-semibold">Published {post.meta.date}</span>
			</li>
		{/each}
	</ul>
</div>
