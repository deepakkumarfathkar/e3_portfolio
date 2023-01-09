import React from 'react'
import { username } from "../index.js";
import { Center, Container, Heading } from '@chakra-ui/react';

const Experience = ({data}) => {
  return (
    <Container maxW={"100%"} bgColor="gray.300" pt={5}>
        <Center>
            <Heading mt={"20%"} mb={"30%"}>{data.bio}</Heading>
        </Center>
    </Container>
  )
}


export async function getStaticProps() {
    let resp = await fetch(`https://api.github.com/users/${username}`);
    let data_received = await resp.json();
    return {
      props: {
        data: data_received,
      },
    };
  }

export default Experience