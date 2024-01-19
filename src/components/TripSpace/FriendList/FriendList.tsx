import { Avatar } from "@chakra-ui/react";

import styles from "./FriendList.module.scss";

import { FriendListProps } from "@/types/friendList";
function FriendList({ users }: FriendListProps) {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>
        여행을 함께하는 친구 {users.length}명
      </p>
      <div className={styles.container__wrapper}>
        {users.map((user, index) => (
          <div key={index} className={styles.container__wrapper__user}>
            <Avatar w="4rem" h="4rem" name={user.name} src={user.src} />
            <p className={styles.container__wrapper__user__name}>{user.name}</p>
          </div>
        ))}
        {/* 실제 api 연동
        {users.map((user, index) => (
          <div key={index} className={styles.container__wrapper__user}>
            <Avatar w="4rem" h="4rem" name={user.nickname} src={user.profile} />
            <p className={styles.container__wrapper__user__name}>{user.nickname}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default FriendList;
