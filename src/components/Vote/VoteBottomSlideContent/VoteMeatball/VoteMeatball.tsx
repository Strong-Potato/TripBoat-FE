import { useState } from "react";
import { useSetRecoilState } from "recoil";

import styles from "./VoteMeatball.module.scss";

import AlertModal from "@/components/AlertModal/AlertModal";

import CheckIcon from "@/assets/voteIcons/vote_check.svg?react";
import EditIcon from "@/assets/voteIcons/vote_edit.svg?react";
import RepeatIcon from "@/assets/voteIcons/vote_repeat.svg?react";
import TrashIcon from "@/assets/voteIcons/vote_trash.svg?react";
import { isModalOpenState } from "@/recoil/vote/alertModal";
import { isBottomSlideOpenState } from "@/recoil/vote/bottomSlide";

import { AlertModalProps, VoteMeatballProps } from "@/types/vote";

const VoteMeatball = ({ state }: VoteMeatballProps) => {
  const setIsBTOpen = useSetRecoilState(isBottomSlideOpenState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);

  const [modalProps, setModalProps] = useState<AlertModalProps | null>();

  const modalConsole = () => {
    console.log("변경");
  };

  const showRetryModalOpen = () => {
    setIsModalOpen(true);
    setIsBTOpen(false);

    setModalProps({
      title: "투표를 재진행하시겠습니까?",
      subText: "투표를 재진행할 경우 전체투표 결과가\n초기화됩니다.",
      actionButton: "재진행하기",
      isSmallSize: true,
      onClickAction: modalConsole,
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={showRetryModalOpen}>
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

      {modalProps && <AlertModal {...modalProps} />}
    </div>
  );
};

export default VoteMeatball;
