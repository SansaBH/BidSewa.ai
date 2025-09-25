// src/utils/pdfUtils.js
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateBidPDF = (bid) => {
  const doc = new jsPDF("p", "pt", "a4");

  // Header
  doc.setFontSize(16);
  doc.setTextColor(200, 0, 0);
  doc.text("Bid Related Document", 40, 40);
  doc.setTextColor(0, 0, 0);

  const addSection = (title, rows, startY) => {
    doc.setFontSize(12);
    doc.setTextColor(200, 0, 0);
    doc.text(title, 40, startY);
    doc.setTextColor(0, 0, 0);

    autoTable(doc, {
      startY: startY + 10,
      head: [["Field", "Value"]],
      body: rows,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 4 },
      headStyles: { fillColor: [200, 0, 0] },
    });

    return doc.lastAutoTable.finalY + 20;
  };

  let y = 60;

  // Section 1
  y = addSection("View IFB/PQ/EOI/EF Notice Details", [
    ["Public Entity Name", bid.publicEntityName],
    ["Procurement Category", bid.procurementCategory],
    ["Procurement Method", bid.procurementMethod],
    ["IFB/RFP/EOI/PQ No", bid.noticeNo],
    ["Project Name", bid.projectName],
    ["Current Status", bid.currentStatus],
    ["Source Of Funds", bid.sourceOfFunds],
    ["Notice Publication Date", bid.noticePublicationDate],
    ["Description", bid.descriptionOfWork],
  ], y);

  // Section 2
  y = addSection("Bid Information", [
    ["Bidding Procure", bid.bidInformation.procure],
    ["Bidding Document of", bid.bidInformation.documentOf],
    ["Bidding Type", bid.bidInformation.type],
  ], y);

  // Section 3
  y = addSection("Funding Information", [
    ["Source of Fund", bid.fundingInformation.sourceOfFund],
  ], y);

  // Section 4
  y = addSection("Bid Schedule", [
    ["Publication Date", bid.bidSchedule.publicationDate],
    ["Pre-Bid Meeting Address", bid.bidSchedule.preBidMeetingAddress],
    ["Submission Address", bid.bidSchedule.submissionAddress],
    ["Opening Address", bid.bidSchedule.openingAddress],
    ["Pre-Bid Meeting Date", bid.bidSchedule.preBidMeetingDate],
    ["Last Date Submission", bid.bidSchedule.lastDateSubmission],
    ["Opening Date", bid.bidSchedule.openingDate],
    ["Start Date of Works", bid.bidSchedule.startDateOfWorks],
  ], y);

  // Section 5
  y = addSection("Bid Fee Details", [
    ["Bid Document Fee (NPR)", bid.bidFeeDetails.feeNPR],
    ["Bank Name", bid.bidFeeDetails.bankName],
  ], y);

  doc.addPage();
y = 40; // reset Y position on new page

  // Section 6
  y = addSection("Procurement Entity Contact Details", [
    ["Name", bid.contactDetails.officialName],
    ["Designation", bid.contactDetails.designation],
    ["Address", bid.contactDetails.address],
    ["Contact", bid.contactDetails.contact],
  ], y);

  // Section 7
  addSection(
  "Download Documents",
  bid.documents.map((doc, idx) => [
    `${idx + 1}. ${doc.type}`, `Published: ${doc.publicationDate}`,
  ]),
  y
);


  // Save PDF
  doc.save(`${bid.projectName}-Bid-Details.pdf`);
};
