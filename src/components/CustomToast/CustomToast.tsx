import { Box, useToast } from "@chakra-ui/react";

import styles from "./CustomToast.module.scss";

interface UseToastCustomProps {
  text: string;
  isLinked: boolean;
  linkText: string;
}

const CustomToast = () => {
  const toast = useToast();

  const showToast = (
    text: string,
    isLinked: boolean = false,
    linkText: string = "",
    callback?: () => void,
  ): UseToastCustomProps => {
    toast({
      position: "top",
      render: () => (
        <Box
          p="14px 16px"
          color="neutral.0"
          bg="neutral.800"
          fontSize="button"
          fontWeight="button"
          lineHeight="button"
          borderRadius="8px"
          width="450px"
          maxWidth="410px"
          className={styles.container}
        >
          <span>{text}</span>
          {isLinked && <button onClick={callback}>{linkText}</button>}
        </Box>
      ),
    });

    return { text, isLinked, linkText };
  };

  return showToast;
};

export default CustomToast;
