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
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {useEditVoteTitle, usePostNewVote} from '@/hooks/Votes/vote';

import {isCreateModalOpenState} from '@/recoil/vote/createVoteTitleModal';

import {CreateVoteModalProps} from '@/types/vote';

const CreateVoteModal = ({isEditMode, existingTitle}: CreateVoteModalProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useRecoilState(isCreateModalOpenState);
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/')[2]);
  const voteId = Number(location.pathname.split('/')[4]);

  const [inputValue, setInputValue] = useState('');
  const {mutateAsync: postNewVoteMutateAsync} = usePostNewVote();
  const {mutateAsync: editTitleMutateAsync} = useEditVoteTitle();
  const navigate = useNavigate();

  useEffect(() => {
    if (existingTitle) {
      setInputValue(existingTitle);
    }
  }, [existingTitle]);

  const newClose = () => {
    existingTitle ? setInputValue(existingTitle) : setInputValue('');
    setIsCreateModalOpen(false);
  };

  const handleCreateVote = async (inputValue: string) => {
    const res = await postNewVoteMutateAsync({spaceId, title: inputValue});
    newClose();
    navigate(`/trip/${spaceId}${res.data}`);
  };

  const handleEditVoteTitle = async (inputValue: string) => {
    await editTitleMutateAsync({voteId, spaceId, title: inputValue});
    setIsCreateModalOpen(false);
  };

  return (
    <Modal isOpen={isCreateModalOpen} onClose={newClose}>
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
              value={inputValue}
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
            onClick={() => {
              isEditMode ? handleEditVoteTitle(inputValue) : handleCreateVote(inputValue);
            }}
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
