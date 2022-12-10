import {
  Box,
  Text,
  Divider,
  Flex,
  Center,
  Heading,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  List,
  ListItem,
  ListIcon,
  Stack,
  Button,
  Code,
} from "@chakra-ui/react";
import { MdBook } from "react-icons/md";

function Home() {
  return (
    <Box>
      <Flex p={6} bg={"#011627"} color="white">
        <Center>
          <Heading>This is a heading</Heading>
        </Center>
        <Spacer />
        <Center>
          <Stat>
            <StatLabel fontSize={"1.2rem"}>Total wishlists</StatLabel>
            <StatNumber>0</StatNumber>
          </Stat>
        </Center>
      </Flex>
      <Divider />
      <Flex wrap={"wrap"}>
        <Box flex={3} borderRight={"1px solid #eee"}>
          <Box p={8} borderBottom={"1px solid #eee"}>
            <Heading size={"md"}>Wish Lists</Heading>
          </Box>
          <Box p={8}>
            <List spacing={5}>
              <Flex as={"li"} align={"center"}>
                <ListIcon as={MdBook} color="green.500" />
                <Text as={"span"} noOfLines={1}>
                  Wish List icon 1
                </Text>
              </Flex>
              <Flex as={"li"} align={"center"}>
                <ListIcon as={MdBook} color="green.500" />
                <Text as={"span"} noOfLines={1}>
                  Wish List icon 2
                </Text>
              </Flex>
              <Flex as={"li"} align={"center"}>
                <ListIcon as={MdBook} color="green.500" />
                <Text as={"span"} noOfLines={1}>
                  Wish List icon 3
                </Text>
              </Flex>
              <Flex as={"li"} align={"center"}>
                <ListIcon as={MdBook} color="green.500" />
                <Text as={"span"} noOfLines={1}>
                  Wish List icon 4
                </Text>
              </Flex>
              <Flex as={"li"} align={"center"}>
                <ListIcon as={MdBook} color="green.500" />
                <Text as={"span"} noOfLines={1}>
                  Wish List icon 5
                </Text>
              </Flex>
            </List>
          </Box>
        </Box>
        <Box flex={10} p={6}>
          <Flex wrap={"wrap"} gap={10}>
            <Center>
              <Heading>This is a Wish List Heading</Heading>
            </Center>
            <Spacer />
            <Box>
              <Stack direction={"row"} spacing={7} align={"center"}>
                <Button>Edit</Button>
                <Button colorScheme={"red"}>Delete</Button>
              </Stack>
            </Box>
          </Flex>
          <Code width={"100%"} mt={7} fontSize={"1.2rem"}>
            <pre>
              {JSON.stringify(
                {
                  id: "9VEWKi__ygmdMKzR4zTJJ",
                  name: "A sample post",
                },
                null,
                4
              )}
            </pre>
          </Code>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
