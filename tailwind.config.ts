import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        darkest: "0px 0px 20px 0px #0000004D",
        darker: "0px 0px 20px 0px #00000033",
        dark: "0px 0px 20px 0px #64646485",
        light: "0px 0px 10px 2px #00000045",
        normal: "4px 4px 20px 0px #0000001A",
      },
      colors: {
        primary: {
          600: "#0C2E16",
          500: "#8BBBA0",
          400: "#60B866",
          300: "#00B75F",
          200: "#C6FFE3",
          100: "#F4FDE6",
          light: "#EDF6F1",
        },
        secondary: {
          dark: "#000000",
          900: "#1B1B1B",
          800: "#444444",
          700: "#424242",
          600: "#666666",
          500: "#999999",
          400: "#D2D2D2",
          300: "#767676",
          200: "#4C4A43",
          100: "#AAAAAA",
          50: "#EBEBEB",
          bg: "#F7F7F5",
          lighter: "#DDDDDD",
          light: "#FFFFFF",
        },
        silver: {
          dark: "#DEE4EC",
          light: "#EDEDED",
        },
        orange: "#FF9D33",
        yellow: {
          dark: "#FED300",
          900: "#EADEC0",
          800: "#FFD63D",
          700: "#FFF3D1",
          light: "#FFF2DE",
        },
        blue: {
          dark: "#1774D9",
          light: "#BADAFD",
        },
        purple: {
          dark: "#4E3666",
          light: "#ECE6F5",
        },
        red: {
          900: "#FF1A1A",
          800: "#FF0000",
        },
      },
      maxWidth: {
        "8xl": "98rem",
        "9xl": "104.68rem",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "source-sans": ["var(--font-source-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
