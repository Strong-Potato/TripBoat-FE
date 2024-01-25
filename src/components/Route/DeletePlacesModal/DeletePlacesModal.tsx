import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react';

import {DeletePlacesModalProps} from '@/types/modal';

function DeletePlacesModal({isOpen, onClose, placeList}: DeletePlacesModalProps) {
  const deletePlaces = () => {
    console.log('삭제', placeList);
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
            onClick={deletePlaces}
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
