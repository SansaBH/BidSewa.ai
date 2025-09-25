# 🚀 BidSewa.ai

A React-based dashboard for managing bids, contracts, and documents.  
Built with **React + Chakra UI + Framer Motion**, featuring authentication, PDF previews, and a responsive design.  

---

## 📂 Project Structure

The project follows a clean and modular structure:

### 🧩 Components (reusable UI)
- **Auth/**
  - `LoginForm.jsx` → Login form (username/password, validation)  
  - `RegisterForm.jsx` → Registration form for new users  
  - `AuthWrapper.jsx` → Motion + layout wrapper for auth screens  

- **Dashboard/**
  - `Header.jsx` → Top navigation bar with logo, links & theme toggle  
  - `StatsCards.jsx` → Stats cards (Ongoing, Awarded, Completed, etc.)  
  - `BidsTable.jsx` → Main bids table with filters & row actions  
  - `DocumentsPanel.jsx` → Side panel listing documents linked to a bid  
  - `TableActions.jsx` → Row action buttons (Preview, Download, Apply)  
  - `PdfViewer.jsx` → In-app PDF viewer (modal/iframe)  

- **Shared/**
  - `Button.jsx` → Custom styled Chakra button  
  - `Layout.jsx` → Wrapper for page layouts  

---

### 📄 Pages (routes)
- `AuthPage.jsx` → Login/Register screen  
- `DashboardPage.jsx` → Main dashboard with stats + table + filters  
- `DocsPage.jsx` → Upload and preview documents  

---

### 📊 Data
- `sampleBids.js` → Example bids with metadata  

---

### ⚙️ Hooks
- `useAuth.js` → Custom authentication state hook  

---

### 🛠️ Utils
- `formatDate.js` → Date formatting helper  
- `pdfUtils.js` → Generate & download PDFs  

---

### 🌍 Root
- `App.js` → Main app with routing  
- `index.js` → React entry point  
- `theme.js` → Chakra theme customization  
- `index.css` → Global styles  

---

## ⚡ Getting Started

### 1️⃣ Clone the repo  
```bash
git clone https://github.com/SansaBH/BidSewa.ai.git
cd BidSewa.ai
