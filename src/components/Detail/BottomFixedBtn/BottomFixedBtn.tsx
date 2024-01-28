import {useSetRecoilState} from 'recoil';

import styles from './BottomFixedBtn.module.scss';

import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import {BottomFixedBtnProps} from '@/types/detail';
import {Cookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

function BottomFixedBtn({onOpen}: BottomFixedBtnProps) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  const cookies = new Cookies();
  const isLogin = cookies.get('isLogin');
  const navigate = useNavigate();

  const notLoginContent = {
    title: '로그인이 필요한 기능입니다.',
    subText: '로그인하고 모든 서비스를 이용해 보세요! ',
    cancelText: '닫기',
    actionButton: '로그인하기',
    isSmallSize: true,
    onClickAction: () => {
      setIsModalOpen(false);
      navigate('/auth/login');
    },
  };

  const showNotLoginModal = () => {
    setIsModalOpen(true);
    setModalContent({...notLoginContent});
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.container__wrapper}
        style={{
          backgroundColor: '#2388FF',
        }}
        onClick={() => {
          if (isLogin) {
            onOpen();
          } else {
            showNotLoginModal();
          }
        }}
      >
        <span>이 장소 후보로 등록하기</span>
      </div>
    </div>
  );
}

export default BottomFixedBtn;
