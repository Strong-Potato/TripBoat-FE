import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  _hover: {
    _disabled: {
      backgroundColor: "neutral.200",
      color: "neutral.400",
    },
  },
  _disabled: {
    backgroundColor: "neutral.200",
    color: "neutral.400",
    opacity: "1",
  },
});

const CTAButton = defineStyle({
  position: "fixed",
  bottom: "2.4rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "32.7rem",
  height: "4.6rem",

  backgroundColor: "primary.300",
  borderRadius: "16px",

  color: "neutral.0",
  fontSize: "button",
  fontWeight: "button",
  lineHeight: "button",

  zIndex: "2",

  _hover: {
    backgroundColor: "primary.400",
  },
});

const blueButton = defineStyle({
  backgroundColor: "primary.300",
  borderRadius: "16px",
  boxShadow: "shadow.200",

  color: "neutral.0",
  fontSize: "button",
  fontWeight: "button",
  lineHeight: "button",

  _hover: {
    backgroundColor: "primary.400",
  },
});

const voteButton = defineStyle({
  w: "18.4rem",
  h: "5.4rem",
  backgroundColor: "primary.300",
  borderRadius: "48px",
  boxShadow: "shadow.200",

  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "8rem",

  color: "neutral.0",
  fontSize: "button",
  fontWeight: "button",
  lineHeight: "button",

  _hover: {
    backgroundColor: "primary.400",
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { CTAButton, blueButton, voteButton },
});
