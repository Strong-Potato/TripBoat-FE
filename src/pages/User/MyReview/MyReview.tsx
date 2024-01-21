import styles from "./MyReview.module.scss";

import Header from "@/components/Auth/Header/Header";
import ReviewImageSlider from "@/components/Detail/Contents/Review/ReviewImageSlider/ReviewImageSlider";

import Meatball from "@/assets/icons/meatball.svg?react";
import Star from "@/assets/icons/star_fill.svg?react";

const data = [
  {
    id: "123",
    place: {
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2024년 1월 방문",
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
    id: "123",
    place: {
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2024년 1월 방문",
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
    id: "123",
    place: {
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2024년 1월 방문",
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
    id: "123",
    place: {
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2024년 1월 방문",
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
    id: "123",
    place: {
      area: "대전",
      category: "맛집 · 서울",
      title: "대전 성심당",
      thumbnail:
        "https://cdn.safetimes.co.kr/news/photo/202210/115164_98919_3327.jpg",
    },
    visitedAt: "2024년 1월 방문",
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
  return (
    <div className={styles.container}>
      <Header content="내 리뷰" />

      <ul className={styles.myreview}>
        {data.map(({ id, place, visitedAt, rating, content, images }) => (
          <li key={id}>
            <div className={styles.myreview__header}>
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

              <button className={styles.myreview__header__meatball}>
                <Meatball />
              </button>
            </div>

            <small className={styles.myreview__info}>
              <div>
                <Star />
              </div>
              <div>{rating}</div>

              <div className={styles.myreview__info__visited}>{visitedAt}</div>
            </small>

            <p className={styles.myreview__content}>{content}</p>

            {images && <ReviewImageSlider images={images} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyReview;
