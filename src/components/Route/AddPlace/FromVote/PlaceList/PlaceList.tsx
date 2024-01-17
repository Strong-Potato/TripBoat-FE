import { useState } from "react";

import styles from "./PlaceList.module.scss";

import { PlaceListProps } from "@/types/route";

function PlaceList({ id, name, category, onSelect }: PlaceListProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSelect = () => {
    setIsChecked(!isChecked);
    onSelect(name);
  };

  return (
    <button
      className={isChecked ? styles.clickedContainer : styles.container}
      onClick={handleSelect}
    >
      <div className={styles.imageContainer}>
        <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190130_26%2F1548818549792K262M_JPEG%2FyOtLXHFaaCdCC6c9frIgwJTB.jpeg.jpg" />
        <p>1위</p>
      </div>
      <div className={styles.textContainer}>
        <h1>{name}</h1>
        <h2>{category} ・ 서울</h2>
      </div>
    </button>
  );
}

export default PlaceList;
