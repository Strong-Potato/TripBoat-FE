import {useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {IoMdMenu as MoveIcon} from 'react-icons/io';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';
import {RiCheckboxBlankCircleLine as UnselectedIcon} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';

import styles from '../PlaceCard/PlaceCard.module.scss';

import {Item} from '@/types/route';
import {DraggablePlaceCardProps} from '@/types/route';

function PlaceCard({
  id,
  order,
  name,
  category,
  address,
  contentTypeId,
  placeId,
  editMode,
  onSelect,
  moveCard,
  findCard,
}: DraggablePlaceCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const originalIndex = findCard(id).index;
  const navigate = useNavigate();

  const [, drag] = useDrag(
    () => ({
      type: 'CARD',
      item: {id, originalIndex},
      canDrag: () => !isChecked && editMode,
      end: (item, monitor) => {
        const {id: droppedId, originalIndex} = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard, editMode, isChecked],
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'CARD',
      hover({id: draggedId}: Item) {
        if (draggedId !== id) {
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
    <div ref={(node) => drag(drop(node))} className={styles.cardContainer}>
      <button onClick={handleSelect}>
        {editMode &&
          (isChecked ? (
            <SelectedIcon size='2.4rem' color='#2388FF' />
          ) : (
            <UnselectedIcon size='2.4rem' color='#CDCFD0' />
          ))}
      </button>

      <div className={styles.placeInformationContainer} onClick={() => navigate(`/detail/${placeId} ${contentTypeId}`)}>
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
      <div className='MoveButton'>{editMode && <MoveIcon size='2.4rem' color='#CDCFD0' />}</div>
    </div>
  );
}

export default PlaceCard;
