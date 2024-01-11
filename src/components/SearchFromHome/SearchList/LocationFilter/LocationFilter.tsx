import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./LocationFilter.module.scss";

function LocationFilter() {
  return (
    <div className={styles.container}>
      <span>전체 지역</span>
      <MdOutlineKeyboardArrowDown className={styles.icon} />
    </div>
  );
}

export default LocationFilter;
