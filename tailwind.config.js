/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1680px",
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      fontFamily: {
        // sans: [...fontFamily.sans],
      },
      fontSize: {
        md: "15px",
      },
      colors: {
        whiten: "#F1F5F9",
        blue: {
          primary: "#1549FF",
          secondary: "#0194FE",
          tertiary: "#286497",
        },
        purple: {
          primary: "#691EE2",
          secondary: "#CDA2FF",
          tertiary: "#DECAFF",
        },

        dark: {
          blue: "#0a1933",
          blue1: "#112D51",
          blue2: "#0C203B",
          blue3: "#001025",
          primary: "#000618",
          secondary: "#061329",
          tertiary: "#0A2E7D",
        },

        social: {
          facebook: "#2563eb",
          instragram: "#e1306c",
          linkedin: "#00a0dc",
          gitLab1: "#FC6D26",
          gitLab2: "#E24329",
        },
        stroke: "#E2E8F0",
      },
      boxShadow: {
        "5xl": "rgba(0, 0, 0, .7) 0px 0px 20px",
        "4xl":
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "min-cyan":
          "rgba(0, 255, 255, .35) 2px 3px 16px, rgba(0, 255, 255, .35) -2px -3px 16px",
        "max-blue":
          "rgba(32, 112, 251 , .35) 2px 3px 16px, rgba(32, 112, 251 , .35) -2px -3px 16px",
        "min-blue":
          "rgba(32, 112, 251 , .35) 2px 3px 8px, rgba(32, 112, 251 , .35) -2px -3px 8px",
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "50px",
      },
    },
  },
  plugins: [],
};
