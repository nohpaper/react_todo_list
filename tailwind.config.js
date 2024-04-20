/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    screens: {
      //xs / sm / md / lg / xl / 1xl
      //mobile
      "mobile-2xs": "320px",
      "mobile-xs": "360px",
      "mobile-sm": "375px",
      "mobile-md": "414px",
      "mobile-lg": "480px",
      "mobile-xl": "540px",

      //tablet
      "tablet-xs": "600px",
      "tablet-md": "768px",
      "tablet-lg": "800px",
      "tablet-xl": "960px",
      // => @media (min-width: 640px) { ... }

      //desktop
      "desktop-xs": "1024px",
      "desktop-md": "1280px",
      "desktop-xl": "1440px",
      // => @media (min-width: 1024px) { ... }
    },
    fontFamily: {

    },
    extend: {
      colors: {
      //레드
      "red" : {
        "100": "#FFD2D2",
        "200": "#FF9999",
        "300": "#C14E4E",

        "400": "#B69797",
        "500": "#734545",
      },
      //노랑
      "yellow": {
        "100": "#FFEFB6",
        "200": "#FFD771",
        "300": "#C3A848",

        "400": "#BDB69B",
        "500": "#443E27",
      },
      //연두
      "lightGreen": {
        "100": "#BBFFCA",
        "200": "#80DF95",
        "300": "#229B3D",

        "400": "#8CBE97",
        "500": "#406C4A",
      },
      //하늘
      "blue": {
        "100": "#CFE5FF",
        "200": "#8BC0FF",
        "300": "#4B81C0",

        "400": "#98A6B8",
        "500": "#3A4D63",
      },
      //보라
      "purple": {
        "100": "#DFD3FF",
        "200": "#A786FF",
        "300": "#5A39B3",

        "400": "#9A90B4",
        "500": "#3F345C",
      },
      //회색
      "gray": {
        "100": "#EAEAEA",
        "200": "#B5B5B5",
        "300": "#675858",

        "400": "#241C1C",
      },
      //분홍
      "pink": {
        "100": "#FFD3FB",
        "200": "#FF96F5",
        "300": "#BC47B1",

        "400": "#B392B0",
        "500": "#553052",
      },
    },
      borderRadius: {
        20:"1rem",
        30:"1.5rem",
        "100%":"100%",
      }
    },
  },
  plugins: [require('tailwindcss-convert-px-to-rem')], //add here a plugin
}

