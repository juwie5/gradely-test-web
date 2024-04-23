/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        "noto": ["Noto Sans"],
        "inter": ["Inter"],
      },
      colors: {
        gradely_primary: "#004680",
        gradely_light_blue: "#DBF5F8",
        gradely_red: "#F6515B"
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
    },
  },
}

