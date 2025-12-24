/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['Avenir Next LT Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1E1E1E', // Background color from the image
      },
      fontSize: {
        'nav': '14px',
      },
      lineHeight: {
        'nav': '25.76px',
      },
      letterSpacing: {
        'nav': '0.9px',
      },
    },
  },
  plugins: [],
}

