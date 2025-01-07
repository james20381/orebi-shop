import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            primeColor: '#262626',
            lightText: '#6d6d6d',
            greenPrimary: '#55815e',
            yellowPrimary: '#e1b100',
            bluePrimary: '#94c0cc',
            orangePrimary: '#d48253'
        },
        boxShadow: {
            textShadow: '0px 0px 54px -13px rgba(0,0,0,0.7)'
        },
        fontFamily: {
            sans: ['var(--font-poppins)']
        }
    },
  },
  plugins: [],
};
export default config;
