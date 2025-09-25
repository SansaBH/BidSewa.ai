import { useState } from "react";
import {
  Box,
  HStack,
  Select,
  FormLabel,
  VStack,
  Input,
} from "@chakra-ui/react";

export default function TableFilters({ bids, onFilter }) {
  const [filters, setFilters] = useState({
    project: "",
    entity: "",
    date: "",
  });

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  // Extract unique options dynamically
  const uniqueProjects = [...new Set(bids.map((b) => b.projectName))];
  const uniqueEntities = [...new Set(bids.map((b) => b.publicEntityName))];

  return (
    <Box mb={6} bg="white" p={4} rounded="xl" shadow="sm">
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          {/* Project Title Filter */}
          <Box flex="1">
            <FormLabel fontSize="sm">Project Title</FormLabel>
            <Select
              placeholder="All Projects"
              value={filters.project}
              onChange={(e) => handleChange("project", e.target.value)}
            >
              {uniqueProjects.map((p, idx) => (
                <option key={idx} value={p}>
                  {p}
                </option>
              ))}
            </Select>
          </Box>

          {/* Public Entity Filter */}
          <Box flex="1">
            <FormLabel fontSize="sm">Public Entity</FormLabel>
            <Select
              placeholder="All Entities"
              value={filters.entity}
              onChange={(e) => handleChange("entity", e.target.value)}
            >
              {uniqueEntities.map((eName, idx) => (
                <option key={idx} value={eName}>
                  {eName}
                </option>
              ))}
            </Select>
          </Box>

          {/* Date Filter */}
          <Box flex="1">
            <FormLabel fontSize="sm">Notice Published</FormLabel>
            <Input
              type="date"
              value={filters.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
