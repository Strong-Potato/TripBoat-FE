import { BiTask } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import styles from "./MeatballBottomSlide.module.scss";

import useToastCustom from "@/components/useToastCustom/useToastCustom";

import CloseIcon from "@/assets/close.svg?react";

import { NavigationMeatballProps } from "@/types/detail";

const MeatballBottomSlide = ({ onClose }: NavigationMeatballProps) => {
  const showToast = useToastCustom();

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          onClose();
          document.body.style.removeProperty("overflow");
        }}
        className={styles.container__top}
      >
        <CloseIcon width="2rem" height="2rem" />
      </button>
      <button
        onClick={() => {
          showToast("찜 목록에 저장되었습니다.", true, "바로가기", () =>
            console.log(1),
          );
        }}
      >
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
      <button
        onClick={() => {
          showToast("링크가 복사되었습니다.");
        }}
      >
        <div className={styles.container__iconWrapper}>
          <IoShareSocialOutline fontSize="1.6rem" />
        </div>
        <p>공유하기</p>
      </button>
    </div>
  );
};

export default MeatballBottomSlide;
