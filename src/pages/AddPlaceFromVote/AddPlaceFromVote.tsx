import {Button} from '@chakra-ui/react';
import {MdOutlineReplay as ResetIcon} from 'react-icons/md';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './AddPlaceFromVote.module.scss';

import {usePostPlaces} from '@/hooks/Spaces/space';
import useGoBack from '@/hooks/useGoBack';
import {useGetVoteListInfo} from '@/hooks/Votes/vote';

import CompletedVote from '@/components/Route/AddPlace/FromVote/CompletedVote/CompletedVote';
import InProgressVote from '@/components/Route/AddPlace/FromVote/InProgressVote/InProgressVote';
import {SelectedPlaces} from '@/components/Route/AddPlace/FromVote/VoteCard/VoteCard';

import BackIcon from '@/assets/back.svg?react';
import {selectedPlaceFromVoteState} from '@/recoil/spaces/selectPlace';
import {activeTabIndexState} from '@/recoil/spaces/trip';

import {Vote} from '@/types/route';

function AddPlaceFromVote() {
  const navigateBack = useGoBack();
  const {state} = useLocation();
  const {id, journeyId, day} = state;
  const {data: voteData} = useGetVoteListInfo(Number(id));
  const [selectedPlaces, setSelectedPlaces] = useRecoilState<SelectedPlaces[]>(selectedPlaceFromVoteState);
  const inProgressVotes = voteData?.data?.voteResponse?.filter((vote: Vote) => vote.voteStatus === '진행 중');
  const completedVotes = voteData?.data?.voteResponse?.filter((vote: Vote) => vote.voteStatus === '결정 완료');
  const postPlaces = usePostPlaces();
  const navigate = useNavigate();
  const setSelectedTabIndex = useSetRecoilState(activeTabIndexState);

  const goBack = () => {
    navigateBack();
    setSelectedPlaces([]);
  };

  const addPlaces = async () => {
    await postPlaces.mutateAsync({
      spaceId: Number(id),
      journeyId: Number(journeyId),
      placeIds: selectedPlaces.flatMap((place) => place.id),
    });
    setSelectedPlaces([]);
    navigate(`/trip/${id}`, {state: {id: id}});
    setSelectedTabIndex(1);
  };

  const resetSelected = () => {
    window.location.reload();
    setSelectedPlaces([]);
    // FIXME: 초기화 시 선택한 배열 비우기
  };

  return (
    <div className={styles.FromVoteContainer}>
      <nav>
        <button onClick={goBack}>
          <BackIcon />
        </button>
        <h1>Day {day} 일정 추가</h1>
      </nav>
      <div className={styles.resetButtonContainer}>
        <button onClick={resetSelected}>
          <ResetIcon size='2.2rem' color={selectedPlaces.length === 0 ? '#979C9E' : '#23272F'} />
          <span style={{color: selectedPlaces.length === 0 ? '#979C9E' : '#23272F'}}>선택 초기화</span>
        </button>
      </div>
      <CompletedVote votes={completedVotes} />
      <InProgressVote votes={inProgressVotes} />
      <Button isDisabled={selectedPlaces.length === 0} variant='CTAButton' onClick={addPlaces}>
        {selectedPlaces.length === 0 ? '장소를 선택해주세요' : `${selectedPlaces.length}개 장소 일정에 추가하기`}
      </Button>
    </div>
  );
}

export default AddPlaceFromVote;
