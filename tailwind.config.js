/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '840px',
      lg: '1160px',
      xl: '1440px',
      '2xl': '2250px',
    },

    extend: {
      colors: {
        primary: '#D8CFBC',
        secondary: '#565449',
        black: '#11120D',
        white: '#F5EEE6',
      },

      fontFamily: {
        heading: ['PP Pangaia', 'serif'],
        text: ['Gilroy', 'sans-serif'],
      },

      gridTemplateRows: {
        15: 'repeat(15, minmax(0, 1fr))',
        22: 'repeat(22, minmax(0, 1fr))',

        19: 'repeat(19, minmax(0, 1fr))',
        28: 'repeat(28, minmax(0, 1fr))',
      },

      gridRow: {
        'span-14': 'span 14 / span 14',

        'span-18': 'span 18 / span 18',
      },
    },
  },
  plugins: [],
};
