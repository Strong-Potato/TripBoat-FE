import styles from "./VoteMeatball.module.scss";

import CheckIcon from "@/assets/voteIcons/vote_check.svg?react";
import EditIcon from "@/assets/voteIcons/vote_edit.svg?react";
import RepeatIcon from "@/assets/voteIcons/vote_repeat.svg?react";
import TrashIcon from "@/assets/voteIcons/vote_trash.svg?react";

import { VoteMeatballProps } from "@/types/vote";

const VoteMeatball = ({ state }: VoteMeatballProps) => {
  //투표 확정상태일때 "투표 재진행"

  return (
    <div className={styles.container}>
      <button>
        {state === "결정완료" ? (
          <>
            <RepeatIcon />
            <p>투표 재진행</p>
          </>
        ) : (
          <>
            <CheckIcon />
            <p>투표 확정</p>
          </>
        )}
      </button>
      <button>
        <EditIcon />
        <p>투표 제목 수정</p>
      </button>
      <button>
        <TrashIcon />
        <p>후보 삭제</p>
      </button>
      <button>
        <TrashIcon />
        <p>투표 전체 삭제</p>
      </button>
    </div>
  );
};

export default VoteMeatball;
