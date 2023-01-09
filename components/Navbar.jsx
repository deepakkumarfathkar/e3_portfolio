import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Flex } from "@chakra-ui/react";

const Navbar = () => {
  const Router = useRouter();

  return (
    <Container bgColor="gray.200" maxW="100%">
      <Flex gap={"20px"} ml="4" padding="8">
        <Link href="/">
          <Button
            _hover={{
              background: "white",
              color: "teal.500",
            }}
          >
            Deepak Kumar Fathkar
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            _hover={{
              background: "white",
              color: "teal.500",
            }}
          >
            Projects
          </Button>
        </Link>
        <Link href="/experience">
          <Button
            _hover={{
              background: "white",
              color: "teal.500",
            }}
          >
            Experience
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Navbar;
