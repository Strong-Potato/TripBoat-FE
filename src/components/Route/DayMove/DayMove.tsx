import {useState} from 'react';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';
import {useNavigate, useParams} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './DayMove.module.scss';

import {useDeletePlaces, usePostPlaces} from '@/hooks/Spaces/space';

import {transformSelectedPlaces} from '@/components/Route/RouteTabPanel/formatJourneyData';

import {activeTabIndexState} from '@/recoil/spaces/trip';

import {DayMoveProps} from '@/types/route';

function DayMove({journeysData, selectedPlaces, onClose, setIsEditMode}: DayMoveProps) {
  const days = journeysData?.journeys?.length;
  const [selectedDays, setSelectedDays] = useState(Array(days).fill(false));
  const {id} = useParams();
  const deletePlaces = useDeletePlaces();
  const postPlaces = usePostPlaces();
  const navigate = useNavigate();
  const setSelectedTabIndex = useSetRecoilState(activeTabIndexState);

  const handleSelect = async (index: number) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[index] = !updatedSelectedDays[index];
    setSelectedDays(updatedSelectedDays);

    const journeysId = journeysData?.journeys?.[index]?.journeyId;

    await deletePlaces.mutateAsync({spaceId: Number(id), places: transformSelectedPlaces(selectedPlaces)});
    await postPlaces.mutateAsync({
      spaceId: Number(id),
      journeyId: journeysId,
      placeIds: selectedPlaces.flatMap((place) => place.placeId),
    });

    // FIXME: 페이지에 잔류하면서 보여지는 데이터 갱신
    window.location.reload();
    onClose();
    setIsEditMode(false);
  };

  return (
    <div className={styles.DayMoveContainer}>
      <header>
        <h1>날짜 이동</h1>
      </header>
      <div>
        {Array.from({length: days}, (_, index) => (
          <div key={`day${index}`} className={styles.dayContainer}>
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
    </div>
  );
}

export default DayMove;
