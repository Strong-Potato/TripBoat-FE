import { CiEdit } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";

import styles from "./ShortReviews.module.scss";

import Review from "@/components/Detail/Contents/Review/Review";

import { ContentsShortReviewsProps } from "@/types/detail";

function ShortReviews({ onOpen }: ContentsShortReviewsProps) {
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
        <div className={styles.container__title__rightBox} onClick={onOpen}>
          <CiEdit fontSize="2.4rem" />
          <span>리뷰쓰기</span>
        </div>
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
      <div className={styles.container__allBtn}>
        <span>리뷰 전체보기</span>
      </div>
    </div>
  );
}

export default ShortReviews;
