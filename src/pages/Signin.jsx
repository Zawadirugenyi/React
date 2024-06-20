// src/Login.js
import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';

function Signin() {
  const handleLogin = (event) => {
    event.preventDefault();
   
    console.log("Login clicked");
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
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" size="md" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default Signin;
