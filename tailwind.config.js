/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 4px 8px rgba(0, 0, 0, 0.1)',
      },
      darkColor:{
        'custom': 'hsl(207, 26%, 17%)'
      }
    },
  },
  plugins: [],
}

