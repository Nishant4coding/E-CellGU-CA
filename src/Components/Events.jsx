import React from 'react';
import { Box, Container, Flex, Heading, Text, Image, Wrap, WrapItem } from '@chakra-ui/react';

const Event = () => {
  const events = [
    {
      title: 'Workshop: Digital Marketing Strategies',
      description: 'Learn the latest digital marketing strategies to boost your business.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Networking Event: Meet Industry Experts',
      description: 'Connect with experienced professionals and expand your network.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    // Add more events here
  ];

  return (
    <Box py={10} backgroundColor="blackAlpha.700">
      <Container maxW="90%">
        <Heading size="lg" mb={6} textAlign={'center'} color={'black'}>
          Upcoming Events
        </Heading>
        <Flex justifyContent="center">
          <Wrap spacing={6}>
            {events.map((event, index) => (
              <WrapItem key={index}>
                <Box bg="white" boxShadow="lg" borderRadius="lg" p={6} mb={6}>
                  <Image src={event.imageUrl} alt={event.title} maxH="200px" objectFit="cover" mb={4} />
                  <Heading size="md" mb={2}>
                    {event.title}
                  </Heading>
                  <Text>{event.description}</Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Container>
    </Box>
  );
};

export default Event;
