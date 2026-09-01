/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#fdfbf7',
        'brand-mint': '#e8f3ee',
        'brand-brown': '#8c7b6d',
      }
    },
  },
  plugins: [],
}
