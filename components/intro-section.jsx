import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import floral from "../public/floral1.svg";
import chungminhcuoi from "../public/chungminhcuoi.svg";

const FadeMotion = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default function IntroSection() {
  return (
    <Stack w="full" h="100vh" justifyContent="center" alignItems="center">
      <Stack
        w="100%"
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column", md: "column", sm: "column", lg: "column" }}
        spacing={{ xs: 4, sm: 4, md: 6, lg: 6 }}
      >
        <Box order={{ xs: 1, sm: 1 }}>
          <FadeMotion delay={0.3}>
            <Image
              alt="top"
              src={floral.src}
              height={{
                xs: "200px",
                sm: "200px",
                md: "200px",
                lg: "300px",
              }}
              marginRight={4}
            />
          </FadeMotion>
        </Box>
        {/* <Box order={{ xs: 2, sm: 1, lg: 1 }}>
          <FadeMotion>
            <Image
              mt={{ xs: "16px", sm: 0, lg: 0, xl: 0 }}
              alt="chungminhcuoi"
              src={chungminhcuoi.src}
              // height={{ xs: "50px", sm: "60px", md: "70px", lg: "70px" }}
              height={{ xs: "50px" }}
            />
          </FadeMotion>
        </Box> */}
        <Box order={{ xs: 1, sm: 1 }}>
          <FadeMotion delay={0.5}>
            <Text fontSize={{ xs: "3xl", sm: "4xl" }} color="main">
              KỲ PHONG{" "}
              <Text color="mainRed" as="span">
                &
              </Text>{" "}
              TUYẾT MINH
            </Text>
          </FadeMotion>
          <FadeMotion delay={0.5}>
            <Text fontSize="2xl" color="main" align="center">
              22 · 09 · 24
            </Text>
          </FadeMotion>
        </Box>
      </Stack>
    </Stack>
  );
}
