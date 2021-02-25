module.exports = {
  purge: ["./src/**/*.vue", "./src/scss/**/*.scss"],
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
          300: "#85ebc6",
          200: "#59e4b1",
          100: "#2ddd9c",
          50: "#22cf8f"
        },
        darkhigh: {
          DEFAULT: "#121212"
        },
        darklow: {
          DEFAULT: "#1A1A1A"
        }
      }
    }
  },
  variants: {
    extend: {}
  }
};
