import {Avatar, AvatarGroup, Icon} from '@chakra-ui/react';
import {useState} from 'react';
import {IoMdCheckmark} from 'react-icons/io';
import {Link} from 'react-router-dom';

import styles from './TabsVoteCard.module.scss';

import {VoteListInfo} from '@/types/vote';

const TabsVoteCard = ({data}: {data: VoteListInfo}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  //나중에 투표state를 받아오면 뮤테이션으로 해야할 듯
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirmed(!isConfirmed);
  };

  const users = data.votedMemberProfiles;

  //카드 전체 클릭vs결정클릭이 부딪힘, 제목에만 Link 넣을지 보기
  return (
    <Link to={`/votes/${data.voteId}`} className={styles.container}>
      <div className={styles.container__titleBox}>
        <Avatar boxSize='3.2rem' src={data.ownerProfile.profile} />
        <p className={styles.container__titleBox__title}>{data.title}</p>
      </div>
      <div className={styles.container__stateBox}>
        <div className={styles.container__stateBox__state}>
          <Icon
            as={IoMdCheckmark}
            boxSize='2rem'
            color={data.voteStatus === '결정완료' ? 'primary.300' : 'neutral.300'}
          />
          <button onClick={handleClick}>
            {/* {isConfirmed ? "결정완료" : "확정하기"} */}
            {data.voteStatus}
          </button>
        </div>

        <AvatarGroup variant='tabsVoteCard' max={3} spacing='0'>
          {users.map((user) => (
            <Avatar name={String(user.id)} variant='tabsVoteCard' key={user.id} />
          ))}
        </AvatarGroup>
      </div>
    </Link>
  );
};

export default TabsVoteCard;
