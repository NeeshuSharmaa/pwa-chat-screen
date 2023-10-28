import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import {
  EllipsisPopover,
  EllipsisPopoverItems,
  HeaderFlex,
} from "../ChakraStyles";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import { Ellipsis, Member, Phone, Report } from "../Helpers/Icons";

const Header: React.FC = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      right="0"
      left="0"
      flexDirection="column"
      gap="1rem"
      padding="1.25rem 1rem 1rem 1rem"
      border="1px solid lightgray"
      background="#FAF9F4"
    >
      <Flex sx={HeaderFlex}>
        <Flex gap="0.5rem" alignItems="center">
          <ArrowBackIcon boxSize={6} />
          <Heading as={"h3"} fontSize="24px">
            Trip 1
          </Heading>
        </Flex>
        <EditIcon />
      </Flex>

      <Flex sx={HeaderFlex}>
        <Flex gap="0.5rem" alignItems="center" position="relative">
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Image src="img1.png" />
            </GridItem>
            <GridItem>
              <Image src="img2.png" />
            </GridItem>
            <GridItem>
              <Image src="img3.png" />
            </GridItem>
            <GridItem>
              <Image src="img4.png" />
            </GridItem>
          </Grid>
          <Flex flexDirection="column">
            <HStack>
              <Text color="#606060">From</Text>
              <Text as="b">IGI Airport, T3</Text>
            </HStack>
            <HStack>
              <Text color="#606060">To</Text>
              <Text as="b"> Sector 28</Text>
            </HStack>
          </Flex>

          <Box
            width="68px"
            height="68px"
            backgroundColor="transparent"
            border="10px solid #FAF9F4"
            borderRadius="100%"
            position="absolute"
            top="-10px"
            left="-10px"
          ></Box>
        </Flex>
        <Popover>
          <PopoverTrigger>{Ellipsis}</PopoverTrigger>

          <PopoverContent sx={EllipsisPopover}>
            <HStack sx={EllipsisPopoverItems}>
              {Member}
              <Text>Member</Text>
            </HStack>
            <HStack sx={EllipsisPopoverItems}>
              {Phone}
              <Text>Phone</Text>
            </HStack>
            <HStack sx={EllipsisPopoverItems}>
              {Report}
              <Text>Report</Text>
            </HStack>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};

export default Header;
