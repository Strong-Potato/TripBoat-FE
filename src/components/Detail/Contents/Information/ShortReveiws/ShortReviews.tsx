import { CiEdit } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";
import { useRecoilValue, useSetRecoilState } from "recoil";

import styles from "./ShortReviews.module.scss";

import Review from "@/components/Detail/Contents/Review/Review";

import {
  IsLoginState,
  TabIndexState,
  TabYPosition,
} from "@/recoil/detail/detail";
import { isModalOpenState, modalContentState } from "@/recoil/vote/alertModal";

import { ContentsShortReviewsProps } from "@/types/detail";

function ShortReviews({ onOpen }: ContentsShortReviewsProps) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);
  const isLogin = useRecoilValue(IsLoginState);
  const setTabIndex = useSetRecoilState(TabIndexState);
  const tabPosition = useRecoilValue(TabYPosition);

  const notLoginContent = {
    title: "로그인이 필요한 기능입니다.",
    subText: "로그인하고 모든 서비스를 이용해 보세요! ",
    cancelText: "닫기",
    actionButton: "로그인하기",
    isSmallSize: true,
  };

  const showNotLoginModal = () => {
    setIsModalOpen(true);
    setModalContent({ ...notLoginContent });
  };

  const reviewData = [
    {
      name: "강자밭",
      isGoogle: false,
      point: "5.0",
      visitedAt: "2024년 1월 방문",
      content:
        "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요 다음에 또 가고 싶네요",
      images: [
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
        "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
        "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
        "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
        "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
      ],
    },
    {
      name: "강자밭",
      isGoogle: false,
      point: "5.0",
      visitedAt: "2024년 1월 방문",
      content:
        "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요 다음에 또 가고 싶네요 아주 좋아요",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h3>리뷰</h3>
        <button
          className={styles.container__title__rightBox}
          onClick={() => {
            if (isLogin) {
              onOpen();
            } else {
              showNotLoginModal();
            }
          }}
        >
          <CiEdit fontSize="2.4rem" />
          <span>리뷰쓰기</span>
        </button>
      </div>
      <div className={styles.container__pointBox}>
        <GoStarFill className={styles.container__pointBox__star} />
        <span className={styles.container__pointBox__point}>5.0</span>
        <span className={styles.container__pointBox__reviewsCount}>
          (13,052)
        </span>
      </div>
      <div className={styles.container__reviewsBox}>
        {reviewData.map((data) => (
          <Review
            name={data.name}
            isGoogle={data.isGoogle}
            point={data.point}
            visitedAt={data.visitedAt}
            content={data.content}
            images={data.images}
          />
        ))}
      </div>
      <div
        className={styles.container__allBtn}
        onClick={() => {
          setTabIndex(1);
          window.scrollTo(0, tabPosition);
        }}
      >
        <span>리뷰 전체보기</span>
      </div>
    </div>
  );
}

export default ShortReviews;
