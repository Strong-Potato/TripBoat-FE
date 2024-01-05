import styles from "./BottomFixedBtn.module.scss";

function BottomFixedBtn() {
  return (
    <div className={styles.container}>
      <div
        className={styles.container__wrapper}
        style={{
          backgroundColor: "#2388FF",
        }}
      >
        <span>이 장소 후보로 등록하기</span>
      </div>
    </div>
  );
}

export default BottomFixedBtn;
