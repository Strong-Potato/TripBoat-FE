import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import styles from "./CandidateCard.module.scss";

import AddDayIcon from "@/assets/voteIcons/vote_addDay.svg?react";

import { CandidateCardProps } from "@/types/vote";

const CandidateCard = ({ candidate, showResults }: CandidateCardProps) => {
  const [isVoted, setIsVoted] = useState(false);

  const voteCounts = candidate.voteCounts;

  const onVoteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsVoted(!isVoted);
  };

  return (
    <div className={styles.container}>
      <img src={candidate.imageURL} alt={candidate.name} />
      <div className={styles.main}>
        <div className={styles.main__contextBox}>
          {/* 장소 제목 Link 장소 상페로 */}
          <div className={styles.main__contextBox__name}>
            {candidate.name} {">"}
          </div>
          <div className={styles.main__contextBox__category}>
            {candidate.category}
            {" ꞏ "}
            {candidate.location}
          </div>

          {/* 일정 담기
          날짜를 담고 있어야 함
          없 : 토스트
          있 : 바텀시트 -> 일정 추가api -> 시트close, 완료 토스트
          */}

          {showResults && (
            <button className={styles.main__contextBox__addDay}>
              <AddDayIcon /> 일정에 담기
            </button>
          )}
        </div>
        <button
          className={styles.main__voteBox}
          onClick={onVoteClick}
          disabled={showResults}
        >
          <div className={styles.main__voteBox__star}>
            {isVoted ? <FaStar style={{ color: "#fee500" }} /> : <FaRegStar />}
          </div>{" "}
          <div className={styles.main__voteBox__vote}>
            {showResults ? voteCounts : "투표"}
          </div>
        </button>
      </div>
      {/* <div className={styles.comment}>
        <Avatar boxSize="24px" />
        <div className={styles.comment__text}>{candidate.memo}</div>
      </div> */}
    </div>
  );
};

export default CandidateCard;
