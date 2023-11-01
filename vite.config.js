import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
	plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/tinymce/*',
          dest: 'tinymce'
        }
      ]
    })
  ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
