/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-main": "#120d31",
        bone: "#e8e1ef",
      },
      fontFamily: {
        monsterrat: "Montserrat, sans-serif",
      },
      backgroundImage: {
        "line-pattern": "url('/images/bg-line.png')",
        shine: "url('/images/shine.png')",
        home1: "url('/images/bg-home1.png')",
        home2: "url('/images/bg-home2.svg')",
        "round-light": "url('/images/about/bg-round-light.png')",
        about1: "url('/images/bg-about1.png')",
        "about-cloud": "url('/images/bg-about-cloud.png')",
        "team-jumbotron": "url('/images/team/bg-jumbotron-team.png')",
        "publication-jumbotron":
          "url('/images/publication/bg-publication.svg')",
      },
      animation: {
        "slider-button-in": "button-in 1s linear forwards alternate",
        "slider-button-out": "button-out 1s linear forwards alternate",
        floater: "floating 3s ease infinite",
        "floater-r1": "floating 3s ease 0.2s infinite ",
        "floater-r2": "floating 3s ease 0.5s infinite ",
        "floater-r3": "floating 3s ease 0.8s infinite ",
      },
      keyframes: {
        "button-in": {
          from: { left: "0px" },
          to: { left: "76px" },
        },
        "button-out": {
          from: { left: "76px" },
          to: { left: "0px" },
        },
        floating: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
