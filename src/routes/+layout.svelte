<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<div id="wrapper" class="flex flex-col h-screen">
	<Header />

	{#key data.currentRoute}
		<main>
			<slot />
		</main>
	{/key}
</div>
