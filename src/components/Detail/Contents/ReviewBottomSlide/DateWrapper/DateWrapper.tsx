import { RiCalendarCheckLine } from "react-icons/ri";

import styles from "./DateWrapper.module.scss";

function DateWrapper() {
  return (
    <div className={styles.container} onClick={() => {}}>
      <div className={styles.container__dateWrapper}>
        <RiCalendarCheckLine fontSize="2.4rem" />
        <span>2024년 1월 방문</span>
      </div>
    </div>
  );
}

export default DateWrapper;
