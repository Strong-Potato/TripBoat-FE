import {BiTask} from 'react-icons/bi';
import {CiEdit} from 'react-icons/ci';
import {FaRegHeart} from 'react-icons/fa';
import {IoShareSocialOutline} from 'react-icons/io5';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './MeatballBottomSlide.module.scss';

import CustomToast from '@/components/CustomToast/CustomToast';

import CloseIcon from '@/assets/close.svg?react';
import {IsHeartValued} from '@/recoil/detail/detail';
import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import RegistrationSlide from '../../BottomFixedBtn/RegistrationSlide/RegistrationSlide';
import ReviewBottomSlide from '../../Contents/ReviewBottomSlide/ReviewBottomSlide';

import {NavigationMeatballProps} from '@/types/detail';
import {useDeleteWishes, usePostWishes} from '@/hooks/Detail/useWish';

const MeatballBottomSlide = ({onBottomSlideOpen, onClose, id, contentTypeId}: NavigationMeatballProps) => {
  const [isWish, setIsWish] = useRecoilState(IsHeartValued);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  // isLogin 구현해야 함
  const isLogin = true;

  const notLoginContent = {
    title: '로그인이 필요한 기능입니다.',
    subText: '로그인하고 모든 서비스를 이용해 보세요! ',
    cancelText: '닫기',
    actionButton: '로그인하기',
    isSmallSize: true,
  };

  const showNotLoginModal = () => {
    setIsModalOpen(true);
    setModalContent({...notLoginContent});
  };
  const showToast = CustomToast();

  const postWishes = usePostWishes();
  const deleteWishes = useDeleteWishes();

  const handleHeartClick = () => {
    if (isLogin) {
      if (!isWish) {
        postWishes.mutate({placeId: id, contentTypeId: contentTypeId});

        setIsWish(true);
        showToast('찜 목록에 저장되었습니다.');
      } else {
        deleteWishes.mutate(id);

        showToast('찜 목록에서 제거되었습니다.');
        setIsWish(false);
      }
    } else {
      showNotLoginModal();
    }
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          onClose();
          document.body.style.removeProperty('overflow');
        }}
        className={styles.container__top}
      >
        <CloseIcon width='2rem' height='2rem' />
      </button>
      <button
        onClick={() => {
          // 비로그인
          if (isLogin) {
            handleHeartClick();
            onClose();
            document.body.style.removeProperty('overflow');
          } else {
            showNotLoginModal();
          }
        }}
      >
        <div className={styles.container__iconWrapper}>
          <FaRegHeart fontSize='1.6rem' />
        </div>
        <p>찜하기</p>
      </button>
      <button
        onClick={() => {
          onClose();
          setTimeout(() => {
            onBottomSlideOpen(<RegistrationSlide slideOnClose={onClose} />, false);
          }, 300);
        }}
      >
        <div className={styles.container__iconWrapper}>
          <BiTask fontSize='1.6rem' />
        </div>
        <p>후보에 추가</p>
      </button>
      <button
        onClick={() => {
          onClose();
          setTimeout(() => {
            onBottomSlideOpen(<ReviewBottomSlide slideOnClose={onClose} />, true);
          }, 300);
        }}
      >
        <div className={styles.container__iconWrapper}>
          <CiEdit fontSize='1.6rem' />
        </div>
        <p>리뷰 쓰기</p>
      </button>
      <button
        onClick={() => {
          showToast('링크가 복사되었습니다.');
          onClose();
          document.body.style.removeProperty('overflow');
        }}
      >
        <div className={styles.container__iconWrapper}>
          <IoShareSocialOutline fontSize='1.6rem' />
        </div>
        <p>공유하기</p>
      </button>
    </div>
  );
};

export default MeatballBottomSlide;
