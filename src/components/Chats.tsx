import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Chat, ChatMessage, senderImage } from "../ChakraStyles";
import { IntersectionObserverCallback } from "./ChatHelpers";

const Chats: React.FC = () => {
  type Chat = {
    id: string;
    message: string;
    sender: { image: string };
  };
  const [pageNum, setPageNum] = useState<number>(0);
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const element = useRef<HTMLDivElement | null>(null);
  const lastElement = useRef<HTMLDivElement | null>(null);
  const scrolled = useRef<boolean>(false);

  const scrollToBottom = () => {
    lastElement?.current?.scrollIntoView();
    setTimeout(() => {
      scrolled.current = true;
    }, 0);
  };
  const scrollToMid = () => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  };

  useEffect(() => {
    console.log(scrolled.current);
    if (scrolled.current) {
      const elementRef = element.current;
      console.log("hello", elementRef);
      const handleObserver: IntersectionObserverCallback = (entries) => {
        const target = entries[0];

        if (target.isIntersecting) {
          console.log("intersecting");

          setPageNum((prev) => prev + 1);
        }
      };
      const observer = new IntersectionObserver(handleObserver);
      if (elementRef) {
        console.log("observing");
        observer.observe(elementRef);
      }
      return () => {
        if (elementRef) {
          console.log("cleaned observed");
          observer.unobserve(elementRef);
        }
      };
    }
  }, [scrolled.current, element.current]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${pageNum}`
      );
      console.log("chats fetched", pageNum);
      setChats((chats) => [...new Set([...res.data.chats, ...chats])]);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (pageNum === 0) {
      console.log("bottom scroll");
      scrollToBottom();
    } else {
      console.log("mid scroll");
      scrollToMid();
    }
  }, [chats]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [pageNum]);

  console.log("chats", chats);
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      paddingTop="10rem"
      background={loading ? "white" : "#FAF9F4"}
    >
      {loading && <Text alignSelf="center">...Loading</Text>}
      {!loading && (
        <Flex flexDirection="column" gap="1rem">
          <Box ref={element}></Box>
          {chats.map(({ id, message, sender: { image } }: Chat, index) => (
            <Flex
              sx={Chat}
              key={id}
              ref={chats.length === index + 1 ? lastElement : null}
            >
              <Image sx={senderImage} src={image} />
              <Text sx={ChatMessage}>{message}</Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Chats;
