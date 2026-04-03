import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracota: '#C4714A',
        ocre: '#D4A853',
        crema: '#FAF7F2',
        salvia: '#7A9E7E',
        negro: '#2C2C2C',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
