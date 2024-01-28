import {Avatar, AvatarGroup, Icon} from '@chakra-ui/react';
import {GoDotFill} from 'react-icons/go';
import {IoMdCheckmark} from 'react-icons/io';
import {Link, useParams} from 'react-router-dom';

import styles from './TabsVoteCard.module.scss';

import {VoteListInfo} from '@/types/vote';

const TabsVoteCard = ({data}: {data: VoteListInfo}) => {
  const {id: tripId} = useParams();
  const users = data.votedMemberProfiles;

  return (
    <Link to={`/trip/${tripId}/votes/${data.voteId}`} className={styles.container}>
      <div className={styles.titleBox}>
        <Avatar boxSize='3.2rem' src={data.createdBy.profileImageUrl} />
        <p className={styles.titleBox__title}>{data.title}</p>
      </div>
      <div className={styles.stateBox}>
        <div className={`${styles.stateBox__state} ${data.voteStatus === '결정완료' ? styles.gray : styles.blue}`}>
          <Icon as={data.voteStatus === '결정완료' ? IoMdCheckmark : GoDotFill} boxSize='1.6rem' />
          <p>{data.voteStatus}</p>
        </div>

        <AvatarGroup variant='tabsVoteCard' max={3} spacing='0'>
          {users?.map((user) => (
            <Avatar name={user.nickName} src={user.profileImageUrl} variant='tabsVoteCard' key={user.id} />
          ))}
        </AvatarGroup>
      </div>
    </Link>
  );
};

export default TabsVoteCard;
