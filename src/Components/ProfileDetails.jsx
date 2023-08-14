"use client";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import user from "../Assets/user.jpg";
import {motion} from 'framer-motion'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ProfileDetails() {
  return (
    <Center py={6}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={user} alt="#" />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Ravi Kumar
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            Campus Ambasader
          </Text>

          <Stack>
          <Text fontWeight={500} color={'black'} size="sm" mb={1}>Email: ravi@123 </Text>
          <Text fontWeight={500} color={'black'} size="sm" mb={1}>Mobile: +91 </Text>
          </Stack>
          <Flex mt={4}  >
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaFacebookF size={24} color="black" />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaTwitter size={24} color="black" mx={3} />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaInstagram size={24} color="black" mx={3} />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaLinkedinIn size={24} color="black" />
          </Link>
        </Flex>
        </Stack>
      </Stack>
        </motion.div>
    </Center>
  );
}
