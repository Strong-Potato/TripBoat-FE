import { Link } from "react-router-dom";

import styles from "./HotItem.module.scss";

import areas from "@/utils/areas.json";

import { SearchHotItemType } from "@/types/home";

interface PropsData {
  data: SearchHotItemType;
}

function HotItem({ data }: PropsData) {
  const location = areas[data.areaCode - 1].name;

  return (
    <Link to={`/detail/${data.title}`} className={styles.container}>
      <img src={data.thumbnail} alt={`${data.title}의 사진`} />
      <p className={styles.text_box}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.location}>{location}</span>
      </p>
    </Link>
  );
}

export default HotItem;
