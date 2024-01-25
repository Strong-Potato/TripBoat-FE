import {useDisclosure} from '@chakra-ui/react';
import {useState} from 'react';
import {CiEdit} from 'react-icons/ci';
import {useRecoilValue} from 'recoil';

import styles from './RegistrationSlide.module.scss';

import CustomToast from '@/components/CustomToast/CustomToast';

import CloseIcon from '@/assets/close.svg?react';
import {isRegistrationSelectedState} from '@/recoil/detail/detail';

import RegistrationListItem from './RegistrationListItem/RegistrationListItem';
import RegistrationModal from './RegistrationModal/RegistrationModal';
import RegistrationTripSpace from './RegistrationTripSpace/RegistrationTripSpace';

import {RegistrationSlideProps} from '@/types/detail';

import {useGetSpaces} from '@/hooks/Spaces/useSpaces';

function RegistrationSlide({slideOnClose}: RegistrationSlideProps) {
  const isValuedArray = useRecoilValue<string[]>(isRegistrationSelectedState);
  const [tripSelectedId, setTripSelectedId] = useState<number>(0);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = CustomToast();

  const {data: spaces} = useGetSpaces(true);

  console.log(spaces, 'spaces');

  const exArray = [];

  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => {
            slideOnClose();
            document.body.style.removeProperty('overflow');
          }}
        >
          <CloseIcon width='2rem' height='2rem' />
        </button>

        <div className={styles.container__createBtn}>
          {tripSelectedId ? (
            <button
              onClick={() => {
                onOpen();
                console.log(1);
              }}
            >
              <CiEdit fontSize='2.2rem' />
              <span>새 투표 생성</span>
            </button>
          ) : (
            <button className={styles.container__createBtn__notValued} disabled>
              <CiEdit fontSize='2.2rem' color='#CDCFD0' />
              <span>새 투표 생성</span>
            </button>
          )}
        </div>

        <div className={styles.container__tripTitle}>여행 스페이스</div>
        <RegistrationTripSpace
          tripSelectedId={tripSelectedId}
          setTripSelectedId={setTripSelectedId}
          spaces={spaces?.data.spaces}
        />
        <div className={styles.container__voteTitle}>투표리스트</div>
        {tripSelectedId ? (
          exArray.length > 0 ? (
            <div>
              <div className={styles.container__voteSelected}>
                <span>후보로 등록할 투표 제목을 선택해주세요</span>
              </div>
              <div className={styles.container__voteList}>
                <RegistrationListItem title='맛집 어디갈까' isSelectedProps={true} />
                {/*  초과 글씨 ... 처리 해야함*/}
                <RegistrationListItem title='둘째 날 숙소 어디서 묵지?' isSelectedProps={false} />
                <RegistrationListItem title='루프탑 카페 정하자~' isSelectedProps={false} />
              </div>
            </div>
          ) : (
            <div className={styles.container__voteNotValued}>
              <p className={styles.container__voteNotValued__top}>생성된 투표가 없습니다.</p>
              <p className={styles.container__voteNotValued__bottom}>투표 생성을 눌러 새로운 투표를 만들어주세요!</p>
            </div>
          )
        ) : (
          <div className={styles.container__voteUnSelected}>
            <span>여행을 먼저 선택해주세요</span>
          </div>
        )}
        <button
          className={styles.container__bottomFixedBtn}
          style={
            isValuedArray.length > 0
              ? {backgroundColor: '#2388FF', color: '#FFFFFF'}
              : {backgroundColor: '#E3E5E5', color: '#979C9E'}
          }
          onClick={() => {
            if (isValuedArray.length > 0) {
              toast('이 장소가 후보로 등록되었습니다.');
              slideOnClose();
              document.body.style.removeProperty('overflow');
            }
          }}
        >
          후보 등록
        </button>
      </div>
      <RegistrationModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default RegistrationSlide;
