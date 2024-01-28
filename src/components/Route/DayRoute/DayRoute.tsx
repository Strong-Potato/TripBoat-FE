import {useDisclosure} from '@chakra-ui/react';
import update from 'immutability-helper';
import {useCallback, useEffect, useState} from 'react';
import {useDrop} from 'react-dnd';
import {AiOutlinePlus as PlusIcon} from 'react-icons/ai';
import {useSetRecoilState} from 'recoil';

import styles from './DayRoute.module.scss';

import BottomSlide from '@/components/BottomSlide/BottomSlide';

import {editedPlacesState} from '@/recoil/spaces/selectPlace';
import {setRouteDate} from '@/utils/formatDate';
import {findShortestPath} from '@/utils/optimizePlace';

import AddPlace from '../AddPlace/AddPlace';
import DraggablePlaceCard from '../DraggablePlaceCard/DraggablePlaceCard';
import EmptyRoute from '../EmptyRoute/EmptyRoute';

import {DayRouteProps} from '@/types/route';

function DayRoute({
  day,
  date,
  placeList,
  editMode,
  editPlaces,
  journeyId,
  selectedPlaces,
  setSelectedPlaces,
  handlePlaceSelection,
}: DayRouteProps) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [placeCards, setPlaceCards] = useState(placeList);
  const [isOptimize, setIsOptimize] = useState(false);
  const setEditedPlaces = useSetRecoilState(editedPlacesState);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOptimize(true);
  };

  const findCard = useCallback(
    (id: number) => {
      const card = placeCards.filter((item) => item.selectedId == id)[0];
      return {
        card,
        index: placeCards.indexOf(card),
      };
    },
    [placeCards],
  );

  const moveCard = useCallback(
    (id: number, atIndex: number) => {
      const {card, index} = findCard(id);
      setPlaceCards(
        update(placeCards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        }),
      );
    },
    [findCard, placeCards, setPlaceCards],
  );

  const [, drop] = useDrop(() => ({accept: 'CARD'}));

  const handleConfirmClick = () => {
    setPlaceCards(findShortestPath(placeCards));
    setIsOptimize(false);
    editPlaces(journeyId, findShortestPath(placeCards));
  };

  useEffect(() => {
    setEditedPlaces({journeyId: journeyId, placeCards: placeCards});
  }, [journeyId, placeCards]);

  return (
    <>
      <div className={styles.dayRouteContainer}>
        <header className={styles.dayHeader}>
          <div className={styles.dayContainer}>
            <span className={styles.dayTitle}>DAY {day}</span>
            <span className={styles.dayDate}>{setRouteDate(date)}</span>
          </div>
          <button onClick={onOpen}>
            <PlusIcon size='2.4rem' />
          </button>
        </header>
        <div>
          <button
            className={styles.optimizationButton}
            style={{
              color: placeCards.length > 2 ? '#2388FF' : '#979C9E',
              cursor: placeCards.length > 2 ? 'pointer' : 'default',
            }}
            onClick={() => setIsOptimize(placeCards.length > 2)}
          >
            루트 최적화
          </button>
          <div ref={drop} className={styles.placeListContainer}>
            {placeCards.length ? (
              placeCards.map((place, index) => (
                <DraggablePlaceCard
                  key={place.selectedId}
                  journeyId={journeyId}
                  selectedId={place.selectedId}
                  order={placeList[index].order}
                  name={place.place.title}
                  category={place.place.category}
                  address={`${place.place.address} ${place.place.addressDetail}`}
                  contentTypeId={place.place.contentTypeId}
                  placeId={place.place.placeId}
                  editMode={editMode}
                  selectedPlaces={selectedPlaces}
                  onSelect={(journeyId, selectedId, placeId) =>
                    handlePlaceSelection(journeyId, selectedId, placeId, selectedPlaces, setSelectedPlaces)
                  }
                  moveCard={moveCard}
                  findCard={findCard}
                />
              ))
            ) : (
              <EmptyRoute />
            )}
          </div>
        </div>
      </div>
      <BottomSlide isOpen={isOpen} onClose={onClose} children={<AddPlace journeyId={journeyId} day={day} />} />
      {isOptimize && (
        <div className={styles.background} onClick={handleBackgroundClick}>
          <div className={styles.container} onClick={handleModalClick}>
            <div className={styles.wrapperText}>
              <p className={styles.wrapperText__title}>일정이 최적화 됩니다</p>
              <p className={styles.wrapperText__body}>
                일정 내 첫 번째 장소를 기준으로
                <br />
                {day}일차 일정이 최소 동선으로 재정렬 됩니다.
              </p>
            </div>
            <div className={styles.wrapperButton}>
              <button
                className={styles.wrapperButton__cancel}
                onClick={() => {
                  setIsOptimize(false);
                }}
              >
                취소
              </button>
              <button className={styles.wrapperButton__accept} onClick={handleConfirmClick}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DayRoute;
