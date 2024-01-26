import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import {useState} from 'react';

import styles from './RegistrationModal.module.scss';
import {usePostNewVote} from '@/hooks/Votes/vote';
import CustomToast from '@/components/CustomToast/CustomToast';

// 공백 제외 1글자 조건문 추가
interface RegistrationMoalProps {
  spaceId: number;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({spaceId, isOpen, onClose}: RegistrationMoalProps) => {
  const [voteName, setVoteName] = useState<string>('');

  const toast = CustomToast();

  const postNewVote = usePostNewVote();

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 15) {
      setVoteName(inputValue);
    }
  };

  const handleCreateVote = async () => {
    const res = postNewVote.mutateAsync({spaceId, title: voteName});
    console.log('response', res);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='addVote'>
      <ModalOverlay />
      <ModalContent px='24px' py='40px' borderRadius='16px' alignSelf='center' boxSizing='border-box'>
        <ModalCloseButton fontSize='2rem' mt='16px' mr='20px' />

        <ModalBody p='0'>
          <p className={styles.title}>투표 제목을 정해주세요</p>

          <FormControl justifyContent={'center'}>
            <Input
              onChange={(e) => handleSetValue(e)}
              value={voteName}
              borderColor='neutral.800'
              focusBorderColor='primary.300'
              variant='flushed'
              placeholder=' 숙소 정하자, 카페 정하자'
              fontSize='subTitle'
              mt='32px'
            />
            <FormLabel
              display='flex'
              justifyContent='flex-end'
              fontSize='captionMedium'
              fontWeight='captionMedium'
              mt='4px'
              mr='-1px'
            >
              {voteName.length}/15자
            </FormLabel>
          </FormControl>
          <Button
            type='submit'
            onClick={() => {
              handleCreateVote();
              toast('투표가 생성되었습니다.');
              onClose();
            }}
            variant='blueButton'
            w='100%'
            h='48px'
            mt='24px'
            isDisabled={voteName.length === 0}
          >
            완료
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegistrationModal;
