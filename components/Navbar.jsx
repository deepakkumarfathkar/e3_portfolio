import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import { Container, Flex } from '@chakra-ui/react';

const Navbar = () => {
    const Router = useRouter();

  return (
    <Container bgColor="gray.200" maxW="100%">
    <Flex gap={"20px"} ml="4" padding="8"  >
        <Link href="/">Deepak Kumar Fathkar</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
    </Flex>
    </Container>
  )
}



export default Navbar