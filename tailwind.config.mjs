/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					default: '1.25rem',
					sm: '1.5rem',
					md: '2rem'
				}
			}
		}
	},
	plugins: []
}
