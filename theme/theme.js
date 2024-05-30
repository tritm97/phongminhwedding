import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const colors = {
  main: "#6B6B6B",
  secondary: "#979797",
  grayPrimary: "##c7bdb8",
  mainRed: "#BA686B",
};

export default extendTheme({
  breakpoints,
  colors,
  fonts: {
    // heading: `'SFUNovareseBook', serif`,
    // body: `'SFUNovareseBook', serif`,
    // heading: `'Playfair Display', serif`,
    // body: `'Playfair Display', serif`,
    heading: `'Viaoda Libre', serif`,
    body: `'Viaoda Libre', serif`,
  },
});
