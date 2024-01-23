import {FaRegHeart} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {GoStarFill} from 'react-icons/go';
import {IoShareSocialOutline} from 'react-icons/io5';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

import styles from './Title.module.scss';

import CustomToast from '@/components/CustomToast/CustomToast';

import {IsHeartValued, IsLoginState} from '@/recoil/detail/detail';
import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';
import {useGetIsWish} from '@/hooks/Detail/useGetIsWish';

interface TitleProps {
  id: number;
  title: string;
  category: string;
}

function Title({id, title, category}: TitleProps) {
  const [isWish, setIsWish] = useRecoilState(IsHeartValued);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  useGetIsWish(id, setIsWish);

  const isLogin = useRecoilValue(IsLoginState);

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

  const handleHeartClick = () => {
    if (isLogin) {
      if (!isWish) {
        showToast('찜 목록에 저장되었습니다.');
      }
      setIsWish(!isWish);
    } else {
      showNotLoginModal();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.container__header}>{title}</h2>
      <p className={styles.container__category}>{category}</p>
      <div className={styles.container__alignCenter}>
        <GoStarFill className={styles.container__alignCenter__star} />
        <span className={styles.container__alignCenter__point}>5.0</span>
        <span className={styles.container__alignCenter__reviewsCount}>(13,052)</span>
      </div>
      <div className={styles.container__positionAbsoluteIcons}>
        {isWish ? (
          <FaHeart fontSize='2.4rem' cursor='pointer' color='#E23774' onClick={handleHeartClick} />
        ) : (
          <FaRegHeart fontSize='2.4rem' cursor='pointer' onClick={handleHeartClick} />
        )}

        <IoShareSocialOutline
          fontSize='2.4rem'
          cursor='pointer'
          onClick={() => {
            showToast('링크가 복사되었습니다.');
          }}
        />
      </div>
    </div>
  );
}

export default Title;
