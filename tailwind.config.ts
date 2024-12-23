import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10px 2px #00000045",
        dark: "0px 0px 20px 0px #64646485",
      },
      colors: {
        border: "#EDF6F1",
        borderYellow: "#FFD63D",
        primary: "#F7F7F5",
        secondary: "#000000",
        tertiary: "#ECE6F5",
        quaternary: "#FFFFFF",
        cardTitle: "#767676",
        lightText: "#666666",
        lightGray: "#EFEFEF",
        card: "#FFF2DE",
        darkRed: "#FF0000",
        megaCard: "#FFF3D1",
        megaCardBorder: "#EADEC0",
        bgLightYellow: "#FEFEEE",
        accent: {
          lightYellow: "#F5FFBC",
          green: "#00B75F",
          darkYellow: "#FED300",
          blue: "#4E3666",
          brown: "#0C2E16",
        },
        text: {
          primary: "#FFFFFF",
          black: "#000000",
          orange: "#FF9D33",
          smallLight: "#444444",
          bg: "#C6FFE3",
          bgBlue: "#BADAFD",
          blue: "#1774D9",
          secondaryLight: "#AAAAAA",
          secondary: "#4C4A43",
          lightGray: "#DBDBDB",
          green: "#00B75F",
          yellow: "#FED300",
          red: "#FF1A1A",
        },
        'light-yellow': "#F7E6BC",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        "8xl": "95rem",
        "9xl": "104.68rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
