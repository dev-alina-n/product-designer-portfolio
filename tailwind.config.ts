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
        canvas: "#f3f1eb",
        ink: "#111111",
        muted: "#5e5e5e",
        line: "rgba(17, 17, 17, 0.11)",
        panel: "rgba(255, 255, 255, 0.62)",
      },
      boxShadow: {
        card: "0 10px 30px rgba(17, 17, 17, 0.045)",
      },
      borderRadius: {
        card: "32px",
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
