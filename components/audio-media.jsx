import { Box, Image, Text } from "@chakra-ui/react";
import { useState, useRef, useCallback } from "react";
import volumnUpIcon from "../public/volume-on.svg";
import volumnOffIcon from "../public/volume-off.svg";

import music from "../public/EveryMomentOfYou.423c1ad8fc13a9dc.mp3";

const VolumnOffIcon = () => (
  <Image alt="volumnOffIcon" src={volumnOffIcon.src} height={6} />
);
const VolumnUpIcon = () => (
  <Image alt="volumnOfvolumnUpIconfIcon" src={volumnUpIcon.src} height={6} />
);

const AudioMedia = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const play = useCallback(() => {
    if (audioRef?.current) {
      audioRef?.current?.play();
      setIsPlaying(true);
      setMuted(false);
    }
  }, [audioRef]);

  const pause = () => {
    if (audioRef?.current) {
      audioRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  const onToggle = () => {
    if (isPlaying) pause();
    else play();
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        id="music"
        muted={muted}
        src={music}
      />
      <Box
        data-aos="zoom-in-up"
        w={50}
        h={50}
        zIndex={100}
        position="fixed"
        bottom={6}
        right={6}
        borderWidth="1px"
        borderRadius="100px"
        borderColor="#c7bdb8"
        bgColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        opacity={0.7}
        onClick={onToggle}
        role="button"
      >
        {!isPlaying || muted ? <VolumnOffIcon /> : <VolumnUpIcon />}
      </Box>
      {muted && (
        <Box
          data-aos="zoom-in-up"
          zIndex={99}
          position="fixed"
          bottom={6}
          right={6}
          py={3}
          paddingLeft={3}
          paddingRight="60px"
          borderWidth="1px"
          borderRadius="100px"
          borderColor="#c7bdb8"
          bgColor="white"
          display="flex"
          justify="center"
          alignItems="center"
          opacity={0.7}
        >
          <Text userSelect="none">Mở âm thanh 👉</Text>
        </Box>
      )}
    </>
  );
};

export default AudioMedia;
