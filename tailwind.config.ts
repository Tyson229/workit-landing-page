import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ["18px", "32px"],
      lg: [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: 600,
        },
      ],
      xl: [
        "56px",
        {
          lineHeight: "64px",
          fontWeight: 600,
        },
      ],
      "2xl": [
        "80px",
        {
          lineHeight: "80px",
          fontWeight: 600,
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-fraunces)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "dark-purple": "#24053E",
        eucalyptus: "#44FFA1",
        "davy's-grey": "#584D62",
        "ghost-white": "#FCF8FF",
      },
    },
  },
  plugins: [],
};
export default config;
