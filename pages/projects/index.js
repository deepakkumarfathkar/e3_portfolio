import { Box, Center, Container, Grid, Text } from "@chakra-ui/react";
import Link from "next/link.js";
import React from "react";
import { username } from "../index.js";
console.log("username:", username);

const Projects = ({ data }) => {
  const itm = data.items;
  console.log("itm:", itm);
  return (
    <Container maxW={"100%"} bgColor="gray.300" pt={5}>
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {itm.map((el) => (
            <Box key={el.id} bgColor="gray.400" padding={20}>
              <Text textAlign={"center"}>Name: {el.name}</Text>
              <Text textAlign={"center"}>Language: {el.language}</Text>
              <Link href={el.forks_url} ><Text textAlign={"center"}>Fork</Text></Link>
            </Box>
        ))}
        </Grid>
      </Center>
    </Container>
  );
};

export async function getStaticProps() {
  let resp = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data_received = await resp.json();
  return {
    props: {
      data: data_received,
    },
  };
}

export default Projects;
