import { Avatar, Icon } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";

import styles from "./VoteContent.module.scss";

import CandidateCard from "./CandidateCard/CandidateCard";
import VoteContentEmpty from "./VoteContentEmpty/VoteContentEmpty";
import VoteRecommendList from "./VoteRecommendList/VoteRecommendList";

import { VoteContentProps } from "@/types/vote";

const VoteContent = ({
  onBottomSlideOpen,
  data,
  showResults,
}: VoteContentProps) => {
  const candidates = data.candidates;

  //결과보기 클릭(showResults) 이후
  // 득표 순으로 재정렬

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
          onClick={onBottomSlideOpen}
          className={styles.container__stateBar__addCandidate}
        >
          + 후보 추가({candidates.length}/15)
        </button>
      </div>
      <div className={styles.container__candidateList}>
        {candidates ? (
          candidates.map((candidate, i) => (
            <div key={i} className={styles.candidateBox}>
              <CandidateCard
                candidate={candidate}
                showResults={showResults}
                index={i + 1}
              />
              <div className={styles.candidateBox__memo}>
                <Avatar boxSize="24px" />
                <div className={styles.candidateBox__memo__text}>
                  {candidate.memo}
                </div>
              </div>
            </div>
          ))
        ) : (
          <VoteContentEmpty />
        )}
      </div>
      {/* 후보지&여행지 X -> 상품 추천 없음 */}
      <VoteRecommendList state={data.state} />
    </div>
  );
};
export default VoteContent;
