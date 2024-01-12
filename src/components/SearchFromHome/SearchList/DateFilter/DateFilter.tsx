import { BsFilterLeft } from "react-icons/bs";

import styles from "./DateFilter.module.scss";

function DateFilter() {
  return (
    <div className={styles.container}>
      <BsFilterLeft className={styles.icon} />
      <span>등록순</span>
    </div>
  );
}

export default DateFilter;
