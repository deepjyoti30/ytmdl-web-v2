module.exports = {
  purge: ["./components/**/*.vue", "./plugins/**/*.vue", "./static/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: {
          DEFAULT: "#293241"
        },
        cyan: {
          light: "#E0FBFC",
          DEFAULT: "#E0FBFC"
        },
        darkgreen: {
          DEFAULT: "#1EB980",
          500: "#ddf9ef",
          400: "#b1f2da",
          300: "#85ebc6"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
