import {Button} from '@chakra-ui/react';
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
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

const VoteMemo = () => {
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/')[2]);
  const voteId = Number(location.pathname.split('/')[4]);

  const {data: voteInfoData} = useGetVotesInfo(voteId);
  const voteInfo = voteInfoData?.data as VoteInfo;
  const postCandidateMutation = usePostNewCandidate();
  const navigate = useNavigate();
  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [selectedTagline, setSelectedTagline] = useRecoilState(selectedTaglineState);
  const [selectedPlaces, SetSelectedPlaces] = useRecoilState(selectedPlaceState);
  const {toggleItemInNewArray} = useGetSelectedArray(selectedTaglineState);

  const getExistingTaglines = localStorage.getItem('recoil-persist');
  const existingTaglines: TaglineType[] = getExistingTaglines && JSON.parse(getExistingTaglines).selectedTaglineState;

  const setInitializeTagline = () => {
    console.log('새로 세팅');
    setSelectedTagline(selectedPlaces?.map((place) => ({id: place.id, placeTypeId: place.contentTypeId, tagline: ''})));
  };

  const setExistingTagline = () => {
    console.log('추가 세팅');
    const nonExistPlaceIds = selectedPlaces
      .map((place) => place.id)
      .filter((id) => !existingTaglines.some((tagline) => tagline.id === id));

    nonExistPlaceIds
      .map((id) => ({
        id,
        placeTypeId: selectedPlaces.find((place) => place.id === id)?.contentTypeId || 0,
        tagline: '',
      }))
      .forEach((tagline) => toggleItemInNewArray(tagline));
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
    const candidateInfos = selectedTagline.map(({id, ...rest}) => ({
      placeId: id,
      ...rest,
    }));
    await postCandidateMutation.mutateAsync({voteId: Number(voteId), candidateInfos: candidateInfos});
    SetSelectedPlaces([]);
    localStorage.removeItem('recoil-persist');
    navigate(`/trip/${spaceId}/votes/${voteInfo.id}`);
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
