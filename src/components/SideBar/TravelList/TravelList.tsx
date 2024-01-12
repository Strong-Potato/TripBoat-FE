import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import styles from "./TravelList.module.scss";

import { TravelListProps } from "@/types/sidebar";

function TravelList({ travelList }: TravelListProps) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    if (travelList.length >= 15) {
      navigate(`/mypage?full=true`);
    } else {
      navigate(`/carryout/1234`); //여행 스페이스 로직 연결 후 바꾸기
    }
  };

  return (
    <section className={styles.travelSpaceList}>
      <button
        className={styles.travelSpaceList__addButton}
        onClick={() => handleItemClick()}
      >
        <GoPlus className={styles.travelSpaceList__addButton__icon} />
        <p className={styles.travelSpaceList__addButton__text}>
          새 여행 스페이스 만들기
        </p>
      </button>
      <ul className={styles.travelSpaceList__items}>
        {travelList.map((item, index) => (
          <li key={index}>
            <button
              className={styles.travelSpaceList__items__item}
              onClick={() => navigate(`/carryout/${item.id}`)}
            >
              <p className={styles.travelSpaceList__items__item__name}>
                {item.name[0]
                  ? `${item.name} ${"여행"}`
                  : `${"여행스페이스"} ${index + 1} ${"(여행지 미정)"}`}
              </p>
              <p className={styles.travelSpaceList__items__item__date}>
                {item.startDate && item.endDate
                  ? `${item.startDate}-${item.endDate}`
                  : "날짜 미정"}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TravelList;
