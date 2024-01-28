import {useSetRecoilState} from 'recoil';

import styles from './BottomFixedBtn.module.scss';

import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import {BottomFixedBtnProps} from '@/types/detail';
import {Cookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import {usePostPlaces} from '@/hooks/Spaces/space';
import CustomToast from '@/components/CustomToast/CustomToast';
import {useState} from 'react';

function BottomFixedBtn({onOpen, placeId}: BottomFixedBtnProps) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const cookies = new Cookies();
  const isLogin = cookies.get('isLogin');
  const navigate = useNavigate();

  const showToast = CustomToast();

  const params = new URLSearchParams(location.search);

  const tripId: number = Number(params.get('tripId'));
  const journeyId: number = Number(params.get('journyId'));

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

  const {mutateAsync: addToJourneyMutateAsync} = usePostPlaces();

  const handleAddJourney = async () => {
    const res = await addToJourneyMutateAsync({spaceId: tripId, journeyId: journeyId, placeIds: [placeId]});
    console.log('일정추가 res', res);
    showToast('일정에 추가가 완료되었습니다.', true, '바로가기', () => navigate(`/trip/${tripId}`));
  };

  return (
    <div className={styles.container}>
      {tripId && journeyId ? (
        <button
          className={styles.container__wrapper}
          style={{
            backgroundColor: '#2388FF',
          }}
          onClick={() => {
            if (isLogin) {
              setIsDisabled(true);
              handleAddJourney();
              navigate(`/trip/${tripId}`);
            } else {
              showNotLoginModal();
            }
          }}
          disabled={isDisabled}
        >
          <span>이 장소 일정에 추가하기</span>
        </button>
      ) : (
        <button
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
        </button>
      )}
    </div>
  );
}

export default BottomFixedBtn;
