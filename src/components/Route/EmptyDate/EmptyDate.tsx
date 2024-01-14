import styles from "./EmptyDate.module.scss";

function EmptyDate() {
  return (
    <div className={styles.emptyDateContainer}>
      <div className={styles.textContainer}>
        <h1>생성된 일정이 없습니다.</h1>
        <p>날짜를 정하고 일정을 만들어보세요!</p>
      </div>
      <button>날짜 정하러 가기</button>
    </div>
  );
}

export default EmptyDate;
