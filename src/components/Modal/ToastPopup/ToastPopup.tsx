import { Alert, AlertDescription, Fade } from "@chakra-ui/react";
import { FunctionComponent, useEffect } from "react";

import styles from "./ToastPopup.module.scss";

import { ToastPopupProps } from "@/types/interface";

const ToastPopup: FunctionComponent<ToastPopupProps> = ({
  status,
  setFunc,
}) => {
  const onClose = () => {
    setFunc({ active: false, message: status.message });
  };

  useEffect(() => {
    // alert 창 5초 후에 사라지게 하기
    if (status.active) {
      const timer = setTimeout(() => {
        setFunc({ active: false, message: status.message });
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }

    return undefined;
  }, [status.active]);

  return (
    <Fade in={status.active}>
      <Alert className={styles.container}>
        <AlertDescription maxWidth="200px">{status.message}</AlertDescription>
      </Alert>
    </Fade>
  );
};
export default ToastPopup;
