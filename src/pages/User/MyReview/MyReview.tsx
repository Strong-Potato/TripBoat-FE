import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

import styles from "./MyReview.module.scss";

import Header from "@/components/Auth/Header/Header";
import BottomSlide from "@/components/BottomSlide/BottomSlide";
import ReviewImageSlider from "@/components/Detail/Contents/Review/ReviewImageSlider/ReviewImageSlider";
import ActionList from "@/components/MyReview/ActionList/ActionList";

import Meatball from "@/assets/icons/meatball.svg?react";
import Star from "@/assets/icons/star_fill.svg?react";
import { setMyReviewDate } from "@/utils/formatDate";

const data = [
  {
    id: 1231,
    place: {
      id: 41414,
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2023-11-18",
    rating: "5.0",
    content:
      "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요. 다음에 또 가고 싶네요",
    images: [
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
    ],
  },
  {
    id: 12555,
    place: {
      id: 42311,
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2023-11-18",
    rating: "5.0",
    content:
      "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요. 다음에 또 가고 싶네요",
    images: [
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
    ],
  },
  {
    id: 1111,
    place: {
      id: 535334,
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2023-11-18",
    rating: "5.0",
    content:
      "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요. 다음에 또 가고 싶네요",
    images: [
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
    ],
  },
  {
    id: 221411,
    place: {
      id: 655454,
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2023-11-18",
    rating: "5.0",
    content:
      "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요. 다음에 또 가고 싶네요",
    images: [
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
    ],
  },
  {
    id: 221331,
    place: {
      id: 645445,
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2023-11-18",
    rating: "5.0",
    content:
      "아주 좋아요. 자주 다니고 있어요. 친구들이랑 저녁에 운동하기 좋아요. 다음에 또 가고 싶네요",
    images: [
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202301/02/8c47d46b-ef7f-4508-b451-b0ad96c9b672.jpg",
    ],
  },
];

function MyReview() {
  const {
    isOpen: isBottomSlideOpen,
    onOpen: onBottomSlideOpen,
    onClose: onBottomSlideClose,
  } = useDisclosure();

  const clickedReviewId = useRef<number | undefined>();

  return (
    <div className={styles.container}>
      <Header content="내 리뷰" />

      <ul className={styles.myreview}>
        {data.map(({ id, place, visitedAt, rating, content, images }) => (
          <li key={id}>
            <div className={styles.myreview__header}>
              <div>
                <div
                  className={styles.myreview__header__img}
                  style={{ backgroundImage: `url(${place.thumbnail})` }}
                ></div>

                <div className={styles.myreview__header__text}>
                  <div className={styles.myreview__header__text__title}>
                    {place.title}
                  </div>
                  <div className={styles.myreview__header__text__category}>
                    {place.category}
                  </div>
                </div>
              </div>

              <button
                className={styles.myreview__header__meatball}
                onClick={() => {
                  clickedReviewId.current = place.id;
                  onBottomSlideOpen();
                }}
              >
                <Meatball />
              </button>
            </div>

            <small className={styles.myreview__info}>
              <div>
                <Star />
              </div>
              <div>{rating}</div>

              <div
                className={styles.myreview__info__visited}
              >{`${setMyReviewDate(visitedAt)} 방문`}</div>
            </small>

            <p className={styles.myreview__content}>{content}</p>

            {images && <ReviewImageSlider images={images} />}
          </li>
        ))}
      </ul>

      <BottomSlide
        isOpen={isBottomSlideOpen}
        onClose={onBottomSlideClose}
        children={<ActionList reviewId={clickedReviewId} />}
      />
    </div>
  );
}

export default MyReview;
