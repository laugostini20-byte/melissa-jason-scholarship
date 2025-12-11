/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A2A44',
        gold: '#C9A650',
        'light-gray': '#F7F8FA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

