import React from 'react';
import { Box, Container, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Team from './Team';
import Incentives from './Incentives';
import Events from './Events';
import {motion} from 'framer-motion'
import ComponentStrips from './ComponentStrips';
import Footer from './Footer';
import ca from '../Assets/ca.gif'
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      
      <Box py={10} backgroundImage={ca} bgRepeat={'no-repeat'} bgPosition={'center'}>
      <Container maxW="xl" textAlign="center" height={{ base: '40vh', md: '40vh' }}>
          <Heading as="h1" size="xl" mb={4} mt={'15vh'} fontWeight={700}>
            Welcome to Campus Associates
          </Heading>
          <Text fontSize="lg" color="black" fontWeight={500} mb={8}>
            Explore a world of knowledge and opportunities.
          </Text>
          <Button
            as={Link}
            to="/join"
            colorScheme="pink"
            size="lg"
            px={10}
            py={4}
            fontSize="xl"
            fontWeight="bold"
            _hover={{ bg: 'pink.400' }}
          >
            Apply Now!
          </Button>
        </Container>
      </Box>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Incentives />
        <ComponentStrips/>
      </motion.div>
      <Events/>
      <ComponentStrips/>
      <Testimonials/>
      <ComponentStrips/>
      <Team/>
 <ComponentStrips/>
 <Footer/>     
    </Box>
  );
};

export default LandingPage;
