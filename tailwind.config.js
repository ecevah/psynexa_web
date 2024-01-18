/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pageCardBg: "url('/svg/bg_foto_card.svg')",
        tick: "url('/svg/tick.svg')",
        dashboardBg: "url('/svg/dashboard_bg.svg')",
      },
      colors: {
        headerPurpleButtonBackground: "#3A36E70D",
        headerPurpleButtonText: "#3A36E7",
        homePageDarkGray: "#111928",
        homePageGray: "#4B5563",
        homePageLightGray: "#9CA3AF",
        iconCardTagPurple: "#831A9B",
        iconCardTextGray: "#374151",
        iconCardPhotoBackground: "#E2E8F0",
        iconCardPhotoBorder: "#D0D5DF",
        lineBackgroundColor: "#F3F4F6",
        loginRegisterBackgroundColor: "#F9FAFB",
        loginRegisterInputBorder: "#DADCE0",
        loginDarkGray: "#222124",
        loginRed: "#D63928",
        loginGray: "#727586",
        purple: "#6747C7",
        purpleOpacity: "#6747C726",
        blue: "#3A36E7",
        blueOpacity: "#3A36E726",
        grayLight: "#E9E9E9",
        gray: "#58585F",
        gray010: "#58585F1A",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".layout": {
          width: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        },

        ".dashLayout": {
          width: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        },

        ".customText": {
          fontSize: "16px",
          fontWeight: "bold",

          "&:hover": {
            color: "red",
          },

          "&:focus": {
            outline: "2px solid blue",
          },
        },

        // Yeni bir kural eklemek
        ".customBackground": {
          backgroundColor: "gray",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
