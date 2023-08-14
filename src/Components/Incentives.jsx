import React from 'react';
import { Box, Container, Flex, Heading, Text, Image, Wrap, WrapItem ,Center} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Incentives = () => {
  const incentives = [
    {
      title: 'Earn While You Learn',
      // description: 'Get rewarded for your efforts and contributions as a Campus Ambassador.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Earn While You Learn',
      // description: 'Get rewarded for your efforts and contributions as a Campus Ambassador.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Networking Opportunities',
      // description: 'Connect with industry professionals, fellow Ambassadors',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Certification of Acievements',
      // description: 'Connect with industry professionals, fellow Ambassadors',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    // Add more incentives here
  ];

  return (
    <Box py={10} backgroundColor="black">
      <Container maxW="90%">
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              display="inline-block"
              px={4}
              py={1}
              bgGradient="linear(to-r, #FFD700, #FFA500)"
              borderRadius="md"
              boxShadow="lg"
            >
              <Heading size="lg" color="black">
                Incentives & Perks
              </Heading>
            </Box>
          </motion.div>
        </Box>
        
        <Flex justifyContent="center" width={'90%'} >
          <Wrap spacing={6} justify="center" alignItems="center" flexWrap="wrap">
            {incentives.map((incentive, index) => (
              <WrapItem key={index} >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Center>
                  <Box
                   width={'200px'}
                    bg="yellow.300"
                    boxShadow="lg"
                    borderRadius="lg"
                    p={6}
                    mb={6}
                    
                    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                  >
                    <Image
                      src={incentive.imageUrl}
                      alt={incentive.title}
                      objectFit="cover"
                      mb={4}
                    />
                    <Heading size="md" mb={2}>
                      {incentive.title}
                    </Heading>
                    <Text>{incentive.description}</Text>
                  </Box>
                  </Center>
                </motion.div>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Container>
    </Box>
  );
};

export default Incentives;
