import {useDisclosure} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';

import styles from './EditTripSpace.module.scss';

import LeaveTripModal from '../LeaveTripModal/LeaveTripModal';

function EditTripSpace() {
  const navigate = useNavigate();
  const {isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose} = useDisclosure();
  const {id} = useParams();

  return (
    <>
      <div className={styles.ContentContainer}>
        <button onClick={() => navigate(`/trip/${id}/selectRegion`, {state: {id: id}})}>여행도시 편집</button>
        <button onClick={() => navigate(`/trip/${id}/selectDate`, {state: {id: id}})}>여행날짜 수정</button>
        <button onClick={onModalOpen}>여행 나가기</button>
      </div>
      <LeaveTripModal isOpen={isModalOpen} onClose={onModalClose} />
    </>
  );
}

export default EditTripSpace;
