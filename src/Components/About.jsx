import React from 'react';
import { Container, Box, Heading, Text, Flex, Image, SimpleGrid, Button } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="xl" mt={10}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl">
          About Entrepreneurship Cell Galgotias University
        </Heading>
        <Text color="gray.600">
          Empowering students to innovate, create, and succeed in the world of entrepreneurship.
        </Text>
      </Box>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        bgImage="url(/about-image.jpg)"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        p={4}
        borderRadius="md"
        boxShadow="md"
        mb={8}
      >
        <Box flex="1" p={4} bg="rgba(0, 0, 0, 0.5)" color="white">
          <Heading as="h2" size="md" mb={4}>
            Our Mission
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu metus a quam
            rhoncus varius in in arcu. Quisque scelerisque ligula non justo volutpat, vel
            eleifend sapien bibendum.
          </Text>
          <Button colorScheme="blue" mt={4}>
            Learn More
          </Button>
        </Box>
        <Box flex="1" p={4}></Box>
      </Flex>

      {/* Rest of your content */}
    </Container>
  );
};

export default About;
