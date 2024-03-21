/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C0C0C',
        btn_border: '#CDFFC5',
        btn_hover: '#86FF73',
        faq_background:"#003800",
        faq_background2: "#002D00",
      },
      dropShadow: {
        'custom-green' : '0 4px 3px rgba(130, 255, 111, 0.4)',
      },
      boxShadow: {
        'custom-green': '0 0 0 2px #86FF73, 0 2px 4px rgba(130, 255, 111, 0.10)', // Customize colors as needed
      },
      fontFamily: {
        'aventa_bold' : ['Aventa Extra' , 'sans-serif'],
        'aventa': ['Aventa', 'sans-serif'], 
        'heavitas': ['Heavitas', 'sans-serif'],
        'maven_pro' : ["Maven Pro", 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};