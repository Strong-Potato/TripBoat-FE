import { BiTask } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import styles from "./MeatballBottomSlide.module.scss";

const MeatballBottomSlide = () => {
  return (
    <div className={styles.container}>
      <button>
        <div className={styles.container__iconWrapper}>
          <FaRegHeart fontSize="1.6rem" />
        </div>
        <p>찜하기</p>
      </button>
      <button>
        <div className={styles.container__iconWrapper}>
          <BiTask fontSize="1.6rem" />
        </div>
        <p>후보에 추가</p>
      </button>
      <button>
        <div className={styles.container__iconWrapper}>
          <CiEdit fontSize="1.6rem" />
        </div>
        <p>리뷰 쓰기</p>
      </button>
      <button>
        <div className={styles.container__iconWrapper}>
          <IoShareSocialOutline fontSize="1.6rem" />
        </div>
        <p>공유하기</p>
      </button>
    </div>
  );
};

export default MeatballBottomSlide;
