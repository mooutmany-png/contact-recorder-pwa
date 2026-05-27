/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bwz-blue': '#2B8CC4',
        'bwz-dark': '#1A3A52',
        'bwz-light': '#F5F5F5',
        'bwz-green': '#7CB342',
        'bwz-accent': '#E8F4F8',
      },
    },
  },
  plugins: [],
}
