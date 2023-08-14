import React, { useState } from "react";
import {
  Box,
  Heading,
  ChakraProvider,
  CSSReset,
  Button,
  IconButton,
  useDisclosure,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./App.css";
import Navbar from "./Navbar";
import ProfileDetails from "./ProfileDetails";

const Card = ({ children }) => (
  <Box
    borderWidth="1px"
    alignContent={"center"}
    justifyContent={"center"}
    p={4}
    rounded="md"
    boxShadow="md"
    bgGradient="linear( #FFA500)"
    transition="transform 0.2s"
    _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
    mb={4}
  >
    {children}
  </Box>
);

const EventCard = ({ title, description }) => (
  <Card>
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text mb={2}>{description}</Text>
  </Card>
);

const PersonalDetails = () => <ProfileDetails />;

const dummyCertification = [
  {
    title: "Coding Competition Winner",
    description: "Secured 1st place in the national coding competition.",
  },
  {
    title: "Honor Roll",
    description: "Recognized for outstanding academic performance.",
  },
  // Add more achievements
];

const Certification = () => (
  <Card>
    <Heading size="md" mb={2}>
      Certification
    </Heading>
    {dummyCertification.map((certification, index) => (
      <EventCard
        key={index}
        title={certification.title}
        description={certification.description}
      />
    ))}
  </Card>
);
const dummyAcheivement = [
  {
    title: "Coding Competition Winner",
    description: "Secured 1st place in the national coding competition.",
  },
  {
    title: "Honor Roll",
    description: "Recognized for outstanding academic performance.",
  },
  // Add more achievements
];

const Achievements = () => (
  <Card>
    <Heading size="md" mb={2}>
      Acheivements
    </Heading>
    {dummyAcheivement.map((achievement, index) => (
      <EventCard
        key={index}
        title={achievement.title}
        description={achievement.description}
      />
    ))}
  </Card>
);

const dummyCollaboratedEvents = [
  {
    title: "Web Development Workshop",
    description: "Hosted a workshop on front-end development.",
  },
  {
    title: "Hackathon 2023",
    description: "Co-organized a 2-day hackathon event.",
  },
  // Add more events
];

const CollaboratedEvents = () => (
  <Card>
    <Heading size="md" mb={2}>
      Collaborated Events
    </Heading>
    {dummyCollaboratedEvents.map((event, index) => (
      <EventCard
        key={index}
        title={event.title}
        description={event.description}
      />
    ))}
  </Card>
);

const Profile = () => {
  const [activeSection, setActiveSection] = useState("personal-details");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderActiveSection = () => {
    switch (activeSection) {
      case "achievements":
        return <Achievements />;
      case "certification":
        return <Certification />;
      case "collaborated-events":
        return <CollaboratedEvents />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <ChakraProvider>
      {/* <Navbar/> */}
      <CSSReset />
      <Box className="app-container">
        {/* Mobile menu */}
        <Box className="mobile-menu" display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            aria-label="Open Menu"
            onClick={onOpen}
          />
        </Box>

        {/* Sidebar */}
        <Box className="sidebar" display={{ base: "none", md: "block" }}>
          <Heading className="sidebar-heading" size="md" mb={4}>
            Dashboard
          </Heading>
          <Button
            onClick={() => setActiveSection("personal-details")}
            variant="ghost"
            color="white"
            mb={2}
            _hover={{ bgColor: "gray.700" }}
          >
            Personal Details
          </Button>
          <Button
            onClick={() => setActiveSection("achievements")}
            variant="ghost"
            color="white"
            mb={2}
            _hover={{ bgColor: "gray.700" }}
          >
            Achievements
          </Button>
          <Button
            onClick={() => setActiveSection("certification")}
            variant="ghost"
            color="white"
            _hover={{ bgColor: "gray.700" }}
          >
            Certifications{" "}
          </Button>
          <Button
            onClick={() => setActiveSection("collaborated-events")}
            variant="ghost"
            color="white"
            _hover={{ bgColor: "gray.700" }}
          >
            Collaborated Events
          </Button>
        </Box>

        {/* Main content */}
        <Box className="main-content">{renderActiveSection()}</Box>
      </Box>

      {/* Mobile sidebar */}
      <Box
        className={`mobile-sidebar ${isOpen ? "open" : ""}`}
        display={{ base: "block", md: "none" }}
      >
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          color="white"
          aria-label="Close Menu"
          onClick={onClose}
          mb={4}
        />
        <Button
          onClick={() => {
            onClose();
            setActiveSection("personal-details");
          }}
          variant="ghost"
          color="white"
          mb={2}
          _hover={{ bgColor: "gray.700" }}
        >
          Personal Details
        </Button>
        <Button
          onClick={() => {
            onClose();
            setActiveSection("achievements");
          }}
          variant="ghost"
          color="white"
          mb={2}
          _hover={{ bgColor: "gray.700" }}
        >
          Achievements
        </Button>
        <Button
          onClick={() => {
            onClose();
            setActiveSection("certification");
          }}
          variant="ghost"
          color="white"
          mb={2}
          _hover={{ bgColor: "gray.700" }}
        >
          Certification
        </Button>
        <Button
          onClick={() => {
            onClose();
            setActiveSection("collaborated-events");
          }}
          variant="ghost"
          color="white"
          mb={2}
          _hover={{ bgColor: "gray.700" }}
        >
          Collaborated Events
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default Profile;
