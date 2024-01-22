import styles from "./MySpaceList.module.scss";

import { setSpaceDate } from "@/utils/formatDate";

import { MySpaceListProps } from "@/types/user";

function MySpaceList({ data, tab }: MySpaceListProps) {
  return (
    <ul className={styles.container}>
      {data?.map(({ id, title, startDate, endDate, dueDate, thumbnail }) => (
        <li
          key={id}
          onClick={() => {
            // navigate(`/trip/${id}`)
          }}
        >
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          >
            <span>
              {dueDate === 0
                ? tab === "upcomming"
                  ? "여행중"
                  : ""
                : `D-${dueDate}`}
            </span>
          </div>

          <div className={styles.content}>
            <div className={styles.content__title}>{title}</div>

            <div className={styles.content__date}>
              {setSpaceDate(startDate, endDate)}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MySpaceList;
