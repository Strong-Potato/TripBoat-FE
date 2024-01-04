import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#d4e8ff",
      200: "#62aaff",
      300: "#0088ff",
      400: "#0172d8",
    },
    secondary: {
      100: "#ffe2ed",
      300: "#ff85b1",
      400: "#e23774",
    },
    success: {
      100: "#71d07b",
      300: "#19c43e",
      400: "#04724d",
    },
    danger: {
      100: "#fef1f2",
      300: "#e02d3c",
      400: "#ba2532",
    },
    neutral: {
      0: "#fff",
      100: "#f2f4f5",
      200: "#e3e5e5",
      300: "#cdcfd0",
      400: "#979c9e",
      700: "#3f444d",
      800: "#23272f",
      900: "#1d2433",
      1000: "#0a0d1",
    },
    etc: {
      0: "#fed600",
    },
  },

  shadows: {
    shadow: {
      100: "0px 0px 8px 0px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.04)",
      200: "0px 1px 8px 2px rgba(20, 20, 20, 0.1), 0px 0px 1px 0px rgba(20, 20, 20, 0.04)",
      300: "0px 1px 24px 8px rgba(20, 20, 20, 0.08)",
    },
  },

  //$typography-font-size-map
  fontSizes: {
    headline: "2.2rem",
    // 22px
    titleLarge: "2rem",
    // 20px"
    titleMedium: "1.8rem",
    // 18px
    titleSmall: "1.6rem",
    // 16px
    subTitle: "1.6rem",
    // 16px
    bodyLarge: "1.6rem",
    // 16px
    bodySmall: "1.4rem",
    // 14px
    button: "1.4rem",
    // 14px
    tabLabel: "1.4rem",
    // 14px
    captionLarge: "1.3rem",
    // 13px
    captionMedium: "1.2rem",
    // 12px
    captionSmall: "1.2rem",
    // 12px
  },

  //$typography-font-weight-map
  fontWeights: {
    headline: "bold",
    titleLarge: "bold",
    titleMedium: "bold",
    titleSmall: "bold",
    subTitle: "medium",
    bodyLarge: "normal",
    bodySmall: "normal",
    button: "bold",
    tabLabel: "medium",
    captionLarge: "medium",
    captionMedium: "bold",
    captionSmall: "medium",
  },

  //$typography-line-height-map
  lineHeights: {
    headline: "3rem",
    // 30px
    titleLarge: "2.8rem",
    // 28px
    titleMedium: "2.6rem",
    // 26px
    titleSmall: "2.4rem",
    // 24px
    subTitle: "2.4rem",
    // 24px
    bodyLarge: "2.4rem",
    // 24px
    bodySmall: "2.2rem",
    // 22px
    button: "2.2rem",
    // 22px
    tabLabel: "2.2rem",
    // 22px
    captionLarge: "2.2rem",
    // 22px
    captionMedium: "2rem",
    // 20px
    captionSmall: "2rem",
    // 20px
  },
});
