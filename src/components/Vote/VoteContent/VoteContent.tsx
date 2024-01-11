import { Icon } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

import styles from "./VoteContent.module.scss";

import CandidateCard from "./CandidateCard/CandidateCard";
import VoteRecommendList from "./VoteRecommendList/VoteRecommendList";

import { VoteContentProps } from "@/types/vote";

// import VoteDetailsFieldZero from "../VoteDetailsFieldZero/VoteDetailsFieldZero";

const VoteContent = ({ onClick }: VoteContentProps) => {
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
        <button
          onClick={onClick}
          className={styles.container__stateBar__addCandidate}
        >
          + 후보 추가(1/15)
        </button>
      </div>
      <div className={styles.container__candidateList}>
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
      <VoteRecommendList />
    </div>
  );
};
export default VoteContent;
