import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { RiMap2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import styles from "./VoteHeader.module.scss";

import { VoteHeaderProps } from "@/types/vote";

const VoteHeader = ({
  onBottomSlideOpen,
  title,
  isNoCandidate,
}: VoteHeaderProps) => {
  const navigate = useNavigate();

  const memoPage = true;

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <button
          onClick={() => navigate(-1)}
          className={styles.leftSide__backIcon}
          disabled={isNoCandidate}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <p className={styles.leftSide__title}>{title}</p>
      </div>
      <div className={styles.rightIconBox}>
        {memoPage ? (
          <button>
            <AiOutlinePlus />
          </button>
        ) : (
          <>
            <button>
              <RiMap2Line />
            </button>
            <button onClick={onBottomSlideOpen}>
              <BsThreeDots />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VoteHeader;
