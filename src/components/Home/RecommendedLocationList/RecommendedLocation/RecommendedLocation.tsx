import { Link } from "react-router-dom";

import styles from "./RecommendedLocation.module.scss";

import { LocationDataType } from "@/types/home";

interface PropsType {
  data: LocationDataType;
}

function RecommendedLocation(data: PropsType) {
  const link = `/home/search`;
  const imageAlt = `${data.data.location}의 사진`;

  return (
    <div className={styles.container}>
      <Link to={link}>
        <img src={data.data.imageURL} alt={imageAlt}></img>
        <div className={styles.text_wall} />
        <span>{data.data.location}</span>
      </Link>
    </div>
  );
}

export default RecommendedLocation;
