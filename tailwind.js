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
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
