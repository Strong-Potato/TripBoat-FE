import { BsThreeDots } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import styles from "./VoteHeader.module.scss";

import useGoBack from "@/hooks/useGoBack";

const VoteHeader = () => {
  const goBack = useGoBack();
  const voteTitle = "카페 어디로 갈래?";

  //상태에 따른 아이콘 disabled
  // 또는 없애기

  return (
    <div className={styles.container}>
      <button onClick={goBack} className={styles.leftBackIcon}>
        <MdOutlineArrowBackIosNew />
      </button>
      <p className={styles.title}>{voteTitle}</p>

      <div className={styles.iconBox}>
        <button>
          <FaRegMap />
        </button>

        <button>
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
};

export default VoteHeader;
