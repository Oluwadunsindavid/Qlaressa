/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        LightTxtColor: "#474E67",
        DarkTxtColor: "#101528",
        LighterTxtColor: "#989EB3"
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

