import { FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";

import styles from "./Title.module.scss";

import { MainTitleProps } from "@/types/detail";

function Title({ openToast }: MainTitleProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__header}>롯데시티 호텔</h2>
      <p className={styles.container__category}>숙소</p>
      <div className={styles.container__alignCenter}>
        <GoStarFill className={styles.container__alignCenter__star} />
        <span className={styles.container__alignCenter__point}>5.0</span>
        <span className={styles.container__alignCenter__reviewsCount}>
          (13,052)
        </span>
      </div>
      <div className={styles.container__positionAbsoluteIcons}>
        <FaRegHeart
          fontSize="2.4rem"
          cursor="pointer"
          onClick={() => openToast("찜 목록에 추가되었습니다.")}
        />
        <IoShareSocialOutline
          fontSize="2.4rem"
          cursor="pointer"
          onClick={() => openToast("링크가 복사되었습니다.")}
        />
      </div>
    </div>
  );
}

export default Title;
