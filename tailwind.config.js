/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" }, // 1279 and below
        lg: { max: "1023px" }, // 1023 and below
        md: { max: "767px" },  // 767 and below
        sm: { max: "639px" },  // 639 and below
      },
      
      colors: {
        darkBg: '#060B0F',
        lightGray: '#737373',
        darkGreen: '#00220D',
        perrotGreen: '#5EFB7E',
        textGreen: '#103900',
      },
      fontFamily: {
        sf: ['SF Pro Rounded', 'mono'],
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(-5px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },

    animation: {
      fadeIn: 'fadeIn 0.7s ease-out forwards',
    },
  },
  plugins: [],
}

