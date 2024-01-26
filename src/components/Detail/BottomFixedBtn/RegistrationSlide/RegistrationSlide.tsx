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
import {useGetVoteListInfo, usePostNewCandidate} from '@/hooks/Votes/vote';
import {VoteListInfo} from '@/types/vote';

function RegistrationSlide({slideOnClose, placeId}: RegistrationSlideProps) {
  const isValuedArray = useRecoilValue<number[]>(isRegistrationSelectedState);
  const [tripSelectedId, setTripSelectedId] = useState<number>(0);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = CustomToast();

  const {data: spaces} = useGetSpaces(true);

  console.log(spaces, 'spaces');

  const data = useGetVoteListInfo(tripSelectedId);

  const voteListAllData = data.data;
  const voteListData: VoteListInfo[] = voteListAllData?.data?.voteResponse.filter(
    (vote: any) => vote.voteStatus === '진행 중',
  );

  console.log(voteListData, 'voteList');

  const postNewCandidate = usePostNewCandidate();

  const handleCreateCandidate = async () => {
    isValuedArray.map((id: number) => {
      const res = postNewCandidate.mutateAsync({voteId: id, candidateInfos: [{placeId: placeId, tagline: '1'}]});
      console.log('res =', res);
    });
  };

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
          voteListData && voteListData.length > 0 ? (
            <div>
              <div className={styles.container__voteSelected}>
                <span>후보로 등록할 투표 제목을 선택해주세요</span>
              </div>
              <div className={styles.container__voteList}>
                {voteListData.map((data) => (
                  <RegistrationListItem
                    voteId={data.voteId}
                    placeId={placeId}
                    title={data.title}
                    key={`votelist_${data.voteId}`}
                  />
                ))}
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
              handleCreateCandidate();
              toast('이 장소가 후보로 등록되었습니다.');
              slideOnClose();
              document.body.style.removeProperty('overflow');
            }
          }}
        >
          후보 등록
        </button>
      </div>
      <RegistrationModal spaceId={tripSelectedId} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default RegistrationSlide;
