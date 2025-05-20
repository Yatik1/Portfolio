/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  safelist: [
    // Gradient directions
    'bg-gradient-to-b',
  
    // Color stops used in gradients
    'from-[#595858]',
    'via-[#09090B]',
    'to-[#111113]',
  
    'from-[#BCE1FB]',
    'to-[#020817]',
  
    'from-[#D7CABE]', // Fixed missing hash (#)
    'to-[#847D77]',
  
    'from-[#FFFFFF]',
    'to-[#585858]',
  
    'from-[#CBCDD4]',
    'to-[#595A5B]',
  
    // Positioning for images
    'top-10',
    'right-0',
    'bottom-0',
    'left-[1rem]',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInZoom: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeInZoom": 'fadeInZoom 0.8s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}