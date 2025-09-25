import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import theme from "./theme"; // import theme
import DashboardPage from "./pages/DashboardPage";
import DocsPage from "./pages/DocsPage";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="*" element={<Box p={6}>404 Page Not Found</Box>} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}
