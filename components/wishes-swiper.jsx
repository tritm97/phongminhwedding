import { Autoplay, FreeMode } from "swiper";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { onValue, ref } from "firebase/database";
import { shuffle } from "../utils/array";

import { db } from "../utils/firebase";
import floral from "../public/floral10.svg";

const breakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 960,
  xl: 1200,
};

const WishesSwiper = () => {
  const [wishes, setWishes] = useState([]);
  const [wishPerSlide, setWishPerSlide] = useState(3);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot?.val()?.wishes;
      if (data != null) {
        const wishesTemp = Object.values(data).map((w) => w);
        setWishes(shuffle(wishesTemp));
      }
    });
  }, []);

  const innerWidth = window.innerWidth;

  useEffect(() => {
    if (innerWidth <= breakpoints.md) setWishPerSlide(2);
    if (breakpoints.md < innerWidth && innerWidth < breakpoints.lg)
      setWishPerSlide(4);
    if (breakpoints.lg < innerWidth && innerWidth < breakpoints.xl)
      setWishPerSlide(5);
    if (breakpoints.xl <= innerWidth) setWishPerSlide(6);
  }, [innerWidth]);

  const renderWish = (data, key) => {
    const { name, wish } = data;
    return (
      <VStack
        data-aos="zoom-in-up"
        key={key}
        minHeight="120px"
        minWidth="200px"
        maxWidth="400px"
        width={{ xs: "80%", sm: "85%", md: "90%", lg: "100%" }}
        py={4}
        px={6}
        justifyContent="space-between"
        alignItems="flex-start"
        borderWidth={1}
        borderRadius={8}
        borderColor="#D3D3D3"
        position="relative"
        backgroundColor="white"
      >
        <Text
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: wish }}
        ></Text>
        {name && (
          <HStack
            justifyContent="flex-end"
            w="100%"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            <Text
              as="i"
              marginLeft="auto"
              textAlign="left"
              mr={8}
              fontSize={14}
            >
              {name}
            </Text>
          </HStack>
        )}
        <Image
          position="absolute"
          right={-35}
          bottom={0}
          alt="top"
          src={floral.src}
          height="50px"
        />
      </VStack>
    );
  };

  const renderSlide = (page) => {
    const step = page * wishPerSlide;
    let slides = [];
    for (let i = 0; i < wishPerSlide; i++) {
      const wish = wishes[i + step];
      if (wish) slides.push(renderWish(wish, i + step));
    }
    return (
      <SwiperSlide key={step}>
        <Stack
          // bg={{ xs: "coral", sm: "red", md: "orange", lg: "green" }}
          width="100%"
          padding={4}
          wrap="wrap"
          justify="center"
          alignItems="center"
          alignContent="space-evenly"
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          gap={{ xs: 6, sm: 8, md: 8, lg: 8, xl: 10 }}
        >
          {slides}
        </Stack>
      </SwiperSlide>
    );
  };

  const slideAmount = useMemo(
    () => Math.round(wishes?.length / wishPerSlide + 1),
    [wishes, wishPerSlide]
  );

  const renderWishes = () => {
    let slides = [];
    for (let page = 0; page < slideAmount; page++) {
      if (wishes[page * wishPerSlide]) slides.push(renderSlide(page));
    }
    return slides;
  };

  if (wishes?.length == 0) return <Box h="35vh" />;

  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      w={{ xs: "100vw", sm: "100vw", md: "100vw", lg: "95vw", xl: "95vw" }}
      minHeight="35vh"
      mt={{ xs: 8 }}
      mx="auto"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
      >
        {renderWishes()}
      </Swiper>
    </HStack>
  );
};

export default WishesSwiper;
