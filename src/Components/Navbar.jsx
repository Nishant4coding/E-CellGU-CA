import React, { useState } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  IconButton,
  Collapse,
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import logo from "../Assets/logo.png" 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      bg="gray.800"
      p={4}
      position="sticky"
      top={0}
      margin
      zIndex={1000} // Ensure the navbar is above other content
    >
      <Flex align="center">
        <Image src={logo }alt="Campus Logo" boxSize={'60px  '} ml={5} />
     
      </Flex>
      <Spacer/>
      <Button
          as={NavLink}
          to="/join"
          variant="solig"
          color="white"
          bgColor={'pink.400'}
          _hover={{ bgColor: 'pink.500' }}
          mr={4}
        >
          Apply Now
        </Button>
      <Flex align="center" display={{ base: 'none', md: 'flex' }}>
        
        <Button
          as={NavLink}
          to="/"
          variant="ghost"
          color="white"
          _hover={{ bgColor: 'gray.600' }}
          mr={4}
        >
          Home
        </Button>
        <Button
          as={NavLink}
          to="/about"
          variant="ghost"
          color="white"
          _hover={{ bgColor: 'gray.600' }}
          mr={4}
        >
          About Us
        </Button>
        {/* <Button
          as={NavLink}
          to="/events"
          variant="ghost"
          color="white"
          _hover={{ bgColor: 'gray.600' }}
          mr={4}
        >
          Events
        </Button> */}
        <Button
          as={NavLink}
          to="/profile"
          variant="ghost"
          color="white"
          _hover={{ bgColor: 'gray.600' }}
        >
          Profile
        </Button>
      </Flex>
      <IconButton
        aria-label="Toggle menu"
        icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        color={'white'}
        variant="ghost"
        display={{ base: 'flex', md: 'none' }}
        onClick={toggleMenu}
      />
      <Collapse in={isMenuOpen} animateOpacity>
        <Flex
          direction="column"
          position="absolute"
          top="80px"
          right="0px"
          bg="gray.800"
          p={4}
          rounded="md"
          boxShadow="md"
        >
          <Button
            as={NavLink}
            to="/"
            variant="ghost"
            color="white"
            // _hover={{ bgColor: 'gray.600' }}
            mb={2}
          >
            Home
          </Button>
          <Button
            as={NavLink}
            to="/courses"
            variant="ghost"
            color="white"
            _hover={{ bgColor: 'gray.600' }}
            mb={2}
          >
            Courses
          </Button>
          <Button
            as={NavLink}
            to="/events"
            variant="ghost"
            color="white"
            _hover={{ bgColor: 'gray.600' }}
            mb={2}
          >
            Events
          </Button>
          <Button
            as={NavLink}
            to="/profile"
            variant="ghost"
            color="white"
            _hover={{ bgColor: 'gray.600' }}
          >
            Profile
          </Button>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default Navbar;
