import styles from "./MapItem.module.scss";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType;
  categoryChange: boolean;
}

function MapItem({ data, categoryChange }: PropsType) {
  return (
    <div className={styles.container}>
      <img
        src={data.imageURL}
        alt={`${data.title}의 사진`}
        style={{ opacity: categoryChange ? 0 : 1 }}
      />
      <p className={styles.text} style={{ opacity: categoryChange ? 0 : 1 }}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.info}>
          {data.category}·{data.location}
        </span>
      </p>
    </div>
  );
}

export default MapItem;
