import type { Config } from "tailwindcss";

// Design system: "cobalt + cream". One accent (cobalt, matched to the team's
// uniforms), a warm cream base, off-black ink. See DESIGN.md.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FCFBF8",
        black: "#10161E",
        brand: {
          DEFAULT: "#1E4FC9",
          dark: "#163C9B",
          light: "#5B82E0",
          accent: "#1E4FC9",
          ink: "#10161E",
          mist: "#ECE8DE",
        },
        cream: "#F3F0E8",
        frost: "#E4EBF1",
        line: "rgba(16, 22, 30, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        surface: "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(64, 52, 24, 0.06), 0 18px 40px -18px rgba(64, 52, 24, 0.22)",
        soft: "0 1px 2px rgba(64, 52, 24, 0.05), 0 8px 24px -14px rgba(64, 52, 24, 0.18)",
        lift: "0 2px 4px rgba(64, 52, 24, 0.06), 0 28px 60px -24px rgba(64, 52, 24, 0.32)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      zIndex: {
        header: "40",
        float: "30",
        bar: "35",
        overlay: "50",
      },
    },
  },
  plugins: [],
};

export default config;
