import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#0a0f1a",
          900: "#0f172a",
          800: "#1a2540",
          700: "#1e3050",
        },
        sage: {
          50: "#f1f5f2",
          100: "#e8efe9",
          200: "#d4e4d6",
          300: "#a8c9ab",
        },
        brand: {
          green: "#22c55e",
          greenDark: "#16a34a",
          greenLight: "#4ade80",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(160deg, #0a0f1a 0%, #0f2018 35%, #1a3828 55%, #c8d9c8 80%, #f1f5f2 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "arrow-move": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-right": "slide-right 0.5s ease-out forwards",
        "arrow-move": "arrow-move 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
