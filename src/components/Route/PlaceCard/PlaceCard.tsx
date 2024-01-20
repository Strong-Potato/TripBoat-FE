import {useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {IoMdMenu as MoveIcon} from 'react-icons/io';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';
import {RiCheckboxBlankCircleLine as UnselectedIcon} from 'react-icons/ri';

import styles from './PlaceCard.module.scss';

import {PlaceCardProps} from '@/types/route';

function PlaceCard({id, order, name, category, address, editMode, onSelect, moveCard, findCard}: PlaceCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const originalIndex = findCard(id).index;

  const [{isDragging}, dragRef] = useDrag(
    () => ({
      type: 'CARD',
      item: {id, originalIndex},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [originalIndex],
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: 'CARD',
      hover: (item: {id: number}) => {
        const {id: draggedId} = item;
        if (draggedId != id) {
          const {index: overIndex} = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard],
  );

  const handleSelect = () => {
    setIsChecked(!isChecked);
    // TODO: place id 넘기기
    onSelect(name);
  };

  return (
    <div ref={(node) => dragRef(dropRef(node))} className={styles.cardContainer}>
      <button onClick={handleSelect}>
        {editMode &&
          (isChecked ? (
            <SelectedIcon size='2.4rem' color='#2388FF' />
          ) : (
            <UnselectedIcon size='2.4rem' color='#CDCFD0' />
          ))}
      </button>
      <div className={styles.placeInformationContainer}>
        {!editMode && <div className={styles.numberContainer}>{order}</div>}
        <div className={styles.placeContainer}>
          {editMode && <div className={styles.numberContainer}>{order}</div>}
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
