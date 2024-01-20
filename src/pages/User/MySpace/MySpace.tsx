import { useState } from "react";

import styles from "./MySpace.module.scss";

import Header from "@/components/Auth/Header/Header";

const data = [
  {
    id: "asdfasdf",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 0,
  },
  {
    id: "asdfasds1",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 4,
  },
  {
    id: "asdf123as",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 15,
  },
  {
    id: "asdd12ddddd",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 15,
  },
  {
    id: "asd123d1d11d",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 15,
  },
  {
    id: "1234asdaaa",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 15,
  },
  {
    id: "1234asda12",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 15,
  },
  {
    id: "1234asdazz",
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024.1.17(금)",
    endDate: "2024.1.19(일)",
    dueDate: 15,
  },
];

const tmpImage =
  "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=";

function MySpace() {
  const [tab, setTab] = useState("upcomming");

  return (
    <div className={styles.container}>
      <Header content="내 여행 스페이스" />

      <section className={styles.myspace}>
        <nav className={styles.myspace__tab}>
          <div
            className={`${styles.myspace__tab__target} ${
              tab === "upcomming" ? styles.selected : ""
            }`}
            onClick={() => {
              setTab("upcomming");
            }}
          >
            다가오는 여행
          </div>
          <div
            className={`${styles.myspace__tab__target} ${
              tab === "outdated" ? styles.selected : ""
            }`}
            onClick={() => {
              setTab("outdated");
            }}
          >
            지난 여행
          </div>

          <div
            className={`${styles.bar} ${
              tab === "upcomming" ? styles.left : styles.right
            }`}
          ></div>
        </nav>

        <ul className={styles.myspace__list}>
          {data.map(({ id, title, startDate, endDate, dueDate }) => (
            <li key={id}>
              <div
                className={styles.myspace__list__img}
                style={{
                  backgroundImage: `url(${tmpImage})`,
                }}
              >
                {dueDate === 0 ? "여행 중" : `D-${dueDate}`}
              </div>

              <div className={styles.myspace__list__content}>
                <div className={styles.myspace__list__content__title}>
                  {title}
                </div>

                <div
                  className={styles.myspace__list__content__date}
                >{`${startDate} ~ ${endDate}`}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MySpace;
