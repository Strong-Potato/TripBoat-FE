import styles from "./EmptyRoute.module.scss";

function EmptyRoute() {
  return (
    <div className={styles.emptyRouteContainer}>
      <div className={styles.textContainer}>
        <h1>생성된 일정이 없습니다.</h1>
        <p>날짜를 정하고 일정을 만들어보세요!</p>
      </div>
    </div>
  );
}

export default EmptyRoute;
