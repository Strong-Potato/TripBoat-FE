import {useDisclosure} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {HiOutlineTrash as DeleteIcon} from 'react-icons/hi';
import {RiArrowUpDownFill as MoveIcon} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';

import styles from './RouteTabPanel.module.scss';

import BottomSlideLeft from '@/components/BottomSlide/BottomSlideLeft';

import ZoomInIcon from '@/assets/icons/zoomIn.svg?react';
import {handlePlaceSelection, transformSelectedPlaces} from '@/utils/formatJourneyData';
import {getSpaceId} from '@/utils/getSpaceId';

import DayMove from '../DayMove/DayMove';
import DayNavigationBar from '../DayNavigationBar/DayNavigationBar';
import DayRoute from '../DayRoute/DayRoute';
import DeletePlacesModal from '../DeletePlacesModal/DeletePlacesModal';
import EmptyDate from '../EmptyDate/EmptyDate';
import MapInTrip from '../MapInTrip/MapInTrip';

import {DateItem, Journey, MapInTripProps, SelectedPlace} from '@/types/route';

function RouteTabPanel({mapRef, center, journeysData}: MapInTripProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlace[]>([]);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose} = useDisclosure();

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);

    // TODO: 완료 버튼 눌렀을 때 처리
  };

  useEffect(() => {
    console.log(transformSelectedPlaces(selectedPlaces));
  }, [selectedPlaces]);

  const navigate = useNavigate();
  const spaceId = getSpaceId();

  if (!journeysData.journeys || journeysData.journeys.length === 0) {
    return <EmptyDate />;
  }

  const dateList: DateItem[] = journeysData.journeys.map((journey: Journey) => ({
    date: journey.date,
  }));

  return (
    <div className={styles.panelContainer}>
      <div className={styles.mapContainer}>
        <MapInTrip mapRef={mapRef} center={center} journeysData={journeysData} />
        <button className={styles.zoomInButton} onClick={() => navigate(`/trip/${spaceId}/map`)}>
          <ZoomInIcon />
        </button>
      </div>
      <div className={styles.routeContainer}>
        <DayNavigationBar dateList={dateList} editMode={isEditMode} handleEditMode={handleEditMode} />
        <div className={styles.journeysContainer}>
          {journeysData.journeys &&
            journeysData.journeys.map((journey: Journey, index: number) => (
              <DayRoute
                key={journey.journeyId}
                day={index + 1}
                date={journey.date}
                journeyId={journey.journeyId}
                placeList={journey.places}
                editMode={isEditMode}
                selectedPlaces={selectedPlaces}
                setSelectedPlaces={setSelectedPlaces}
                handlePlaceSelection={handlePlaceSelection}
              />
            ))}
        </div>
      </div>
      {isEditMode && (
        <div className={selectedPlaces.length > 0 ? styles.activeBottomButtonContainer : styles.bottomButtonContainer}>
          <button onClick={onOpen}>
            <MoveIcon size='2rem' color='#FFFFFF' />
            <span>날짜 이동</span>
          </button>
          <button onClick={selectedPlaces.length > 0 ? onModalOpen : onModalClose}>
            <DeleteIcon size='2rem' color='#FFFFFF' />
            <span>삭제하기</span>
          </button>
        </div>
      )}
      <BottomSlideLeft
        isOpen={selectedPlaces.length > 0 && isOpen}
        onClose={onClose}
        children={
          <DayMove
            journeysData={journeysData}
            selectedPlaces={selectedPlaces}
            onClose={onClose}
            setIsEditMode={setIsEditMode}
          />
        }
      />
      <DeletePlacesModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        setIsEditMode={setIsEditMode}
        placeList={transformSelectedPlaces(selectedPlaces)}
      />
    </div>
  );
}

export default RouteTabPanel;
