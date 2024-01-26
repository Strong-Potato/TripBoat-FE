import {Button} from '@chakra-ui/react';
import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import styles from './VoteMemo.module.scss';

import useGetSelectedArray from '@/hooks/useGetSelectedArray';
import {useGetVotesInfo, usePostNewCandidate} from '@/hooks/Votes/vote';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import AddCandidate from '@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';
import MemoContent from '@/components/VoteMemo/MemoContent';

import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedPlaceState} from '@/recoil/vote/selectPlace';
import {selectedTaglineState} from '@/recoil/vote/voteMemo';

import {TaglineType, VoteInfo} from '@/types/vote';
// import { selectedPlaceState } from '@/recoil/vote/selectPlace';

const VoteMemo = () => {
  const {id: voteId} = useParams();
  const {data: voteInfoData} = useGetVotesInfo(Number(voteId));
  const voteInfo = voteInfoData?.data as VoteInfo;
  const postCandidateMutation = usePostNewCandidate();
  const navigate = useNavigate();
  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [selectedTagline, setSelectedTagline] = useRecoilState(selectedTaglineState);
  const [selectedPlaces, SetSelectedPlaces] = useRecoilState(selectedPlaceState);
  // const selectedPlaces = useRecoilValue(selectedPlaceState);
  const {toggleItemInNewArray} = useGetSelectedArray(selectedTaglineState);

  const getExistingTaglines = localStorage.getItem('recoil-persist');
  const existingTaglines: TaglineType[] = getExistingTaglines && JSON.parse(getExistingTaglines).selectedTaglineState;

  // console.log('selectedPlaces', selectedPlaces);

  const setInitializeTagline = () => {
    console.log('새로 세팅');
    setSelectedTagline(
      selectedPlaces?.map((place) => ({placeId: place.id, placeTypeId: place.contentTypeId, tagline: ''})),
    );
  };

  const setExistingTagline = () => {
    console.log('추가 세팅');
    const nonExistTaglines = selectedPlaces.map((place) => {
      const existingTagline = existingTaglines.find((tagline) => tagline.placeId === place.id);
      if (!existingTagline) {
        return {
          placeId: place.id,
          placeTypeId: place.contentTypeId,
          tagline: '',
        };
      }
      return existingTagline;
    });
    nonExistTaglines.forEach((tagline) => toggleItemInNewArray(tagline));
  };

  useEffect(() => {
    setIsBTOpen(false);
    if (!existingTaglines || existingTaglines.length === 0) {
      setInitializeTagline();
    } else {
      setExistingTagline();
    }
  }, []);

  const handleAddCandidates = async () => {
    console.log('최종 내용 : ', selectedTagline);
    await postCandidateMutation.mutateAsync({voteId: Number(voteId), candidateInfos: selectedTagline});
    SetSelectedPlaces([]);
    localStorage.removeItem('recoil-persist');
    navigate(`/votes/${voteInfo.id}`);
  };

  return (
    <div className={styles.container}>
      <VoteHeader title={voteInfo?.title} onBottomSlideOpen={() => setIsBTOpen(true)} />
      <MemoContent selectedPlaces={selectedPlaces} />

      <Button variant='CTAButton' isDisabled={selectedTagline.length === 0} onClick={handleAddCandidates}>
        {selectedTagline.length}개 후보 등록하기
      </Button>

      <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={<AddCandidate />} />
    </div>
  );
};

export default VoteMemo;
