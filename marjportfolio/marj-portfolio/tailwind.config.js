/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
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

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "mh1": "3rem",
      "mh2": "1.563rem",
      "mh3": "1.953rem",
      "mh4": "2.25rem",
      "mh5": "5.625rem",
      "mh6": "9.375rem",
      "mh7": "4rem",
    },

    animation: {
      move: "move 4s infinite ease-in-out",
      scroll: "scroll-logos 30s linear infinite",
    },
  },

  plugins: [require("flowbite/plugin")],
};
