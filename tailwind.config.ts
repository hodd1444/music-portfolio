import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-100": "#000319",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        'spin-slow-paused': 'spin-slow 10s linear infinite paused',
      },
    },
  },
  plugins: [],
};
export default config;
