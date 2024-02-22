import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import {format} from 'date-fns';
import {useNavigate, useParams} from 'react-router-dom';

import {usePutDates} from '@/hooks/Spaces/space';

import {ReduceDatesModalProps} from '@/types/modal';

function ReduceDatesModal({isOpen, onClose, startDate, endDate}: ReduceDatesModalProps) {
  const {id} = useParams();
  const putDates = usePutDates();
  const navigate = useNavigate();

  const updateDates = async () => {
    await putDates.mutateAsync({
      spaceId: Number(id),
      startDate: format(startDate!, 'yyyy-MM-dd'),
      endDate: format(endDate!, 'yyyy-MM-dd'),
    });
    navigate(`/trip/${id}`, {state: {id: id}});
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
          줄어든 여행일 만큼 일정이 삭제됩니다.
        </ModalHeader>
        <ModalBody
          fontSize='tabLabel'
          fontWeight='tabLabel'
          lineHeight='tabLabel'
          color='neutral.400'
          p='0'
          textAlign='center'
        >
          여행일을 더 짧게 변경하실 경우
          <br />
          변경 날짜에 맞춰 후반 일정이 삭제됩니다.
        </ModalBody>
        <ModalFooter display='flex' gap='8rem' p='0' mt='1.2rem'>
          <Button
            onClick={onClose}
            variant='none'
            fontSize='button'
            fontWeight='button'
            lineHeight='button'
            color='neutral.400'
          >
            취소
          </Button>
          <Button
            onClick={updateDates}
            variant='none'
            fontSize='button'
            fontWeight='button'
            lineHeight='button'
            color='primary.400'
          >
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ReduceDatesModal;
