
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        dodgerblue: "#217eec",
        gray: "#28262c",
        dimgray: "#696671",
        darkslategray: {
          "100": "#3a3740",
          "200": "#202b37",
        },
        white: "#fff",
        silver: "#c4c4c4",
        darkslateblue: "#06286e",
      },
      spacing: {},
      fontFamily: {
        med: "Inter",
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "23xl-5": "42.5px",
      },
    },
    fontSize: {
      base: "1rem",
      "9xl": "1.75rem",
      "3xl": "1.38rem",
      "smi-4": "0.78rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "19xl-3": "2.39rem",
      "4xl": "1.44rem",
      "12xl": "1.94rem",
      xl: "1.25rem",
      "13xl": "2rem",
      "7xl": "1.63rem",
      lg: "1.13rem",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
