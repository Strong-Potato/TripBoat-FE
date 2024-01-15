import { MdOutlineMap } from "react-icons/md";

import styles from "./MapButton.module.scss";

function MapButton() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <MdOutlineMap className={styles.icon} />
        <span>지도로 보기</span>
      </p>
    </div>
  );
}

export default MapButton;
