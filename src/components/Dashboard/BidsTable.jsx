import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import TableActions from "./TableActions";
import PdfViewer from "./PdfViewer";
import { generateBidPDF } from "../../utils/pdfUtils";

function calculateDaysLeft(lastDate) {
  const today = new Date();
  const endDate = new Date(lastDate);
  const diffTime = endDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function BidsTable({ bids, getStatus }) {
  const [selectedBid, setSelectedBid] = useState(null);

  return (
    <>
      <Box borderWidth="1px" rounded="md" overflowX="auto">
        <TableContainer>
          <Table variant="simple" size="sm" width="100%">
            <Thead bg="red.600">
              <Tr>
                <Th color="white" py={3}>SI. No</Th>
                <Th color="white" py={3}>IFB/RFP/EOI/PQ No.</Th>
                <Th color="white" py={3}>Project Title</Th>
                <Th color="white" py={3}>Public Entity Name</Th>
                <Th color="white" py={3}>Notice Published</Th>
                <Th color="white" py={3}>Last Date Of Bid Submission</Th>
                <Th color="white" py={3}>Days Left</Th>
                <Th color="white" py={3}>Status</Th>
                <Th color="white" textAlign="center" py={3}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {bids.map((bid, idx) => (
                <Tr key={bid.id} _odd={{ bg: "gray.50" }} _hover={{ bg: "gray.100" }}>
                  <Td><Text>{idx + 1}</Text></Td>
                  <Td><Text>{bid.noticeNo}</Text></Td>
                  <Td>
                    <Tooltip label={bid.projectName} hasArrow>
                      <Text noOfLines={1} maxW="180px">{bid.projectName}</Text>
                    </Tooltip>
                  </Td>
                  <Td>
                    <Tooltip label={bid.publicEntityName} hasArrow>
                      <Text noOfLines={1} maxW="180px">{bid.publicEntityName}</Text>
                    </Tooltip>
                  </Td>
                  <Td><Text>{bid.noticePublicationDate}</Text></Td>
                  <Td><Text>{bid.bidSchedule.lastDateSubmission}</Text></Td>
                  <Td>
                    <Text>
                      {calculateDaysLeft(bid.bidSchedule.lastDateSubmission) > 0
                        ? calculateDaysLeft(bid.bidSchedule.lastDateSubmission)
                        : ""}
                    </Text>
                  </Td>
                  {/* ✅ Show auto-calculated status */}
                  <Td><Text>{getStatus(bid)}</Text></Td>
                  <Td textAlign="center">
                    <TableActions
                      onPreview={() => setSelectedBid(bid)}
                      onView={() => generateBidPDF(bid, true)} // download
                      onApply={() => alert(`Applying for ${bid.projectName}`)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Show PdfViewer modal if preview is selected */}
      {selectedBid && (
        <PdfViewer bid={selectedBid} onClose={() => setSelectedBid(null)} />
      )}
    </>
  );
}
