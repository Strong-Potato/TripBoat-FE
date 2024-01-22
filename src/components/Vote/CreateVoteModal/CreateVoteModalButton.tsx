import {Button, Icon} from '@chakra-ui/react';
import {useSetRecoilState} from 'recoil';

import VoteIcon from '@/assets/voteIcons/ic_vote.svg?react';
import {isCreateModalOpenState} from '@/recoil/vote/createVoteTitleModal';

const CreateVoteModalButton = () => {
  const setIsCreateModalOpen = useSetRecoilState(isCreateModalOpenState);
  return (
    <Button variant='voteButton' onClick={() => setIsCreateModalOpen(true)}>
      <Icon as={VoteIcon} fontSize='2rem' mr='4px' />
      투표 만들기
    </Button>
  );
};

export default CreateVoteModalButton;
