import {useState} from 'react';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';
import {useParams} from 'react-router-dom';

import styles from './DayMove.module.scss';

import {useDeletePlaces, usePostPlaces} from '@/hooks/Spaces/space';

import {transformSelectedPlaces} from '@/utils/formatJourneyData';

import {DayMoveProps} from '@/types/route';

function DayMove({journeysData, selectedPlaces, onClose, setIsEditMode}: DayMoveProps) {
  const days = journeysData?.journeys?.length;
  const [selectedDays, setSelectedDays] = useState(Array(days).fill(false));
  const {id} = useParams();
  const deletePlaces = useDeletePlaces();
  const postPlaces = usePostPlaces();

  const handleSelect = async (index: number) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[index] = !updatedSelectedDays[index];
    setSelectedDays(updatedSelectedDays);

    // TODO: 선택된 장소 카드 선택한 날짜 동선으로 이동
    const journeysId = journeysData?.journeys?.[index]?.journeyId;
    console.log('지우겠다', transformSelectedPlaces(selectedPlaces));
    console.log('추가하겠다.', {
      journeyId: journeysId,
      placeIds: selectedPlaces.flatMap((place) => place.placeId),
    });

    await deletePlaces.mutateAsync({spaceId: Number(id), places: transformSelectedPlaces(selectedPlaces)});
    await postPlaces.mutateAsync({
      spaceId: Number(id),
      journeyId: journeysId,
      placeIds: selectedPlaces.flatMap((place) => place.placeId),
    });

    setTimeout(() => {
      onClose();
      setIsEditMode(false);
    }, 300);
  };

  return (
    <div className={styles.DayMoveContainer}>
      <header>
        <h1>날짜 이동</h1>
      </header>
      <div>
        {Array.from({length: days}, (_, index) => (
          <div className={styles.dayContainer}>
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
