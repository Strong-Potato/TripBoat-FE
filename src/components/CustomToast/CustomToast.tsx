import { Box, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

import styles from "./CustomToast.module.scss";

interface UseToastCustomProps {
  text: string;
  isLinked: boolean;
  linkText: string;
}

const CustomToast = () => {
  const toast = useToast();

  const toastSize = () => {
    if (window.innerWidth > 450) {
      return "410px";
    } else {
      return `${window.innerWidth - 40}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", toastSize);
  }, []);

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
          width={toastSize()}
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
