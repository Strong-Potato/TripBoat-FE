import {useEffect, useState} from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import {useSetRecoilState} from 'recoil';

import {useDeleteWishes, useGetIsWish, usePostWishes} from '@/hooks/Detail/useWish';

import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import CustomToast from '../CustomToast/CustomToast';
import {useDebounce} from '@/hooks/useDebounce';

interface WishBtnProps {
  placeId: number;
  contentTypeId: number;
  size?: string;
  className?: string;
}

const notLoginContent = {
  title: '로그인이 필요한 기능입니다.',
  subText: '로그인하고 모든 서비스를 이용해 보세요! ',
  cancelText: '닫기',
  actionButton: '로그인하기',
  isSmallSize: true,
};

function WishBtn({placeId, contentTypeId, size = '2.4rem', className = ''}: WishBtnProps) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);
  const [wishInitial, setWishInitial] = useState<boolean>(false);

  // isLogin 구현해야 함
  const isLogin = true;

  const showNotLoginModal = () => {
    setIsModalOpen(true);
    setModalContent({...notLoginContent});
  };

  const showToast = CustomToast();

  const {
    data: {data: wish},
  } = useGetIsWish(placeId);
  const [isWish, setIsWish] = useState(wish);
  const postWishes = usePostWishes();
  const deleteWishes = useDeleteWishes();

  // postWishes error 리턴 시 로그인 모달 띄우기
  const debounce = useDebounce(isWish, 1000);

  const handleWishClick = () => {
    if (isLogin) {
      if (!isWish) {
        // postWishes.mutate({placeId: placeId, contentTypeId: contentTypeId});

        setIsWish(true);
        showToast('찜 목록에 저장되었습니다.');
      } else {
        // deleteWishes.mutate(placeId);

        showToast('찜 목록에서 제거되었습니다.');
        setIsWish(false);
      }
      setWishInitial(true);
    } else {
      showNotLoginModal();
    }
  };

  useEffect(() => {
    if (wishInitial) {
      if (debounce) {
        postWishes.mutate({placeId: placeId, contentTypeId: contentTypeId});
      } else {
        deleteWishes.mutate(placeId);
      }
    }
    console.log(debounce);
  }, [debounce]);

  return (
    <>
      {isWish ? (
        <FaHeart
          fontSize={size}
          cursor='pointer'
          color='#E23774'
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            handleWishClick();
          }}
          className={className}
        />
      ) : (
        <FaRegHeart
          fontSize={size}
          cursor='pointer'
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            handleWishClick();
          }}
          className={className}
        />
      )}
    </>
  );
}

export default WishBtn;
