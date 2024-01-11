import { Portal } from "@chakra-ui/react";

import styles from "./CopyClipboad.module.scss";
function CopyClipboard() {
  return (
    <Portal>
      <div className={styles.modalContainer}>
        <p className={styles.modalContainer__text}>
          초대 링크가 복사되었습니다.
        </p>
      </div>
    </Portal>
  );
}

export default CopyClipboard;
