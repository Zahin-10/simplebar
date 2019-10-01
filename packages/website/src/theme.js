import baseTheme from "@theme-ui/preset-base"

const theme = {
  ...baseTheme,
  colors: {
    body: "#2e2e2e",
    background: "#fff",
    primary: "#DC8D37",
  },
  fonts: {
    body: '"Nunito", sans-serif',
  },
  fontWeights: {
    body: 500,
    bold: 700,
    heading: 800,
  },
  fontSizes: {
    0: "1rem", // 10px
    1: "1.2rem", // 12px
    2: "1.4rem", // 14px
    3: "1.7rem", // 17px
    4: "1.9rem", // 19px
    5: "2.3rem", // 23px
    6: "2.8rem", // 28px
    7: "3.8rem", // 38px
    8: "4.8rem", // 48px
    9: "7rem", // 70px
    10: "9rem", // 90px
  },
  styles: {
    root: {
      h1: {
        display: "none",
      },
    },
  },
}

theme.fontSizes.body = theme.fontSizes[2]

export default theme
