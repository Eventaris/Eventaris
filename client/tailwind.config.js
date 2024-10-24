/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-green': 'linear-gradient(180deg, #08A0A8 0%, #025F76 100%)', // Tambahkan gradient kustom
      },
      colors: {
        'green1': '#035F76',
        'green2': '#037E8E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Menambahkan font Inter
      },
    },
  },
  plugins: [],
}

