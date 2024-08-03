/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        caveats: ['Caveat', 'cursive'],
        stencil: ["stencil", "static"],
        Inter: ["Inter"],
        Dosis: ["Dosis"],
        Arial: ["Arial"]
      },
      colors: {
        customDark: "#050505",
        customGreen: "#088406",
        customBrown: "#261707",
        customOrange: {
          100: "#937b23",
          200: "#816c21",
          300: "#71631b"
        },
        customWhite: "#feffff",
      },

      plugins: [],
      purge: {
        enabled: process.env.NODE_ENV === "production",
        content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
      },
    }
  },
}

