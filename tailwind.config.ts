import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../src/assets/images/home-page/main-img.svg')",
      },
      colors: {
        primary: '#0C8A5D',
        secondary: '#F9B000',
        dark: '#171717',
      },
      fontFamily: {
        sans: ['var(--font-helvetica-neue-arabic)', 'sans-serif'],
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config; 