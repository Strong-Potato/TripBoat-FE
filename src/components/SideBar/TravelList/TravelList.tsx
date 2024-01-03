import styles from "./TravelList.module.scss";

// import PlusIcon from "@/assets/plus.svg?react";
import { TravelListProps } from "@/types/sidebar";

function TravelList({ travelList }: TravelListProps) {
  return (
    <section className={styles.travelSpaceList}>
      <button className={styles.travelSpaceList__addButton}>
        {/* <PlusIcon /> */}
        <p className={styles.travelSpaceList__addButton__text}>
          새 여행 스페이스 만들기
        </p>
      </button>
      <ul className={styles.travelSpaceList__items}>
        {travelList.map((item, index) => (
          <li key={index}>
            <button className={styles.travelSpaceList__items__item}>
              <p className={styles.travelSpaceList__items__item__name}>
                {item.name}
              </p>
              <p className={styles.travelSpaceList__items__item__date}>
                {item.date}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TravelList;
