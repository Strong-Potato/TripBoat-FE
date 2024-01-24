import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const candidateCheckbox = definePartsStyle({
  control: defineStyle({
    rounded: "full",
    boxSize: "2rem",

    svg: {
      fontSize: "1rem",
    },
    _checked: {
      background: "#2388FF",
      borderColor: "#2388FF",
      _hover: {
        background: "#2388FF",
        borderColor: "#2388FF",
      },
    },
    _active: {
      background: "#2388FF",
      borderColor: "#2388FF",
    },
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { candidateCheckbox },
});
