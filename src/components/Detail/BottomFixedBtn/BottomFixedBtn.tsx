import styles from "./BottomFixedBtn.module.scss";

import { BottomFixedBtnProps } from "@/types/detail";

function BottomFixedBtn({ onOpen }: BottomFixedBtnProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.container__wrapper}
        style={{
          backgroundColor: "#2388FF",
        }}
        onClick={onOpen}
      >
        <span>이 장소 후보로 등록하기</span>
      </div>
    </div>
  );
}

export default BottomFixedBtn;
