// src/components/Dashboard/PdfViewer.jsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function PdfViewer({ bid, onClose }) {
  if (!bid) return null;

  const Section = ({ title, rows }) => (
    <Box mb={8}>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="red.600"
        borderBottom="2px solid"
        borderColor="gray.300"
        mb={3}
        pb={1}
      >
        {title}
      </Text>
      <SimpleGrid columns={2} spacingX={6} spacingY={3}>
        {rows.map(([label, value], idx) => (
          <Box key={idx}>
            <Text fontWeight="semibold">{label}:</Text>
            <Text>{value || "—"}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );

  return (
    <Modal isOpen={!!bid} onClose={onClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="red.600">Bid Related Document</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="stretch" spacing={8}>
            <Section
              title="View IFB/PQ/EOI/EF Notice Details"
              rows={[
                ["Public Entity Name", bid.publicEntityName],
                ["Procurement Category", bid.procurementCategory],
                ["Procurement Method", bid.procurementMethod],
                ["IFB/RFP/EOI/PQ No", bid.noticeNo],
                ["Project Name", bid.projectName],
                ["Current Status", bid.currentStatus],
                ["Source Of Funds", bid.sourceOfFunds],
                ["Notice Publication Date", bid.noticePublicationDate],
                ["Description", bid.descriptionOfWork],
              ]}
            />

            <Section
              title="Bid Information"
              rows={[
                ["Bidding Procure", bid.bidInformation.procure],
                ["Bidding Document of", bid.bidInformation.documentOf],
                ["Bidding Type", bid.bidInformation.type],
              ]}
            />

            <Section
              title="Funding Information"
              rows={[["Source of Fund", bid.fundingInformation.sourceOfFund]]}
            />

            <Section
              title="Bid Schedule"
              rows={[
                ["Bid Document Publication Date", bid.bidSchedule.publicationDate],
                ["Pre-Bid Meeting Address", bid.bidSchedule.preBidMeetingAddress],
                ["Bid Submission Address", bid.bidSchedule.submissionAddress],
                ["Bid Opening Address", bid.bidSchedule.openingAddress],
                ["Date of Pre-Bid Meeting", bid.bidSchedule.preBidMeetingDate],
                ["Last Date for Bid Submission", bid.bidSchedule.lastDateSubmission],
                ["Bid Opening Date", bid.bidSchedule.openingDate],
                ["Date of Start of Works", bid.bidSchedule.startDateOfWorks],
              ]}
            />

            <Section
              title="Bid Fee Details"
              rows={[
                ["Bid Document Fee (In NPR)", bid.bidFeeDetails.feeNPR],
                ["Bank Name", bid.bidFeeDetails.bankName],
              ]}
            />

            <Section
              title="Procurement Entity Contact Details"
              rows={[
                ["Name", bid.contactDetails.officialName],
                ["Designation", bid.contactDetails.designation],
                ["Address", bid.contactDetails.address],
                ["Contact", bid.contactDetails.contact],
              ]}
            />

            <Box>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="red.600"
                borderBottom="2px solid"
                borderColor="gray.300"
                mb={3}
                pb={1}
              >
                Download Documents
              </Text>
              <VStack align="stretch" spacing={2}>
                {bid.documents.map((doc, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={2}
                    borderWidth="1px"
                    rounded="md"
                  >
                    <Text>
                      {idx + 1}. {doc.type} (Published: {doc.publicationDate})
                    </Text>
                    <a href={doc.fileUrl} download>
                      ⬇️
                    </a>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
