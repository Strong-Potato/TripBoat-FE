import {Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {Cookies} from 'react-cookie';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

import styles from './TitleWishBtn.module.scss';

import {useDeleteWishes, useGetIsWish, usePostWishes} from '@/hooks/Detail/useWish';
import {useDebounceBoolean} from '@/hooks/useDebounce';

import CustomToast from '../../../../CustomToast/CustomToast';
import {useRecoilState} from 'recoil';
import {IsHeartValued} from '@/recoil/detail/detail';

interface WishBtnProps {
  placeId: number;
  contentTypeId: number;
  size?: string;
  className?: string;
}

function TitleWishBtn({placeId, contentTypeId, size = '2.4rem', className = ''}: WishBtnProps) {
  const [isWish, setIsWish] = useRecoilState(IsHeartValued);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [wishInitial, setWishInitial] = useState<boolean>(false);
  const [isMount, setIsMount] = useState<boolean>(true);

  const cookies = new Cookies();
  const isLogin = cookies.get('isLogin');

  const showNotLoginModal = () => {
    setIsModalOpen(true);
  };

  const showToast = CustomToast();

  // const [isWish, setIsWish] = useState<boolean>(false);

  const wish = useGetIsWish(placeId, isLogin);

  useEffect(() => {
    console.log(wish.data);

    if (isLogin) {
      if (typeof wish.data === 'boolean' && isMount) {
        setIsMount(false);
        setIsWish(wish.data);
      }
    }
  }, [wish]);

  const postWishes = usePostWishes(placeId);
  const deleteWishes = useDeleteWishes(placeId);

  const debounce = useDebounceBoolean(isWish, 1000);

  const handleWishClick = () => {
    if (isLogin) {
      if (!isWish) {
        // 여기서 한 번 요청하고 밑에 디바운스에서 또 요청해서 주석처리 해놨습니다!
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

export default TitleWishBtn;
