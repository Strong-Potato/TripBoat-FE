import { Link } from "react-router-dom";

import styles from "./SearchItem.module.scss";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType;
}

function SearchItem({ data }: PropsType) {
  return (
    <Link to={`/detail/${data.title}`} className={styles.container}>
      <img src={data.imageURL} alt={`${data.title}의 사진`} />
      <p className={styles.text}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.info}>
          {data.category}·{data.location}
        </span>
      </p>
    </Link>
  );
}

export default SearchItem;
