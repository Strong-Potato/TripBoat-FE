import { BsThreeDots } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import styles from "./VoteDetailsHeader.module.scss";

const VoteDetailsHeader = () => {
  const voteTitle = "카페 어디로 갈래?";

  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <MdOutlineArrowBackIosNew />
        <p>{voteTitle}</p>
      </div>
      <div className={styles.iconBox}>
        <FaRegMap />
        <BsThreeDots />
      </div>
    </div>
  );
};

export default VoteDetailsHeader;
