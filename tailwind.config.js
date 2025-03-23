/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
        // Gradient with Purple and Cream
        lavender: "#b388eb",
        lightLavender: "#d3a8f3",
        deepPurple: "#5e2a8c",
        violet: "#7a4dff",
        cream: "#f3e5ab",
        lightCream: "#f9f3d2",
        darkCream: "#d1c18a",
        purpleGradientStart: "#9b59b6",
        purpleGradientEnd: "#f3e5ab",
        creamGradientStart: "#f9f3d2",
        creamGradientEnd: "#7a4dff",
        // Added royal purple
        royalPurple: "#6a0dad", // Royal Purple Color
      },
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
      fontFamily: {
        body: ["Josefin Sans"],
        special: ['"Nunito"'],
      },
    },
  },
  plugins: [],
};
