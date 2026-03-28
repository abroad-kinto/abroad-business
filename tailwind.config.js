/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f5',
          100: '#b3e7e0',
          200: '#80d7cb',
          300: '#4dc7b6',
          400: '#26baa5',
          500: '#0d9488',
          600: '#0b7a70',
          700: '#096058',
          800: '#074640',
          900: '#052c28'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
