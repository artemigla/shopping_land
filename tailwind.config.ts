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
      fontSize: {
        'responsive':'clamp(0.8rem, 1vw, 1.5rem)'
      },
      width: {
        dynamic: "clamp(1.625rem, -0.125rem + 5.6vi, 3.375rem)",
        icons: "clamp(0.938rem, calc(0.313rem + 2vi), 1.563rem)"
      }
    },  
    screens: {
      'ss': '290px',
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
