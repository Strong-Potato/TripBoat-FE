import {Avatar} from '@chakra-ui/react';

import styles from './FriendList.module.scss';

import {Member, Members} from '@/types/route';
function FriendList({members}: Members) {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>여행을 함께하는 친구 {members.length}명</p>
      <div className={styles.container__wrapper}>
        {members.map((user: Member) => (
          <div key={user.id} className={styles.container__wrapper__user}>
            <Avatar w='4rem' h='4rem' name={user.nickname} src={user.profile} />
            <p className={styles.container__wrapper__user__name}>{user.nickname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendList;
