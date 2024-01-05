import styles from "./VoteDetailsField.module.scss";

const VoteDetailsField = () => {
  return (
    <div className={styles.container}>
      <p>투표 후보가 없습니다.</p>
      <p>하단 버튼을 눌러 후보를 추가해보세요.</p>
    </div>
  );
};

export default VoteDetailsField;
