import styles from "./VoteMeatball.module.scss";

import CheckIcon from "@/assets/voteIcons/vote_check.svg?react";
import EditIcon from "@/assets/voteIcons/vote_edit.svg?react";
import TrashIcon from "@/assets/voteIcons/vote_trash.svg?react";

const VoteMeatball = () => {
  return (
    <div className={styles.container}>
      <button>
        <CheckIcon />
        <p>투표 확정</p>
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
