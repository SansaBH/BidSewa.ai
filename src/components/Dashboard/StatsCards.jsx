// src/components/Dashboard/StatsCards.jsx
import React from "react";
import { SimpleGrid, Box, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function StatsCards({ stats, onFilterChange, activeFilter }) {
  const cards = [
    { label: "Ongoing Contracts", value: stats.ongoing, filter: "ongoing" },
    { label: "Bid Eligible", value: stats.eligible, filter: "eligible" },
    { label: "Bid in Process", value: stats.process, filter: "process" },
    { label: "Bid Awarded", value: stats.awarded, filter: "awarded" },
    { label: "Completed Contracts", value: stats.completed, filter: "completed" },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3, 5]} spacing={6} mb={8}>
      {cards.map((card, idx) => {
        const isActive = activeFilter === card.filter;
        return (
          <MotionBox
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            bg={isActive ? "brand.500" : "white"}
            rounded="2xl"
            shadow={isActive ? "lg" : "md"}
            p={6}
            cursor="pointer"
            _hover={{ shadow: "lg", bg: isActive ? "brand.600" : "gray.50" }}
            onClick={() => onFilterChange(card.filter)}
          >
            <Stat textAlign="center">
              <StatLabel fontSize="md" color={isActive ? "white" : "gray.600"}>
                {card.label}
              </StatLabel>
              <StatNumber
                fontSize="2xl"
                fontWeight="bold"
                color={isActive ? "white" : "brand.500"}
              >
                {card.value}
              </StatNumber>
            </Stat>
          </MotionBox>
        );
      })}
    </SimpleGrid>
  );
}
