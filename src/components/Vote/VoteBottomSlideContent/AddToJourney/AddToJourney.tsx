import {Button} from '@chakra-ui/react';
import {useState} from 'react';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import styles from './AddToJourney.module.scss';

import {usePostPlaces} from '@/hooks/Spaces/space';

import CustomToast from '@/components/CustomToast/CustomToast';

import {journeyState} from '@/recoil/vote/addToJourney';
import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
const AddToJourney = ({placeId}: {placeId: number}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/')[2]);
  const journeyAtom = useRecoilValue(journeyState(spaceId));
  const setIsBTOpen = useSetRecoilState(isBottomSlideOpenState);
  const days = journeyAtom.journeys.length;
  const [selectedDays, setSelectedDays] = useState(Array(days).fill(false));
  const {mutateAsync: addToJourneyMutateAsync} = usePostPlaces();
  const [journeyId, SetJourneyId] = useState(journeyAtom.journeys?.[1]?.journeyId);
  const showToast = CustomToast();

  const handleSelect = (index: number) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[index] = !updatedSelectedDays[index];
    setSelectedDays(updatedSelectedDays);

    const newJourneyId = journeyAtom.journeys?.[index]?.journeyId;
    console.log('newJourneyId', newJourneyId);
    SetJourneyId(newJourneyId);
  };

  //중복 선택 불가 추가
  const handleAddToJourney = async () => {
    const res = await addToJourneyMutateAsync({spaceId, journeyId, placeIds: [placeId]});
    setIsBTOpen(false);
    console.log('일정추가 res', res);
    showToast('일정에 추가가 완료되었습니다.', true, '바로가기', () => navigate(`/trip/${spaceId}`));
  };

  return (
    <div className={styles.container}>
      <div>
        {Array.from({length: days}, (_, index) => (
          <div key={`day${index}`} className={styles.dayBox}>
            <p key={index}>DAY {index + 1}</p>
            <button onClick={() => handleSelect(index)}>
              {selectedDays[index] ? (
                <SelectedIcon size='2.4rem' color='#2388FF' />
              ) : (
                <SelectedIcon size='2.4rem' color='#E3E5E5' />
              )}
            </button>
          </div>
        ))}
      </div>
      <Button variant='CTAButton' onClick={handleAddToJourney}>
        일정에 추가하기
      </Button>
    </div>
  );
};

export default AddToJourney;
