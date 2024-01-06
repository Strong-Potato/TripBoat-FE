import { Avatar } from "@chakra-ui/react";

import styles from "./VoteCandidateItem.module.scss";

const VoteCandidateItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main__contextBox}>
          <div className={styles.main__contextBox__name}>대전 성심당 {">"}</div>
          <div className={styles.main__contextBox__category}>카페</div>
          <div className={styles.main__contextBox__addDay}>+ 일정에 추가</div>
        </div>
        <div className={styles.main__voteBox}>
          <div className={styles.main__voteBox__star}>☆</div> <div>투표</div>
        </div>
      </div>
      <div className={styles.comment}>
        <Avatar boxSize="24px" />
        <div className={styles.comment__text}>여기 갈래?</div>
      </div>
    </div>
  );
};

export default VoteCandidateItem;
