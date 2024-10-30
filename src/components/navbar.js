import { useState } from 'react';
import { Box, HStack, Heading, Spacer, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [activeButton, setActiveButton] = useState(null);

  // Handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <HStack
      bg="linear-gradient(to right, #fbc2eb, #a6c0fe)" // Pastel gradient background
      padding="10px 20px"
      boxShadow="lg" // Larger shadow for more depth
      alignItems="center"
      borderRadius="md" // Rounded corners for a smoother look
    >
      <Image
        boxSize="80px"
        objectFit="cover"
        src="./CSS Logo.png"
        alt="CSS Logo"
      />

      <Heading
          fontSize="36px"
		  color="white"
		  fontFamily="Segoe UI Emoji"
		  marginLeft="10px"
      >
        CSS Hackathon Blog
      </Heading>

      <Spacer />

      <HStack spacing="4" marginRight="20px">
        <Button
          as={Link}
          to="/"
          colorScheme="teal"
          variant={activeButton === 'home' ? 'solid' : 'outline'}
          _hover={{ bg: "teal.600", transform: "scale(1.05)" }} // Hover effect
          _active={{ bg: "teal.700", transform: "scale(1.05)" }} // Active effect
          transition="all 0.3s ease"
          onClick={() => handleButtonClick('home')}
        >
          Home
        </Button>
        <Button
          as={Link}
          to="/whoarewe"
          colorScheme="teal"
          variant={activeButton === 'whoarewe' ? 'solid' : 'outline'}
          _hover={{ bg: "teal.600", transform: "scale(1.05)" }} // Hover effect
          _active={{ bg: "teal.700", transform: "scale(1.05)" }} // Active effect
          transition="all 0.3s ease"
          onClick={() => handleButtonClick('whoarewe')}
        >
          Who Are We
        </Button>

        <Button
          as={Link}
          to="forothers"
          colorScheme="teal"
          variant={activeButton === 'for_others' ? 'solid' : 'outline'}
          _hover={{ bg: "teal.600", transform: "scale(1.05)" }} // Hover effect
          _active={{ bg: "teal.700", transform: "scale(1.05)" }} // Active effect
          transition="all 0.3s ease"
          onClick={() => handleButtonClick('for_others')}
        >
          For others
        </Button>
      </HStack>
    </HStack>
  );
}