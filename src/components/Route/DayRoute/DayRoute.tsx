import {useDisclosure} from '@chakra-ui/react';
import update from 'immutability-helper';
import {useCallback, useEffect, useState} from 'react';
import {useDrop} from 'react-dnd';
import {AiOutlinePlus as PlusIcon} from 'react-icons/ai';

import styles from './DayRoute.module.scss';

import BottomSlide from '@/components/BottomSlide/BottomSlide';

import AddPlace from '../AddPlace/AddPlace';
import DraggablePlaceCard from '../DraggablePlaceCard/DraggablePlaceCard';
import EmptyRoute from '../EmptyRoute/EmptyRoute';

import {DayRouteProps} from '@/types/route';

function DayRoute({day, date, placeList, editMode, selectedPlaces, handlePlaceSelection}: DayRouteProps) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [placeCards, setPlaceCards] = useState(placeList);

  const findCard = useCallback(
    (id: number) => {
      const card = placeCards.filter((item) => item.id == id)[0];
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

  useEffect(() => {
    console.log(placeList);
  }, [placeList]);

  return (
    <>
      <div className={styles.dayRouteContainer}>
        <header className={styles.dayHeader}>
          <div className={styles.dayContainer}>
            <span className={styles.dayTitle}>DAY {day}</span>
            <span className={styles.dayDate}>{date}</span>
          </div>
          <button className={styles.editButton} onClick={onOpen}>
            <PlusIcon size='2.4rem' />
          </button>
        </header>
        <div>
          <button className={styles.optimizationButton}>루트 최적화</button>
          <div ref={drop} className={styles.placeListContainer}>
            {placeCards.length ? (
              placeCards.map((place) => (
                <DraggablePlaceCard
                  key={place.id}
                  id={place.id}
                  order={place.order}
                  name={place.place.title}
                  category={place.place.category}
                  address={`${place.place.address} ${place.place.addressDetail}`}
                  contentTypeId={place.place.contentTypeId}
                  placeId={place.place.placeId}
                  editMode={editMode}
                  selectedPlaces={selectedPlaces}
                  onSelect={handlePlaceSelection}
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
      <BottomSlide isOpen={isOpen} onClose={onClose} children={<AddPlace />} />
    </>
  );
}

export default DayRoute;
