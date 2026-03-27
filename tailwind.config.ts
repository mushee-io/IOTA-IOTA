import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        halo: "0 20px 70px rgba(236,72,153,0.12)",
        elite: "0 25px 100px rgba(0,0,0,0.38)"
      },
      backgroundImage: {
        "hero-fade":
          "radial-gradient(circle at top right, rgba(244,114,182,0.18), transparent 24%), radial-gradient(circle at bottom left, rgba(244,114,182,0.12), transparent 24%), linear-gradient(180deg, #ffffff, #fff8fc 45%, #fffdfd)"
      }
    }
  },
  plugins: []
};

export default config;
