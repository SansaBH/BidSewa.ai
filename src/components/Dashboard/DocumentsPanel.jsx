import React from "react";
import { Box, Heading, VStack, Input, Button, Text } from "@chakra-ui/react";

export default function DocumentsPanel({ bid, requiredDocs = [] }) {
  return (
    <Box p={4} shadow="md" borderWidth="1px" rounded="md" bg="white">
      <Heading size="md" mb={4}>
        Upload Required Documents for:{" "}
        {bid?.title || <Text as="span" color="gray.500">[No bid selected]</Text>}
      </Heading>

      {requiredDocs.length === 0 ? (
        <Text color="gray.500">No required documents found.</Text>
      ) : (
        <VStack spacing={3} align="stretch">
          {requiredDocs.map((doc, idx) => (
            <Input
              key={doc.id || idx}
              type="file"
              placeholder={doc.title || doc}
            />
          ))}
          <Button colorScheme="green">Submit Application</Button>
        </VStack>
      )}
    </Box>
  );
}
