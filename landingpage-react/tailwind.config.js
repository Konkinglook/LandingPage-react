/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../src/assets/img/image-header.jpg')",
        'sec-three-left': "url('../src/assets/img/image-graphic-design.jpg')",
        'sec-three-right': "url('../src/assets/img/image-photography.jpg')"
      }
    },
  },
  plugins: [],
}