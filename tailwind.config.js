/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#1F2335',
        theme: '#ECB700',
      }
    },
  },
  // plugins: [require('tailwind-scrollbar-hide')],
  plugins: [require('tailwind-scrollbar-hide'), ('flowbite/plugin')],
}
