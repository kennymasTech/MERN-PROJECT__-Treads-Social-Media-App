import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserPosts = () => {
  return (
    <Link to={"/aliumusa/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDir={"column"}>
          <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box pos={"relative"} w={"full"}>
            <Avatar
              src="/post1.png"
              name="Messi"
              size={"xs"}
              pos={"absolute"}
              top={"0"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Ronaldo"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Hazard"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDir={"column"} w={"full"}>
          <Flex alignItems={"center"} flexDir={"row"}>
            <Text>AliuMusa</Text>
            <Image src="/verified.png" ml={1} w={4} h={4} />
          </Flex>
          <Flex alignItems={"center"} flexDir={"row"}>
            <Text>1 day</Text>
            <BsThreeDots />
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;