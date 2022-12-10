import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Avatar,
  CardFooter,
  Stack,
  Text,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  PopoverArrow,
  PopoverHeader,
  ButtonGroup,
} from "@chakra-ui/react";

function Explore() {
  return (
    <>
      <Box>
        <Flex h={"70px"} px={"10rem"} gap={10}>
          <Center>
            <Heading size={"lg"}>Explore the Showcase</Heading>
          </Center>
          <Flex gap={6} align={"center"}>
            <Link href="#" fontSize={"xl"} fontWeight={"medium"}>
              Popular
            </Link>
            <Link href="#" fontSize={"xl"}>
              Recent
            </Link>
            <Link href="#" fontSize={"xl"}>
              Cloneable
            </Link>
          </Flex>
        </Flex>
        <Divider />
        <Flex px={"10rem"} py={"2rem"}>
          <List display={"flex"} gap={5}>
            <ListItem>Recent</ListItem>
            <ListItem fontWeight={"medium"}>Most Liked</ListItem>
            <ListItem>Most Viewed</ListItem>
          </List>
        </Flex>
        <Grid
          px={"10rem"}
          h="fit-content"
          templateColumns="repeat(4, auto)"
          gap={8}
          pb={10}
        >
          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9zJTIwc3RhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                    height={"full"}
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>6,361</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>1,546</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>826</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>MILK</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              4
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              1,235
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              2,365
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      New Concept for Hex Cones
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        MILK
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1548092176-dff0757b8ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN0YWNrcyUyMG9mJTIwYm9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>27,616</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>4,905</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>8,264</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Kola Tioluwani"
                        src="https://bit.ly/tioluwani-kolawole"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>KolaTioluwani</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              31
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              14,663
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              17
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      New Concept for IMBD
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        KolaTioluwani
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>2,752</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>31</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>538</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>joaopaulots</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              12
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              973
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              627
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      Webflow UI kit
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        joaopaulots
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1648260296289-ab882814a005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>15,998</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>3,901</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>472</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>janlosert</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              678
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              5,134
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              31
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      Cards 2.0 Framework UI
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        janlosert
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1575470522418-b88b692b8084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>12,717</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>645</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>5248</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>darioStefanutto</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              76
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              634
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              245
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      Legowork
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        darioStefanutto
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1554049264-8ff0bee7eacd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>1,925</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>18</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>273</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>jithelms</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              38
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              75
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              56
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      Iead Sports Accelerator
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        jithelms
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8YWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>12,405</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>3,140</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>2,163</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>OvertonGraphics</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              424
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              1,638
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              2,672
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      Geospace
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        OvertonGraphics
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem maxW={"sm"} maxH={"340px"} height={"340px"}>
            <Card key={"outlined"} variant={"outline"} height={"100%"}>
              <CardBody pb={"2"}>
                <AspectRatio ratio={3 / 2} maxH={"180px"} height={"180px"}>
                  <Image
                    src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="card_img"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Stack direction={"row"} spacing={"24px"} mt={"2"}>
                  <HStack color={"grey"}>
                    <i className="ri-eye-fill"></i>
                    <Text>7,051</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-message-2-fill"></i>
                    <Text>3,083</Text>
                  </HStack>
                  <HStack color={"grey"}>
                    <i className="ri-heart-fill"></i>
                    <Text>986</Text>
                  </HStack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Flex gap={4} align={"center"}>
                  <Popover placement="bottom-start" isLazy trigger="hover">
                    <PopoverTrigger>
                      <Avatar
                        as={"a"}
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                    </PopoverTrigger>
                    <PopoverContent border={"2px solid black"}>
                      <PopoverHeader
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Text>jaopaulots</Text>
                        <Button
                          colorScheme={"messenger"}
                          w={"90px"}
                          h={"34px"}
                          borderRadius={"md"}
                        >
                          Follow
                        </Button>
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex align={"center"} justify={"space-evenly"}>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              12
                            </Heading>
                            <Text>Posts</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              973
                            </Heading>
                            <Text>Followers</Text>
                          </Center>
                          <Center flexDirection={"column"}>
                            <Heading
                              as={"h5"}
                              size={"md"}
                              fontWeight={"medium"}
                            >
                              627
                            </Heading>
                            <Text>Following</Text>
                          </Center>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

                  <Stack direction={"column"}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      Heco
                    </Text>
                    <Text as={"p"} fontsize={"sm"} marginTop={"0px !important"}>
                      by{" "}
                      <Link
                        fontWeight={"medium"}
                        fontSize={"md"}
                        color="blue.500"
                        href="#"
                      >
                        joaopaulots
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Explore;
