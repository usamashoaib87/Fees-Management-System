/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#98B6E2',
      },
    },
  },
  plugins: [
    
    require('tailwind-scrollbar'),
  ],
}

