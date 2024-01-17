import { modalAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  //dialog 부모 박스, 가로 사이즈 정하고 가운데 정렬
  dialogContainer: {
    width: "100%",
    maxWidth: "45rem",
    minWidth: "36rem",
    left: "50%",
    transform: "translateX(-50%)",
  },
  closeButton: {
    fontSize: "1.5rem",
    top: "16px",
    right: "16px",
  },
  overlay: {
    bg: "rgba(0, 0, 0, 0.6)",
  },
});

const alertSizeForDialog = defineStyle({
  mx: "20px",
});

const alertModal = definePartsStyle({
  dialogContainer: {
    width: "100%",
    maxWidth: "45rem",
    minWidth: "36rem",
    left: "50%",
    transform: "translateX(-50%)",
  },
  dialog: {
    w: "100%",
    maxWidth: "45rem",
    mt: "264px",
    mx: "32px",
    p: "32px 24px",

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

const sizes = {
  xl: definePartsStyle({ dialog: alertSizeForDialog }),
};

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { alertModal },
  sizes: {
    addVote: { dialog: { w: "100%", maxW: "41rem", mx: "24px" } },
  },
});
