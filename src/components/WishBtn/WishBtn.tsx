import {Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {Cookies} from 'react-cookie';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

import styles from './WishBtn.module.scss';

import {useDeleteWishes, useGetIsWish, usePostWishes} from '@/hooks/Detail/useWish';
import {useDebounceBoolean} from '@/hooks/useDebounce';

import CustomToast from '../CustomToast/CustomToast';

interface WishBtnProps {
  placeId: number;
  contentTypeId: number;
  size?: string;
  className?: string;
}

function WishBtn({placeId, contentTypeId, size = '2.4rem', className = ''}: WishBtnProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [wishInitial, setWishInitial] = useState<boolean>(false);

  const cookies = new Cookies();
  const isLogin = cookies.get('isLogin');

  const showNotLoginModal = () => {
    setIsModalOpen(true);
  };

  const showToast = CustomToast();

  const [isWish, setIsWish] = useState<boolean>(false);

  if (isLogin) {
    const {
      data: {data: wish},
    } = useGetIsWish(placeId);

    setIsWish(wish);
  }

  const postWishes = usePostWishes();
  const deleteWishes = useDeleteWishes();

  const debounce = useDebounceBoolean(isWish, 1000);

  const handleWishClick = () => {
    if (isLogin) {
      if (!isWish) {
        postWishes.mutate({placeId: placeId, contentTypeId: contentTypeId});

        setIsWish(true);
        showToast('찜 목록에 저장되었습니다.');
      } else {
        deleteWishes.mutate(placeId);

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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant='alertModal'>
        <ModalOverlay />
        <ModalContent style={{margin: '288px 48px auto'}}>
          <ModalBody>
            <p className={styles.title}>로그인이 필요한 기능입니다.</p>
            <span className={styles.subText}>로그인하고 모든 서비스를 이용해 보세요!</span>
          </ModalBody>

          <ModalFooter>
            <button onClick={() => setIsModalOpen(false)} className={styles.buttons__cancel}>
              닫기
            </button>
            <button onClick={() => {}} className={styles.buttons__action}>
              로그인하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default WishBtn;
