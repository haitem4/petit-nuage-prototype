import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baby: {
          sky: "#8EBEEC",
          skySoft: "#EAF4FD",
          pink: "#F7B5CD",
          pinkSoft: "#FDF0F5",
          mint: "#A8DDC5",
          mintSoft: "#EDF8F3",
          cream: "#FDFBF9",
          slate: "#2C3E50",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
