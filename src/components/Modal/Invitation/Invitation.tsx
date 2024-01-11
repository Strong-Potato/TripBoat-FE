import { useNavigate } from "react-router-dom";

import styles from "./Invitation.module.scss";

import { InvitationProps } from "@/types/Invitation";

function Invitation({ invitation, modalClose }: InvitationProps) {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    modalClose(true);
  };

  const navigate = useNavigate();

  return (
    <>
      {invitation.valid ? (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.container} onClick={handleModalClick}>
            <div className={styles.wrapperText}>
              <p className={styles.wrapperText__title}>
                {invitation.host} 님이 여행에 초대했어요.
              </p>
              <p className={styles.wrapperText__body}>
                초대를 수락하고
                <br />
                함께 즐거운 여행을 계획해보세요.
              </p>
            </div>
            <div className={styles.wrapperButton}>
              <button
                className={styles.cancel}
                onClick={() => modalClose(true)}
              >
                취소
              </button>
              <button
                className={styles.accept}
                onClick={() => navigate(`/carryout/${invitation.id}`)}
              >
                초대 수락
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.background} onClick={handleBackgroundClick}>
            <div className={styles.container} onClick={handleModalClick}>
              <div className={styles.wrapperText}>
                <p className={styles.wrapperText__title}>
                  초대 코드가 만료되었어요.
                </p>
                <p className={styles.wrapperText__body}>
                  초대 코드는 7일 간 유효합니다.
                  <br />
                  다른 초대 코드를 받아보세요.
                </p>
              </div>
              <div className={styles.wrapperButton}>
                <button
                  className={styles.accept}
                  onClick={() => modalClose(true)}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Invitation;
