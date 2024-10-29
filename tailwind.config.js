/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    colors: {
      red: "hsl(14, 86%, 42%)",
      green: "hsl(159, 69%, 38%)",
      white: "#fff",
      "Rose-50": " hsl(20, 50%, 98%)",
      "Rose-100": "hsl(13, 31%, 94%)",
      "Rose-300": "hsl(14, 25%, 72%)",
      "Rose-400": "hsl(7, 20%, 60%)",
      "Rose-500": "hsl(12, 20%, 44%)",
      "Ros- 900": "hsl(14, 65%, 9%)",
    },
    extend: {},
  },
  plugins: [],
};
