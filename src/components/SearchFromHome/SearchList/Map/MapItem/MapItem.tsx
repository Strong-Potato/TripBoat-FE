import styles from "./MapItem.module.scss";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType;
}

function MapItem({ data }: PropsType) {
  return (
    <div className={styles.container}>
      <img src={data.imageURL} alt={`${data.title}의 사진`} />
      <p className={styles.text}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.info}>
          {data.category}·{data.location}
        </span>
      </p>
    </div>
  );
}

export default MapItem;
