/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-custom":
          'linear-gradient(227deg, theme("colors.teal.300") 2.39%, theme("colors.green.800") 2.41%, theme("colors.pink.500") 48.1%, theme("colors.yellow.300") 95.67%)',
      }),

      colors: {
        primaryBlack: "#121212",
        secondaryBlack: "#181818",
        chipsBlack: "#222222",
        chipsText: "#BEBEBE",
      },

      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },

    // fontSize: {
    //   sm: "0.8rem",
    //   base: "1rem",
    //   xl: "1.25rem",
    //   "1xl": "3rem",
    //   "2xl": "1.563rem",
    //   "3xl": "1.953rem",
    //   "4xl": "2.25rem",
    //   "5xl": "5.625rem",
    //   "6xl": "9.375rem",
    //   "7xl": "4.375rem",
    // },

    animation: {
      move: "move 4s infinite ease-in-out",
      scroll: "scroll-logos 30s linear infinite",
    },
  },

  plugins: [require("flowbite/plugin")],
};
