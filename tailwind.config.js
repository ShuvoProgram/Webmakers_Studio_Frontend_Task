/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rgba-pink-800': 'rgba(216, 180, 254, 1)', // Define your custom RGBA value
        'rgba-pink-100': 'rgba(216, 180, 254, 0)', // Define your custom RGBA value
      },
    },
  },
  plugins: [],
}

