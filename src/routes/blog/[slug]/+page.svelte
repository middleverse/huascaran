<script>
	export let data;
	const { title, date, content: Content } = data;
</script>

<article class="blog pb-10">
	<h1>{title}</h1>
	<hr />
	<p class="text-rose-500">Published: {date} by Arshi Bhasin</p>
	<hr class="lg:mb-6" />
	<Content />
	<p>Arshi Bhasin <br /> <span id="signature">arshibhasin</span></p>
</article>

<style>
	#signature {
		font-family: 'Redacted Script', cursive;
		font-size: 1.5rem;
		font-weight: 300;
	}
</style>
