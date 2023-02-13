import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	preprocess: [vitePreprocess()]
};

export default config;
