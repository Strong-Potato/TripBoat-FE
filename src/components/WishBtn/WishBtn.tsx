import {FaHeart, FaRegHeart} from 'react-icons/fa';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {IsHeartValued} from '@/recoil/detail/detail';
import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';
import CustomToast from '../CustomToast/CustomToast';
import {useDeleteWishes, useGetIsWish, usePostWishes} from '@/hooks/Detail/useWish';

interface WishBtnProps {
  id: number;
  contentTypeId: number;
  size: string;
}

const notLoginContent = {
  title: '로그인이 필요한 기능입니다.',
  subText: '로그인하고 모든 서비스를 이용해 보세요! ',
  cancelText: '닫기',
  actionButton: '로그인하기',
  isSmallSize: true,
};

function WishBtn({id, contentTypeId, size}: WishBtnProps) {
  const [isWish, setIsWish] = useRecoilState(IsHeartValued);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  // isLogin 구현해야 함
  const isLogin = false;

  const showNotLoginModal = () => {
    setIsModalOpen(true);
    setModalContent({...notLoginContent});
  };

  const showToast = CustomToast();

  useGetIsWish(id, setIsWish);
  const postWishes = usePostWishes();
  const deleteWishes = useDeleteWishes();

  // postWishes error 리턴 시 로그인 모달 띄우기
  const handleHeartClick = () => {
    if (isLogin) {
      if (!isWish) {
        postWishes.mutate({placeId: id, contentTypeId: contentTypeId});

        setIsWish(true);
        showToast('찜 목록에 저장되었습니다.');
      } else {
        deleteWishes.mutate(id);

        setIsWish(false);
      }
    } else {
      showNotLoginModal();
    }
  };

  return (
    <>
      {isWish ? (
        <FaHeart fontSize={size} cursor='pointer' color='#E23774' onClick={handleHeartClick} />
      ) : (
        <FaRegHeart fontSize={size} cursor='pointer' onClick={handleHeartClick} />
      )}
    </>
  );
}

export default WishBtn;
