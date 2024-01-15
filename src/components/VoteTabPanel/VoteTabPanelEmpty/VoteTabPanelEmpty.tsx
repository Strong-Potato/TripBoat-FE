import styles from "./VoteTabPanelEmpty.module.scss";

const VoteTabPanelEmpty = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>생성된 투표가 없습니다.</p>
      <p className={styles.container__text}>
        하단 버튼을 눌러 투표를 생성해보세요!
      </p>
    </div>
  );
};

export default VoteTabPanelEmpty;
