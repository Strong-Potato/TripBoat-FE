import { Icon } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

import styles from "./VoteDetailsField.module.scss";

import VoteCandidateItem from "../VoteCandidateItem/VoteCandidateItem";

// import VoteDetailsFieldZero from "../VoteDetailsFieldZero/VoteDetailsFieldZero";

const VoteDetailsField = () => {
  // if(CandidateList.length===0) {
  //   //지도 색 neutral300
  //   return <VoteDetailsFieldZero />
  // }

  return (
    <div className={styles.container}>
      <div className={styles.container__stateBar}>
        <div className={styles.container__stateBar__state}>
          <Icon as={GoDotFill} fontSize="1rem" mt="1px" mr="4px" />
          진행 중
        </div>
        <div className={styles.container__stateBar__addCandidate}>
          + 후보 추가(1/15)
        </div>
      </div>
      <div className={styles.container__candidateList}>
        <VoteCandidateItem />
        <VoteCandidateItem />
        <VoteCandidateItem />
      </div>
    </div>
  );
};
export default VoteDetailsField;
