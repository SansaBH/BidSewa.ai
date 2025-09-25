// src/components/Dashboard/Header.jsx
import React from "react";
import { Flex, Box, Text, HStack, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="brand.500"
      color="white"
      px={8}
      py={4}
      align="center"
      justify="space-between"
      shadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      {/* Left: Logo */}
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          BidSewa
        </Text>
      </Box>

      {/* Middle: Company Name (absolutely centered) */}
      <Box position="absolute" left="50%" transform="translateX(-50%)">
        <Text fontSize="xl" fontWeight="extrabold" textAlign="center">
          Your Company Pvt. Ltd.
        </Text>
      </Box>

      {/* Right: Navigation */}
      <HStack spacing={6}>
        <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>
          Dashboard
        </Button>
        <Button variant="link" color="white" _hover={{ textDecoration: "underline" }}>
          User Profile
        </Button>
        <Button colorScheme="red" variant="solid" size="sm" _hover={{ bg: "red.600" }}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
