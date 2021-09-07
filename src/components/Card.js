import { Box, Image, Badge, Text, Stack, Icon, Button } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const Card = () => {
  return (
    <Box
      w="300px"
      rounded="30px"
      overflow="hidden"
      boxShadow="sm"
      bg="gray.300"
      ml={10}
    >
      <Image src="https://goncy.netlify.app/static/d52f717f79aca102bdd13af15e455879/69755/banner.jpg"></Image>
      <Box p={4}>
        <Stack isInline align="baseline">
          <Badge variant="solid" rounded="full" px={2} colorScheme="blue">
            NEW!
          </Badge>
          <Badge variant="solid" rounded="full" px={2} colorScheme="blue">
            React
          </Badge>
          <Text
            textTransform="uppercase"
            fontSize="sm"
            color="gray.500"
            letterSpacing="wide"
          >
            2 HOURS 12 LECTURES
          </Text>
        </Stack>
        <Text as="h2" fontWeight="semibold" color="black" mt={1}>
          Introducción to Chakra-ui
        </Text>
        <Text fontWeight="light" fontSize="md" color="black" mt={1}>
          Chakra UI is a simple, modular and accessible component library that
          gives you the building blocks you need to build your React
          applications.
        </Text>
        <Stack isInline mt={2} alignItems="center" direction="space-between">
          <Text
            fontWeight="semibold"
            fontSize="lg"
            color="gray.500"
            justify="space-between"
            mr={2}
          >
            $20
          </Text>
          {Array(4)
            .fill("")
            .map((_, i) => (
              <AiFillStar color="green" />
            ))}

          <AiFillStar color="black" />
          <Text as="h4" fontSize="md" color="gray.500" fontWeight="semibold">
            34 Reviews
          </Text>
        </Stack>
        <Box textAlign="center">
          <Button colorScheme="blue" size="lg" mt={3}>
            Sign up Now!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
