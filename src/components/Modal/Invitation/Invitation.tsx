import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import styles from "./Invitation.module.scss";

import { inviteCodeJoin } from "@/hooks/Invite/useInviteCode";

import { parseInviteCode } from "@/utils/parseInviteCode";

import { InvitationProps } from "@/types/Invitation";

function Invitation({ inviteCode, isLogin, modal }: InvitationProps) {
  const [, , removeCookie] = useCookies(["inviteCode"]);
  const navigate = useNavigate();
  const parsedInviteCode = parseInviteCode(inviteCode);
  console.log(parseInviteCode);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    modal(true);
  };

  const handleJoin = async () => {
    const response = await inviteCodeJoin();
    if (response.status === 200) {
      removeCookie("inviteCode", { path: "/" });
      navigate(`/trip/${parsedInviteCode!.ID}`);
    } else {
      removeCookie("inviteCode", { path: "/" });
      modal(false);
    }
  };

  return (
    <>
      {parsedInviteCode!.RESULT === "false" ? (
        <>
          <div className={styles.background} onClick={handleBackgroundClick}>
            <div className={styles.containerDismiss} onClick={handleModalClick}>
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
              <div className={styles.wrapperInvalidButton}>
                <button
                  className={styles.wrapperInvalidButton__confirm}
                  onClick={() => {
                    modal(false);
                    removeCookie("inviteCode", { path: "/" });
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </>
      ) : isLogin ? (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.container} onClick={handleModalClick}>
            <div className={styles.wrapperText}>
              <p className={styles.wrapperText__title}>
                {parsedInviteCode!.PUBLISHER} 님이 여행에 초대했어요.
              </p>
              <p className={styles.wrapperText__body}>
                초대를 수락하고 함께 즐거운 여행을
                <br />
                계획해보세요.
              </p>
            </div>
            <div className={styles.wrapperButton}>
              <button
                className={styles.wrapperButton__cancel}
                onClick={() => {
                  modal(false);
                  removeCookie("inviteCode", { path: "/" });
                }}
              >
                취소
              </button>
              <button
                className={styles.wrapperButton__accept}
                onClick={() => handleJoin()}
              >
                초대 수락
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.container} onClick={handleModalClick}>
            <div className={styles.wrapperText}>
              <p className={styles.wrapperText__title}>로그인이 필요해요.</p>
              <p className={styles.wrapperText__body}>
                초대수락을 위해 로그인이 필요해요.
                <br />
                지금 로그인 회원가입 하시겠습니까?
              </p>
            </div>
            <div className={styles.wrapperButton}>
              <button
                className={styles.wrapperButton__cancel}
                onClick={() => {
                  modal(false);
                  removeCookie("inviteCode", { path: "/" });
                }}
              >
                취소
              </button>
              <button
                className={styles.wrapperButton__accept}
                onClick={() => navigate("/login")}
              >
                로그인하러 가기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Invitation;
