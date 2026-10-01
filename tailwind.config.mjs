/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        bg: '#EDEFF6',
        ink: '#0E1018',
        mute: '#5a5f73',
        blue: '#2433F0',
        line: '#d3d7e6',
      },
      fontFamily: {
        head: ['e-UkraineHead', 'e-UkraineHead Fallback', 'Onest', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Onest', 'Onest Fallback', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
