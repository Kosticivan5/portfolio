import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import svgToDataUri from "mini-svg-data-uri";

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

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
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#000",
          100: "#222a35",
          200: "#171e28",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#bad0e5",
        },
      },
      screens: {
        xs: "480px",
      },
      height: {
        section: "700px",
      },
      maxHeight: {
        section: "700px",
      },
      lineHeight: {
        "extra-loose": "7rem",
      },
      backgroundImage: {
        "card-gradient":
          "radial-gradient(circle, rgba(15,18,60,1) 3%, rgba(63,69,109,1) 76%)",
        "grid-gradient":
          "linear-gradient(344deg, rgba(6,20,39,1) 0%, rgba(0,0,0,1) 67%)",
      },
      animation: {
        aurora: "aurora 120s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;
