import { BiTask } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import styles from "./MeatballBottomSlide.module.scss";

import CustomToast from "@/components/CustomToast/CustomToast";

import CloseIcon from "@/assets/close.svg?react";

import ReviewBottomSlide from "../../Contents/ReviewBottomSlide/ReviewBottomSlide";

import { NavigationMeatballProps } from "@/types/detail";

const MeatballBottomSlide = ({
  onBottomSlideOpen,
  onClose,
}: NavigationMeatballProps) => {
  const showToast = CustomToast();

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
          showToast("찜 목록에 저장되었습니다.");
        }}
      >
        <div className={styles.container__iconWrapper}>
          <FaRegHeart fontSize="1.6rem" />
        </div>
        <p>찜하기</p>
      </button>
      <button
        onClick={() => {
          showToast("이 장소로 후보에 등록되었습니다.");
        }}
      >
        <div className={styles.container__iconWrapper}>
          <BiTask fontSize="1.6rem" />
        </div>
        <p>후보에 추가</p>
      </button>
      <button
        onClick={() => {
          onClose();
          setTimeout(() => {
            onBottomSlideOpen(<ReviewBottomSlide onClose={onClose} />);
          }, 300);
        }}
      >
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
