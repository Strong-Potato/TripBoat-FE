import { Avatar } from "@chakra-ui/react";

import styles from "./VotedUserList.module.scss";

const VotedUserList = () => {
  const voteUsers = ["Id123", "Id234", "Id345"];

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>투표한 친구</p>
      <div className={styles.container__list}>
        {voteUsers.map((name, index) => (
          <div key={index} className={styles.userBox}>
            <Avatar w="4rem" h="4rem" name={name} />
            <p className={styles.userBox__name}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotedUserList;
