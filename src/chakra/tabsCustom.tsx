import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define a custom variant
const voteFilterVariant = definePartsStyle(() => {
  return {
    tab: {
      p: "8px 16px",

      border: "1px solid #cdcfd0",
      borderRadius: "8px",
      color: "#23272f",

      fontSize: "tabLabel",
      fontWeight: "tabLabel",
      lineHeight: "tabLabel",
      _selected: {
        bg: "#d4e8ff",
        color: "#2388ff",
        borderColor: "#2388ff",
      },
    },
    tablist: {
      gap: "8px",
      mt: "14px",
      mb: "24px",
    },
    tabpanel: {
      p: "none",
      bg: "pink",
    },
  };
});

const variants = {
  voteFilter2: voteFilterVariant,
};

export const tabsTheme = defineMultiStyleConfig({ variants });
