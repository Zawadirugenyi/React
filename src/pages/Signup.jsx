// src/Signup.js
import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';

function Signup() {
  const handleSignup = (event) => {
    event.preventDefault();
   
    console.log("Signup clicked");
  };

  return (
    <Container centerContent>
      <Box
        p={8}
        mt={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="lg" textAlign="center">
            Signup
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" size="md" onClick={handleSignup}>
            Signup
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default Signup;
