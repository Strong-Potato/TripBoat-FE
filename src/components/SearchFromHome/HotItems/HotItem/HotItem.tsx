import styles from "./HotItem.module.scss";

import { SearchHotItemType } from "@/types/home";

interface PropsData {
  data: SearchHotItemType;
}

function HotItem(data: PropsData) {
  return (
    <div className={styles.container}>
      <img src={data.data.imageURL} alt={`${data.data.title}의 사진`} />
      <p className={styles.text_box}>
        <span className={styles.title}>{data.data.title}</span>
        <span className={styles.location}>{data.data.location}</span>
      </p>
    </div>
  );
}

export default HotItem;
