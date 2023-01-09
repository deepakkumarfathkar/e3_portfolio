import Link from "next/link";
import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
export const username = "deepakkumarfathkar";

export default function Home({ data }) {
  return (
    <Box bgColor="gray.300" maxW="500">
      <Flex direction={"column"} gap="5">
        <Center>
          <Image
            src={data.avatar_url}
            alt={data.login}
            w={200}
            borderRadius="50%"
          />
        </Center>
        <Text textAlign={"center"} fontWeight="extrabold">
          {data.name}
        </Text>
        <Text textAlign={"center"}>{data.location}</Text>
        <Text textAlign={"center"}>{data.bio}</Text>
      </Flex>
      <Center>
        <Flex paddingTop={8} paddingBottom={8} gap={8}>
          <Button>Resume</Button>
          <Button>
            <Link href={data.html_url}>Follow</Link>
          </Button>
        </Flex>
      </Center>
    </Box>
  );
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
