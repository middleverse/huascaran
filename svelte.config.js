import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// treat the following file types as components
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: true
		}),
		// convert md files to HTML
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter({ out: 'build' })
	}
};

export default config;
