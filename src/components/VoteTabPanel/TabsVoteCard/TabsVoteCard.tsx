import { Avatar, AvatarGroup } from "@chakra-ui/react";

import styles from "./TabsVoteCard.module.scss";

import SmileIcon from "@/assets/voteIcons/avatar_smile.svg?react";

const TabsVoteCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__titleBox}>
        <Avatar boxSize="3.2rem" />
        <p className={styles.container__titleBox__title}>카페 어디갈래?</p>
      </div>
      <div className={styles.container__stateBox}>
        <div>체크 확정하기</div>

        <AvatarGroup variant="tabsVoteCard" max={3} spacing="0">
          <Avatar name="aa" variant="tabsVoteCard" />
          <Avatar bg="pink" icon={<SmileIcon />} variant="tabsVoteCard" />
          <Avatar variant="tabsVoteCard" />
          <Avatar variant="tabsVoteCard" />
        </AvatarGroup>
      </div>
    </div>
  );
};

export default TabsVoteCard;
