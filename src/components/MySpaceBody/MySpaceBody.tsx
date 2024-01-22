import { useEffect, useState } from "react";

import styles from "./MySpaceBody.module.scss";

import MySpaceList from "./MySpaceList/MySpaceList";
import Tab from "./Tab/Tab";

import { MySpaces } from "@/types/user";

const upcomming = [
  {
    id: 12312,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-12",
    endDate: "2024-01-14",
    dueDate: 0,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 12321,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-18",
    endDate: "2024-01-22",
    dueDate: 4,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 12334,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-18",
    endDate: "2024-01-22",
    dueDate: 15,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 12343,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-18",
    endDate: "2024-01-22",
    dueDate: 15,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 12352,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-18",
    endDate: "2024-01-22",
    dueDate: 15,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 12315,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-18",
    endDate: "2024-01-22",
    dueDate: 15,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 123253,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2024-01-18",
    endDate: "2024-01-22",
    dueDate: 15,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 1231617,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2025-01-18",
    endDate: "2025-01-22",
    dueDate: 418,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
];

const outdated = [
  {
    id: 812367,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2023-12-17",
    endDate: "2023-12-21",
    dueDate: 0,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 867123,
    title: "캐리비안베이, 로만바스 온천, 라마드 호텔, 에버랜드",
    startDate: "2023-04-17",
    endDate: "2023-04-20",
    dueDate: 0,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
  {
    id: 67123,
    title: "강릉, 속초, 전주, 여수 여행",
    startDate: "2022-12-29",
    endDate: "2022-12-30",
    dueDate: 0,
    thumbnail:
      "https://media.istockphoto.com/id/1356118511/photo/smart-city-and-abstract-dot-point-connect-with-gradient-line.jpg?s=612x612&w=0&k=20&c=GJldTyxDEt0GodKxGONHz9PrN9QcQQAGKONUM0vBvYc=",
  },
];

function MySpaceBody() {
  const [tab, setTab] = useState("upcomming");
  const [data, setData] = useState<MySpaces | null>(null);

  useEffect(() => {
    // const res = await() api호출부
    // const spaces = res.data.data;
    // tmp mock data
    const spaces = tab === "upcomming" ? upcomming : outdated;
    setData(spaces);
  });

  return (
    <section className={styles.container}>
      <Tab tab={tab} setTab={setTab} data={data} setData={setData} />

      <MySpaceList data={data} tab={tab} />
    </section>
  );
}

export default MySpaceBody;
