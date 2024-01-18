import { Icon } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useRecoilValue } from "recoil";

import styles from "./VoteContent.module.scss";

import { isCandidateSelectingState } from "@/recoil/vote/alertModal";

import CandidateList from "./CandidateList/CandidateList";
import VoteRecommendList from "./VoteRecommendList/VoteRecommendList";
import DeleteCandidatesButton from "../DeleteCandidatesButton/DeleteCandidatesButton";
import AddCandidate from "../VoteBottomSlideContent/AddCandidate/AddCandidate";

import { VoteContentProps } from "@/types/vote";

const VoteContent = ({
  onBottomSlideOpen,
  data,
  showResults,
}: VoteContentProps) => {
  const candidates = data.candidates;
  const isCandidateSelecting = useRecoilValue(isCandidateSelectingState);

  // 결정완료 상태 -> stateBar 결정완료 / CTA버튼 삭제 / 추천슬라이드 후보추가->일정에담기
  // 결정완료는... voteData에서

  return (
    <div className={styles.container}>
      <div className={styles.container__stateBar}>
        <div
          className={styles.container__stateBar__state}
          style={{ color: data.state === "결정완료" ? "#979C9E" : "#2388FF" }}
        >
          {data.state === "결정완료" ? (
            <Icon as={IoMdCheckmark} />
          ) : (
            <Icon as={GoDotFill} />
          )}
          {data.state}
        </div>

        <button
          onClick={() => onBottomSlideOpen(<AddCandidate />)}
          className={styles.container__stateBar__addCandidate}
        >
          + 후보 추가({candidates.length}/15)
        </button>
      </div>

      <CandidateList
        candidates={candidates}
        onBottomSlideOpen={onBottomSlideOpen}
        showResults={showResults}
        isCandidateSelecting={isCandidateSelecting}
      />
      {/* 후보지&여행지 X -> 상품 추천 없음 */}
      <VoteRecommendList state={data.state} />
      {isCandidateSelecting && <DeleteCandidatesButton />}
    </div>
  );
};
export default VoteContent;
