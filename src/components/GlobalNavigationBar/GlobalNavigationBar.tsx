import {Cookies} from 'react-cookie';
import {AiOutlineCarryOut, AiOutlineHome} from 'react-icons/ai';
import {FaRegHeart} from 'react-icons/fa';
import {LuUser2} from 'react-icons/lu';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import styles from './GlobalNavigationBar.module.scss';

import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import AlertModal from '../AlertModal/AlertModal';

function GlobalNavigationBar() {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const modalContent = useRecoilValue(modalContentState);
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

  const onClickGnbBtn = (path: string) => {
    if (isLogin) {
      navigate(path);
    } else {
      showNotLoginModal();
    }
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          onClickGnbBtn('/');
        }}
      >
        <AiOutlineHome fontSize='24px' color={!pathname ? '#0086ff' : 'rgba(35, 39, 47, 1)'} />
      </button>

      <button
        onClick={() => {
          onClickGnbBtn('/trip');
        }}
      >
        <AiOutlineCarryOut fontSize='24px' color={pathname === 'trip' ? '#0086ff' : 'rgba(35, 39, 47, 1)'} />
      </button>

      <button
        onClick={() => {
          onClickGnbBtn('/wishes');
        }}
      >
        <FaRegHeart fontSize='24px' color={pathname === 'wishes' ? '#0086ff' : 'rgba(35, 39, 47, 1)'} />
      </button>

      <button
        onClick={() => {
          onClickGnbBtn('/user');
        }}
      >
        <LuUser2 fontSize='24px' color={pathname === 'user' ? '#0086ff' : 'rgba(35, 39, 47, 1)'} />
      </button>

      <AlertModal {...modalContent} />
    </div>
  );
}

export default GlobalNavigationBar;
