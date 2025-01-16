/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/ui/**/*.tsx",
    "./src/components/Layout/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        primaryColor: "#0080FF",
        textColor: "#00264D",
        yellow: "#F2BF09",
        captionColor: "#698096",
        red: "#ff0000",
        overlay: "#123952f2",
        gray: {
          gray: "#BFCCD9",
          grayLight: "#E3EBF3",
        },
      },
    },
  },
  plugins: [],
};
