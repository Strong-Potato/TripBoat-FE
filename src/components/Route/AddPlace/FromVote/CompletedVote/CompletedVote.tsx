import { GiRoundStar as CompletedIcon } from "react-icons/gi";
import { MdOutlineReplay as ResetIcon } from "react-icons/md";

import styles from "./CompletedVote.module.scss";

import VoteCard from "@/components/Route/AddPlace/FromVote/VoteCard/VoteCard";

function CompletedVote() {
  const voteList = [
    {
      voteId: 0,
      title: "카페 어디 갈 거야?",
      voteStatus: "VOTING",
    },
    {
      voteId: 1,
      title: "숙소 어디로 할까? 여기 어때? 저기 어때?",
      voteStatus: "VOTING",
    },
    {
      voteId: 2,
      title: "둘째 날 숙소 어디서 묵을래?",
      voteStatus: "COMPLETED",
    },
    {
      voteId: 3,
      title: "루프탑 카페 정하자~",
      voteStatus: "COMPLETED",
    },
    {
      voteId: 4,
      title: "여기 어때?",
      voteStatus: "COMPLETED",
    },
    {
      voteId: 5,
      title: "저기 어때?",
      voteStatus: "COMPLETED",
    },
    {
      voteId: 6,
      title: "요기요",
      voteStatus: "COMPLETED",
    },
    {
      voteId: 7,
      title: "겨울 여행",
      voteStatus: "VOTING",
    },
    {
      voteId: 8,
      title: "가자",
      voteStatus: "VOTING",
    },
  ];

  const handleResetButtonClick = () => {
    console.log("리셋");
  };

  return (
    <div className={styles.completedVoteContainer}>
      <header>
        <div>
          <h2>결정 완료된 투표</h2>
          <CompletedIcon size="2.4rem" color="#FEE500" />
        </div>
        <button onClick={handleResetButtonClick}>
          <ResetIcon size="2.2rem" color="#23272F" />
          <span>선택 초기화</span>
        </button>
      </header>
      <div className={styles.voteListContainer}>
        {voteList.map(
          (vote) =>
            vote.voteStatus === "COMPLETED" && (
              <VoteCard id={vote.voteId} title={vote.title} />
            ),
        )}
      </div>
    </div>
  );
}

export default CompletedVote;
