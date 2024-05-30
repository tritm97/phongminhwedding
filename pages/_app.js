import "../styles/main.css";
import "../components/grid-gallery/styles.scss";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/free-mode";

import AOS from "aos";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const createAOS = () => AOS.refresh();
    window.addEventListener("load", createAOS);
    return () => window.removeEventListener("load", createAOS);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
