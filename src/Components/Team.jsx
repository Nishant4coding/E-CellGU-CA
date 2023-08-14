import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Avatar,
  Stack,
  Center,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const boardLeaders = [
    {
      name: "Vishal Devsaini",
      position: "President",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Sakskam Chawla",
      position: "Vice President",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Atharva Srivastava",
      position: "Sr. Advisor",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Vansh Taneja",
      position: "Treasurer",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        email: "janesmith@example.com",
      },
    },
  ];

  const teamLeaders = [
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/bobwilliams",
        twitter: "https://twitter.com/bobwilliams",
        linkedin: "https://www.linkedin.com/in/bobwilliams",
        email: "bobwilliams@example.com",
      },
    },
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <Center>
      <Box py={10} backgroundColor={"blackAlpha.700"}>
        <Container maxWidth={"90%"} justify="center" alignItems="center" >
          <Center>
          <Box
            display="inline-block"
            px={4}
            mb={'20px'}
            py={1}
            alignItems={'center'}
            bgColor={'white'}
            borderRadius="md"
            boxShadow="lg"
          >
            <Heading size="lg" color="black" textAlign={'center'}>
              Team E-Cell{" "}
            </Heading>
          </Box>
          </Center>
          <Center>
            <Center>
            <Flex
              justifyContent={isMobile ? "center" : "space-between"}
              flexWrap="wrap"
              width={["90%", "80%", "70%", "100%"]} // Adjust width for mobile view
            >
              {boardLeaders.map((member, index) => (
                <Box
                  key={index}
                  bg="white"
                  boxShadow="lg"
                  borderRadius="lg"
                  p={6}
                  textAlign="center"
                  flexBasis="calc(25% - 24px)" // Adjust width for board leaders
                  mb={10}
                  transition="transform 0.3s, box-shadow 0.3s"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                >
                  <Avatar
                    size="xl"
                    name={member.name}
                    src={member.imageUrl}
                    mb={4}
                  />
                  <Heading size="md" mb={2}>
                    {member.name}
                  </Heading>
                  <Text color="gray.500" mb={2}>
                    {member.position}
                  </Text>
                  <Stack
                    direction="row"
                    mt={4}
                    spacing={4}
                    justifyContent="center"
                  >
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a href={`mailto:${member.social.email}`}>
                      <FaEnvelope size={24} />
                    </a>
                  </Stack>
                </Box>
                
                
              ))}
              {teamLeaders.map((member, index) => (
                <Box
                  key={index}
                  bg="white"
                  boxShadow="lg"
                  borderRadius="lg"
                  p={6}
                  textAlign="center"
                  flexBasis="calc(20% - 24px)" // Adjust width for team leaders
                  mb={10}
                  transition="transform 0.3s, box-shadow 0.3s"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                >
                  <Avatar
                    size="xl"
                    name={member.name}
                    src={member.imageUrl}
                    mb={4}
                  />
                  <Heading size="md" mb={2}>
                    {member.name}
                  </Heading>
                  <Text color="gray.500" mb={2}>
                    {member.position}
                  </Text>
                  <Stack
                    direction="row"
                    mt={4}
                    spacing={4}
                    justifyContent="center"
                  >
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a href={`mailto:${member.social.email}`}>
                      <FaEnvelope size={24} />
                    </a>
                  </Stack>
                </Box>
                
              ))}
            </Flex>
            </Center>
          </Center>
        </Container>
      </Box>
    </Center>
  );
};

export default Team;
