import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import styles from './Invitation.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import {postJoin} from '@/api/invite';
import {isFullMember} from '@/recoil/fullmember/fullmember';
import {parseInviteCode} from '@/utils/parseInviteCode';

import FullMembers from '../FullMembers/FullMembers';

import {InvitationProps} from '@/types/Invitation';

function Invitation({inviteCode, modal}: InvitationProps) {
  const [isFull, setIsFull] = useRecoilState(isFullMember);
  const [, , removeCookie] = useCookies(['join_space_token']);
  const {data} = useGetMyInfo(true);
  const navigate = useNavigate();
  const parsedInviteCode = parseInviteCode(inviteCode);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    modal(true);
  };

  const handleJoin = async () => {
    const response = await postJoin(parsedInviteCode!.space_id);
    if (response.status === 200) {
      removeCookie('join_space_token');
      navigate(`/trip/${parsedInviteCode!.space_id}`);
    } else if (response.status === 400) {
      removeCookie('join_space_token');
      modal(false);
      setIsFull(true);
    }
  };

  return (
    <>
      {isFull && <FullMembers modal={setIsFull} />}
      {parsedInviteCode!.exp < Math.floor(new Date().getTime() / 1000) === true ? (
        <>
          <div className={styles.background} onClick={handleBackgroundClick}>
            <div className={styles.containerDismiss} onClick={handleModalClick}>
              <div className={styles.wrapperText}>
                <p className={styles.wrapperText__title}>초대 코드가 만료되었어요.</p>
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
                    removeCookie('join_space_token');
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </>
      ) : data?.status === 200 ? (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.container} onClick={handleModalClick}>
            <div className={styles.wrapperText}>
              <p className={styles.wrapperText__title}>{parsedInviteCode!.iss} 님이 여행에 초대했어요.</p>
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
                  removeCookie('join_space_token');
                }}
              >
                취소
              </button>
              <button className={styles.wrapperButton__accept} onClick={() => handleJoin()}>
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
                  removeCookie('join_space_token');
                }}
              >
                취소
              </button>
              <button className={styles.wrapperButton__accept} onClick={() => navigate('/auth/login')}>
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
