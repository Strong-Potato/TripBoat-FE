import { BsThreeDots } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import styles from "./VoteDetailsHeader.module.scss";

const VoteDetailsHeader = () => {
  const voteTitle = "카페 어디로 갈래?";

  //상태에 따른 아이콘 disabled
  // 또는 없애기

  return (
    <div className={styles.container}>
      <div className={styles.leftBackIcon}>
        <MdOutlineArrowBackIosNew />
      </div>
      <p className={styles.title}>{voteTitle}</p>

      <div className={styles.iconBox}>
        <FaRegMap />
        <BsThreeDots />
      </div>
    </div>
  );
};

export default VoteDetailsHeader;
