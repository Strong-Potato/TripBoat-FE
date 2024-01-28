import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';

import {useDeletePlaces} from '@/hooks/Spaces/space';

import {DeletePlacesModalProps} from '@/types/modal';

function DeletePlacesModal({isOpen, onClose, setIsEditMode, placeList}: DeletePlacesModalProps) {
  const {id} = useParams();
  const deletePlaces = useDeletePlaces();

  const deleteJourneys = async () => {
    await deletePlaces.mutateAsync({spaceId: Number(id), places: placeList});

    // FIXME: 페이지에 잔류하면서 보여지는 데이터 갱신
    window.location.reload();
    onClose();
    setIsEditMode(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg' isCentered>
      <ModalOverlay />
      <ModalContent
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='1.2rem'
        borderRadius='16px'
        bg='neutral.0'
        p='32px'
      >
        <ModalHeader fontSize='subTitle' fontWeight='subTitle' lineHeight='subTitle' color='neutral.900' p='0'>
          선택된 항목을 삭제하시겠습니까?
        </ModalHeader>
        <ModalBody fontSize='tabLabel' fontWeight='tabLabel' lineHeight='tabLabel' color='neutral.400' p='0'>
          <p></p>
        </ModalBody>
        <ModalFooter display='flex' gap='8rem' p='0' mt='1.2rem'>
          <Button
            variant='none'
            fontSize='button'
            fontWeight='button'
            lineHeight='button'
            color='neutral.400'
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            onClick={deleteJourneys}
            variant='none'
            fontSize='button'
            fontWeight='button'
            lineHeight='button'
            color='primary.400'
          >
            삭제하기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeletePlacesModal;
