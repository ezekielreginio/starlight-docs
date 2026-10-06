// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'zeke-fullstack.dev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Hardware Specifications',
					 slug: 'hardware-specifications'
				},
				{
					label: 'Monitoring',
					items: [{ autogenerate: { directory: 'monitoring' } }],
				},
			],
		}),
	],
});
