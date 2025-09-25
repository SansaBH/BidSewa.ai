The project structure:

src/
│
├── components/                # Reusable UI components
│   ├── Auth/                  # Authentication-related components
│   │   ├── LoginForm.jsx      # Login form (username, password, validation)
│   │   ├── RegisterForm.jsx   # Registration form for new users
│   │   └── AuthWrapper.jsx    # Wrapper with motion + layout for auth screens
│   │
│   ├── Dashboard/             # Dashboard page components
│   │   ├── Header.jsx         # Top navigation bar with logo, links & theme toggle
│   │   ├── StatsCards.jsx     # Displays stats cards (ongoing, awarded, completed, etc.)
│   │   ├── BidsTable.jsx      # Main bids table with filters & row actions
│   │   ├── DocumentsPanel.jsx # Side panel showing documents linked to a bid
│   │   ├── TableActions.jsx   # Table row buttons (preview, download, apply)
│   │   └── PdfViewer.jsx      # Displays PDFs inside the app (modal/iframe)
│   │
│   └── Shared/                # Common reusable components
│       ├── Button.jsx         # Custom styled Chakra button
│       └── Layout.jsx         # General layout wrapper for pages
│
├── pages/                     # Full pages mapped to routes
│   ├── AuthPage.jsx           # Login/Register screen using Auth components
│   ├── DashboardPage.jsx      # Dashboard with stats, filters, and bids table
│   └── DocsPage.jsx           # Document upload & preview page
│
├── data/                      # Static or mock data
│   └── sampleBids.js          # Sample bids array with metadata (used for testing)
│
├── hooks/                     # Custom React hooks
│   └── useAuth.js             # Manages authentication state (login/register)
│
├── utils/                     # Helper functions
│   ├── formatDate.js          # Formats dates into human-readable strings
│   └── pdfUtils.js            # Functions for PDF generation and download
│
├── App.js                     # Root app component with routing
├── index.js                   # React entry point (renders App)
├── theme.js                   # Chakra UI theme customization (colors, styles)
└── index.css                  # Global styles (reset, Tailwind if enabled)
