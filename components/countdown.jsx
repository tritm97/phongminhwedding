import { Box, Divider, Image, Stack, Text, VStack } from "@chakra-ui/react";

import floral2 from "../public/floral2.svg";
import useCountdown from "../utils/useCountdown";
import vemotnha from "../public/vemotnha.svg";

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(1670608800000);

  return (
    <VStack justify="center">
      <VStack
        py={24}
        w="full"
        alignItems="center"
        justify="center"
        bg="#F3F2F1"
      >
        <Box
          w="100%"
          h={{ xs: "auto", md: "auto" }}
          py={{ xs: 0, sm: 16, md: 0, lg: 0 }}
          bgSize="cover"
          bgAttachment="fixed"
          bgPos="50% 100%"
          bgRepeat="no-repeat"
        >
          <VStack data-aos="zoom-in-down">
            <Image
              order={{ xs: 2, sm: 1, lg: 1 }}
              alt="vemotnha"
              src={vemotnha.src}
              height={{ xs: "50px", sm: "60px", md: "70px", lg: "70px" }}
            />
          </VStack>
          <Text
            data-aos="zoom-in-down"
            textAlign="center"
            fontSize="6xl"
            color="gray.600"
          >
            22/10/2023
          </Text>
          <Divider py={6} orientation="horizontal" width={200} />
          <Stack
            w="full"
            height={{ xs: "inherit", sm: "auto", md: "auto" }}
            justify="space-evenly"
            wrap="wrap"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
          >
            <VStack>
              <Text data-aos="zoom-in-right" fontSize="5xl" color="gray.600">
                {days}
              </Text>
              <Divider orientation="horizontal" width={120} />
              <Text data-aos="zoom-in-left" as="i" color="gray.600">
                Ngày
              </Text>
            </VStack>
            <VStack>
              <Text data-aos="zoom-in-right" fontSize="5xl" color="gray.600">
                {hours}
              </Text>
              <Divider orientation="horizontal" width={120} />
              <Text data-aos="zoom-in-left" as="i" color="gray.600">
                Giờ
              </Text>
            </VStack>
            <VStack>
              <Text data-aos="zoom-in-right" fontSize="5xl" color="gray.600">
                {minutes}
              </Text>
              <Divider orientation="horizontal" width={120} />
              <Text data-aos="zoom-in-left" as="i" color="gray.600">
                Phút
              </Text>
            </VStack>
            <VStack>
              <Text data-aos="zoom-in-right" fontSize="5xl" color="gray.600">
                {seconds}
              </Text>
              <Divider orientation="horizontal" width={120} />
              <Text data-aos="zoom-in-left" as="i" color="gray.600">
                Giây
              </Text>
            </VStack>
          </Stack>
          <VStack position="relative">
            <Image
              data-aos="fade-up"
              position="absolute"
              alt="floral2"
              src={floral2.src}
              height={{ xs: "100px", sm: "150px", md: "150px", lg: "150px" }}
              bottom={{ xs: -120 }}
            />
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}
