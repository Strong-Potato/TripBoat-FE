import { AiOutlinePlus as PlusIcon } from "react-icons/ai";

import styles from "./DayRoute.module.scss";

import EmptyRoute from "../EmptyRoute/EmptyRoute";
import PlaceCard from "../PlaceCard/PlaceCard";

import { DayRouteProps } from "@/types/route";

function DayRoute({ day, date, placeList }: DayRouteProps) {
  return (
    <div className={styles.dayRouteContainer}>
      <header className={styles.dayHeader}>
        <div className={styles.dayContainer}>
          <span className={styles.dayTitle}>DAY {day}</span>
          <span className={styles.dayDate}>{date}</span>
        </div>
        <button className={styles.editButton}>
          <PlusIcon size="2.4rem" />
        </button>
      </header>
      <div>
        <button className={styles.optimizationButton}>루트 최적화</button>
        <div className={styles.placeListContainer}>
          {placeList.length ? (
            placeList.map((place, index) => (
              <PlaceCard
                key={index}
                index={place.Order + 1}
                name={place.place.title}
                category={place.place.category}
                address={`${place.place.address}, ${place.place.addressDetail}`}
              />
            ))
          ) : (
            <EmptyRoute />
          )}
        </div>
      </div>
    </div>
  );
}

export default DayRoute;
