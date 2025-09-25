// src/data/bids.js

const bids = [
  {
    id: 1,
    title: "Construction of New Highway Section",
    status: "Published", // Published | Eligible | In Process | Awarded
    amount: 5000000,
    agency: "Department of Roads",
    closingDate: "2025-10-15",
    documents: [
      { id: "d1", title: "RFP Document.pdf" },
      { id: "d2", title: "Terms & Conditions.pdf" },
    ],
  },
  {
    id: 2,
    title: "School Renovation Project",
    status: "Eligible",
    amount: 1200000,
    agency: "Ministry of Education",
    closingDate: "2025-11-01",
    documents: [
      { id: "d3", title: "Design Specs.pdf" },
      { id: "d4", title: "Budget Plan.xlsx" },
    ],
  },
  {
    id: 3,
    title: "Supply of Medical Equipment",
    status: "In Process",
    amount: 2500000,
    agency: "Ministry of Health",
    closingDate: "2025-10-20",
    documents: [
      { id: "d5", title: "Equipment List.docx" },
      { id: "d6", title: "Procurement Guidelines.pdf" },
    ],
  },
  {
    id: 4,
    title: "IT Infrastructure Upgrade",
    status: "Awarded",
    amount: 750000,
    agency: "National ICT Authority",
    closingDate: "2025-09-30",
    documents: [
      { id: "d7", title: "Technical Proposal.pdf" },
      { id: "d8", title: "Award Notice.pdf" },
    ],
  },
  {
    id: 5,
    title: "Bridge Maintenance Contract",
    status: "Published",
    amount: 1800000,
    agency: "Infrastructure Development Board",
    closingDate: "2025-10-25",
    documents: [
      { id: "d9", title: "Bridge Survey Report.pdf" },
      { id: "d10", title: "Safety Standards.pdf" },
    ],
  },
];

export default bids;
