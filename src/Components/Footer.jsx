import React from 'react';
import { Box, Flex, Link, Text, Spacer } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="black"  color="white" pl={'20px'} pr={'20px'} >
      <Flex direction="column" align="center">
        <Text fontSize="lg" fontWeight="bold" mt={'20px'}>
          Entrepreneurship Cell <br /> Galgotias University
        </Text>

        <Flex mt={4}  >
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaFacebookF size={24} color="white" />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaTwitter size={24} color="white" mx={3} />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaInstagram size={24} color="white" mx={3} />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer" mr={'20px'}>
            <FaLinkedinIn size={24} color="white" />
          </Link>
        </Flex>
        <Spacer mt={4} />
        <Text mb={'20px'}>&copy; {new Date().getFullYear()} E-Cell Galgotias University</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
