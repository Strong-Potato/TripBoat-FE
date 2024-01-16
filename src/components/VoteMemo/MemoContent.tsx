import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import styles from "./MemoContent.module.scss";

import { selectedCandidatesState } from "@/recoil/vote/candidateList";

import MemoItem from "./MemoItem/MemoItem";

import { VoteListData } from "@/types/vote";

const MemoContent = ({ data }: { data: VoteListData }) => {
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const candidates = data.candidates;

  const getCandidateIds = () => {
    const newCandidateIds = candidates.map((candidate) => candidate.id);
    setSelectedCandidates(new Set(newCandidateIds));
  };

  useEffect(() => {
    getCandidateIds();
  }, []);

  return (
    <div className={styles.container}>
      {candidates?.map((item, i) => <MemoItem candidate={item} key={i} />)}
    </div>
  );
};

export default MemoContent;
