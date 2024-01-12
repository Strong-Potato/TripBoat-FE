import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const regionTag = definePartsStyle({
  container: {
    bg: "neutral.0",
    color: "neutral.800",
    borderRadius: "48px",
    border: "1px solid #cdcfd0",
    p: "8px 8px 8px 16px",
    mr: "8px",
    gap: "8px",
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    variant: "solid",
  },
  label: {
    fontSize: "button",
    fontWeight: "button",
    lineHeight: "button",
    color: "neutral.800",
  },
  closeButton: {
    w: "1.6rem",
    h: "1.6rem",
    m: 0,
  },
});

export const tagTheme = defineMultiStyleConfig({
  variants: {
    region: regionTag,
  },
});
