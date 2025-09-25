// src/components/Dashboard/TableActions.jsx
import React from "react";
import { VStack, Button } from "@chakra-ui/react";

export default function TableActions({ onPreview, onView, onApply }) {
  return (
    <VStack spacing={2} align="stretch">
      <Button size="sm" colorScheme="blue" onClick={onPreview}>
        Preview
      </Button>
      <Button size="sm" colorScheme="teal" onClick={onView}>
        Download
      </Button>
      <Button size="sm" colorScheme="green" onClick={onApply}>
        Apply
      </Button>
    </VStack>
  );
}
