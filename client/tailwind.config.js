/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			body: [
				"Inter var, sans-serif",
				{
					fontFeatureSettings: '"cv11", "ss01"',
					fontVariationSettings: '"opsz" 32',
				},
			],
			display: ['"Space Grotesk"', "monospace"],
		},
	},
	plugins: [],
};
