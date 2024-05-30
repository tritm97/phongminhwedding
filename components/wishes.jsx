import {
  Button,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ref, set } from "firebase/database";

import { db } from "../utils/firebase";
import loichuc from "../public/guigam.svg";
import gui from "../public/gui.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Wishes = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [sended, setSended] = useState(false);

  const onChangeContent = (e) => {
    let inputValue = e.target.value;
    setContent(inputValue);
  };
  const onChangeName = (e) => {
    let inputValue = e.target.value;
    setName(inputValue);
  };

  const onSend = async () => {
    if (!content) return;
    const time = new Date().getTime();
    await set(ref(db, `wishes/${time}`), {
      name: (name || "").trim(),
      wish: content.trim(),
    });
    setName("");
    setContent("");
    setSended(true);
  };

  return (
    <HStack justify="center">
      <VStack>
        <Image
          data-aos="zoom-in-up"
          alt="loichuc"
          src={loichuc.src}
          width={400}
          mb={6}
        />
        {sended ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <VStack>
              <Text textAlign="center">
                Lời chúc của bạn đã được gửi đến chúng mình!
              </Text>
              <Text textAlign="center">Cảm ơn bạn rất nhiều!</Text>
            </VStack>
          </motion.div>
        ) : (
          <VStack
            data-aos="zoom-in-up"
            width={{ xs: "90vw", md: "70vw", lg: "40vw" }}
          >
            <Textarea
              height={120}
              value={content}
              onChange={onChangeContent}
              size="md"
              resize="none"
              focusBorderColor="#D3D3D3"
              placeholder="Lời chúc"
            />
            <Input
              value={name}
              onChange={onChangeName}
              size="md"
              variant="outline"
              focusBorderColor="#D3D3D3"
              placeholder="Cho chúng mình biết bạn là ai nhé!"
            />
            <HStack mt={2} w="100%" justify="flex-end" pos="relative">
              <Button
                color="main"
                _hover={{ bg: "#f9f0ec" }}
                variant="ghost"
                loadingText="Đang gửi..."
                onClick={onSend}
              >
                <Image alt="Send" src={gui.src} height={12} />
              </Button>
            </HStack>
          </VStack>
        )}
      </VStack>
    </HStack>
  );
};

export default Wishes;
