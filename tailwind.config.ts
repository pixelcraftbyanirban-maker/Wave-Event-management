import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wave: {
          bg: "#090C25",
          abyss: "#050716",
          dark: "#0E112A",
          panel: "#161933",
          card: "#1B1E37",
          border: "rgba(104, 211, 255, 0.15)",
          "border-subtle": "rgba(255, 255, 255, 0.08)",
          cyan: "#68D3FF",
          "cyan-hover": "#83DFFF",
          coral: "#FF2D55",
          "coral-hover": "#FF4D70",
          muted: "#8B90A0",
          light: "#C1C6D7",
          heading: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
