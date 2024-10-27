/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "form-bg": "url('/src/assets/street.jpg')",
      },
    },
  },
  plugins: [
    formsPlugin,
    // ...
  ],
};
