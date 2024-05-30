import { Box, Image } from "@chakra-ui/react";

import decoration from "../public/decoration2.svg";
import footer from "./../public/DSC_4718.png";
import footertypo from "../public/phongminh_preview_rev_1.png";

const Footer = () => {
  return (
    <Box mt={16} w="full" h="90vh" position="relative">
      <Box
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        w="full"
        h="100%"
        backgroundImage={`url(${footer.src})`}
        backgroundSize="cover"
        backgroundPosition={{
          xs: "center bottom",
          sm: "center bottom",
          md: "60% bottom",
          lg: "60% 10%",
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="rgba(39,62,84,0.2)"
      />
      <Image
        position="absolute"
        top={-1}
        left={0}
        alt="decoration"
        src={decoration.src}
        transform="rotate(180deg)"
      />
      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        zIndex={5}
        position="absolute"
        top={"60%"}
        left={{ xs: "0%", sm: "0%" }}
        alt="footertypo"
        src={footertypo.src}
        transform="translate(-10%)"
        maxWidth={500}
      />
    </Box>
  );
};

export default Footer;
