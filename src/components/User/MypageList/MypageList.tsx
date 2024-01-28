import {useEffect, useState} from 'react';
import {RiArrowRightSLine} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './MypageList.module.scss';

import {usePostSubscribe, usePostUnsubscribe} from '@/hooks/Notification/useNotification';

import AlertIcon from '@/assets/icons/error-warning-line.svg?react';
import {Subcribe} from '@/recoil/user/user';

function MypageList() {
  const navigate = useNavigate();
  const [alertOn, setAlertOn] = useState(true);
  const {mutate: subscribe} = usePostSubscribe();
  const {mutate: unsubscribe} = usePostUnsubscribe();
  const isSubscribe = useRecoilValue(Subcribe);

  useEffect(() => {
    if (isSubscribe) {
      setAlertOn(true);
    } else {
      setAlertOn(false);
    }
  }, [isSubscribe]);

  const onClickAlert = async () => {
    if (Notification.permission === 'denied') {
      return;
    }
    if (alertOn) {
      setAlertOn(false);
      unsubscribe();
    } else {
      setAlertOn(true);
      subscribe();
    }
  };

  return (
    <ul className={styles.container}>
      <li
        onClick={() => {
          navigate('/user/privacy');
        }}
      >
        <div>계정 관리</div>
        <RiArrowRightSLine size='24' />
      </li>

      <li className={styles.alert}>
        <div className={styles.alert__left}>
          알림
          <div className={styles.alert__left__tooltip}>
            <button type='button'>
              <AlertIcon />
            </button>

            <ul className={styles.tooltipList}>
              <li>
                <span>구글 크롬(Chrome) 브라우저에 최적화 되어 있어 크롬 브라우저 사용을 권장합니다.</span>
              </li>
              <li>
                <span>브라우저의 알림 설정을 켜주셔야 서비스 알림을 받을 수 있습니다.</span>
              </li>
            </ul>
          </div>
        </div>

        <button onClick={onClickAlert} className={`${styles.alert__button} ${alertOn ? styles.on : styles.off}`}>
          <div className={styles.alertState}></div>
        </button>
      </li>

      <li>
        <div>버전 정보</div>
        <div className={styles.version}>1.1.0</div>
      </li>
    </ul>
  );
}

export default MypageList;
