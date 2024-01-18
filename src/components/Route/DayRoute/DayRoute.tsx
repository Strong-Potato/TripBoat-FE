import {useDisclosure} from '@chakra-ui/react';
import {AiOutlinePlus as PlusIcon} from 'react-icons/ai';

import styles from './DayRoute.module.scss';

import BottomSlide from '@/components/BottomSlide/BottomSlide';

import AddPlace from '../AddPlace/AddPlace';
import EmptyRoute from '../EmptyRoute/EmptyRoute';
import PlaceCard from '../PlaceCard/PlaceCard';

import {DayRouteProps} from '@/types/route';

function DayRoute({day, date, placeList, editMode, selectedPlaces, handlePlaceSelection}: DayRouteProps) {
  const {isOpen, onOpen, onClose} = useDisclosure();

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
          <div className={styles.placeListContainer}>
            {placeList.length ? (
              placeList.map((place, index) => (
                <PlaceCard
                  key={index}
                  index={place.Order + 1}
                  name={place.place.title}
                  category={place.place.category}
                  address={`${place.place.address}, ${place.place.addressDetail}`}
                  editMode={editMode}
                  selectedPlaces={selectedPlaces}
                  onSelect={handlePlaceSelection}
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
