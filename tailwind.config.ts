import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      gridTemplateColumns: {
        'header': 'auto-fit, repeat(3, minmax(150, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      fontSize: {
        'responsive':'clamp(0.8rem, 1vw, 1.5rem)'
      },
      
    },
    screens: {
      'ss': '300px',
      'xs': '320px',
      'sm': '480px',
      'small': '512px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
} satisfies Config;
