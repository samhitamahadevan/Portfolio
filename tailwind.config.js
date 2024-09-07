/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '840px',
      lg: '1160px',
    },

    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        black: 'var(--black)',
        white: 'var(--white)',
      },

      gridTemplateRows: {
        15: 'repeat(15, minmax(0, 1fr))',
        22: 'repeat(22, minmax(0, 1fr))',
      },

      gridRow: {
        'span-14': 'span 14 / span 14',
      },
    },
  },
  plugins: [],
};
