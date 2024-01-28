import {Button} from '@chakra-ui/react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import {usePostPlaces, usePostSearchPlaces} from '@/hooks/Spaces/space';

import {activeTabIndexState} from '@/recoil/spaces/trip';
import {selectedPlaceState, selectedTripPlaceState, selectedTripSearchPlaceState} from '@/recoil/vote/selectPlace';

//prop이나 params로 trip or vote 판별, onClick에 삼항연산자로 함수 넣기
const AddToCandidateButton = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const spaceId = queryParams.get('placeID');
  const navigate = useNavigate();
  const tripDateParam = queryParams.get('tripDate');
  const voteIdArray = tripDateParam?.split(' ') as string[]; // 띄어쓰기를 기준으로 문자열 분할
  const isInVote = voteIdArray[0] === 'vote';
  const voteId = voteIdArray[1];
  const selectedPlaces = useRecoilValue(selectedPlaceState);
  const selectedTripPlaces = useRecoilValue(selectedTripPlaceState);
  const selectedTripSearchPlace = useRecoilValue(selectedTripSearchPlaceState);
  const setTripRecoil = useSetRecoilState(selectedTripPlaceState);
  const setTripSearchRecoil = useSetRecoilState(selectedTripSearchPlaceState);
  const postPlaces = usePostPlaces();
  const path = location.pathname;
  const setSelectedTabIndex = useSetRecoilState(activeTabIndexState);
  const counts = isInVote
    ? selectedPlaces.length
    : path === '/wishes/bring'
      ? selectedTripPlaces.length
      : selectedTripSearchPlace.length;

  const addPlaces = async () => {
    await postPlaces.mutateAsync({
      spaceId: Number(spaceId),
      journeyId: Number(voteId),
      placeIds: selectedTripPlaces,
    });
    setSelectedTabIndex(1);
    setTripRecoil([]);
    navigate(`/trip/${spaceId}`, {state: {id: spaceId}});
  };

  const postSearchPlaces = usePostSearchPlaces();

  const addSearchPlaces = async () => {
    await postSearchPlaces.mutateAsync({
      spaceId: Number(spaceId),
      journeyId: Number(voteId),
      places: selectedTripSearchPlace,
    });
    navigate(`/trip/${spaceId}`, {state: {id: spaceId}});
    setTripSearchRecoil([]);
    setSelectedTabIndex(1);
  };

  const handleAddCandidates = () => {
    // 경로 추후 수정
    if (isInVote) {
      navigate(`/trip/${spaceId}/votes/${voteId}/votememo`, {replace: true});
    } else {
      if (path === '/wishes/bring') {
        addPlaces();
      } else {
        addSearchPlaces();
      }
    }
  };
  return (
    <Button variant='CTAButton' isDisabled={counts === 0} onClick={handleAddCandidates}>
      {counts ? `${counts}개 장소 ${isInVote ? '후보' : '일정'}에 추가하기` : '장소를 선택해주세요'}
    </Button>
  );
};

export default AddToCandidateButton;
