import styles from "./VoteDetailsFieldZero.module.scss";

const VoteDetailsFieldZero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__zeroTextBox}>
        <p className={styles.container__zeroTextBox__title}>
          투표 후보가 없습니다.
        </p>
        <p className={styles.container__zeroTextBox__text}>
          하단 버튼을 눌러 후보를 추가해보세요!
        </p>
      </div>
    </div>
  );
};

export default VoteDetailsFieldZero;
