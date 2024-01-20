/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 100px rgba(0,0,0,.1)',
      },

      maxWidth : {
       'max-w-10xl' : '120rem',
        'max-w-3.5xl': '50rem',
        '4.5xl' : '90rem',
      },
      minHeight : {
        'min-h-2': '80rem',
      },
      maxHeight : {
        'max': '120rem',
      },
      bottom : {
        '3xl': '3%',
      },
      borderRadius : {
        '50%' : '50%'
      }

    },
  },
  plugins: [],
}

