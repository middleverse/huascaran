import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import ViteRestart from 'vite-plugin-restart';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
		strictPort: false
	}
};

export default config;
