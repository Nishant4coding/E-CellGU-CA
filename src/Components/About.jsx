import React from 'react';
import { Container, Box, Heading, Text, Flex, Button, Stack } from '@chakra-ui/react';
import Statistics from './Statistics';
import { motion } from 'framer-motion';

const About = () => {
  const MotionBox = motion(Box);

  return (
    <div id='#about'>
      <Stack backgroundColor={'blackAlpha.300'} >
        <Container maxW={'90%'} mt={10} >
          <Flex direction={{ base: 'column', md: 'row' }} mr={'20px'}>
            <Box textAlign={{ base: 'center', md: 'left' }} mb={8} mr={{ base: '0', md: '30px' }} justifyContent={'center'}>
              <Heading as="h1" fontSize={'30px'}>
                Entrepreneurship Cell Galgotias University
              </Heading>
              <Text color="gray.600">
                Empowering students to innovate, create, and succeed in the world of entrepreneurship.
              </Text>
              <Statistics />
            </Box>

            <Flex
              direction={{ base: 'column', md: 'row' }}
              bgGradient="linear(to-r, teal.500, cyan.500)"
              p={4}
              borderRadius="md"
              boxShadow="md"
              mb={8}
            >
              <MotionBox
                flex="1"
                p={4}
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                borderRadius="md"
              >
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
              </MotionBox>
              <Box flex="1" p={4}></Box>
            </Flex>
          </Flex>
        </Container>
      </Stack>
    </div>
  );
};

export default About;
