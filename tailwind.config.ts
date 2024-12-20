import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F5",
        secondary: "#000000",
        tertiary: "#ECE6F5",
        quaternary: "#FFFFFF",
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
          bg: "#BADAFD",
          blue: "#1774D9",
          secondaryLight: "#AAAAAA",
          secondary: "#4C4A43",
          green: "#00B75F",
          yellow: "#FED300",
          red: "#FF1A1A",
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
