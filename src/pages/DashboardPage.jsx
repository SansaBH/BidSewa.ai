// src/pages/DashboardPage.jsx
import { useState, useMemo } from "react";
import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import Header from "../components/Dashboard/Header";
import StatsCards from "../components/Dashboard/StatsCards";
import BidsTable from "../components/Dashboard/BidsTable";
import DocumentsPanel from "../components/Dashboard/DocumentsPanel";
import sampleBids from "../data/sampleBids";

// Auto-calculate status based on lastDateSubmission
const getStatus = (bid) => {
  const today = new Date();
  const lastDate = new Date(bid.bidSchedule.lastDateSubmission);
  if (isNaN(lastDate)) return bid.currentStatus || "Unknown";
  return today <= lastDate ? "Ongoing" : "Completed";
};

export default function DashboardPage() {
  const [filter, setFilter] = useState("all");
  const [projectTitle, setProjectTitle] = useState("");
  const [entityName, setEntityName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  // Stats
  const stats = useMemo(() => {
    return {
      completed: sampleBids.filter((b) => getStatus(b) === "Completed").length,
      ongoing: sampleBids.filter((b) => getStatus(b) === "Ongoing").length,
      process: sampleBids.filter((b) => b.currentStatus === "In Process").length,
      awarded: sampleBids.filter((b) => b.currentStatus === "Awarded").length,
      eligible: sampleBids.filter((b) => b.currentStatus === "Eligible").length,
    };
  }, []);

  // Normalize dates
  const normalizeDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d)) return "";
    return d.toISOString().split("T")[0];
  };

  // Table filtering
  const filteredBids = useMemo(() => {
    let bids = sampleBids;

    switch (filter) {
      case "completed":
        bids = bids.filter((b) => getStatus(b) === "Completed");
        break;
      case "ongoing":
        bids = bids.filter((b) => getStatus(b) === "Ongoing");
        break;
      case "process":
        bids = bids.filter((b) => b.currentStatus === "In Process");
        break;
      case "awarded":
        bids = bids.filter((b) => b.currentStatus === "Awarded");
        break;
      case "eligible":
        bids = bids.filter((b) => b.currentStatus === "Eligible");
        break;
      default:
        break;
    }

    return bids.filter(
      (b) =>
        (!projectTitle ||
          b.projectName?.toLowerCase().includes(projectTitle.toLowerCase())) &&
        (!entityName ||
          b.publicEntityName
            ?.toLowerCase()
            .includes(entityName.toLowerCase())) &&
        (!publishedDate ||
          normalizeDate(b.noticePublicationDate) === normalizeDate(publishedDate))
    );
  }, [filter, projectTitle, entityName, publishedDate]);

  // Reset all filters
  const resetFilters = () => {
    setFilter("all");
    setProjectTitle("");
    setEntityName("");
    setPublishedDate("");
  };

  return (
    <>
      <Header />
      <Box p={6} pt="80px" bg="bg" minH="100vh">
        <StatsCards stats={stats} onFilterChange={setFilter} activeFilter={filter} />

        {/* Filters */}
        <Box bg="card" color="text" shadow="sm" borderRadius="lg" p={4} mb={6} w="100%">
          <Flex flexWrap="wrap" gap={4} align="flex-end">
            <Box flex="1" minW="200px">
              <Text fontSize="sm" mb={1} fontWeight="medium">
                Project Title
              </Text>
              <Input
                placeholder="Enter project title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </Box>

            <Box flex="1" minW="200px">
              <Text fontSize="sm" mb={1} fontWeight="medium">
                Public Entity Name
              </Text>
              <Input
                placeholder="Enter entity name"
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
              />
            </Box>

            <Box flex="1" minW="200px">
              <Text fontSize="sm" mb={1} fontWeight="medium">
                Notice Published Date
              </Text>
              <Input
                type="date"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
              />
            </Box>

            <Box minW="150px">
              <Button w="100%" colorScheme="red" onClick={resetFilters}>
                Reset All
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Full-width table */}
        <Box w="100%">
          <BidsTable bids={filteredBids} getStatus={getStatus} />
        </Box>

        <DocumentsPanel />
      </Box>
    </>
  );
}
