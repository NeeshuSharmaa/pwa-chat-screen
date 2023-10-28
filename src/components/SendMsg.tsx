import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import {
  Send,
  Camera,
  DocumentUpload,
  Video,
  InvertedTriangle,
} from "../Helpers/Icons";
import {} from "../Helpers/Icons";
import { AttachmentPopover } from "../ChakraStyles";

const SendMsg: React.FC = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      padding="0.5rem 1rem"
      background="#FAF9F4"
    >
      <Input
        placeholder="Reply to @Rohit Yadav"
        border="0"
        borderRadius="0.5rem"
        background="white"
        fontSize="0.875rem"
        padding="0.6875rem 5rem 0.6875rem 0.75rem"
      />
      <Flex
        alignItems="center"
        gap="1rem"
        position="absolute"
        right="1.75rem"
        top="1.1875rem"
        zIndex="5"
      >
        <Popover>
          <PopoverTrigger>
            <AttachmentIcon />
          </PopoverTrigger>

          <PopoverContent sx={AttachmentPopover}>
            {Camera}
            {Video}
            {DocumentUpload}
            <Box position="absolute" bottom="-6px" right="40%">
              {InvertedTriangle}
            </Box>
          </PopoverContent>
        </Popover>
        {Send}
      </Flex>
    </Box>
  );
};

export default SendMsg;
