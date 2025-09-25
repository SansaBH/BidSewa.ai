// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#ffe5e5",
      100: "#fcb8b8",
      200: "#f28a8a",
      300: "#e75c5c",
      400: "#db2e2e",
      500: "#a50000", // main maroon red
      600: "#850000",
      700: "#650000",
      800: "#450000",
      900: "#250000",
    },
    neutral: {
      50: "#ffffff", // pure white
      100: "#f5f5f5", // light gray background
      800: "#1a1a1a", // dark gray (almost black)
      900: "#000000", // pure black
    },
  },
  styles: {
    global: {
      body: {
        bg: "neutral.100", // light gray background instead of plain white
        color: "neutral.800", // dark text
      },
    },
  },
  components: {
    Table: {
      variants: {
        dashboard: {
          th: {
            bg: "brand.600",
            color: "neutral.50", // white text
            fontWeight: "semibold",
            textAlign: "center",
            fontSize: "sm",
            py: 4,
          },
          td: {
            textAlign: "center",
            fontSize: "sm",
            py: 3,
            borderColor: "neutral.100",
          },
          tr: {
            _hover: {
              bg: "brand.50", // faint maroon highlight on hover
            },
          },
        },
      },
    },
    Button: {
      variants: {
        solid: (props) => {
          if (props.colorScheme === "brand") {
            return {
              bg: "brand.500",
              color: "neutral.50",
              _hover: { bg: "brand.600" },
            };
          }
          if (props.colorScheme === "neutral") {
            return {
              bg: "neutral.900", // black button
              color: "neutral.50", // white text
              _hover: { bg: "neutral.800" },
            };
          }
          return {};
        },
        outline: (props) => {
          if (props.colorScheme === "brand") {
            return {
              border: "2px solid",
              borderColor: "brand.500",
              color: "brand.500",
              _hover: { bg: "brand.50" },
            };
          }
          if (props.colorScheme === "neutral") {
            return {
              border: "2px solid",
              borderColor: "neutral.900",
              color: "neutral.900",
              _hover: { bg: "neutral.100" },
            };
          }
          return {};
        },
      },
    },
    Card: {
      baseStyle: {
        bg: "neutral.50",
        border: "1px solid",
        borderColor: "neutral.100",
        borderRadius: "lg",
        boxShadow: "md",
      },
    },
  },
});

export default theme;
