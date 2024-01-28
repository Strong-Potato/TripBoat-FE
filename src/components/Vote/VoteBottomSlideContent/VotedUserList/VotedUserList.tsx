import {Avatar} from '@chakra-ui/react';

import styles from './VotedUserList.module.scss';

import {UserInfo} from '@/types/vote';

const VotedUserList = ({votedMembers}: {votedMembers: UserInfo[]}) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>투표한 친구</p>
      <div className={styles.container__list}>
        {votedMembers.map((member, index) => (
          <div key={index} className={styles.userBox}>
            <Avatar w='4rem' h='4rem' name={member.nickName} src={member.profileImageUrl} />
            <p className={styles.userBox__name}>{member.nickName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotedUserList;
