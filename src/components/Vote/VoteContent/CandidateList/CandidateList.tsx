import { Avatar, Checkbox } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import styles from "./CandidateList.module.scss";

import { selectedCandidatesState } from "@/recoil/vote/candidateList";

import CandidateCard from "../CandidateCard/CandidateCard";
import VoteContentEmpty from "../VoteContentEmpty/VoteContentEmpty";

import { CandidateListProps } from "@/types/vote";

const CandidateList = ({
  candidates,
  onBottomSlideOpen,
  showResults,
  isCandidateSelecting,
}: CandidateListProps) => {
  const [selectedCandidates, setSelectedCandidates] = useRecoilState(
    selectedCandidatesState,
  );

  const addCandidateInSelectedList = (id: number) => {
    setSelectedCandidates((currentCandidatesSet) => {
      const newSet = new Set(currentCandidatesSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      console.log("newSet", newSet);
      return newSet;
    });
  };

  return (
    <div className={styles.container}>
      {candidates ? (
        candidates.map((candidate, i) => (
          <div key={i} className={styles.candidateContainer}>
            {isCandidateSelecting && (
              <Checkbox
                fontSize="2rem"
                id={`${i}checkbox`}
                variant="candidateCheckbox"
                onChange={() => addCandidateInSelectedList(candidate.id)}
              />
            )}
            <div className={styles.candidateBox}>
              <label htmlFor={`${i}checkbox`}>
                <CandidateCard
                  onBottomSlideOpen={onBottomSlideOpen}
                  candidate={candidate}
                  showResults={showResults}
                  index={i + 1}
                />
              </label>
              <div className={styles.candidateBox__memo}>
                <Avatar boxSize="24px" />
                <div className={styles.candidateBox__memo__text}>
                  {candidate.memo}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <VoteContentEmpty />
      )}
    </div>
  );
};

export default CandidateList;
