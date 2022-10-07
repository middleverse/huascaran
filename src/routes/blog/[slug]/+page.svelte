<script>
	export let data;
	const { title, date, content: Content } = data;
</script>

<article class="blog">
	<h1>{title}</h1>
	<hr />
	<p class="text-rose-500">Published: {date} by Arshi Bhasin</p>
	<hr class="mb-6" />
	<Content />
</article>
