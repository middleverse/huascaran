<script>
	export let data;
	const { title, date, content: Content } = data;
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	// using content as a component (syntax magic)
	<Content />
</article>
