import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				poppins: ["var(--font-poppins)", "sans-serif"],
				montserrat: ["var(--font-montserrat)", "sans-serif"],
				bebas: ["var(--font-bebas)"],
				oswald: ["var(--font-oswald)", "sans-serif"],
				playfair: ["var(--font-playfair)", "serif"],
				nunito: ["var(--font-nunito)", "sans-serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
