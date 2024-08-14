/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: ['Fira Code', 'monospace'],
        bodyFont: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        accent: "#e74c3c",
        background: "#ecf0f1",
        text: "#2c3e50",
        'blue-light': '#3498db',
        'blue-dark': '#2980b9',
        'gray-light': '#f7f7f7',
        'gray-dark': '#333333',
      },
      boxShadow: {
        shadowOne: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        shadowHover: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },  
  plugins: [],
}