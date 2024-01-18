import { AiOutlineComment as InProgressIcon } from "react-icons/ai";

import styles from "./InProgressVote.module.scss";

import VoteCard from "@/components/Route/AddPlace/FromVote/VoteCard/VoteCard";
function InProgressVote() {
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

  return (
    <div className={styles.inProgressVoteContainer}>
      <header>
        <h2>진행 중인 투표</h2>
        <InProgressIcon size="2.4rem" color="#979C9E" />
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

export default InProgressVote;
