/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "form-bg": "url('/src/assets/street.jpg')",
        "search-btn": "url('/src/assets/search.svg')",
        "moscow": "url('/src/assets/moscow.svg')"
      },
    },
  },
  plugins: [
    formsPlugin,
    // ...
  ],
};
