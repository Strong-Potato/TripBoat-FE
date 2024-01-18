import {useState} from 'react';
import {IoMdMenu as MoveIcon} from 'react-icons/io';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';
import {RiCheckboxBlankCircleLine as UnselectedIcon} from 'react-icons/ri';

import styles from './PlaceCard.module.scss';

import {PlaceCardProps} from '@/types/route';

function PlaceCard({index, name, category, address, editMode, onSelect}: PlaceCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSelect = () => {
    setIsChecked(!isChecked);
    // TODO: place id 넘기기
    onSelect(name);
  };

  return (
    <div className={styles.cardContainer}>
      <button onClick={handleSelect}>
        {editMode &&
          (isChecked ? (
            <SelectedIcon size='2.4rem' color='#2388FF' />
          ) : (
            <UnselectedIcon size='2.4rem' color='#CDCFD0' />
          ))}
      </button>
      <div className={styles.placeInformationContainer}>
        {!editMode && <div className={styles.numberContainer}>{index}</div>}
        <div className={styles.placeContainer}>
          {editMode && <div className={styles.numberContainer}>{index}</div>}
          <div className={styles.placeInformation}>
            <h1>{name}</h1>
            <h2>{category}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
      <div>{editMode && <MoveIcon size='2.4rem' color='#CDCFD0' />}</div>
    </div>
  );
}

export default PlaceCard;
