import {useState} from 'react';

import styles from './PlaceList.module.scss';

import areas from '@/utils/areas.json';
import {translateCategoryName} from '@/utils/translateSearchData';

import {PlaceListProps} from '@/types/route';

function PlaceList({id, name, category, areaCode, placeImageUrl, rank, onSelect}: PlaceListProps) {
  const [isChecked, setIsChecked] = useState(false);
  const location = areas.filter((area) => area.areaCode === Number(areaCode))[0].name;

  const handleSelect = () => {
    setIsChecked(!isChecked);
    onSelect(name, id);
  };

  return (
    <button className={isChecked ? styles.clickedContainer : styles.container} onClick={handleSelect}>
      <div className={styles.imageContainer}>
        <img src={placeImageUrl} />
        <p>{rank + 1}위</p>
      </div>
      <div className={styles.textContainer}>
        <h1>{name}</h1>
        <h2>
          {translateCategoryName(category)} ・ {location}
        </h2>
      </div>
    </button>
  );
}

export default PlaceList;
