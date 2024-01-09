import styles from "./Tabs.module.scss";

interface PropsType {
  set: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

function Tabs({ set, category }: PropsType) {
  function handleCategory(key: string) {
    set(key);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.tabs}>
        <li
          className={styles.tab}
          id="전체"
          style={{
            color: category === "전체" ? "#1d2433" : "#cdcfd0",
            borderBottom: category === "전체" ? "2px solid #1d2433" : "none",
          }}
          onClick={() => {
            handleCategory("전체");
          }}
        >
          <span>전체</span>
        </li>
        <li
          className={styles.tab}
          id="관광"
          style={{
            color: category === "관광" ? "#1d2433" : "#cdcfd0",
            borderBottom: category === "관광" ? "2px solid #1d2433" : "none",
          }}
          onClick={() => {
            handleCategory("관광");
          }}
        >
          <span>관광</span>
        </li>
        <li
          className={styles.tab}
          id="맛집"
          style={{
            color: category === "맛집" ? "#1d2433" : "#cdcfd0",
            borderBottom: category === "맛집" ? "2px solid #1d2433" : "none",
          }}
          onClick={() => {
            handleCategory("맛집");
          }}
        >
          <span>맛집</span>
        </li>
        <li
          className={styles.tab}
          id="숙소"
          style={{
            color: category === "숙소" ? "#1d2433" : "#cdcfd0",
            borderBottom: category === "숙소" ? "2px solid #1d2433" : "none",
          }}
          onClick={() => {
            handleCategory("숙소");
          }}
        >
          <span>숙소</span>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
