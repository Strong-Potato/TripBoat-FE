import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {usePostNewVote} from '@/hooks/Votes/vote';

import {isCreateModalOpenState} from '@/recoil/vote/createVoteTitleModal';

const CreateVoteModal = ({isEditMode}: {isEditMode: boolean}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useRecoilState(isCreateModalOpenState);
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/')[2]);
  const [inputValue, setInputValue] = useState('');
  const postNewVoteMutation = usePostNewVote();
  // const navigate = useNavigate();

  const newClose = () => {
    setInputValue('');
    setIsCreateModalOpen(true);
  };

  const handleCreateVote = (inputValue: string) => {
    const res = postNewVoteMutation.mutate({spaceId, title: inputValue});
    newClose();

    // navigate(`/vote/${data.id}`)
  };

  return (
    <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}>
      <ModalOverlay />
      <ModalContent
        px='20px'
        py='40px'
        mx='24px'
        maxWidth='100%'
        borderRadius='16px'
        alignSelf='center'
        boxSizing='border-box'
      >
        <ModalHeader fontWeight='titleSmall' fontSize='titleSmall' textAlign='center' p='0' mb='32px'>
          투표 제목을 정해주세요
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody p='0'>
          <FormControl justifyContent={'center'}>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              maxLength={15}
              borderColor='neutral.800'
              focusBorderColor='primary.300'
              variant='flushed'
              placeholder=' 숙소 정하자, 카페 정하자'
              fontSize='subTitle'
            />
            <FormLabel
              display='flex'
              justifyContent='flex-end'
              fontSize='captionMedium'
              fontWeight='captionMedium'
              mt='4px'
              mr='-1px'
            >
              {inputValue.length}/15자
            </FormLabel>
          </FormControl>
        </ModalBody>

        <ModalFooter p='0' mt='24px'>
          <Button
            type='submit'
            onClick={() => handleCreateVote(inputValue)}
            variant='blueButton'
            w='100%'
            h='48px'
            isDisabled={inputValue.length === 0}
          >
            완료
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateVoteModal;
