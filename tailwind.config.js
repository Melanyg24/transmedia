/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'brand-color-g': '#348e80',
        'brand-color': '#df8625',
      },
    },
  },
  plugins: [],
}

