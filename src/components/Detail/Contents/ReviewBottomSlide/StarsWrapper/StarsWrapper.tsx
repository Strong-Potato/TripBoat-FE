import { useState } from "react";
import { GoStarFill } from "react-icons/go";

import styles from "./StarsWrapper.module.scss";

function StarsWrapper() {
  const [starCount, setStarCount] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.container__stars}>
        <GoStarFill
          fontSize="3.2rem"
          color={starCount >= 1 ? "#FED600" : "#E3E5E5"}
          onClick={() => setStarCount(1)}
        />
        <GoStarFill
          fontSize="3.2rem"
          color={starCount >= 2 ? "#FED600" : "#E3E5E5"}
          onClick={() => setStarCount(2)}
        />
        <GoStarFill
          fontSize="3.2rem"
          color={starCount >= 3 ? "#FED600" : "#E3E5E5"}
          onClick={() => setStarCount(3)}
        />
        <GoStarFill
          fontSize="3.2rem"
          color={starCount >= 4 ? "#FED600" : "#E3E5E5"}
          onClick={() => setStarCount(4)}
        />
        <GoStarFill
          fontSize="3.2rem"
          color={starCount >= 5 ? "#FED600" : "#E3E5E5"}
          onClick={() => setStarCount(5)}
        />
      </div>
      <div className={styles.container__information}>별점을 선택해주세요.</div>
    </div>
  );
}

export default StarsWrapper;
