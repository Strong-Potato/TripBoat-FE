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
      my: "24px",
    },
    tabpanel: {
      p: "0",
      display: "flex",
      flexDir: "column",
      gap: "16px",
    },
  };
});

//트립에서 적용된 부분
const voteTabsVariant = definePartsStyle(() => {
  return {
    tabpanel: {
      p: "0",
      mt: "5px",
    },
  };
});

const variants = {
  voteFilter: voteFilterVariant,
  voteTab: voteTabsVariant,
};

export const tabsTheme = defineMultiStyleConfig({ variants });
