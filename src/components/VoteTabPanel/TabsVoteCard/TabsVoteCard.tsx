import { Avatar, AvatarGroup, Icon } from "@chakra-ui/react";
import { useState } from "react";
// import CheckedIcon from "@/assets/voteIcons/vote_card_check.svg?react";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

import styles from "./TabsVoteCard.module.scss";

import SmileIcon from "@/assets/voteIcons/avatar_smile.svg?react";

const TabsVoteCard = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //e.stopPropagation();
    setIsConfirmed(!isConfirmed);
  };

  //카드 전체 클릭vs결정클릭이 부딪힘, 제목에만 Link 넣을지 보기
  return (
    <Link to="/vote" className={styles.container}>
      <div className={styles.container__titleBox}>
        <Avatar boxSize="3.2rem" />
        <p className={styles.container__titleBox__title}>카페 어디갈래?</p>
      </div>
      <div className={styles.container__stateBox}>
        <div className={styles.container__stateBox__state}>
          <Icon
            as={IoMdCheckmark}
            boxSize="2rem"
            color={isConfirmed ? "primary.300" : "neutral.300"}
          />
          <button onClick={handleClick}>
            {isConfirmed ? "결정완료" : "확정하기"}
          </button>
        </div>

        <AvatarGroup variant="tabsVoteCard" max={3} spacing="0">
          <Avatar name="aa" variant="tabsVoteCard" />
          <Avatar bg="pink" icon={<SmileIcon />} variant="tabsVoteCard" />
          <Avatar variant="tabsVoteCard" />
          <Avatar variant="tabsVoteCard" />
        </AvatarGroup>
      </div>
    </Link>
  );
};

export default TabsVoteCard;
