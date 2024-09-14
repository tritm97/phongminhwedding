import {
  Box,
  Divider,
  Image,
  Link,
  Text,
  VStack,
  Center,
  Tooltip,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import floral9 from "../public/floral9.svg";
import inviting from "../public/chungvuivoichungminhtai.svg";

const Location = () => {
  return (
    <>
      <VStack
        px={6}
        mt={16}
        w="full"
        h="90vh"
        alignItems="center"
        justify="center"
      >
        <Image
          data-aos="zoom-in-up"
          alt="Chung vui với chúng mình"
          src={inviting.src}
          maxWidth={700}
        />
        <Center height="60px" data-aos="zoom-in-up">
          <Divider
            orientation="vertical"
            size="md"
            borderColor="main"
            opacity={0.5}
          />
        </Center>
        <VStack>
          <Text
            data-aos="fade-up"
            as="i"
            color="main"
            align="center"
            fontSize="lg"
          >
            Vào lúc
          </Text>
          <Text
            data-aos="fade-up"
            data-aos-delay="500"
            fontSize="6xl"
            color="main"
            align="center"
          >
            11:00 Chủ nhật
          </Text>

          <Text
            data-aos="fade-up"
            data-aos-delay="500"
            color="main"
            align="center"
            fontSize={120}
            lineHeight={1}
          >
            <Text as="span">22</Text>
            <Text as="span">.</Text>
            <Text as="span">09</Text>
          </Text>
          <Text
            data-aos="fade-up"
            data-aos-delay="500"
            fontSize={120}
            color="main"
            align="center"
            margin={0}
            lineHeight={1}
          >
            2024
          </Text>
        </VStack>

        <Center height="60px" data-aos="fade-up">
          <Divider
            orientation="vertical"
            size="md"
            borderColor="main"
            opacity={0.5}
          />
        </Center>

        <Text
          data-aos="fade-up"
          as="i"
          color="main"
          align="center"
          fontSize="lg"
        >
          Tại
        </Text>
        <Text data-aos="fade-up" fontSize="6xl" color="main" align="center">
          TƯ GIA
        </Text>
        <Tooltip label="Ấn vào đề mở bản đồ cho biết đường đi nè!">
          <Link
            data-aos="fade-up"
            href="https://maps.app.goo.gl/Aa1TcpMbWhwp57vN8"
            isExternal
          >
            <Text color="main" align="center" fontSize="lg">
              35/4/1 Rạch nhỏ, tổ 18, ấp 1, xã Mỹ Trà, thành phố Cao Lãnh, tỉnh Đồng Tháp
              <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Tooltip>
      </VStack>
      <Center my="120px">
        <Image
          data-aos="zoom-in-up"
          data-aos-delay="500"
          alt="floral9"
          src={floral9.src}
          width={120}
        />
      </Center>
    </>
  );
};

export default Location;
