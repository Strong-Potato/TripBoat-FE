import { modalAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "rgba(20, 20, 20, 0.8)",
  },
});

const alertModal = definePartsStyle({
  dialogContainer: {
    width: "45rem",
    minWidth: "36rem",
    left: "50%",
    transform: "translateX(-50%)",
    px: "0",
  },
  dialog: {
    w: "31.1rem",
    mt: "264px",
    mx: "0",
    p: "32px 20px",

    borderRadius: "16px",
    gap: "24px",
  },

  body: {
    p: "0",
    textAlign: "center",
    whiteSpace: "pre-line",
  },

  footer: {
    p: "0",
    justifyContent: "space-around",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { alertModal },
  sizes: {
    addVote: { dialog: { w: "100%", maxW: "41rem", mx: "24px" } },
  },
});
