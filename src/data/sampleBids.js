// src/data/sampleBids.js

const sampleBids = [
  {
    id: 1,
    title: "Construction of New Highway Bridge",
    publicEntityName: "Department of Roads",
    procurementCategory: "Works",
    procurementMethod: "National Competitive Bidding",
    noticeNo: "IFB-2025/001",
    projectName: "Highway Expansion Project",
    currentStatus: "Open",
    sourceOfFunds: "Government of Nepal",
    noticePublicationDate: "2025-09-01",
    descriptionOfWork: "Construction of a 2-lane bridge across Bagmati River.",

    bidInformation: {
      procure: "Open Tender",
      documentOf: "Highway Expansion Project",
      type: "Single Stage, Two Envelope",
    },

    fundingInformation: {
      sourceOfFund: "Government of Nepal",
    },

    bidSchedule: {
      publicationDate: "2025-09-01",
      preBidMeetingAddress: "DoR Conference Hall, Kathmandu",
      submissionAddress: "Procurement Office, DoR, Kathmandu",
      openingAddress: "Main Hall, DoR, Kathmandu",
      preBidMeetingDate: "2025-09-10",
      lastDateSubmission: "2025-10-20",
      openingDate: "2025-10-21",
      startDateOfWorks: "2025-11-01",
    },

    bidFeeDetails: {
      feeNPR: "3,000",
      bankName: "Rastriya Banijya Bank",
    },

    contactDetails: {
      officialName: "Eng. Suresh Koirala",
      designation: "Procurement Officer",
      address: "Department of Roads, Kathmandu",
      contact: "+977-1-5551234",
    },

    documents: [
      { type: "Bid Document", publicationDate: "2025-09-01", fileUrl: "/docs/bid-doc.pdf" },
      { type: "Addendum", publicationDate: "2025-09-05", fileUrl: "/docs/addendum.pdf" },
      { type: "Bid Query Response", publicationDate: "2025-09-08", fileUrl: "/docs/query-response.pdf" },
      { type: "LOI", publicationDate: "2025-09-15", fileUrl: "/docs/loi.pdf" },
    ],
  },
  {
    id: 2,
    title: "Supply of Medical Equipment",
    publicEntityName: "Ministry of Health",
    procurementCategory: "Goods",
    procurementMethod: "International Competitive Bidding",
    noticeNo: "IFB-2025/045",
    projectName: "Hospital Modernization Program",
    currentStatus: "Open",
    sourceOfFunds: "World Bank",
    noticePublicationDate: "2025-08-15",
    descriptionOfWork: "Procurement of X-ray machines and MRI scanners.",

    bidInformation: {
      procure: "International Tender",
      documentOf: "Hospital Equipment Supply",
      type: "Two Stage Bidding",
    },

    fundingInformation: {
      sourceOfFund: "World Bank",
    },

    bidSchedule: {
      publicationDate: "2025-08-15",
      preBidMeetingAddress: "Ministry of Health, Teku",
      submissionAddress: "Procurement Unit, Teku",
      openingAddress: "Health Ministry Main Hall",
      preBidMeetingDate: "2025-08-20",
      lastDateSubmission: "2025-10-15",
      openingDate: "2025-10-16",
      startDateOfWorks: "2025-11-01",
    },

    bidFeeDetails: {
      feeNPR: "5,000",
      bankName: "Nepal Investment Bank",
    },

    contactDetails: {
      officialName: "Dr. Anjali Rana",
      designation: "Procurement Head",
      address: "Ministry of Health, Teku",
      contact: "+977-1-4217890",
    },

    documents: [
      { type: "Bid Document", publicationDate: "2025-08-15", fileUrl: "/docs/medical-bid.pdf" },
      { type: "Addendum", publicationDate: "2025-08-18", fileUrl: "/docs/medical-addendum.pdf" },
      { type: "Bid Query Response", publicationDate: "2025-08-22", fileUrl: "/docs/medical-query.pdf" },
      { type: "LOI", publicationDate: "2025-09-01", fileUrl: "/docs/medical-loi.pdf" },
    ],
  },
  {
    id: 3,
    title: "IT System Upgrade",
    publicEntityName: "Nepal Electricity Authority",
    procurementCategory: "Services",
    procurementMethod: "National Competitive Bidding",
    noticeNo: "RFP-2025/020",
    projectName: "Smart Grid Implementation",
    currentStatus: "Closed",
    sourceOfFunds: "Asian Development Bank",
    noticePublicationDate: "2025-07-10",
    descriptionOfWork: "Upgrade and integration of smart metering systems.",

    bidInformation: {
      procure: "RFP",
      documentOf: "Smart Grid IT Upgrade",
      type: "Quality and Cost Based Selection",
    },

    fundingInformation: {
      sourceOfFund: "Asian Development Bank",
    },

    bidSchedule: {
      publicationDate: "2025-07-10",
      preBidMeetingAddress: "NEA Office, Ratnapark",
      submissionAddress: "NEA Procurement Office",
      openingAddress: "NEA Hall, Kathmandu",
      preBidMeetingDate: "2025-07-15",
      lastDateSubmission: "2025-08-01",
      openingDate: "2025-08-02",
      startDateOfWorks: "2025-08-15",
    },

    bidFeeDetails: {
      feeNPR: "4,000",
      bankName: "Nabil Bank",
    },

    contactDetails: {
      officialName: "Mr. Rajendra Shrestha",
      designation: "IT Procurement Manager",
      address: "NEA Head Office, Ratnapark",
      contact: "+977-1-4105678",
    },

    documents: [
      { type: "Bid Document", publicationDate: "2025-07-10", fileUrl: "/docs/it-bid.pdf" },
      { type: "Addendum", publicationDate: "2025-07-12", fileUrl: "/docs/it-addendum.pdf" },
      { type: "Bid Query Response", publicationDate: "2025-07-20", fileUrl: "/docs/it-query.pdf" },
      { type: "LOI", publicationDate: "2025-07-28", fileUrl: "/docs/it-loi.pdf" },
    ],
  },
  {
    id: 4,
    title: "School Building Construction",
    publicEntityName: "Ministry of Education",
    procurementCategory: "Works",
    procurementMethod: "National Competitive Bidding",
    noticeNo: "IFB-2025/102",
    projectName: "School Infrastructure Project",
    currentStatus: "Open",
    sourceOfFunds: "Government & UNICEF",
    noticePublicationDate: "2025-09-05",
    descriptionOfWork: "Construction of 10 school buildings in Province 2.",

    bidInformation: {
      procure: "Open Tender",
      documentOf: "School Infrastructure",
      type: "Single Stage, Single Envelope",
    },

    fundingInformation: {
      sourceOfFund: "Government & UNICEF",
    },

    bidSchedule: {
      publicationDate: "2025-09-05",
      preBidMeetingAddress: "Education Ministry, Singha Durbar",
      submissionAddress: "Procurement Unit, MoE",
      openingAddress: "Conference Hall, MoE",
      preBidMeetingDate: "2025-09-12",
      lastDateSubmission: "2025-10-30",
      openingDate: "2025-10-31",
      startDateOfWorks: "2025-11-10",
    },

    bidFeeDetails: {
      feeNPR: "2,500",
      bankName: "Agricultural Development Bank",
    },

    contactDetails: {
      officialName: "Ms. Laxmi Thapa",
      designation: "Education Procurement Officer",
      address: "Ministry of Education, Kathmandu",
      contact: "+977-1-4223344",
    },

    documents: [
      { type: "Bid Document", publicationDate: "2025-09-05", fileUrl: "/docs/school-bid.pdf" },
      { type: "Addendum", publicationDate: "2025-09-08", fileUrl: "/docs/school-addendum.pdf" },
      { type: "Bid Query Response", publicationDate: "2025-09-15", fileUrl: "/docs/school-query.pdf" },
      { type: "LOI", publicationDate: "2025-09-20", fileUrl: "/docs/school-loi.pdf" },
    ],
  },
  {
    id: 5,
    title: "Water Supply Improvement Project",
    publicEntityName: "Kathmandu Valley Water Supply Board",
    procurementCategory: "Works",
    procurementMethod: "International Competitive Bidding",
    noticeNo: "IFB-2025/210",
    projectName: "Water Supply Expansion Phase II",
    currentStatus: "Open",
    sourceOfFunds: "Japan International Cooperation Agency (JICA)",
    noticePublicationDate: "2025-08-25",
    descriptionOfWork: "Expansion of drinking water pipeline network in KTM.",

    bidInformation: {
      procure: "International Tender",
      documentOf: "Water Supply Improvement",
      type: "Two Envelope Bidding",
    },

    fundingInformation: {
      sourceOfFund: "JICA",
    },

    bidSchedule: {
      publicationDate: "2025-08-25",
      preBidMeetingAddress: "KUKL Main Office, Tripureshwor",
      submissionAddress: "Procurement Unit, KUKL",
      openingAddress: "Main Conference Hall, KUKL",
      preBidMeetingDate: "2025-09-02",
      lastDateSubmission: "2025-11-15", // ⬅️ more days remaining
      openingDate: "2025-11-16",
      startDateOfWorks: "2025-12-01",
    },

    bidFeeDetails: {
      feeNPR: "6,000",
      bankName: "Standard Chartered Bank",
    },

    contactDetails: {
      officialName: "Mr. Bishnu Gautam",
      designation: "Procurement Manager",
      address: "KUKL Office, Tripureshwor, KTM",
      contact: "+977-1-4255566",
    },

    documents: [
      { type: "Bid Document", publicationDate: "2025-08-25", fileUrl: "/docs/water-bid.pdf" },
      { type: "Addendum", publicationDate: "2025-08-28", fileUrl: "/docs/water-addendum.pdf" },
      { type: "Bid Query Response", publicationDate: "2025-09-05", fileUrl: "/docs/water-query.pdf" },
      { type: "LOI", publicationDate: "2025-09-12", fileUrl: "/docs/water-loi.pdf" },
    ],
  },
  {
    id: 6,
    title: "Solar Power Plant Installation",
    publicEntityName: "Alternative Energy Promotion Centre",
    procurementCategory: "Works",
    procurementMethod: "National Competitive Bidding",
    noticeNo: "IFB-2025/305",
    projectName: "50 MW Solar Plant in Province 5",
    currentStatus: "Open",
    sourceOfFunds: "Government of Nepal & ADB",
    noticePublicationDate: "2025-09-20",
    descriptionOfWork: "Installation of grid-connected solar power plant.",

    bidInformation: {
      procure: "Open Tender",
      documentOf: "Solar Energy Expansion",
      type: "Two Envelope Bidding",
    },

    fundingInformation: {
      sourceOfFund: "ADB",
    },

    bidSchedule: {
      publicationDate: "2025-09-20",
      preBidMeetingAddress: "AEPC Office, Lalitpur",
      submissionAddress: "Procurement Division, AEPC",
      openingAddress: "AEPC Main Hall",
      preBidMeetingDate: "2025-09-28",
      lastDateSubmission: "2025-12-05", // ⬅️ long days remaining
      openingDate: "2025-12-06",
      startDateOfWorks: "2026-01-01",
    },

    bidFeeDetails: {
      feeNPR: "7,500",
      bankName: "Himalayan Bank",
    },

    contactDetails: {
      officialName: "Mr. Deepak Khadka",
      designation: "Project Director",
      address: "AEPC, Khumaltar, Lalitpur",
      contact: "+977-1-5532123",
    },

    documents: [
      { type: "Bid Document", publicationDate: "2025-09-20", fileUrl: "/docs/solar-bid.pdf" },
      { type: "Addendum", publicationDate: "2025-09-25", fileUrl: "/docs/solar-addendum.pdf" },
      { type: "Bid Query Response", publicationDate: "2025-10-01", fileUrl: "/docs/solar-query.pdf" },
      { type: "LOI", publicationDate: "2025-10-15", fileUrl: "/docs/solar-loi.pdf" },
    ],
  },
];

export default sampleBids;
