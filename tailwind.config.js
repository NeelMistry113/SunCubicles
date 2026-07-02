/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        geist: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#030213',
          blue: '#155dfc',
          navy: '#1c398e',
        },
      },
    },
  },
  plugins: [],
}
