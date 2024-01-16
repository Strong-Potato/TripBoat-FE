import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./MemoItem.module.scss";

import useGetSelectedCandidates from "@/hooks/useGetSelectedCandidates";

import { CandidateData } from "@/types/vote";

const MemoItem = ({ candidate }: { candidate: CandidateData }) => {
  const [text, setText] = useState(0);

  const { addCandidateInSelectedList } = useGetSelectedCandidates();

  return (
    <div className={styles.container}>
      <Checkbox
        defaultChecked
        variant="candidateCheckbox"
        m="0"
        alignItems="flex-start"
        value={candidate.id}
        onChange={() => addCandidateInSelectedList(candidate.id)}
      />
      <div className={styles.container__rightSide}>
        <div className={styles.candidateBox}>
          <div className={styles.candidateBox__image}>
            <img src={candidate.imageURL} alt={candidate.name} />
          </div>
          <div className={styles.candidateBox__text}>
            <p className={styles.candidateBox__text__name}>{candidate.name}</p>
            <span className={styles.candidateBox__text__category}>
              {candidate.category}
              {"ꞏ"}
              {candidate.location}
            </span>
          </div>
        </div>
        <div className={styles.textareaBox}>
          <textarea
            onChange={(e) => setText(e.target.value.length)}
            className={styles.textarea}
            maxLength={30}
            placeholder="장소에 대한 메모를 남겨주세요. (30자 이하)"
          />
          <p className={styles.textarea__counts}>{text}/30자</p>
        </div>
      </div>
    </div>
  );
};

export default MemoItem;
