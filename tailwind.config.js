/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const myPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ".card-rotate-y-180": {
      transform: "rotateY(180deg)",
      transition: "transform 0.5s ease-in-out"// Corrected the transformation
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".persepctive": {
      perspective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".backcolor": {
      background: "rgb(2,0,36)",
      background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 5%, rgba(0,212,255,1) 92%)"
    }
  });
});

module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  plugins: [myPlugin], // Use myPlugin instead of myClass
};
