<script>
	export let data;
	const { title, date, content: Content } = data;
</script>

<article class="blog">
	<p>Published: {date}</p>
	<h1>{title}</h1>
	<Content />
</article>
