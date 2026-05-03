import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A66C2",
          dark: "#08508f",
          light: "#00B4D8",
          accent: "#FF6B5B",
          ink: "#0B1F33",
          mist: "#F4F8FB",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(11, 31, 51, 0.12)",
        soft: "0 2px 12px -4px rgba(11, 31, 51, 0.08)",
      },
      animation: {
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
