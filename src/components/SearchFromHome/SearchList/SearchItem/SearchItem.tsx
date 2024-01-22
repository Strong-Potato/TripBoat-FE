import { Link } from "react-router-dom";

import styles from "./SearchItem.module.scss";

import areas from "@/utils/areas.json";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType;
  categoryChange: boolean;
}

function SearchItem({ data, categoryChange }: PropsType) {
  const location = areas.filter(
    (area) => area.areaCode === data.location.areaCode,
  )[0].name;
  const category =
    data.category === "관광지" ||
    data.category === "문화시설" ||
    data.category === "레포츠" ||
    data.category === "쇼핑"
      ? "관광"
      : data.category;

  return (
    <Link to={`/detail/${data.title}`} className={styles.container}>
      <img
        src={data.thumbnail}
        alt={`${data.title}의 사진`}
        style={{ opacity: categoryChange ? 0 : 1 }}
      />
      <p className={styles.text} style={{ opacity: categoryChange ? 0 : 1 }}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.info}>
          {category}·{location}
        </span>
      </p>
    </Link>
  );
}

export default SearchItem;
